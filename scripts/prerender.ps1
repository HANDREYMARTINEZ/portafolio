# ============================================================
#  Pre-renderizado: escribe en el HTML el contenido que main.js dibuja con los datos,
#  para que Google y las vistas previas de enlaces (WhatsApp, LinkedIn, X) lo lean
#  sin ejecutar JavaScript. En el navegador, main.js lo vuelve a dibujar igual que antes.
#
#  Uso (desde PowerShell, con el servidor local corriendo en el puerto 3000):
#    npx serve . -l 3000
#    .\scripts\prerender.ps1
#
#  Correrlo después de cambiar data/*.js, js/textos.js o la estructura del HTML.
#  Genera:
#    - index.html y hoja-de-vida.html: reemplaza solo el <body>; el <head> se edita a mano.
#    - proyectos/<slug>.html: una página completa por proyecto, con su título, descripción
#      y vista previa propios (Vercel la sirve antes que la reescritura a /proyecto).
# ============================================================
param([string]$Base = "http://localhost:3000")
$ErrorActionPreference = "Stop"

$raiz = Split-Path $PSScriptRoot -Parent
$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$utf8 = New-Object Text.UTF8Encoding $false
$temporal = Join-Path $env:TEMP "prerender-portafolio.html"

# Abre la página en Edge sin ventana y devuelve el HTML ya dibujado por main.js
function Volcar([string]$ruta) {
  if (Test-Path $temporal) { Remove-Item $temporal }
  # Desde PowerShell, Edge solo entrega el resultado si la salida se redirige con cmd
  cmd /c "`"$edge`" --headless=new --disable-gpu --virtual-time-budget=6000 --dump-dom `"$Base$ruta`" > `"$temporal`" 2>nul"
  # Edge puede seguir escribiendo un momento después de que cmd termina: esperar a que suelte el archivo
  $html = $null
  for ($i = 0; $i -lt 60 -and $null -eq $html; $i++) {
    try { $html = [IO.File]::ReadAllText($temporal, [Text.Encoding]::UTF8) } catch { Start-Sleep -Milliseconds 500 }
  }
  if ($null -eq $html) { throw "Edge no soltó el archivo temporal de $ruta." }
  if ($html.Length -lt 2000) { throw "Edge no devolvió la página $ruta. ¿Está corriendo 'npx serve . -l 3000'?" }

  # Quitar el estado que el navegador pone al cargar y que no debe quedar fijo en el archivo:
  # tema e idioma (los pone el script del <head>), apariciones al hacer scroll y menú
  $html = [regex]::Replace($html, '<html[^>]*>', '<html lang="es">')
  $html = [regex]::Replace($html, 'class="([^"]*)"', {
      param($m)
      $clases = $m.Groups[1].Value -split '\s+' | Where-Object { $_ -and $_ -notin @('visible', 'actual', 'con-fondo', 'abierto') }
      'class="' + ($clases -join ' ') + '"'
    })
  $html = $html -replace ' class=""', ''
  # El botón flotante y el asistente los crea main.js al cargar: si quedan escritos, se duplican
  $html = [regex]::Replace($html, '(?s)<a id="wa-flotante".*?</a>', '')
  $html = [regex]::Replace($html, '(?s)<section class="asistente".*?</section>', '')
  return $html
}

function Cuerpo([string]$html) {
  $m = [regex]::Match($html, '(?s)<body[^>]*>.*</body>')
  if (-not $m.Success) { throw "No se encontró el <body>." }
  return $m.Value
}

# 1. Portada y hoja de vida: se reemplaza solo el <body>
foreach ($pagina in @(@("index.html", "/"), @("hoja-de-vida.html", "/hoja-de-vida?lang=es"))) {
  $archivo = Join-Path $raiz $pagina[0]
  $fuente = [IO.File]::ReadAllText($archivo, [Text.Encoding]::UTF8)
  $cuerpo = Cuerpo (Volcar $pagina[1])
  $fuente = [regex]::Replace($fuente, '(?s)<body[^>]*>.*</body>', { param($m) $cuerpo })
  [IO.File]::WriteAllText($archivo, $fuente, $utf8)
  Write-Host "OK  $($pagina[0])"
}

# 2. Una página por proyecto (proyectos/<slug>.html) y por nota del blog (blog/<slug>.html)
foreach ($tipo in @(@("data\proyectos.js", "proyectos", "/proyecto"), @("data\blog.js", "blog", "/blog"))) {
  $datos = [IO.File]::ReadAllText((Join-Path $raiz $tipo[0]), [Text.Encoding]::UTF8)
  $slugs = [regex]::Matches($datos, '(?m)^\s{4}slug:\s*"([^"]+)"') | ForEach-Object { $_.Groups[1].Value }
  $carpeta = Join-Path $raiz $tipo[1]
  New-Item -ItemType Directory -Force $carpeta | Out-Null
  foreach ($slug in $slugs) {
    $html = Volcar "$($tipo[2])?p=$slug"
    $html = [regex]::Replace($html, '(?i)^\s*<!DOCTYPE[^>]*>\s*', '')
    [IO.File]::WriteAllText((Join-Path $carpeta "$slug.html"), "<!DOCTYPE html>`n$html`n", $utf8)
    Write-Host "OK  $($tipo[1])\$slug.html"
  }
}
