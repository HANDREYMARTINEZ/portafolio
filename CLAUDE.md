# Portafolio de Andrey Martínez

Sitio personal de Harold Andrey Martínez Cortés (Ingeniero de IA, Colombia). Sirve a la vez como hoja de vida, vitrina para conseguir trabajo y clientes freelance, y registro de proyectos.

- Producción: https://andreymartinezportafolio.vercel.app/
- Código: https://github.com/HANDREYMARTINEZ/portafolio
- Las notas privadas del proyecto (flujo de publicación, perfil, pendientes, herramientas internas) van en `CLAUDE.local.md`, que no se sube a git.

## Stack y estructura

HTML/CSS/JS puros, sin build ni dependencias. `vercel.json` activa `cleanUrls` y reescribe `/proyectos/:slug` → `/proyecto` y `/blog/:slug` → `/blog` (con `cleanUrls`, un destino `.html` da 404 en Vercel: usar siempre la ruta limpia); las direcciones antiguas `/proyecto?p=<slug>` siguen funcionando (`main.js` lee el slug de la ruta o del parámetro `p`). `serve.json` replica esas reglas para `npx serve` en local (allí se escriben sin barra inicial: `proyectos/:slug`). `404.html` es la página de error propia; `favicon.svg`, el ícono.

| Qué | Archivo |
| --- | --- |
| Datos personales, contacto, sobre mí (en partes), servicios, experiencia, formación, certificaciones, stack agrupado | `data/config.js` (objeto `SITIO`) |
| Proyectos | `data/proyectos.js` (`PROYECTOS`) → `/proyectos/<slug>` |
| Notas del blog | `data/blog.js` (`PUBLICACIONES`) → `/blog/<slug>` |
| Hoja de vida (se arma con los mismos datos; `?lang=es\|en`) | `hoja-de-vida.html` → PDF en `cv/Andrey-Martinez-CV-<es\|en>.pdf` |
| Fuente de las imágenes ilustrativas de "Reportes con IA" | `docs/mockup-reportes-ia.html` (`#dashboard`, `#instruccion`, `#presentacion`) |
| Textos fijos de la interfaz | `js/textos.js` (`TEXTOS.es` / `TEXTOS.en`) |
| Render e idioma | `js/main.js` |
| Estilos y colores | `css/estilos.css` (tokens en `:root`, modo oscuro automático) |

