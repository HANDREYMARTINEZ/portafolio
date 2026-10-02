// ---------- Idioma ----------
let idioma = (() => {
  try {
    const guardado = localStorage.getItem("idioma");
    if (guardado === "es" || guardado === "en") return guardado;
  } catch {}
  return (navigator.language || "es").startsWith("en") ? "en" : "es";
})();

// Texto fijo de la interfaz
const t = (clave) => TEXTOS[idioma][clave] ?? clave;
// Campo de datos que puede ser { es, en } o un texto simple
const tr = (v) => (v && typeof v === "object" ? v[idioma] || v.es || "" : v || "");

const $ = (id) => document.getElementById(id);

const formatearFecha = (iso) =>
  new Date(iso + "T00:00:00").toLocaleDateString(idioma, { year: "numeric", month: "long" });

const porFecha = (lista) => [...lista].sort((a, b) => b.fecha.localeCompare(a.fecha));

// "GymApp — Administración de gimnasio" → ["GymApp", "Administración de gimnasio"]
const partesTitulo = (p) => {
  const [principal, ...resto] = tr(p.titulo).split(" — ");
  return [principal, resto.join(" — ")];
};

// ---------- Iconos (trazos estilo Lucide) ----------
const RUTAS = {
  flecha: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  externo: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  correo: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  whatsapp: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  copiar: '<rect x="8" y="8" width="14" height="14" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  ubicacion: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  sol: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2m-7.07-2.93 1.41-1.41m11.32-11.32 1.41-1.41M2 12h2m16 0h2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41"/>',
  luna: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  cerrar: '<path d="M18 6 6 18M6 6l12 12"/>',
  izquierda: '<path d="m15 18-6-6 6-6"/>',
  derecha: '<path d="m9 18 6-6-6-6"/>',
  grafica: '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
  robot: '<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2M20 14h2M15 13v2M9 13v2"/>',
  caja: '<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
  web: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  celular: '<rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/>',
  chip: '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/>',
  birrete: '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  medalla: '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
  chispa: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>',
  descarga: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
  tendencia: '<path d="M22 7 13.5 15.5 8.5 10.5 2 17"/><path d="M16 7h6v6"/>',
  estrella: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
};
const ico = (nombre) =>
  `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${RUTAS[nombre] || ""}</svg>`;

