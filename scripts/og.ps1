# ============================================================
#  Imágenes para compartir enlaces (WhatsApp, LinkedIn, X): JPG de 1200×630 y poco peso,
#  porque WhatsApp descarta la vista previa si la imagen es muy pesada (~300 KB).
#
#  Uso (desde PowerShell, con el servidor local corriendo en el puerto 3000):
#    npx serve . -l 3000
#    .\scripts\og.ps1
#
#  Genera en img/og/:
#    - portada.jpg: tarjeta de marca, a partir de docs/og-portada.html
#    - <slug>.jpg: un recorte 1200×630 de la imagen de cada proyecto y nota del blog
#  Correrlo al agregar un proyecto o una nota, o al cambiar su imagen.
# ============================================================
param([string]$Base = "http://localhost:3000")
$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

$raiz = Split-Path $PSScriptRoot -Parent
$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$salida = Join-Path $raiz "img\og"
New-Item -ItemType Directory -Force $salida | Out-Null
$ANCHO = 1200; $ALTO = 630

$jpeg = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object MimeType -eq "image/jpeg"
function GuardarJpg($bitmap, $ruta) {
  $p = New-Object System.Drawing.Imaging.EncoderParameters 1
  $p.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality), 82L
  $bitmap.Save($ruta, $jpeg, $p)
  Write-Host ("OK  img\og\{0}  ({1:N0} KB)" -f (Split-Path $ruta -Leaf), ((Get-Item $ruta).Length / 1KB))
}

# Recorta la imagen para cubrir 1200×630 (como object-fit: cover), anclada arriba a la izquierda
# porque ahí está lo importante de las capturas
function Recortar($origen, $destino) {
  $img = [System.Drawing.Image]::FromFile($origen)
  $escala = [Math]::Max($ANCHO / $img.Width, $ALTO / $img.Height)
  $w = [int][Math]::Ceiling($ANCHO / $escala); $h = [int][Math]::Ceiling($ALTO / $escala)
  $lienzo = New-Object System.Drawing.Bitmap $ANCHO, $ALTO
  $g = [System.Drawing.Graphics]::FromImage($lienzo)
  $g.InterpolationMode = "HighQualityBicubic"; $g.PixelOffsetMode = "HighQuality"
  $g.DrawImage($img, (New-Object System.Drawing.Rectangle 0, 0, $ANCHO, $ALTO), (New-Object System.Drawing.Rectangle 0, 0, $w, $h), "Pixel")
  GuardarJpg $lienzo $destino
  $g.Dispose(); $lienzo.Dispose(); $img.Dispose()
}

# Muestra la imagen completa (como object-fit: contain) sobre el color de su esquina superior derecha.
# Se usa con las ilustraciones de Reportes con IA: la marca "Ilustración · datos ficticios"
# va abajo a la derecha y un recorte la perdería.
function Contener($origen, $destino) {
  $img = [System.Drawing.Bitmap]::FromFile($origen)
  $escala = [Math]::Min($ANCHO / $img.Width, $ALTO / $img.Height)
  $w = [int]($img.Width * $escala); $h = [int]($img.Height * $escala)
  $lienzo = New-Object System.Drawing.Bitmap $ANCHO, $ALTO
  $g = [System.Drawing.Graphics]::FromImage($lienzo)
  $g.Clear($img.GetPixel($img.Width - 4, 4))
  $g.InterpolationMode = "HighQualityBicubic"; $g.PixelOffsetMode = "HighQuality"
  $g.DrawImage($img, [int](($ANCHO - $w) / 2), [int](($ALTO - $h) / 2), $w, $h)
  GuardarJpg $lienzo $destino
  $g.Dispose(); $lienzo.Dispose(); $img.Dispose()
}

# 1. Tarjeta de la portada
$temporal = Join-Path $env:TEMP "og-portada.png"
if (Test-Path $temporal) { Remove-Item $temporal }
# Edge escribe avisos en la salida de error; con cmd se descartan sin cortar el script
cmd /c "`"$edge`" --headless=new --disable-gpu --hide-scrollbars --window-size=$ANCHO,$ALTO --virtual-time-budget=5000 --screenshot=`"$temporal`" `"$Base/docs/og-portada.html`" >nul 2>nul"
for ($i = 0; $i -lt 30 -and -not (Test-Path $temporal); $i++) { Start-Sleep -Milliseconds 500 }
if (-not (Test-Path $temporal)) { throw "Edge no generó la tarjeta. ¿Está corriendo 'npx serve . -l 3000'?" }
Start-Sleep -Milliseconds 500
$png = [System.Drawing.Image]::FromFile($temporal)
$copia = New-Object System.Drawing.Bitmap $png
$png.Dispose()
GuardarJpg $copia (Join-Path $salida "portada.jpg")
$copia.Dispose()

# 2. Proyectos y notas: a cada slug le corresponde la primera "imagen:" que aparece después
foreach ($archivo in "data\proyectos.js", "data\blog.js") {
  $texto = [IO.File]::ReadAllText((Join-Path $raiz $archivo), [Text.Encoding]::UTF8)
  $slugs = [regex]::Matches($texto, '(?m)^\s{4}slug:\s*"([^"]+)"')
  foreach ($s in $slugs) {
    $m = [regex]::Match($texto.Substring($s.Index), '(?m)^\s{4}imagen:\s*"([^"]+)"')
    if (-not $m.Success -or -not $m.Groups[1].Value) { continue }
    $origen = Join-Path $raiz ($m.Groups[1].Value.TrimStart("/").Replace("/", "\"))
    $destino = Join-Path $salida "$($s.Groups[1].Value).jpg"
    if ($origen -match '\\reportes-ia\\') { Contener $origen $destino } else { Recortar $origen $destino }
  }
}
