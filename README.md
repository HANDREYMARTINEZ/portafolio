# Portafolio — Andrey Martínez

Sitio personal: proyectos, blog y hoja de vida. HTML, CSS y JavaScript puros, sin dependencias; bilingüe (español / inglés) y publicado en Vercel.

## Dónde se edita cada cosa

| Qué | Archivo |
| --- | --- |
| Nombre, rol, frase, contacto, foto, sobre mí, habilidades | `data/config.js` |
| Proyectos | `data/proyectos.js` |
| Notas del blog | `data/blog.js` |
| Textos fijos de la interfaz (botones, títulos) | `js/textos.js` |
| Colores y diseño | `css/estilos.css` (variables al inicio) |

Los textos con `{ es: "...", en: "..." }` se muestran según el idioma elegido con el botón ES/EN.

Cada proyecto lleva además `tipo` (`web`, `escritorio` o `movil`, para los filtros), `estado` opcional (por ejemplo "En producción") y `destacado: true` en el que debe aparecer en la portada.

Para que la página del proyecto se vea como caso de estudio, agrega `cifras` (2 a 4 datos reales de impacto) y `arquitectura` (las capas del diagrama); el diagrama aparece donde el contenido tenga `<div data-arquitectura></div>`. Cada proyecto se abre en `/proyectos/<slug>`.
Las imágenes van en `img/`.

## Ver en local

```bash
npx serve .
```

`serve.json` le enseña a `serve` las mismas direcciones limpias que usa Vercel.

## Publicar

Cada `git push` a la rama `main` se publica automáticamente en Vercel una vez conectado el repositorio.