// ---------- Tema claro / oscuro ----------
const temaActual = () =>
  document.documentElement.dataset.theme ||
  (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

function pintarBotonTema() {
  document.querySelectorAll(".btn-tema").forEach((b) => {
    b.innerHTML = ico(temaActual() === "dark" ? "sol" : "luna");
    b.setAttribute("aria-label", t("tema"));
    b.title = t("tema");
  });
}

// ---------- Aparición suave al hacer scroll ----------
// Se revisa la posición en cada scroll en vez de usar IntersectionObserver, que en algunos
// contextos (iframes, pestañas en segundo plano) no se activa y dejaría contenido oculto.
const sinAnimacion = matchMedia("(prefers-reduced-motion: reduce)").matches;

function revisarRevelar() {
  document.querySelectorAll(".revelar:not(.visible)").forEach((el) => {
    if (sinAnimacion || el.getBoundingClientRect().top < innerHeight * 0.94) el.classList.add("visible");
  });
}

// setTimeout (y no requestAnimationFrame, que se pausa en iframes fuera de pantalla)
// deja que el navegador pinte primero el estado inicial, para que se vea la transición.
const observar = () => setTimeout(revisarRevelar, 40);
addEventListener("scroll", revisarRevelar, { passive: true });
addEventListener("resize", revisarRevelar);

// Menú: transparente arriba del todo y con fondo al bajar; resalta la sección que se está viendo
function revisarMenu() {
  document.querySelector(".nav")?.classList.toggle("con-fondo", scrollY > 8);
  const enlaces = document.querySelectorAll('.menu a[href^="/#"]');
  let actual = "";
  enlaces.forEach((a) => {
    const seccion = document.getElementById(a.hash.slice(1));
    if (seccion?.getClientRects().length && seccion.getBoundingClientRect().top < innerHeight * 0.35) actual = a.hash;
  });
  enlaces.forEach((a) => a.classList.toggle("actual", a.hash === actual));
}
addEventListener("scroll", revisarMenu, { passive: true });

// ---------- Piezas reutilizables ----------
const enlacesContacto = () =>
  [
    SITIO.github && ["github", "GitHub", SITIO.github],
    SITIO.linkedin && ["linkedin", "LinkedIn", SITIO.linkedin],
    SITIO.whatsapp && ["whatsapp", "WhatsApp", `https://wa.me/${SITIO.whatsapp}`],
    SITIO.email && ["correo", "Email", `mailto:${SITIO.email}`],
  ].filter(Boolean);

const portada = (p) =>
  p.imagen
    ? `<img src="${p.imagen}" alt="${tr(p.titulo)}" loading="lazy" />`
    : `<div class="portada-vacia">${tr(p.titulo).charAt(0)}</div>`;

const chipTipo = (p) => (p.tipo ? `<span class="chip">${t("tipo_" + p.tipo)}</span>` : "");
const chipIA = (p) => (p.conIA ? `<span class="chip chip-ia">${ico("chispa")}${t("chip_ia")}</span>` : "");
const chipEstado = (p) => (p.estado ? `<span class="chip estado"><span class="punto"></span>${tr(p.estado)}</span>` : "");

const etiquetasHTML = (lista, max = Infinity) => {
  const visibles = lista.slice(0, max).map((e) => `<span class="etiqueta">${e}</span>`).join("");
  return lista.length > max ? visibles + `<span class="etiqueta">+${lista.length - max}</span>` : visibles;
};

// num: posición en la lista de la portada (01, 02…); grande: la primera tarjeta ocupa todo el ancho
const tarjetaHTML = (p, { num, grande } = {}) => {
  const [principal, secundario] = partesTitulo(p);
  return `
    <a class="tarjeta revelar${grande ? " grande" : ""}" href="/proyectos/${p.slug}">
      <div class="portada">${portada(p)}<span class="portada-ver" aria-hidden="true">${t("ver_proyecto")} ${ico("flecha")}</span><div class="chips-portada">${chipTipo(p)}${chipEstado(p)}</div></div>
      <div class="tarjeta-cuerpo">
        <div class="tarjeta-meta"><span>${num ? `<b class="tarjeta-num">${String(num).padStart(2, "0")}</b>` : ""}<time>${formatearFecha(p.fecha)}</time></span>${chipIA(p)}</div>
        <h3>${principal}${secundario ? `<span>${secundario}</span>` : ""}</h3>
        <p>${tr(p.resumen)}</p>
        ${p.resultado ? `<p class="tarjeta-resultado">${ico("tendencia")}<span>${tr(p.resultado)}</span></p>` : ""}
        <div class="etiquetas">${etiquetasHTML(p.etiquetas, 4)}</div>
        <span class="ver-mas">${t("ver_proyecto")} ${ico("flecha")}</span>
      </div>
    </a>`;
};

// ---------- Textos de la interfaz y datos personales ----------
function pintarComun() {
  document.documentElement.lang = idioma;
  document.querySelectorAll("[data-t]").forEach((el) => (el.textContent = t(el.dataset.t)));
  // La hoja de vida en PDF va en el idioma de la página
  document.querySelectorAll("[data-cv]").forEach((a) => (a.href = `/cv/Andrey-Martinez-CV-${idioma}.pdf`));
  document.querySelectorAll("[data-cv-ver]").forEach((a) => (a.href = `/hoja-de-vida?lang=${idioma}`));
  document.querySelectorAll("[data-sitio]").forEach((el) => (el.textContent = tr(SITIO[el.dataset.sitio])));
  if (SITIO.foto) document.querySelectorAll(".logo-marca").forEach((el) => (el.innerHTML = `<img src="${SITIO.foto}" alt="" />`));
  document.querySelectorAll("i[data-icono]").forEach((el) => (el.outerHTML = ico(el.dataset.icono)));
  document.querySelectorAll(".btn-menu").forEach((b) => {
    b.innerHTML = ico("menu");
    b.setAttribute("aria-label", t("menu"));
  });
  document.querySelectorAll(".btn-idioma").forEach((b) => {
    b.innerHTML = ["es", "en"].map((l) => `<span${l === idioma ? ' class="activo"' : ""}>${l.toUpperCase()}</span>`).join("");
    b.setAttribute("aria-label", idioma === "es" ? "Switch to English" : "Cambiar a español");
  });
  // El blog se oculta del menú mientras no tenga notas
  document.querySelectorAll('[data-seccion="blog"]').forEach((a) => (a.hidden = !PUBLICACIONES.length));
  pintarBotonTema();
  $("anio").textContent = new Date().getFullYear();
  const pieRedes = $("pie-redes");
  if (pieRedes) {
    pieRedes.innerHTML = enlacesContacto()
      .map(([icono, nombre, url]) =>
        `<a href="${url}" ${url.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${ico(icono)}${nombre}</a>`)
      .join("");
  }
}

// ---------- Portada ----------
function pintarHero() {
  document.title = `${SITIO.nombreCorto} — ${tr(SITIO.rol).split("·")[0].trim()}`;
  ponerDescripcion(`${SITIO.nombre} — ${tr(SITIO.rol)}. ${tr(SITIO.frase)}`);
  $("disponible").hidden = !SITIO.disponible;
  $("enfoque").innerHTML = (SITIO.enfoque || []).map((x) => `<li>${tr(x)}</li>`).join("");

  const redes = enlacesContacto()
    .map(([icono, nombre, url]) =>
      `<a class="btn-icono" href="${url}" aria-label="${nombre}" title="${nombre}" ${url.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${ico(icono)}</a>`)
    .join("");
  $("redes").innerHTML = redes;

  // Proyecto destacado
  const d = PROYECTOS.find((p) => p.destacado) || porFecha(PROYECTOS)[0];
  const caja = $("destacado");
  if (!d) { caja.hidden = true; return; }
  const [principal, secundario] = partesTitulo(d);
  caja.href = `/proyectos/${d.slug}`;
  caja.innerHTML = `
    <span class="destacado-etiqueta">${ico("estrella")} ${t("destacado")}</span>
    <div class="destacado-img">${portada(d)}</div>
    <div class="destacado-pie">
      <div><strong>${principal}</strong><span>${secundario}</span></div>
      ${chipEstado(d)}
    </div>`;

  // Cifras: las escritas en SITIO.cifras (datos reales) o, si no hay, calculadas
  if (SITIO.cifras?.length) {
    $("cifras").innerHTML = SITIO.cifras
      .map((c) => `<div class="cifra"><strong>${tr(c.valor)}</strong><span>${tr(c.etiqueta)}</span></div>`)
      .join("");
    $("cifras").classList.add("cifras-texto");
    return;
  }
  const tecnologias = SITIO.stack?.length
    ? SITIO.stack.flatMap((g) => g.items).length
    : new Set(PROYECTOS.flatMap((p) => p.etiquetas)).size;
  $("cifras").innerHTML = [
    [PROYECTOS.length, t("cifra_proyectos")],
    [SITIO.servicios?.length || new Set(PROYECTOS.map((p) => p.tipo).filter(Boolean)).size, t(SITIO.servicios?.length ? "cifra_servicios" : "cifra_plataformas")],
    [tecnologias, t("cifra_tecnologias")],
  ].map(([n, texto]) => `<div class="cifra"><strong>${n}</strong><span>${texto}</span></div>`).join("");
}

function pintarSobreMi() {
  $("avatar").innerHTML = SITIO.foto ? `<img src="${SITIO.foto}" alt="${SITIO.nombre}" />` : SITIO.iniciales;

  $("sobre-partes").innerHTML = (SITIO.sobreMi || [])
    .map((parte, i) => `
      <div class="sobre-parte revelar">
        <p class="sobre-parte-num">${String(i + 1).padStart(2, "0")}</p>
        <h3>${tr(parte.titulo)}</h3>
        <p>${tr(parte.texto)}</p>
      </div>`)
    .join("");

  // Stack agrupado; si aún no hay, se muestran las tecnologías de los proyectos
  const grupos = SITIO.stack?.length
    ? SITIO.stack
    : [{ grupo: t("tecnologias_proyectos"), items: [...new Set(porFecha(PROYECTOS).flatMap((p) => p.etiquetas))] }];
  $("lista-stack").innerHTML = grupos
    .map((g) => `
      <div class="stack-grupo revelar">
        <h4>${tr(g.grupo)}</h4>
        <div class="habilidades">${g.items.map((h) => `<span class="habilidad">${tr(h)}</span>`).join("")}</div>
      </div>`)
    .join("");
}

function pintarServicios() {
  $("servicios").hidden = !SITIO.servicios?.length;
  $("lista-servicios").innerHTML = (SITIO.servicios || [])
    .map((sv) => {
      const ejemplo = sv.ejemplo && PROYECTOS.find((p) => p.slug === sv.ejemplo);
      return `
        <div class="servicio revelar">
          <span class="servicio-icono">${ico(sv.icono)}</span>
          <h3>${tr(sv.titulo)}</h3>
          <p>${tr(sv.texto)}</p>
          ${ejemplo
            ? `<a class="ver-mas" href="/proyectos/${ejemplo.slug}">${t("servicio_ejemplo")}: ${tr(sv.ejemploNombre) || partesTitulo(ejemplo)[0]} ${ico("flecha")}</a>`
            : sv.etiquetas?.length ? `<div class="etiquetas">${etiquetasHTML(sv.etiquetas)}</div>` : ""}
        </div>`;
    })
    .join("");
}

function pintarMetodologia() {
  const pasos = SITIO.metodologia || [];
  $("lista-metodologia").parentElement.hidden = !pasos.length;
  $("lista-metodologia").style.setProperty("--pasos", pasos.length);
  $("lista-metodologia").innerHTML = pasos
    .map((p, i) => `
      <li class="paso">
        <span class="paso-num">${String(i + 1).padStart(2, "0")}</span>
        <h4>${tr(p.titulo)}</h4>
        <p>${tr(p.texto)}</p>
      </li>`)
    .join("");
}

function pintarExperiencia() {
  $("experiencia").hidden = !SITIO.experiencia?.length;
  $("lista-experiencia").innerHTML = (SITIO.experiencia || [])
    .map((x) => `
      <li class="hito revelar">
        <time>${tr(x.periodo)}</time>
        <h3>${tr(x.cargo)}</h3>
        <p class="hito-lugar">${tr(x.lugar)}</p>
        <ul>${(x.logros?.[idioma] || x.logros?.es || []).map((l) => `<li>${l}</li>`).join("")}</ul>
        ${x.etiquetas?.length ? `<div class="etiquetas">${etiquetasHTML(x.etiquetas)}</div>` : ""}
      </li>`)
    .join("");

  const itemFormacion = (icono) => (e) => `
    <li>
      <span class="formacion-icono">${ico(icono)}</span>
      <div>
        <strong>${tr(e.titulo)}</strong>
        ${e.institucion ? `<span>${tr(e.institucion)}</span>` : ""}
        <time>${tr(e.periodo)}</time>
      </div>
    </li>`;
  $("lista-estudios").innerHTML = (SITIO.estudios || []).map(itemFormacion("birrete")).join("");
  $("lista-certificaciones").innerHTML = (SITIO.certificaciones || []).map(itemFormacion("medalla")).join("");
}

function pintarContacto() {
  // El correo se abre con asunto y una guía corta para que el mensaje llegue completo
  $("cta-correo").href = `mailto:${SITIO.email}?subject=${encodeURIComponent(t("correo_asunto"))}&body=${encodeURIComponent(t("correo_cuerpo"))}`;
  // Con número de WhatsApp Business, aparece como botón principal con un mensaje inicial
  $("cta-whatsapp").hidden = !SITIO.whatsapp;
  if (SITIO.whatsapp) $("cta-whatsapp").href = `https://wa.me/${SITIO.whatsapp}?text=${encodeURIComponent(t("whatsapp_mensaje"))}`;
  $("cta-correo").classList.toggle("secundario", !!SITIO.whatsapp);
  $("enlaces-contacto").innerHTML = enlacesContacto()
    .filter(([icono]) => icono !== "correo" && icono !== "whatsapp")
    .map(([icono, nombre, url]) => `<a class="enlace-red" href="${url}" target="_blank" rel="noopener">${ico(icono)}${nombre}</a>`)
    .join("");
}

// ---------- Lista de proyectos con filtros por tipo ----------
let filtroActual = "*";

function pintarProyectos() {
  // El destacado va primero y el resto del más reciente al más antiguo
  const ordenados = porFecha(PROYECTOS).sort((a, b) => !!b.destacado - !!a.destacado);
  const tipos = [...new Set(ordenados.map((p) => p.tipo).filter(Boolean))];
  const visibles = filtroActual === "*" ? ordenados : ordenados.filter((p) => p.tipo === filtroActual);

  $("filtros").hidden = tipos.length < 2;
  $("filtros").innerHTML = [["*", t("todos"), ordenados.length], ...tipos.map((tp) => [tp, t("tipo_" + tp), ordenados.filter((p) => p.tipo === tp).length])]
    .map(([valor, texto, n]) =>
      `<button type="button" role="tab" data-f="${valor}" aria-selected="${valor === filtroActual}" class="${valor === filtroActual ? "activo" : ""}">${texto}<span>${n}</span></button>`)
    .join("");

  $("lista-proyectos").innerHTML = visibles.map((p, i) => tarjetaHTML(p, { num: i + 1, grande: i === 0 })).join("");
  observar();
}

// ---------- Lista del blog ----------
// ---------- Testimonios (la sección se oculta mientras no haya ninguno) ----------
function pintarTestimonios() {
  const lista = SITIO.testimonios || [];
  $("testimonios").hidden = !lista.length;
  $("lista-testimonios").innerHTML = lista
    .map((x) => `
      <figure class="testimonio revelar">
        <blockquote>${tr(x.texto)}</blockquote>
        <figcaption>
          <strong>${x.nombre}</strong>
          <span>${[tr(x.cargo), x.empresa].filter(Boolean).join(" · ")}</span>
          ${x.proyecto ? `<a href="/proyectos/${x.proyecto}">${t("testimonio_proyecto")} ${ico("flecha")}</a>` : ""}
        </figcaption>
      </figure>`)
    .join("");
}

function pintarBlog() {
  $("blog").hidden = !PUBLICACIONES.length;
  $("lista-blog").innerHTML = porFecha(PUBLICACIONES)
    .map(
      (n) => `
      <a class="nota revelar" href="/blog/${n.slug}">
        <time>${formatearFecha(n.fecha)}</time>
        <div>
          <h3>${tr(n.titulo)}</h3>
          <p>${tr(n.resumen)}</p>
        </div>
        ${ico("flecha")}
      </a>`
    )
    .join("");
}

// Numera las secciones visibles: 01, 02, 03…
function numerarSecciones() {
  [...document.querySelectorAll("main > section.seccion")]
    .filter((s) => !s.hidden)
    .forEach((s, i) => {
      const num = s.querySelector(".eyebrow-num");
      if (num) num.textContent = String(i + 1).padStart(2, "0");
    });
}

// ---------- Página de detalle (proyecto o nota del blog) ----------
function pintarDetalle(articulo) {
  const esBlog = articulo.dataset.tipo === "blog";
  const lista = esBlog ? PUBLICACIONES : PROYECTOS;
  // Acepta la dirección limpia (/proyectos/gymapp) y la antigua (/proyecto?p=gymapp)
  const slug = new URLSearchParams(location.search).get("p") || location.pathname.split("/").filter(Boolean)[1];
  const p = lista.find((x) => x.slug === slug);

  if (!p) {
    document.title = t("no_encontrado");
    ponerDescripcion(t("no_encontrado"));
    ponerMeta("name", "robots", "noindex");
    articulo.innerHTML = `<div class="no-encontrado"><h1>${t("no_encontrado")}</h1><p><a class="boton" href="/">${t("volver")}</a></p></div>`;
    return;
  }

  document.title = `${tr(p.titulo)} — ${SITIO.nombreCorto}`;
  ponerDescripcion(tr(p.resumen));
  // Dirección canónica: la limpia, aunque se haya entrado por /proyecto?p=...
  let canonica = document.querySelector('link[rel="canonical"]');
  if (!canonica) {
    canonica = document.createElement("link");
    canonica.rel = "canonical";
    document.head.appendChild(canonica);
  }
  canonica.href = `${SITIO.url}/${esBlog ? "blog" : "proyectos"}/${p.slug}`;
  // Vista previa al compartir el enlace (WhatsApp, LinkedIn, X)
  ponerMeta("property", "og:type", "article");
  ponerMeta("property", "og:site_name", tr(SITIO.marca));
  ponerMeta("property", "og:title", document.title);
  ponerMeta("property", "og:description", tr(p.resumen));
  ponerMeta("property", "og:url", canonica.href);
  ponerMeta("name", "twitter:card", "summary_large_image");
  // Imagen liviana de 1200×630 que genera scripts/og.ps1 (WhatsApp descarta las muy pesadas)
  if (p.imagen) {
    const imagenCompartir = `${SITIO.url}/img/og/${p.slug}.jpg`;
    ponerMeta("property", "og:image", imagenCompartir);
    ponerMeta("property", "og:image:type", "image/jpeg");
    ponerMeta("property", "og:image:width", "1200");
    ponerMeta("property", "og:image:height", "630");
    ponerMeta("name", "twitter:image", imagenCompartir);
  }
  const enlaces = [
    p.demo && `<a class="boton" href="${p.demo}" target="_blank" rel="noopener">${t("ver_demo")} ${ico("externo")}</a>`,
    p.codigo && `<a class="boton secundario" href="${p.codigo}" target="_blank" rel="noopener">${ico("github")} ${t("ver_codigo")}</a>`,
  ].filter(Boolean).join("");

  const filas = [
    [t("ficha_fecha"), formatearFecha(p.fecha)],
    p.tipo && [t("ficha_tipo"), t("tipo_" + p.tipo)],
    p.estado && [t("ficha_estado"), chipEstado(p)],
    p.conIA && [t("ficha_desarrollo"), `${t("ficha_con_ia")} · ${p.conIA}`],
    p.etiquetas?.length && [t(esBlog ? "ficha_temas" : "ficha_tecnologias"), `<div class="etiquetas">${etiquetasHTML(p.etiquetas)}</div>`],
  ].filter(Boolean);

  const otros = esBlog ? [] : porFecha(PROYECTOS).filter((x) => x.slug !== p.slug).slice(0, 2);

  articulo.innerHTML = `
    <a class="migas" href="/#${esBlog ? "blog" : "proyectos"}">${ico("izquierda")} ${t(esBlog ? "nav_blog" : "nav_proyectos")}</a>
    <header class="detalle-cabecera revelar">
      <div class="chips">${chipTipo(p)}${chipEstado(p)}${chipIA(p)}</div>
      <h1>${tr(p.titulo)}</h1>
      <p class="bajada">${tr(p.resumen)}</p>
      ${enlaces ? `<div class="botones">${enlaces}</div>` : ""}
    </header>
    ${p.cifras?.length ? `
      <dl class="impacto revelar">
        ${p.cifras.map((c) => `<div><dt>${c.valor}</dt><dd>${tr(c.etiqueta)}</dd></div>`).join("")}
      </dl>` : ""}
    ${p.imagen ? `<div class="marco revelar"><div class="marco-barra"><span></span><span></span><span></span></div><div class="marco-img">${portada(p)}</div></div>` : ""}
    <div class="detalle-grid">
      <div class="contenido">${tr(p.contenido)}</div>
      <aside class="ficha">
        <dl>${filas.map(([dt, dd]) => `<div><dt>${dt}</dt><dd>${dd}</dd></div>`).join("")}</dl>
        ${enlaces ? `<div class="ficha-enlaces">${enlaces}</div>` : ""}
      </aside>
    </div>
    ${otros.length ? `
      <section class="otros">
        <h2>${t("otros_proyectos")}</h2>
        <div class="grilla">${otros.map((p) => tarjetaHTML(p)).join("")}</div>
      </section>` : ""}`;

  articulo.querySelectorAll("[data-arquitectura]").forEach((el) => (el.outerHTML = arquitecturaHTML(p.arquitectura)));
}

// Diagrama por capas: interfaz → lógica → datos. Horizontal en escritorio, vertical en celular.
function arquitecturaHTML(capas) {
  if (!capas?.length) return "";
  return `
    <figure class="arquitectura revelar">
      ${capas.map((c, i) => `
        ${i ? `<div class="arq-flecha" aria-hidden="true"><span></span></div>` : ""}
        <div class="arq-capa" style="--i:${i}">
          <p class="arq-nombre"><span>${String(i + 1).padStart(2, "0")}</span>${tr(c.capa)}</p>
          ${c.nodos.map((n) => `
            <div class="arq-nodo${n.futuro ? " futuro" : ""}">
              <strong>${tr(n.titulo)}</strong>
              <span>${tr(n.detalle)}</span>
            </div>`).join("")}
        </div>`).join("")}
    </figure>`;
}

// Crea o actualiza una etiqueta <meta> (atributo = "name" o "property")
function ponerMeta(atributo, clave, valor) {
  let meta = document.querySelector(`meta[${atributo}="${clave}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(atributo, clave);
    document.head.appendChild(meta);
  }
  meta.content = valor;
}

function ponerDescripcion(texto) {
  ponerMeta("name", "description", texto);
}

// ---------- Visor de capturas ----------
let visor, visorFiguras = [], visorIndice = 0;

function crearVisor() {
  visor = document.createElement("div");
  visor.className = "visor";
  visor.hidden = true;
  visor.setAttribute("role", "dialog");
  visor.setAttribute("aria-modal", "true");
  visor.innerHTML = `
    <button type="button" class="visor-btn visor-cerrar">${ico("cerrar")}</button>
    <button type="button" class="visor-btn visor-prev">${ico("izquierda")}</button>
    <figure><img alt="" /><figcaption></figcaption></figure>
    <button type="button" class="visor-btn visor-next">${ico("derecha")}</button>`;
  document.body.appendChild(visor);
}

function mostrarEnVisor(i) {
  visorIndice = (i + visorFiguras.length) % visorFiguras.length;
  const fig = visorFiguras[visorIndice];
  const img = visor.querySelector("img");
  img.src = fig.querySelector("a").href;
  img.alt = fig.querySelector("img").alt;
  visor.querySelector("figcaption").textContent =
    `${fig.querySelector("figcaption")?.textContent || ""}  ·  ${visorIndice + 1} / ${visorFiguras.length}`;
  visor.querySelector(".visor-cerrar").setAttribute("aria-label", t("cerrar"));
  visor.querySelector(".visor-prev").setAttribute("aria-label", t("anterior"));
  visor.querySelector(".visor-next").setAttribute("aria-label", t("siguiente"));
  visor.querySelectorAll(".visor-prev, .visor-next").forEach((b) => (b.hidden = visorFiguras.length < 2));
}

function cerrarVisor() {
  visor.hidden = true;
  document.body.classList.remove("sin-scroll");
}

// ---------- Arranque ----------
function pintarTodo() {
  pintarComun();
  if ($("lista-proyectos")) {
    pintarHero();
    pintarServicios();
    pintarMetodologia();
    pintarProyectos();
    pintarExperiencia();
    pintarTestimonios();
    pintarBlog();
    pintarSobreMi();
    pintarContacto();
    numerarSecciones();
  }
  if ($("detalle")) pintarDetalle($("detalle"));
  observar();
  revisarMenu();
}

document.addEventListener("click", (e) => {
  const cabecera = document.querySelector(".nav");

  if (e.target.closest(".btn-idioma")) {
    idioma = idioma === "es" ? "en" : "es";
    try { localStorage.setItem("idioma", idioma); } catch {}
    pintarTodo();
    return;
  }

  if (e.target.closest(".btn-tema")) {
    const nuevo = temaActual() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nuevo;
    try { localStorage.setItem("tema", nuevo); } catch {}
    pintarBotonTema();
    return;
  }

  const menu = e.target.closest(".btn-menu");
  if (menu) {
    const abierto = cabecera.classList.toggle("abierto");
    menu.setAttribute("aria-expanded", abierto);
    return;
  }
  if (e.target.closest(".menu a")) cabecera.classList.remove("abierto");

  const filtro = e.target.closest("#filtros button");
  if (filtro) {
    filtroActual = filtro.dataset.f;
    pintarProyectos();
    return;
  }

  if (e.target.closest("#copiar-correo")) {
    const boton = e.target.closest("#copiar-correo");
    navigator.clipboard?.writeText(SITIO.email).then(() => {
      boton.querySelector("span").textContent = t("copiado");
      setTimeout(() => (boton.querySelector("span").textContent = t("copiar_correo")), 2000);
    });
    return;
  }

  // Capturas: abrir en el visor en vez de una pestaña nueva
  const enlaceCaptura = e.target.closest(".galeria a");
  if (enlaceCaptura && !e.ctrlKey && !e.metaKey) {
    e.preventDefault();
    if (!visor) crearVisor();
    const figura = enlaceCaptura.closest("figure");
    visorFiguras = [...figura.closest(".galeria").querySelectorAll("figure")];
    mostrarEnVisor(visorFiguras.indexOf(figura));
    visor.hidden = false;
    document.body.classList.add("sin-scroll");
    visor.querySelector(".visor-cerrar").focus();
    return;
  }

  if (visor && !visor.hidden) {
    if (e.target.closest(".visor-prev")) mostrarEnVisor(visorIndice - 1);
    else if (e.target.closest(".visor-next")) mostrarEnVisor(visorIndice + 1);
    else if (e.target.closest(".visor-cerrar") || !e.target.closest("figure")) cerrarVisor();
  }
});

document.addEventListener("keydown", (e) => {
  if (!visor || visor.hidden) return;
  if (e.key === "Escape") cerrarVisor();
  if (e.key === "ArrowLeft") mostrarEnVisor(visorIndice - 1);
  if (e.key === "ArrowRight") mostrarEnVisor(visorIndice + 1);
});

pintarTodo();