- Bilingüe es/en: los campos de contenido son `{ es, en }`; el helper `tr()` elige el idioma. El botón ES/EN guarda la preferencia en localStorage.
- Campos de proyecto además de los de contenido: `tipo` (`ia` | `web` | `escritorio` | `movil`, alimenta los filtros), `estado` opcional (`{ es, en }`, chip verde), `destacado: true` (sale en el hero y primero en la lista), `conIA` (herramienta con que se desarrolló, chip "Hecho con IA" y fila en la ficha), `etiquetas` = solo tecnologías.
- Proyecto destacado: GymApp.
- Tono de todos los textos: profesional y formal (trato de "usted" al visitante, primera persona formal al hablar de sí mismo, nada coloquial). `SITIO.cifras` (portada) y `SITIO.metodologia` (pasos en Servicios) se escriben a mano, solo con datos reales.
- "Reportes con IA" (`reportes-con-ia`): las imágenes son ilustraciones con datos ficticios (marca de agua "Ilustración · datos ficticios") y así lo dice la página. Nunca usar datos reales del cliente.
- Botón "Descargar CV" en el menú (`.nav-cta`/`.menu-contacto`) y en el hero: `[data-cv]`, `main.js` cambia el PDF según el idioma. Si cambian los datos, regenerar los PDF desde PowerShell con Edge sin ventana: `msedge --headless=new --no-pdf-header-footer --print-to-pdf=F:\portafolio\cv\Andrey-Martinez-CV-es.pdf "http://localhost:3000/hoja-de-vida?lang=es"` (y `en`), y revisar que siga en una página.
- Diseño (rediseño 2026-09-28): minimalista profesional, acento azul rey (`#4169e1`), Inter para el texto, Manrope para los títulos (`--titulos`) y JetBrains Mono para etiquetas y rótulos; cursor de terminal parpadeante tras el título del hero (`.hero .rol::after`). Tema oscuro por defecto (2026-10-02) con botón manual a claro (`data-theme` en `<html>`, guardado en localStorage; script en línea en el `<head>` evita el parpadeo, sin variables globales porque `t` es la función de traducción).
- Orden de la portada: hero → Servicios → Proyectos → Experiencia (línea de tiempo + formación y certificaciones al lado) → Blog → Sobre mí (4 partes + stack agrupado) → Contacto. Cada servicio puede enlazar a un proyecto de ejemplo (`ejemplo` = slug, `ejemploNombre` si el título es largo); una institución vacía en formación no se muestra.
- La portada calcula todo desde los datos: cifras (proyectos, servicios, tecnologías del stack), numeración de secciones; si `SITIO.stack` está vacío muestra las tecnologías de los proyectos. El blog y su enlace del menú se ocultan mientras `PUBLICACIONES` esté vacío.
- Página de proyecto = caso de estudio: cifras de impacto (`cifras`), secciones `<h2>` numeradas solas con un contador CSS (El problema / Qué hace / Cómo está hecha / Resultado / Capturas), diagrama de arquitectura por capas (`arquitectura`, se dibuja donde el contenido tenga `<div data-arquitectura></div>`; horizontal en escritorio, vertical en celular), ficha técnica lateral, portada en marco de ventana, visor de capturas (clic en `.galeria a`, flechas y Esc) y "Otros proyectos".
- `cifras` y "Resultado" solo con datos reales que ya estén en la ficha del proyecto; nunca inventar métricas.
- Aparición al hacer scroll con la clase `.revelar`: se revisa la posición en cada evento `scroll` (no IntersectionObserver ni requestAnimationFrame, que en iframes o pestañas de fondo no se activan y dejaban contenido oculto). Usa `translate`, no `transform`, para no chocar con los efectos hover.
- Menú: "Contacto →" es un botón a la derecha en escritorio (`.nav-cta`); en celular va dentro del menú (`.menu-contacto`). El pie muestra marca, rol y redes (`#pie-redes`, lo llena `main.js`).
- SEO: la descripción (`meta description`) se actualiza por idioma y por proyecto, y las páginas de proyecto/nota ponen su canonical limpio (`/proyectos/<slug>`) o `noindex` si el slug no existe; `index.html` tiene datos estructurados `Person` (JSON-LD) y etiquetas Open Graph. `robots.txt` apunta a `sitemap.xml`, que se escribe a mano: al agregar un proyecto o una nota, sumar su dirección allí.
- Todo el texto y código en español.

## Pre-renderizado (que Google y las vistas previas lean el contenido)

`main.js` dibuja todo desde los datos, pero el HTML publicado ya trae ese contenido escrito (en español) para quien no ejecuta JavaScript. Lo genera `scripts/prerender.ps1` con Edge sin ventana (`--dump-dom`): reemplaza el `<body>` de `index.html` y `hoja-de-vida.html` (el `<head>` se edita a mano) y crea `proyectos/<slug>.html`, una página por proyecto con título, descripción, canonical y Open Graph propios (Vercel sirve ese archivo antes que la reescritura a `/proyecto`; `proyecto.html` queda como plantilla y respaldo). **Después de cambiar `data/*.js`, `js/textos.js` o el HTML, correr** `npx serve . -l 3000` y luego `.\scripts\prerender.ps1` desde PowerShell, y subir los archivos regenerados. Al editar el `<body>` de `index.html` a mano, lo que esté dentro de los contenedores que llena `main.js` se sobrescribe en la siguiente generación.

## Ver en local

`npx serve .` en esta carpeta. El panel del navegador a veces no dibuja las capturas; para revisar el diseño sirven capturas de Edge sin ventana lanzadas desde PowerShell (desde Git Bash no escribe el archivo). Edge sin ventana no baja de ~500 px de ancho; a 500 px ya se ve el diseño de celular. Dentro de un `<iframe>` las transiciones salen a medias en la captura, así que es mejor capturar sin marco. Ojo: si `npx serve` encuentra el puerto ocupado arranca en otro al azar (lo dice su salida); revisar que no quede un servidor viejo sirviendo.
