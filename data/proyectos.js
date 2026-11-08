// ============================================================
//  AQUÍ AGREGAS TUS PROYECTOS
//  Copia un bloque { ... }, pégalo al inicio de la lista y edítalo.
//  - slug: identificador único, sin espacios ni tildes (va en la URL)
//  - tipo: "ia" | "web" | "escritorio" | "movil" (se usa para los filtros)
//  - conIA: herramienta de IA con la que se desarrolló, ej. "Claude Code" (chip "Hecho con IA")
//  - estado: opcional, ej. { es: "En producción", en: "In production" }
//  - destacado: true para mostrarlo en la portada (solo uno)
//  - enCV: false para dejarlo fuera de la hoja de vida (opcional). La hoja muestra solo los
//    5 más relevantes (los de IA, el destacado y luego los más recientes) y un enlace a todos,
//    para seguir en una página; con enCV: false se elige cuál ceder su lugar
//  - etiquetas: tecnologías usadas
//  - resultado: una línea con el resultado principal para la tarjeta { es, en } (solo datos reales)
//  - cifras: 2 a 4 datos de impacto reales { valor, etiqueta: { es, en } }
//  - arquitectura: capas del diagrama [{ capa, nodos: [{ titulo, detalle, futuro? }] }];
//    se dibuja donde el contenido tenga <div data-arquitectura></div>
//  - titulo / resumen / contenido: { es: "...", en: "..." }
//  - imagen: ruta a un archivo en /img o una URL (opcional)
//  - contenido: texto largo del proyecto, acepta HTML básico
// ============================================================

const PROYECTOS = [
  {
    slug: "agente-whatsapp",
    titulo: { es: "Agente de WhatsApp — Asistente con IA que atiende clientes", en: "WhatsApp Agent — AI assistant that serves customers" },
    resumen: {
      es: "Agente con inteligencia artificial que atiende mi WhatsApp de trabajo dentro de la misma aplicación: conversa con cada cliente, recuerda sus datos, toma pedidos, agenda reuniones sin cruces y me avisa lo que necesita atención personal, con un panel que resume cada chat.",
      en: "AI agent that answers my business WhatsApp inside the app itself: it talks with each customer, remembers their details, takes orders, books meetings without overlaps and flags what needs my personal attention, with a dashboard that summarizes every chat.",
    },
    fecha: "2026-11-07",
    tipo: "ia",
    conIA: "Claude Code",
    estado: { es: "En producción", en: "In production" },
    etiquetas: ["Gemini", "JavaScript", "Vercel Functions", "PostgreSQL", "Zernio", "WhatsApp"],
    resultado: {
      es: "Funciona de punta a punta en mi número: el mensaje llega, el agente responde en unos 5 segundos y todo queda en el panel.",
      en: "Works end to end on my number: the message arrives, the agent replies in about 5 seconds and everything shows up in the dashboard.",
    },
    cifras: [
      { valor: "9", etiqueta: { es: "herramientas: datos del cliente, pedidos, agenda y aviso a Andrey", en: "tools: customer data, orders, scheduling and handoff to Andrey" } },
      { valor: "19", etiqueta: { es: "pruebas automáticas de punta a punta", en: "end-to-end automated tests" } },
      { valor: "~5 s", etiqueta: { es: "en responder en la primera prueba real", en: "to reply in the first real test" } },
      { valor: "$0", etiqueta: { es: "al mes: todo en planes gratuitos", en: "per month: all on free plans" } },
    ],
    arquitectura: [
      {
        capa: "WhatsApp",
        nodos: [
          { titulo: { es: "Cliente", en: "Customer" }, detalle: { es: "Escribe al número de siempre, sin instalar nada", en: "Writes to the usual number, nothing to install" } },
          { titulo: "Zernio", detalle: { es: "API de WhatsApp en coexistencia con la app del celular", en: "WhatsApp API coexisting with the phone app" } },
        ],
      },
      {
        capa: { es: "Agente · Vercel", en: "Agent · Vercel" },
        nodos: [
          { titulo: "Webhook", detalle: { es: "Firma verificada, respuesta inmediata y trabajo en segundo plano", en: "Verified signature, instant response and background work" } },
          { titulo: "Gemini", detalle: { es: "Conversa y usa las herramientas (pedidos, agenda, memoria)", en: "Converses and uses the tools (orders, calendar, memory)" } },
        ],
      },
      {
        capa: { es: "Datos y control", en: "Data & control" },
        nodos: [
          { titulo: "PostgreSQL", detalle: { es: "Clientes, mensajes, pedidos y reuniones (Neon)", en: "Customers, messages, orders and meetings (Neon)" } },
          { titulo: { es: "Panel", en: "Dashboard" }, detalle: { es: "Resumen por chat, pedidos, reuniones y pausa del agente", en: "Per-chat summary, orders, meetings and agent pause" } },
        ],
      },
    ],
    imagen: "/img/agente-whatsapp/portada.jpg",
    contenido: {
      es: `<p>Agente con inteligencia artificial que atiende el WhatsApp de trabajo de H.A.M.C Solutions —el mismo número de este portafolio— <strong>dentro de WhatsApp</strong>. Conversa con cada cliente, entiende su negocio, responde sobre servicios y proyectos, toma pedidos, agenda reuniones y me pasa lo que necesita una respuesta personal. Lo desarrollé con apoyo de inteligencia artificial (Claude Code).</p>
      <p>La conversación y el panel de las capturas usan clientes y datos de ejemplo; la primera imagen es una ilustración.</p>

      <h2>El problema</h2>
      <p>Los clientes escriben a cualquier hora y por WhatsApp, y cada conversación empieza igual: qué necesita, para qué negocio, para cuándo. Si no hay respuesta pronto, el interés se enfría; y cuando hay varias conversaciones a la vez, es fácil olvidar un pedido o cruzar dos reuniones. El objetivo era un asistente que atendiera en el mismo chat, con memoria de cada cliente, que dejara todo ordenado y que supiera cuándo hacerse a un lado.</p>

      <h2>Qué hace</h2>
      <ul>
        <li><strong>Conversa y explora:</strong> pregunta por el negocio y la necesidad del cliente, responde sobre servicios y proyectos con la información del portafolio y lee los enlaces o imágenes que le envían.</li>
        <li><strong>Memoria por cliente:</strong> guarda nombre, empresa, ciudad y necesidad, y los recuerda en la siguiente conversación sin mezclar clientes.</li>
        <li><strong>Pedidos:</strong> los registra con tipo, detalle, presupuesto y fecha deseada, y los consulta o actualiza cuando el cliente pregunta.</li>
        <li><strong>Agenda:</strong> ofrece horarios libres, agenda la reunión sin cruces y envía un enlace para agregarla al calendario del cliente.</li>
        <li><strong>Sabe cuándo callarse:</strong> si yo respondo desde el celular, el agente se queda en silencio en ese chat por unas horas y guarda mi mensaje en el historial.</li>
        <li><strong>Pasa a Andrey</strong> lo que requiere atención personal, como precios, plazos o una reunión presencial; no da precios ni plazos por su cuenta.</li>
        <li><strong>Panel privado:</strong> resumen de una línea por chat y lo que me toca hacer, pedidos con su estado, próximas reuniones y la opción de pausar o reactivar el agente en cada conversación.</li>
      </ul>

      <h2>Cómo está hecho</h2>
      <div data-arquitectura></div>
      <ul>
        <li><strong>Zernio</strong> conecta el número de WhatsApp en coexistencia: sigue funcionando en la app del celular y, a la vez, envía cada mensaje al agente.</li>
        <li>El <strong>webhook en Vercel</strong> verifica la firma de cada evento, responde al instante y sigue el trabajo en segundo plano; espera unos segundos para juntar mensajes seguidos y usa un turno por cliente para no responder dos veces.</li>
        <li><strong>Gemini</strong> conversa y llama a nueve herramientas con esquemas estrictos; si la cuota gratuita se agota o el servicio falla, el cliente recibe un aviso amable y el chat queda marcado.</li>
        <li><strong>PostgreSQL</strong> (Neon) guarda clientes, mensajes, pedidos y reuniones; las pruebas usan PGlite y servidores falsos de Gemini y Zernio.</li>
        <li>Pensado para la Ley 1581: los registros no guardan números completos ni textos de las conversaciones.</li>
        <li>Basado en un proyecto de código abierto (MIT), reescrito en JavaScript para funcionar en Vercel.</li>
      </ul>

      <h2>Resultado</h2>
      <ul>
        <li>En producción en mi número de trabajo: en la primera prueba real, el mensaje llegó y el agente respondió en unos 5 segundos.</li>
        <li>19 pruebas automáticas de punta a punta: firma, deduplicación, memoria sin mezclar clientes, pedidos, reuniones sin cruces, silencio y reactivación, fallas de los servicios y seguridad del panel.</li>
        <li>Funciona con planes gratuitos de todos los servicios.</li>
      </ul>

      <h2>Capturas</h2>
      <div class="galeria">
        <figure><a href="/img/agente-whatsapp/01-ilustracion.jpg" target="_blank" rel="noopener"><img src="/img/agente-whatsapp/01-ilustracion.jpg" alt="Ilustración de una conversación con el agente" loading="lazy" /></a><figcaption>Ilustración de una conversación (datos de ejemplo)</figcaption></figure>
        <figure><a href="/img/agente-whatsapp/02-panel.jpg" target="_blank" rel="noopener"><img src="/img/agente-whatsapp/02-panel.jpg" alt="Panel con los chats que necesitan atención, pedidos y reuniones" loading="lazy" /></a><figcaption>Panel: atención, pedidos y reuniones</figcaption></figure>
        <figure><a href="/img/agente-whatsapp/03-conversacion.jpg" target="_blank" rel="noopener"><img src="/img/agente-whatsapp/03-conversacion.jpg" alt="Ficha del cliente con su conversación" loading="lazy" /></a><figcaption>Ficha del cliente con su conversación</figcaption></figure>
      </div>
      <h3>En el celular</h3>
      <div class="galeria movil">
        <figure><a href="/img/agente-whatsapp/20-movil-panel.jpg" target="_blank" rel="noopener"><img src="/img/agente-whatsapp/20-movil-panel.jpg" alt="Panel en el celular" loading="lazy" /></a><figcaption>Panel</figcaption></figure>
        <figure><a href="/img/agente-whatsapp/21-movil-conversacion.jpg" target="_blank" rel="noopener"><img src="/img/agente-whatsapp/21-movil-conversacion.jpg" alt="Conversación en el celular" loading="lazy" /></a><figcaption>Conversación</figcaption></figure>
      </div>`,
      en: `<p>AI agent that answers the H.A.M.C Solutions business WhatsApp —the same number shown on this portfolio— <strong>inside WhatsApp</strong>. It talks with each customer, understands their business, answers questions about services and projects, takes orders, books meetings and hands me whatever needs a personal reply. I built it with the help of artificial intelligence (Claude Code).</p>
      <p>The conversation and dashboard in the screenshots use sample customers and data; the first image is an illustration.</p>

      <h2>The problem</h2>
      <p>Customers write at any hour and over WhatsApp, and every conversation starts the same way: what they need, for which business, by when. Without a quick reply, interest cools down; and with several conversations at once, it is easy to forget an order or double-book two meetings. The goal was an assistant that answers in the same chat, remembers each customer, keeps everything organized and knows when to step aside.</p>

      <h2>What it does</h2>
      <ul>
        <li><strong>Converses and explores:</strong> asks about the customer's business and needs, answers questions about services and projects using the portfolio's information, and reads the links or images customers send.</li>
        <li><strong>Per-customer memory:</strong> stores name, company, city and need, and remembers them in the next conversation without mixing customers.</li>
        <li><strong>Orders:</strong> records them with type, details, budget and desired date, and looks them up or updates them when the customer asks.</li>
        <li><strong>Scheduling:</strong> offers open slots, books the meeting without overlaps and sends a link to add it to the customer's calendar.</li>
        <li><strong>Knows when to stay quiet:</strong> if I reply from my phone, the agent goes silent in that chat for a few hours and keeps my message in the history.</li>
        <li><strong>Hands off to Andrey</strong> anything that needs personal attention, such as prices, timelines or an in-person meeting; it never quotes prices or deadlines on its own.</li>
        <li><strong>Private dashboard:</strong> a one-line summary per chat and what I need to do, orders with their status, upcoming meetings and the option to pause or resume the agent in each conversation.</li>
      </ul>

      <h2>How it's built</h2>
      <div data-arquitectura></div>
      <ul>
        <li><strong>Zernio</strong> connects the WhatsApp number in coexistence mode: it keeps working in the phone app while every message is also sent to the agent.</li>
        <li>The <strong>webhook on Vercel</strong> verifies each event's signature, responds instantly and continues the work in the background; it waits a few seconds to group consecutive messages and uses a per-customer turn so it never answers twice.</li>
        <li><strong>Gemini</strong> converses and calls nine tools with strict schemas; if the free quota runs out or the service fails, the customer gets a friendly notice and the chat is flagged.</li>
        <li><strong>PostgreSQL</strong> (Neon) stores customers, messages, orders and meetings; tests use PGlite plus fake Gemini and Zernio servers.</li>
        <li>Designed with Colombia's data protection law (Law 1581) in mind: logs never store full phone numbers or conversation text.</li>
        <li>Based on an open-source project (MIT), rewritten in JavaScript to run on Vercel.</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li>In production on my business number: in the first real test, the message arrived and the agent replied in about 5 seconds.</li>
        <li>19 end-to-end automated tests: signatures, deduplication, memory without mixing customers, orders, non-overlapping meetings, silence and resume, service failures and dashboard security.</li>
        <li>Runs on the free plans of every service.</li>
      </ul>

      <h2>Screenshots</h2>
      <p>The agent and dashboard are in Spanish.</p>
      <div class="galeria">
        <figure><a href="/img/agente-whatsapp/01-ilustracion.jpg" target="_blank" rel="noopener"><img src="/img/agente-whatsapp/01-ilustracion.jpg" alt="Illustration of a conversation with the agent" loading="lazy" /></a><figcaption>Illustration of a conversation (sample data)</figcaption></figure>
        <figure><a href="/img/agente-whatsapp/02-panel.jpg" target="_blank" rel="noopener"><img src="/img/agente-whatsapp/02-panel.jpg" alt="Dashboard with chats needing attention, orders and meetings" loading="lazy" /></a><figcaption>Dashboard: attention, orders and meetings</figcaption></figure>
        <figure><a href="/img/agente-whatsapp/03-conversacion.jpg" target="_blank" rel="noopener"><img src="/img/agente-whatsapp/03-conversacion.jpg" alt="Customer record with the conversation" loading="lazy" /></a><figcaption>Customer record with the conversation</figcaption></figure>
      </div>
      <h3>On mobile</h3>
      <div class="galeria movil">
        <figure><a href="/img/agente-whatsapp/20-movil-panel.jpg" target="_blank" rel="noopener"><img src="/img/agente-whatsapp/20-movil-panel.jpg" alt="Dashboard on mobile" loading="lazy" /></a><figcaption>Dashboard</figcaption></figure>
        <figure><a href="/img/agente-whatsapp/21-movil-conversacion.jpg" target="_blank" rel="noopener"><img src="/img/agente-whatsapp/21-movil-conversacion.jpg" alt="Conversation on mobile" loading="lazy" /></a><figcaption>Conversation</figcaption></figure>
      </div>`,
    },
  },
  {
    slug: "planillero-voley",
    titulo: { es: "Planillero Vóley — Planilla de juego para la mesa de control", en: "Planillero Vóley — Volleyball scoresheet for the scorer's table" },
    resumen: {
      es: "Aplicación instalable para iPad que lleva el partido de voleibol con las reglas FIVB, funciona sin internet y al final llena la planilla oficial en PDF. Incluye hoja de posiciones con QR para entrenadores y lector de alineaciones para árbitros.",
      en: "Installable iPad app that runs a volleyball match under FIVB rules, works offline and fills in the official PDF scoresheet at the end. Includes a QR lineup sheet for coaches and a lineup scanner for referees.",
    },
    fecha: "2026-11-07",
    tipo: "movil",
    conIA: "Claude Code",
    estado: { es: "Publicada", en: "Live" },
    etiquetas: ["HTML", "JavaScript", "PWA", "Service Worker", "pdf-lib", "jsQR", "Vercel"],
    resultado: {
      es: "La mesa de control lleva el partido en el iPad y descarga la planilla oficial ya diligenciada, sin depender del internet del coliseo.",
      en: "The scorer's table runs the match on the iPad and downloads the official scoresheet already filled in, without relying on the venue's internet.",
    },
    cifras: [
      { valor: "3", etiqueta: { es: "modos: mesa de control, entrenadores y árbitros", en: "modes: scorer's table, coaches and referees" } },
      { valor: "0", etiqueta: { es: "conexión necesaria durante el partido: funciona sin internet", en: "connection needed during the match: works offline" } },
      { valor: "1", etiqueta: { es: "archivo HTML con toda la aplicación, sin servidor", en: "HTML file with the whole app, no server" } },
    ],
    arquitectura: [
      {
        capa: { es: "Partido · iPad", en: "Match · iPad" },
        nodos: [
          { titulo: { es: "Mesa de control", en: "Scorer's table" }, detalle: { es: "Marcador, rotaciones, cambios, líbero, tiempos y sanciones", en: "Score, rotations, substitutions, libero, timeouts and sanctions" } },
          { titulo: { es: "Firmas", en: "Signatures" }, detalle: { es: "Capitanes, técnicos y árbitros firman con el dedo", en: "Captains, coaches and referees sign with a finger" } },
        ],
      },
      {
        capa: { es: "Alineaciones · QR", en: "Lineups · QR" },
        nodos: [
          { titulo: { es: "Hoja de posiciones", en: "Lineup sheet" }, detalle: { es: "El entrenador arma la rotación y genera el QR del set", en: "The coach sets the rotation and generates the set's QR" } },
          { titulo: { es: "Lector", en: "Scanner" }, detalle: { es: "Cámara o foto; mismo formato que AppLineUp", en: "Camera or photo; same format as AppLineUp" } },
        ],
      },
      {
        capa: { es: "Salida y publicación", en: "Output & hosting" },
        nodos: [
          { titulo: { es: "PDF oficial", en: "Official PDF" }, detalle: { es: "pdf-lib escribe sobre la plantilla del torneo", en: "pdf-lib writes onto the tournament template" } },
          { titulo: "Service Worker", detalle: { es: "Guarda la app en el dispositivo para usarla sin internet", en: "Stores the app on the device for offline use" } },
          { titulo: "Vercel", detalle: { es: "Dirección https para instalarla y usar la cámara", en: "HTTPS address to install it and use the camera" } },
        ],
      },
    ],
    imagen: "/img/planillero/portada.jpg",
    demo: "https://planillero-pwa.vercel.app",
    codigo: "https://github.com/HANDREYMARTINEZ/planillero-voley",
    contenido: {
      es: `<p>Planillero es la planilla de juego de voleibol que usa la mesa de control durante los partidos. Se desarrolló para los <strong>Juegos Deportivos y Paradeportivos Identidad Cundinamarca 2025</strong>: se instala en el iPad desde Safari, funciona sin internet y, al terminar el partido, llena la planilla oficial del torneo en PDF. La desarrollé con apoyo de inteligencia artificial (Claude Code).</p>
      <p>Los equipos, jugadoras y árbitros de las capturas son datos de ejemplo.</p>

      <h2>El problema</h2>
      <p>En la mesa de control la planilla se diligencia a mano mientras el partido avanza: puntos, rotaciones, cambios, tiempos, líbero y sanciones, todo con las reglas de la FIVB. Es fácil equivocarse con la rotación o con el número de cambios, y al final hay que pasar todo en limpio al formato oficial. Además, los coliseos no siempre tienen buena señal, así que la herramienta no podía depender de internet.</p>

      <h2>Qué hace</h2>
      <ul>
        <li><strong>Nuevo partido:</strong> competición, categoría, sede, árbitros, formato (mejor de 3 o de 5) y la nómina de cada equipo con líberos y capitán; también se puede pegar la lista.</li>
        <li><strong>Firmas de inicio y cierre</strong> de capitanes, técnicos y árbitros, con el dedo o el lápiz.</li>
        <li><strong>Formación por set:</strong> las seis zonas de cada equipo, quién saca primero y el lado de la cancha.</li>
        <li><strong>Marcador con reglas FIVB:</strong> punto con un toque, rotación automática al recuperar el saque, cambios con su límite, entrada y salida del líbero, tiempos, sanciones y registro de cada jugada con opción de deshacer.</li>
        <li><strong>Planilla oficial en PDF:</strong> al cerrar, la aplicación escribe sobre la plantilla del torneo la formación, los puntos al cambio, los turnos al saque, los resultados por set, la nómina y las firmas.</li>
        <li><strong>Entrenadores:</strong> hoja de posiciones de voleibol (6 zonas) o minivoleibol (4), revisión de errores de alineación y un código QR por set.</li>
        <li><strong>Árbitros:</strong> lector de alineaciones con la cámara o desde una foto; muestra la cancha con las dos formaciones y la zona de saque.</li>
        <li><strong>Mesa de control:</strong> en la formación del set, «Escanear QR» llena las seis zonas y avisa si un dorsal no está en la nómina.</li>
        <li><strong>Copias de seguridad:</strong> exportar e importar los partidos en un archivo.</li>
      </ul>

      <h2>Cómo está hecha</h2>
      <div data-arquitectura></div>
      <ul>
        <li>Toda la aplicación vive en <strong>un solo archivo HTML</strong> con JavaScript, sin frameworks ni servidor; los partidos se guardan en el propio dispositivo.</li>
        <li><strong>PWA instalable</strong>: un Service Worker guarda la app, la plantilla oficial y las librerías al instalarla; desde ahí funciona sin conexión. Cada versión cambia su número para que los iPad reciban la actualización solos.</li>
        <li><strong>pdf-lib</strong> escribe sobre el PDF oficial; <strong>qrcode-generator</strong> crea los QR y <strong>jsQR</strong> los lee desde la cámara o una foto.</li>
        <li>Los QR usan <strong>el mismo formato que AppLineUp</strong> (RFEVB), así que las dos aplicaciones se leen entre sí.</li>
        <li>Publicada en <strong>Vercel</strong> (https, necesario para instalarla en el iPad y usar la cámara); el código está en GitHub con su historial de versiones.</li>
      </ul>

      <h2>Resultado</h2>
      <ul>
        <li>La mesa de control lleva el partido en el iPad y descarga la planilla oficial ya diligenciada.</li>
        <li>La versión 2 suma las alineaciones por QR para entrenadores y árbitros, y se publicó en la misma dirección: los iPad se actualizan sin perder los partidos guardados.</li>
      </ul>

      <h2>Capturas</h2>
      <div class="galeria">
        <figure><a href="/img/planillero/04-marcador.jpg" target="_blank" rel="noopener"><img src="/img/planillero/04-marcador.jpg" alt="Marcador con la cancha y las rotaciones" loading="lazy" /></a><figcaption>Marcador con la cancha y las rotaciones</figcaption></figure>
        <figure><a href="/img/planillero/06-planilla-oficial.jpg" target="_blank" rel="noopener"><img src="/img/planillero/06-planilla-oficial.jpg" alt="Planilla oficial llenada por la aplicación" loading="lazy" /></a><figcaption>Planilla oficial llenada por la aplicación</figcaption></figure>
        <figure><a href="/img/planillero/03-formacion.jpg" target="_blank" rel="noopener"><img src="/img/planillero/03-formacion.jpg" alt="Formación del set" loading="lazy" /></a><figcaption>Formación del set</figcaption></figure>
        <figure><a href="/img/planillero/02-nuevo-partido.jpg" target="_blank" rel="noopener"><img src="/img/planillero/02-nuevo-partido.jpg" alt="Datos del partido y nóminas" loading="lazy" /></a><figcaption>Datos del partido y nóminas</figcaption></figure>
        <figure><a href="/img/planillero/05-resumen.jpg" target="_blank" rel="noopener"><img src="/img/planillero/05-resumen.jpg" alt="Resumen del partido y descarga del PDF" loading="lazy" /></a><figcaption>Resumen del partido y descarga del PDF</figcaption></figure>
        <figure><a href="/img/planillero/01-inicio.jpg" target="_blank" rel="noopener"><img src="/img/planillero/01-inicio.jpg" alt="Inicio con los tres modos" loading="lazy" /></a><figcaption>Inicio con los tres modos</figcaption></figure>
      </div>
      <h3>En el celular</h3>
      <div class="galeria movil">
        <figure><a href="/img/planillero/20-movil-hoja-qr.jpg" target="_blank" rel="noopener"><img src="/img/planillero/20-movil-hoja-qr.jpg" alt="QR de la alineación para el entrenador" loading="lazy" /></a><figcaption>QR de la alineación</figcaption></figure>
        <figure><a href="/img/planillero/21-movil-arbitros.jpg" target="_blank" rel="noopener"><img src="/img/planillero/21-movil-arbitros.jpg" alt="Lector de alineaciones para árbitros" loading="lazy" /></a><figcaption>Lector para árbitros</figcaption></figure>
        <figure><a href="/img/planillero/22-movil-inicio.jpg" target="_blank" rel="noopener"><img src="/img/planillero/22-movil-inicio.jpg" alt="Inicio en el celular" loading="lazy" /></a><figcaption>Inicio</figcaption></figure>
      </div>`,
      en: `<p>Planillero is the volleyball scoresheet used by the scorer's table during matches. It was built for the <strong>Identidad Cundinamarca 2025 Sports and Para-sports Games</strong>: it installs on the iPad from Safari, works offline and, when the match ends, fills in the tournament's official PDF scoresheet. I built it with the help of artificial intelligence (Claude Code).</p>
      <p>Teams, players and referees in the screenshots are sample data.</p>

      <h2>The problem</h2>
      <p>At the scorer's table the scoresheet is filled in by hand while the match goes on: points, rotations, substitutions, timeouts, libero and sanctions, all under FIVB rules. It is easy to get a rotation or the substitution count wrong, and at the end everything has to be copied neatly onto the official form. Venues do not always have good signal either, so the tool could not depend on the internet.</p>

      <h2>What it does</h2>
      <ul>
        <li><strong>New match:</strong> competition, category, venue, referees, format (best of 3 or 5) and each team's roster with liberos and captain; the list can also be pasted.</li>
        <li><strong>Start and closing signatures</strong> from captains, coaches and referees, with a finger or a stylus.</li>
        <li><strong>Lineup per set:</strong> each team's six zones, who serves first and the side of the court.</li>
        <li><strong>Scoreboard with FIVB rules:</strong> one tap per point, automatic rotation on side-out, substitutions with their limit, libero in and out, timeouts, sanctions and a log of every rally with undo.</li>
        <li><strong>Official PDF scoresheet:</strong> on closing, the app writes the lineups, points at substitution, service turns, set results, roster and signatures onto the tournament template.</li>
        <li><strong>Coaches:</strong> lineup sheet for volleyball (6 zones) or mini-volleyball (4), lineup error checks and one QR code per set.</li>
        <li><strong>Referees:</strong> lineup scanner using the camera or a photo; it shows the court with both lineups and the serving zone.</li>
        <li><strong>Scorer's table:</strong> in the set lineup, "Scan QR" fills the six zones and warns if a shirt number is not on the roster.</li>
        <li><strong>Backups:</strong> export and import matches to a file.</li>
      </ul>

      <h2>How it's built</h2>
      <div data-arquitectura></div>
      <ul>
        <li>The whole app lives in <strong>a single HTML file</strong> with JavaScript, no frameworks or server; matches are stored on the device itself.</li>
        <li><strong>Installable PWA</strong>: a Service Worker stores the app, the official template and the libraries on install; from then on it works offline. Each release changes its version number so iPads pick up the update on their own.</li>
        <li><strong>pdf-lib</strong> writes onto the official PDF; <strong>qrcode-generator</strong> creates the QR codes and <strong>jsQR</strong> reads them from the camera or a photo.</li>
        <li>The QR codes use <strong>the same format as AppLineUp</strong> (Spanish Volleyball Federation), so both apps can read each other's codes.</li>
        <li>Hosted on <strong>Vercel</strong> (HTTPS, required to install it on the iPad and use the camera); the source code is on GitHub with its version history.</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li>The scorer's table runs the match on the iPad and downloads the official scoresheet already filled in.</li>
        <li>Version 2 adds QR lineups for coaches and referees and was published at the same address: iPads update without losing saved matches.</li>
      </ul>

      <h2>Screenshots</h2>
      <p>The app is in Spanish.</p>
      <div class="galeria">
        <figure><a href="/img/planillero/04-marcador.jpg" target="_blank" rel="noopener"><img src="/img/planillero/04-marcador.jpg" alt="Scoreboard with the court and rotations" loading="lazy" /></a><figcaption>Scoreboard with the court and rotations</figcaption></figure>
        <figure><a href="/img/planillero/06-planilla-oficial.jpg" target="_blank" rel="noopener"><img src="/img/planillero/06-planilla-oficial.jpg" alt="Official scoresheet filled in by the app" loading="lazy" /></a><figcaption>Official scoresheet filled in by the app</figcaption></figure>
        <figure><a href="/img/planillero/03-formacion.jpg" target="_blank" rel="noopener"><img src="/img/planillero/03-formacion.jpg" alt="Set lineup" loading="lazy" /></a><figcaption>Set lineup</figcaption></figure>
        <figure><a href="/img/planillero/02-nuevo-partido.jpg" target="_blank" rel="noopener"><img src="/img/planillero/02-nuevo-partido.jpg" alt="Match details and rosters" loading="lazy" /></a><figcaption>Match details and rosters</figcaption></figure>
        <figure><a href="/img/planillero/05-resumen.jpg" target="_blank" rel="noopener"><img src="/img/planillero/05-resumen.jpg" alt="Match summary and PDF download" loading="lazy" /></a><figcaption>Match summary and PDF download</figcaption></figure>
        <figure><a href="/img/planillero/01-inicio.jpg" target="_blank" rel="noopener"><img src="/img/planillero/01-inicio.jpg" alt="Home with the three modes" loading="lazy" /></a><figcaption>Home with the three modes</figcaption></figure>
      </div>
      <h3>On mobile</h3>
      <div class="galeria movil">
        <figure><a href="/img/planillero/20-movil-hoja-qr.jpg" target="_blank" rel="noopener"><img src="/img/planillero/20-movil-hoja-qr.jpg" alt="Lineup QR for the coach" loading="lazy" /></a><figcaption>Lineup QR</figcaption></figure>
        <figure><a href="/img/planillero/21-movil-arbitros.jpg" target="_blank" rel="noopener"><img src="/img/planillero/21-movil-arbitros.jpg" alt="Lineup scanner for referees" loading="lazy" /></a><figcaption>Referee scanner</figcaption></figure>
        <figure><a href="/img/planillero/22-movil-inicio.jpg" target="_blank" rel="noopener"><img src="/img/planillero/22-movil-inicio.jpg" alt="Home on mobile" loading="lazy" /></a><figcaption>Home</figcaption></figure>
      </div>`,
    },
  },
  {
    slug: "bicifest-colombia",
    destacado: true,
    titulo: { es: "BiciFest Colombia 2026 — Sitio, inscripciones y panel del evento", en: "BiciFest Colombia 2026 — Website, registrations and event dashboard" },
    resumen: {
      es: "Sitio oficial de la décima edición de BiciFest en Villa de Guaduas: inscripciones con exención firmada y PDF, código QR por inscripción, verificación en la entrada con la cámara y panel con reportes en Excel y PDF, en producción con PHP y MySQL.",
      en: "Official website for the tenth BiciFest in Villa de Guaduas: registrations with a signed waiver and PDF, a QR code per registration, camera check-in at the entrance and a dashboard with Excel and PDF reports, in production on PHP and MySQL.",
    },
    fecha: "2026-11-05",
    tipo: "web",
    conIA: "Claude Code",
    estado: { es: "En producción", en: "In production" },
    etiquetas: ["React", "TypeScript", "Tailwind CSS", "Vite", "PHP", "MySQL", "jsPDF", "Hostinger"],
    resultado: {
      es: "En producción en bicifestcolombia.com desde el 5 de noviembre de 2026, con inscripciones, QR y verificación probados de punta a punta.",
      en: "Live at bicifestcolombia.com since November 5, 2026, with registrations, QR codes and check-in tested end to end.",
    },
    cifras: [
      { valor: "6", etiqueta: { es: "pruebas en dos días, con cupos por competencia", en: "events over two days, with spots per competition" } },
      { valor: "2", etiqueta: { es: "perfiles en el panel: organizador y puerta", en: "dashboard roles: organizer and gate" } },
      { valor: "110/110", etiqueta: { es: "pruebas de la API superadas en la auditoría", en: "API tests passed in the audit" } },
      { valor: "100", etiqueta: { es: "en accesibilidad, buenas prácticas y SEO (Lighthouse móvil)", en: "in accessibility, best practices and SEO (Lighthouse mobile)" } },
    ],
    arquitectura: [
      {
        capa: { es: "Sitio · React", en: "Website · React" },
        nodos: [
          { titulo: { es: "Landing", en: "Landing page" }, detalle: { es: "Agenda, pruebas, galería, patrocinadores y cómo llegar", en: "Schedule, events, gallery, sponsors and directions" } },
          { titulo: { es: "Inscripción", en: "Registration" }, detalle: { es: "Formulario por categoría, firma y PDF en el navegador", en: "Form by category, signature and PDF in the browser" } },
        ],
      },
      {
        capa: { es: "Servidor · PHP", en: "Server · PHP" },
        nodos: [
          { titulo: "API", detalle: { es: "Valida, recalcula precios y controla los cupos", en: "Validates, recalculates prices and enforces spots" } },
          { titulo: "MySQL", detalle: { es: "Inscripciones, pagos, verificaciones y bitácora", en: "Registrations, payments, check-ins and audit log" } },
        ],
      },
      {
        capa: { es: "Evento", en: "Event" },
        nodos: [
          { titulo: "QR", detalle: { es: "Uno por inscripción, en la confirmación y en el PDF", en: "One per registration, on the confirmation and the PDF" } },
          { titulo: { es: "Panel", en: "Dashboard" }, detalle: { es: "Verificar con la cámara, pagos y reportes Excel/PDF", en: "Camera check-in, payments and Excel/PDF reports" } },
        ],
      },
    ],
    imagen: "/img/bicifest/portada.jpg",
    demo: "https://www.bicifestcolombia.com",
    contenido: {
      es: `<p>BiciFest Colombia celebra su décima edición el 5 y 6 de diciembre de 2026 en Villa de Guaduas, Cundinamarca: un fin de semana de competencias, recorridos en familia, feria comercial y actos culturales alrededor de la bicicleta. Para su organizador, Grupo JG Eventos, desarrollé el sitio oficial con las inscripciones en línea y el panel que se usa el día del evento. Lo desarrollé con apoyo de inteligencia artificial (Claude Code), y H.A.M.C Solutions es además patrocinador principal de esta edición.</p>
      <p>Las capturas son del sitio publicado; no muestran el panel, que contiene datos reales de los participantes.</p>

      <h2>El problema</h2>
      <p>El evento necesitaba recibir inscripciones para seis pruebas, con hasta 200 cupos por competencia, y cada participante debía diligenciar y firmar una exención de responsabilidad. El día del evento, además, había que confirmar en la entrada quién estaba inscrito y al día con el pago. El objetivo era una página que contara el evento, recibiera las inscripciones con la firma incluida y diera a los organizadores una forma rápida de verificar a cada persona en la llegada.</p>

      <h2>Qué hace</h2>
      <ul>
        <li><strong>Sitio del evento:</strong> cuenta regresiva, qué es BiciFest con una entrevista en video, las seis pruebas, agenda de los dos días con filtros y archivo de calendario, patrocinadores por nivel, galería con fotos y videos de 2025, hospedaje, mapa y preguntas frecuentes.</li>
        <li><strong>Inscripción por pasos:</strong> participante o menor con su acudiente, prueba y categoría por edad y género, lectura y firma de la exención en el celular y un PDF con la inscripción.</li>
        <li><strong>Código QR por inscripción:</strong> aparece en la confirmación y en el encabezado del PDF.</li>
        <li><strong>Panel del evento</strong> con dos perfiles: el organizador ve resumen, inscripciones, pagos, reportes y cuentas; la puerta solo verifica. Escanear el QR deja la inscripción verificada y una segunda lectura avisa que ya lo estaba.</li>
        <li><strong>Pagos coordinados por WhatsApp:</strong> el panel guarda el estado, el método y la referencia de cada pago.</li>
        <li><strong>Reportes:</strong> Excel por categoría, planillas en PDF para imprimir y filtro del día.</li>
        <li><strong>Política de tratamiento de datos</strong> aprobada por el cliente y enlazada desde el formulario.</li>
      </ul>

      <h2>Cómo está hecha</h2>
      <div data-arquitectura></div>
      <ul>
        <li><strong>React, TypeScript y Tailwind CSS</strong> con Vite. Todo el contenido editable vive en archivos de datos, así que agenda, pruebas o patrocinadores se cambian sin tocar los componentes.</li>
        <li>Dos escenas animadas con el desplazamiento: se atraviesa una rueda hasta la plaza y una foto de montaña se abre a pantalla completa.</li>
        <li><strong>API en PHP con MySQL</strong> en Hostinger: valida cada inscripción, recalcula los precios en el servidor, controla los cupos por competencia y evita inscripciones repetidas.</li>
        <li>Seguridad revisada con una auditoría completa: cabeceras y política de contenido, límites de intentos por persona, perfiles con permisos y CSV sin fórmulas.</li>
        <li>PDF generado en el navegador con <strong>jsPDF</strong> y lectura de QR con la cámara del celular.</li>
      </ul>

      <h2>Resultado</h2>
      <ul>
        <li>En producción en <strong>bicifestcolombia.com</strong> desde el 5 de noviembre de 2026, con la prueba completa de inscripción, QR y escaneo hecha en el sitio publicado.</li>
        <li>Auditoría de calidad y seguridad: 110 de 110 pruebas de la API superadas y Lighthouse móvil con 100 en accesibilidad, buenas prácticas y SEO.</li>
      </ul>

      <h2>Capturas</h2>
      <div class="galeria">
        <figure><a href="/img/bicifest/01-inicio.jpg" target="_blank" rel="noopener"><img src="/img/bicifest/01-inicio.jpg" alt="Inicio con la cuenta regresiva" loading="lazy" /></a><figcaption>Inicio con la cuenta regresiva</figcaption></figure>
        <figure><a href="/img/bicifest/03-inscripciones.jpg" target="_blank" rel="noopener"><img src="/img/bicifest/03-inscripciones.jpg" alt="Inscripciones abiertas" loading="lazy" /></a><figcaption>Inscripciones abiertas</figcaption></figure>
        <figure><a href="/img/bicifest/04-formulario.jpg" target="_blank" rel="noopener"><img src="/img/bicifest/04-formulario.jpg" alt="Formulario de inscripción por pasos" loading="lazy" /></a><figcaption>Formulario de inscripción por pasos</figcaption></figure>
        <figure><a href="/img/bicifest/02-agenda.jpg" target="_blank" rel="noopener"><img src="/img/bicifest/02-agenda.jpg" alt="Agenda de los dos días" loading="lazy" /></a><figcaption>Agenda de los dos días</figcaption></figure>
        <figure><a href="/img/bicifest/05-patrocinadores.jpg" target="_blank" rel="noopener"><img src="/img/bicifest/05-patrocinadores.jpg" alt="Patrocinadores por nivel" loading="lazy" /></a><figcaption>Patrocinadores por nivel</figcaption></figure>
        <figure><a href="/img/bicifest/06-como-llegar.jpg" target="_blank" rel="noopener"><img src="/img/bicifest/06-como-llegar.jpg" alt="Cómo llegar a la Villa de Guaduas" loading="lazy" /></a><figcaption>Cómo llegar</figcaption></figure>
        <figure><a href="/img/bicifest/07-hamc.jpg" target="_blank" rel="noopener"><img src="/img/bicifest/07-hamc.jpg" alt="Sección de H.A.M.C Solutions al final del sitio" loading="lazy" /></a><figcaption>Sección de H.A.M.C Solutions</figcaption></figure>
      </div>
      <h3>En el celular</h3>
      <div class="galeria movil">
        <figure><a href="/img/bicifest/20-movil-inicio.jpg" target="_blank" rel="noopener"><img src="/img/bicifest/20-movil-inicio.jpg" alt="Inicio en el celular" loading="lazy" /></a><figcaption>Inicio</figcaption></figure>
        <figure><a href="/img/bicifest/21-movil-inscripciones.jpg" target="_blank" rel="noopener"><img src="/img/bicifest/21-movil-inscripciones.jpg" alt="Inscripciones en el celular" loading="lazy" /></a><figcaption>Inscripciones</figcaption></figure>
        <figure><a href="/img/bicifest/22-movil-hamc.jpg" target="_blank" rel="noopener"><img src="/img/bicifest/22-movil-hamc.jpg" alt="Sección de H.A.M.C Solutions en el celular" loading="lazy" /></a><figcaption>H.A.M.C Solutions</figcaption></figure>
      </div>`,
      en: `<p>BiciFest Colombia holds its tenth edition on December 5 and 6, 2026 in Villa de Guaduas, Cundinamarca: a weekend of races, family rides, a trade fair and cultural events built around the bicycle. For its organizer, Grupo JG Eventos, I built the official website with online registration and the dashboard used on event day. I built it with the help of artificial intelligence (Claude Code), and H.A.M.C Solutions is also a main sponsor of this edition.</p>
      <p>The screenshots come from the live site; they do not show the dashboard, which holds real participant data.</p>

      <h2>The problem</h2>
      <p>The event needed to take registrations for six events, with up to 200 spots per competition, and every participant had to fill in and sign a liability waiver. On event day, someone also had to confirm at the entrance who was registered and up to date with payment. The goal was a page that presents the event, takes registrations with the signature included and gives organizers a fast way to check each person in on arrival.</p>

      <h2>What it does</h2>
      <ul>
        <li><strong>Event website:</strong> countdown, what BiciFest is with a video interview, the six events, a two-day schedule with filters and a calendar file, sponsors by tier, a gallery with 2025 photos and videos, lodging, map and FAQ.</li>
        <li><strong>Step-by-step registration:</strong> adult or minor with a guardian, event and category by age and gender, reading and signing the waiver on the phone and a PDF of the registration.</li>
        <li><strong>QR code per registration:</strong> shown on the confirmation and in the PDF header.</li>
        <li><strong>Event dashboard</strong> with two roles: organizers see the summary, registrations, payments, reports and accounts; the gate only checks people in. Scanning the QR marks the registration as verified, and a second scan warns that it already was.</li>
        <li><strong>Payments coordinated over WhatsApp:</strong> the dashboard stores each payment's status, method and reference.</li>
        <li><strong>Reports:</strong> Excel by category, printable PDF sheets and a today filter.</li>
        <li><strong>Data processing policy</strong> approved by the client and linked from the form.</li>
      </ul>

      <h2>How it's built</h2>
      <div data-arquitectura></div>
      <ul>
        <li><strong>React, TypeScript and Tailwind CSS</strong> with Vite. All editable content lives in data files, so the schedule, events or sponsors change without touching the components.</li>
        <li>Two scroll-driven scenes: you travel through a bicycle wheel into the town square, and a mountain photo opens up to full screen.</li>
        <li><strong>PHP API with MySQL</strong> on Hostinger: it validates every registration, recalculates prices on the server, enforces the spots per event and prevents duplicate registrations.</li>
        <li>Security reviewed with a full audit: headers and content policy, per-person attempt limits, role permissions and formula-free CSV exports.</li>
        <li>PDF generated in the browser with <strong>jsPDF</strong> and QR scanning with the phone's camera.</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li>Live at <strong>bicifestcolombia.com</strong> since November 5, 2026, with the full registration, QR and scanning flow tested on the published site.</li>
        <li>Quality and security audit: 110 of 110 API tests passed and Lighthouse mobile scores of 100 in accessibility, best practices and SEO.</li>
      </ul>

      <h2>Screenshots</h2>
      <p>The site is in Spanish.</p>
      <div class="galeria">
        <figure><a href="/img/bicifest/01-inicio.jpg" target="_blank" rel="noopener"><img src="/img/bicifest/01-inicio.jpg" alt="Home page with the countdown" loading="lazy" /></a><figcaption>Home page with the countdown</figcaption></figure>
        <figure><a href="/img/bicifest/03-inscripciones.jpg" target="_blank" rel="noopener"><img src="/img/bicifest/03-inscripciones.jpg" alt="Registrations open" loading="lazy" /></a><figcaption>Registrations open</figcaption></figure>
        <figure><a href="/img/bicifest/04-formulario.jpg" target="_blank" rel="noopener"><img src="/img/bicifest/04-formulario.jpg" alt="Step-by-step registration form" loading="lazy" /></a><figcaption>Step-by-step registration form</figcaption></figure>
        <figure><a href="/img/bicifest/02-agenda.jpg" target="_blank" rel="noopener"><img src="/img/bicifest/02-agenda.jpg" alt="Two-day schedule" loading="lazy" /></a><figcaption>Two-day schedule</figcaption></figure>
        <figure><a href="/img/bicifest/05-patrocinadores.jpg" target="_blank" rel="noopener"><img src="/img/bicifest/05-patrocinadores.jpg" alt="Sponsors by tier" loading="lazy" /></a><figcaption>Sponsors by tier</figcaption></figure>
        <figure><a href="/img/bicifest/06-como-llegar.jpg" target="_blank" rel="noopener"><img src="/img/bicifest/06-como-llegar.jpg" alt="Directions to Villa de Guaduas" loading="lazy" /></a><figcaption>Directions</figcaption></figure>
        <figure><a href="/img/bicifest/07-hamc.jpg" target="_blank" rel="noopener"><img src="/img/bicifest/07-hamc.jpg" alt="H.A.M.C Solutions section at the end of the site" loading="lazy" /></a><figcaption>H.A.M.C Solutions section</figcaption></figure>
      </div>
      <h3>On mobile</h3>
      <div class="galeria movil">
        <figure><a href="/img/bicifest/20-movil-inicio.jpg" target="_blank" rel="noopener"><img src="/img/bicifest/20-movil-inicio.jpg" alt="Home page on mobile" loading="lazy" /></a><figcaption>Home page</figcaption></figure>
        <figure><a href="/img/bicifest/21-movil-inscripciones.jpg" target="_blank" rel="noopener"><img src="/img/bicifest/21-movil-inscripciones.jpg" alt="Registrations on mobile" loading="lazy" /></a><figcaption>Registrations</figcaption></figure>
        <figure><a href="/img/bicifest/22-movil-hamc.jpg" target="_blank" rel="noopener"><img src="/img/bicifest/22-movil-hamc.jpg" alt="H.A.M.C Solutions section on mobile" loading="lazy" /></a><figcaption>H.A.M.C Solutions</figcaption></figure>
      </div>`,
    },
  },
  {
    slug: "moton-repuestos",
    titulo: { es: "Moton — Tienda de repuestos y accesorios para moto", en: "Moton — Motorcycle parts and accessories store" },
    resumen: {
      es: "Propuesta de sitio web para un local de repuestos y accesorios de moto (NS, Dominar, Duke y más): catálogo por marca y categoría, buscador, carrito y pedido por WhatsApp con la lista y el total ya escritos.",
      en: "Website proposal for a motorcycle parts and accessories shop (Pulsar NS, Dominar, Duke and more): catalog by brand and category, search, cart and WhatsApp ordering with the item list and total already written.",
    },
    fecha: "2026-10-15",
    tipo: "web",
    conIA: "Claude Code",
    estado: { es: "Propuesta para cliente", en: "Client proposal" },
    etiquetas: ["HTML", "CSS", "JavaScript", "Vercel"],
    resultado: { es: "Demostración publicada en Vercel, con despliegue automático desde GitHub, lista para presentar al cliente.", en: "Demo live on Vercel with automatic deployment from GitHub, ready to present to the client." },
    cifras: [
      { valor: "17", etiqueta: { es: "productos de ejemplo en el catálogo", en: "sample products in the catalog" } },
      { valor: "7", etiqueta: { es: "marcas con filtro propio", en: "brands with their own filter" } },
      { valor: "0", etiqueta: { es: "dependencias: HTML, CSS y JavaScript puros", en: "dependencies: plain HTML, CSS and JavaScript" } },
    ],
    arquitectura: [
      {
        capa: { es: "Datos", en: "Data" },
        nodos: [
          { titulo: { es: "Catálogo", en: "Catalog" }, detalle: { es: "Productos con categoría, compatibilidad y precio en USD", en: "Products with category, fitment and price in USD" } },
          { titulo: { es: "Marcas", en: "Brands" }, detalle: { es: "Tarjetas con foto y modelos de cada marca", en: "Cards with a photo and the models of each brand" } },
        ],
      },
      {
        capa: { es: "Interacción · JavaScript", en: "Interaction · JavaScript" },
        nodos: [
          { titulo: { es: "Filtros y buscador", en: "Filters & search" }, detalle: { es: "Por categoría y marca; búsqueda sin importar tildes", en: "By category and brand; accent-insensitive search" } },
          { titulo: { es: "Carrito", en: "Cart" }, detalle: { es: "Cantidades, descuento de combo y total", en: "Quantities, bundle discount and total" } },
          { titulo: "WhatsApp", detalle: { es: "Arma el pedido y lo abre en un enlace wa.me", en: "Composes the order and opens it in a wa.me link" } },
        ],
      },
      {
        capa: { es: "Publicación", en: "Hosting" },
        nodos: [
          { titulo: "GitHub", detalle: { es: "Código y control de versiones", en: "Source code and version control" } },
          { titulo: "Vercel", detalle: { es: "Despliegue automático en cada cambio", en: "Automatic deployment on every change" } },
        ],
      },
    ],
    imagen: "/img/moton-repuestos/portada.jpg",
    demo: "https://moton-repuestos.vercel.app",
    codigo: "https://github.com/HANDREYMARTINEZ/moton-repuestos",
    contenido: {
      es: `<p>Propuesta de sitio web para Moton, un local que vende repuestos y accesorios para motos de alto cilindraje y deportivas, sobre todo Bajaj Pulsar NS y Dominar, KTM Duke y otras marcas. Se preparó como demostración para ofrecer el servicio de diseño web al cliente. La desarrollé con apoyo de inteligencia artificial (Claude Code).</p>
      <p>Es una demostración: los precios, el número de WhatsApp, la dirección y las cifras de la portada son de ejemplo. Las fotografías provienen de Wikimedia Commons bajo licencias libres, con la autoría de cada una en la página de créditos del sitio; en la versión final se reemplazan por fotos propias del local.</p>

      <h2>El problema</h2>
      <p>Un local de repuestos atiende a diario la misma pregunta: «¿tiene esta pieza para mi moto?». Sin un catálogo en línea, cada consulta se resuelve por teléfono o en el mostrador, y el cliente no puede ver qué hay disponible ni cuánto cuesta antes de escribir. El objetivo era una página que mostrara el inventario organizado por marca y tipo de pieza, y convirtiera esa búsqueda en un pedido concreto por WhatsApp.</p>

      <h2>Qué hace</h2>
      <ul>
        <li><strong>Buscador por moto:</strong> desde la portada, el visitante elige la marca y la categoría y llega directamente a las piezas compatibles.</li>
        <li><strong>Dos líneas de producto:</strong> repuestos (discos de freno, mordazas, pastillas, discos de clutch, kit de arrastre, barras de tren delantero, amortiguadores) y accesorios (cúpulas, manilletas, exploradoras, bombillos LED, farolas, espejos, tapas y defensas).</li>
        <li><strong>Compra por marca:</strong> KTM, Pulsar NS, Dominar, Ducati, Yamaha, Honda, Suzuki y Kawasaki, cada una con foto, modelos y número de piezas; al tocarla, el catálogo se filtra.</li>
        <li><strong>Catálogo:</strong> filtros por categoría y marca, buscador que no distingue tildes, compatibilidad por modelo y precios en dólares.</li>
        <li><strong>Carrito y pedido por WhatsApp:</strong> cantidades, descuento automático del combo disco + pastillas y un botón que abre WhatsApp con la lista, el total y un espacio para indicar la moto.</li>
        <li><strong>Contacto:</strong> horario, ubicación y un campo para preguntar por una pieza que no esté en el catálogo.</li>
      </ul>

      <h2>Cómo está hecha</h2>
      <div data-arquitectura></div>
      <ul>
        <li><strong>HTML, CSS y JavaScript</strong> sin frameworks ni dependencias: el catálogo vive en una lista de datos que el dueño puede ampliar sin tocar el diseño.</li>
        <li>Diseño oscuro con acento naranja, tipografías Barlow Condensed e Inter, y variables de color; adaptable a celular, tableta y escritorio.</li>
        <li>El carrito se conserva en el navegador del visitante y el pedido se envía con un enlace <code>wa.me</code>, sin servidor ni base de datos.</li>
        <li>Respeta la preferencia de reducir el movimiento y funciona con teclado.</li>
        <li>Publicada en <strong>Vercel</strong> con despliegue automático desde <strong>GitHub</strong>.</li>
      </ul>

      <h2>Resultado</h2>
      <ul>
        <li>Demostración publicada y funcionando en el celular y en el computador, lista para presentar al cliente.</li>
        <li>Cada cambio que se sube a GitHub se publica automáticamente.</li>
      </ul>

      <h2>Capturas</h2>
      <div class="galeria">
        <figure><a href="/img/moton-repuestos/01-inicio.jpg" target="_blank" rel="noopener"><img src="/img/moton-repuestos/01-inicio.jpg" alt="Portada con el buscador por moto" loading="lazy" /></a><figcaption>Portada con el buscador por moto</figcaption></figure>
        <figure><a href="/img/moton-repuestos/02-lineas.jpg" target="_blank" rel="noopener"><img src="/img/moton-repuestos/02-lineas.jpg" alt="Repuestos y accesorios" loading="lazy" /></a><figcaption>Repuestos y accesorios</figcaption></figure>
        <figure><a href="/img/moton-repuestos/03-marcas.jpg" target="_blank" rel="noopener"><img src="/img/moton-repuestos/03-marcas.jpg" alt="Compra por marca" loading="lazy" /></a><figcaption>Compra por marca</figcaption></figure>
        <figure><a href="/img/moton-repuestos/04-catalogo.jpg" target="_blank" rel="noopener"><img src="/img/moton-repuestos/04-catalogo.jpg" alt="Catálogo con filtros" loading="lazy" /></a><figcaption>Catálogo con filtros</figcaption></figure>
        <figure><a href="/img/moton-repuestos/05-filtro.jpg" target="_blank" rel="noopener"><img src="/img/moton-repuestos/05-filtro.jpg" alt="Repuestos filtrados por marca" loading="lazy" /></a><figcaption>Repuestos filtrados por marca</figcaption></figure>
        <figure><a href="/img/moton-repuestos/06-carrito.jpg" target="_blank" rel="noopener"><img src="/img/moton-repuestos/06-carrito.jpg" alt="Carrito con descuento de combo" loading="lazy" /></a><figcaption>Carrito con descuento de combo</figcaption></figure>
        <figure><a href="/img/moton-repuestos/07-combo.jpg" target="_blank" rel="noopener"><img src="/img/moton-repuestos/07-combo.jpg" alt="Combo del mes y ventajas" loading="lazy" /></a><figcaption>Combo del mes y ventajas</figcaption></figure>
        <figure><a href="/img/moton-repuestos/08-contacto.jpg" target="_blank" rel="noopener"><img src="/img/moton-repuestos/08-contacto.jpg" alt="Contacto y pie de página" loading="lazy" /></a><figcaption>Contacto y pie de página</figcaption></figure>
      </div>
      <h3>En el celular</h3>
      <div class="galeria movil">
        <figure><a href="/img/moton-repuestos/20-movil-inicio.jpg" target="_blank" rel="noopener"><img src="/img/moton-repuestos/20-movil-inicio.jpg" alt="Portada" loading="lazy" /></a><figcaption>Portada</figcaption></figure>
        <figure><a href="/img/moton-repuestos/21-movil-marcas.jpg" target="_blank" rel="noopener"><img src="/img/moton-repuestos/21-movil-marcas.jpg" alt="Marcas" loading="lazy" /></a><figcaption>Marcas</figcaption></figure>
        <figure><a href="/img/moton-repuestos/22-movil-catalogo.jpg" target="_blank" rel="noopener"><img src="/img/moton-repuestos/22-movil-catalogo.jpg" alt="Catálogo" loading="lazy" /></a><figcaption>Catálogo</figcaption></figure>
        <figure><a href="/img/moton-repuestos/23-movil-carrito.jpg" target="_blank" rel="noopener"><img src="/img/moton-repuestos/23-movil-carrito.jpg" alt="Carrito" loading="lazy" /></a><figcaption>Carrito</figcaption></figure>
      </div>`,
      en: `<p>Website proposal for Moton, a shop that sells parts and accessories for sport and mid-to-high displacement motorcycles, mainly Bajaj Pulsar NS and Dominar, KTM Duke and other brands. It was prepared as a demo to offer web design services to the client. I built it with the help of artificial intelligence (Claude Code).</p>
      <p>This is a demo: prices, the WhatsApp number, the address and the figures on the home page are placeholders. The photos come from Wikimedia Commons under free licenses, with each author credited on the site's credits page; the final version would use the shop's own photos.</p>

      <h2>The problem</h2>
      <p>A parts shop answers the same question every day: "do you have this part for my bike?". Without an online catalog, every inquiry goes through the phone or the counter, and customers cannot see what is available or what it costs before reaching out. The goal was a page that shows the inventory organized by brand and part type, and turns that search into a concrete order over WhatsApp.</p>

      <h2>What it does</h2>
      <ul>
        <li><strong>Find by bike:</strong> from the home page, visitors choose a brand and a category and go straight to the compatible parts.</li>
        <li><strong>Two product lines:</strong> parts (brake discs, calipers, pads, clutch plates, chain and sprocket kits, fork tubes, shock absorbers) and accessories (windscreens, levers, auxiliary lights, LED bulbs, headlights, mirrors, caps and crash bars).</li>
        <li><strong>Shop by brand:</strong> KTM, Pulsar NS, Dominar, Ducati, Yamaha, Honda, Suzuki and Kawasaki, each with a photo, models and part count; tapping one filters the catalog.</li>
        <li><strong>Catalog:</strong> category and brand filters, accent-insensitive search, fitment by model and prices in US dollars.</li>
        <li><strong>Cart and WhatsApp ordering:</strong> quantities, an automatic discount for the disc + pads bundle and a button that opens WhatsApp with the list, the total and a line to state the bike.</li>
        <li><strong>Contact:</strong> opening hours, location and a field to ask about a part that is not in the catalog.</li>
      </ul>

      <h2>How it's built</h2>
      <div data-arquitectura></div>
      <ul>
        <li><strong>HTML, CSS and JavaScript</strong> with no frameworks or dependencies: the catalog lives in a data list the owner can extend without touching the design.</li>
        <li>Dark design with an orange accent, Barlow Condensed and Inter typefaces, and color tokens; responsive across phone, tablet and desktop.</li>
        <li>The cart is kept in the visitor's browser and the order is sent through a <code>wa.me</code> link, with no server or database.</li>
        <li>Supports the reduced-motion preference and works with the keyboard.</li>
        <li>Hosted on <strong>Vercel</strong> with automatic deployment from <strong>GitHub</strong>.</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li>The demo is live and working on phones and desktops, ready to present to the client.</li>
        <li>Every change pushed to GitHub is published automatically.</li>
      </ul>

      <h2>Screenshots</h2>
      <p>The site is in Spanish.</p>
      <div class="galeria">
        <figure><a href="/img/moton-repuestos/01-inicio.jpg" target="_blank" rel="noopener"><img src="/img/moton-repuestos/01-inicio.jpg" alt="Home page with the find-by-bike search" loading="lazy" /></a><figcaption>Home page with the find-by-bike search</figcaption></figure>
        <figure><a href="/img/moton-repuestos/02-lineas.jpg" target="_blank" rel="noopener"><img src="/img/moton-repuestos/02-lineas.jpg" alt="Parts and accessories" loading="lazy" /></a><figcaption>Parts and accessories</figcaption></figure>
        <figure><a href="/img/moton-repuestos/03-marcas.jpg" target="_blank" rel="noopener"><img src="/img/moton-repuestos/03-marcas.jpg" alt="Shop by brand" loading="lazy" /></a><figcaption>Shop by brand</figcaption></figure>
        <figure><a href="/img/moton-repuestos/04-catalogo.jpg" target="_blank" rel="noopener"><img src="/img/moton-repuestos/04-catalogo.jpg" alt="Catalog with filters" loading="lazy" /></a><figcaption>Catalog with filters</figcaption></figure>
        <figure><a href="/img/moton-repuestos/05-filtro.jpg" target="_blank" rel="noopener"><img src="/img/moton-repuestos/05-filtro.jpg" alt="Parts filtered by brand" loading="lazy" /></a><figcaption>Parts filtered by brand</figcaption></figure>
        <figure><a href="/img/moton-repuestos/06-carrito.jpg" target="_blank" rel="noopener"><img src="/img/moton-repuestos/06-carrito.jpg" alt="Cart with bundle discount" loading="lazy" /></a><figcaption>Cart with bundle discount</figcaption></figure>
        <figure><a href="/img/moton-repuestos/07-combo.jpg" target="_blank" rel="noopener"><img src="/img/moton-repuestos/07-combo.jpg" alt="Deal of the month and benefits" loading="lazy" /></a><figcaption>Deal of the month and benefits</figcaption></figure>
        <figure><a href="/img/moton-repuestos/08-contacto.jpg" target="_blank" rel="noopener"><img src="/img/moton-repuestos/08-contacto.jpg" alt="Contact and footer" loading="lazy" /></a><figcaption>Contact and footer</figcaption></figure>
      </div>
      <h3>On mobile</h3>
      <div class="galeria movil">
        <figure><a href="/img/moton-repuestos/20-movil-inicio.jpg" target="_blank" rel="noopener"><img src="/img/moton-repuestos/20-movil-inicio.jpg" alt="Home page" loading="lazy" /></a><figcaption>Home page</figcaption></figure>
        <figure><a href="/img/moton-repuestos/21-movil-marcas.jpg" target="_blank" rel="noopener"><img src="/img/moton-repuestos/21-movil-marcas.jpg" alt="Brands" loading="lazy" /></a><figcaption>Brands</figcaption></figure>
        <figure><a href="/img/moton-repuestos/22-movil-catalogo.jpg" target="_blank" rel="noopener"><img src="/img/moton-repuestos/22-movil-catalogo.jpg" alt="Catalog" loading="lazy" /></a><figcaption>Catalog</figcaption></figure>
        <figure><a href="/img/moton-repuestos/23-movil-carrito.jpg" target="_blank" rel="noopener"><img src="/img/moton-repuestos/23-movil-carrito.jpg" alt="Cart" loading="lazy" /></a><figcaption>Cart</figcaption></figure>
      </div>`,
    },
  },
  {
    slug: "hotel-suite-royal",
    titulo: { es: "Hotel Suite Royal — Landing page bilingüe", en: "Hotel Suite Royal — Bilingual landing page" },
    resumen: {
      es: "Sitio web para un hotel 4 estrellas en Melgar (Tolima), en español e inglés, con galería filtrable, opiniones de huéspedes y reserva directa por WhatsApp con las fechas ya escritas en el mensaje.",
      en: "Website for a 4-star hotel in Melgar (Tolima, Colombia), in Spanish and English, with a filterable gallery, guest reviews and direct booking over WhatsApp with the dates already filled into the message.",
    },
    fecha: "2026-10-03",
    tipo: "web",
    conIA: "Claude Code",
    estado: { es: "Terminado", en: "Completed" },
    etiquetas: ["HTML", "CSS", "JavaScript", "Vercel"],
    resultado: { es: "Publicada en Vercel en español e inglés, con despliegue automático desde GitHub.", en: "Live on Vercel in Spanish and English, with automatic deployment from GitHub." },
    cifras: [
      { valor: "2", etiqueta: { es: "idiomas: español e inglés", en: "languages: Spanish and English" } },
      { valor: "39", etiqueta: { es: "fotos en la galería, con filtros y visor", en: "photos in the gallery, with filters and a viewer" } },
      { valor: "0", etiqueta: { es: "dependencias: HTML, CSS y JavaScript puros", en: "dependencies: plain HTML, CSS and JavaScript" } },
    ],
    arquitectura: [
      {
        capa: { es: "Páginas", en: "Pages" },
        nodos: [
          { titulo: { es: "Español", en: "Spanish" }, detalle: { es: "Página principal del sitio", en: "Main page of the site" } },
          { titulo: { es: "Inglés · /en", en: "English · /en" }, detalle: { es: "Enlazadas con hreflang y selector ES | EN", en: "Linked with hreflang and an ES | EN switch" } },
        ],
      },
      {
        capa: { es: "Interacción · JavaScript", en: "Interaction · JavaScript" },
        nodos: [
          { titulo: { es: "Reserva", en: "Booking" }, detalle: { es: "Valida las fechas y arma el mensaje de WhatsApp", en: "Validates dates and composes the WhatsApp message" } },
          { titulo: { es: "Galería y visor", en: "Gallery & viewer" }, detalle: { es: "Filtros, teclado y deslizamiento en el celular", en: "Filters, keyboard and swipe on mobile" } },
          { titulo: { es: "Textos por idioma", en: "Per-language text" }, detalle: { es: "Un solo script que lee el idioma de la página", en: "A single script that reads the page language" } },
        ],
      },
      {
        capa: { es: "Publicación", en: "Hosting" },
        nodos: [
          { titulo: "GitHub", detalle: { es: "Código y control de versiones", en: "Source code and version control" } },
          { titulo: "Vercel", detalle: { es: "Despliegue automático, URLs limpias y caché de imágenes", en: "Automatic deploys, clean URLs and image caching" } },
        ],
      },
    ],
    imagen: "/img/hotel-suite-royal/portada.jpg",
    demo: "https://hotel-suite-royal.vercel.app",
    codigo: "https://github.com/HANDREYMARTINEZ/hotel-suite-royal",
    contenido: {
      es: `<p>Landing page para el Hotel Suite Royal, un hotel 4 estrellas en Melgar (Tolima), destino de descanso de clima cálido cercano a Bogotá. Se diseñó con un estilo editorial inspirado en cadenas hoteleras de lujo y se publicó en español e inglés. La desarrollé con apoyo de inteligencia artificial (Claude Code).</p>
      <p>Las fotos, la calificación (8,3 sobre 10) y el número de opiniones (688) provienen de la ficha pública del hotel en Booking.com.</p>

      <h2>El problema</h2>
      <p>Un hotel que vende principalmente a través de plataformas de reservas paga una comisión por cada huésped y tiene poco control sobre cómo se presenta. El objetivo era un canal propio: una página que transmitiera la calidad del hotel, mostrara con claridad habitaciones y servicios, y llevara al visitante a reservar directamente con el hotel.</p>

      <h2>Qué hace</h2>
      <ul>
        <li><strong>Portada a pantalla completa:</strong> carrusel de fotos con la piscina en la azotea, calificación de los huéspedes y llamado a reservar.</li>
        <li><strong>Reserva directa por WhatsApp:</strong> el visitante elige fechas, número de adultos y tipo de habitación; la página valida las fechas y abre WhatsApp con el mensaje ya redactado.</li>
        <li><strong>Habitaciones y experiencias:</strong> Doble, Triple y Familiar con medidas y camas, habitaciones con jacuzzi, las dos piscinas y el restaurante.</li>
        <li><strong>Galería:</strong> 39 fotos con filtros (habitaciones, piscinas, espacios, fachada) y un visor que se maneja con el teclado o deslizando el dedo.</li>
        <li><strong>Opiniones y ubicación:</strong> calificación por categoría, mapa, distancias a los principales atractivos y normas del hotel.</li>
        <li><strong>Versión en inglés</strong> con su propia dirección (<code>/en</code>) para huéspedes extranjeros.</li>
      </ul>

      <h2>Cómo está hecha</h2>
      <div data-arquitectura></div>
      <ul>
        <li><strong>HTML, CSS y JavaScript</strong> sin frameworks ni dependencias: carga rápida y nada que compilar.</li>
        <li>Diseño con variables de color y tipografía (Cormorant Garamond y Manrope), adaptable a celular, tableta y escritorio.</li>
        <li>Accesibilidad: navegación con teclado, foco visible, textos alternativos, etiquetas para lectores de pantalla y respeto por la preferencia de reducir el movimiento.</li>
        <li>SEO: descripción y vista previa para compartir en cada idioma, y etiquetas <code>hreflang</code> entre las dos versiones.</li>
        <li>Publicada en <strong>Vercel</strong> con despliegue automático desde <strong>GitHub</strong>.</li>
      </ul>

      <h2>Resultado</h2>
      <ul>
        <li>Sitio publicado y funcionando en dos idiomas, en el celular y en el computador.</li>
        <li>Cada cambio que se sube a GitHub se publica automáticamente.</li>
      </ul>

      <h2>Capturas</h2>
      <div class="galeria">
        <figure><a href="/img/hotel-suite-royal/01-inicio.jpg" target="_blank" rel="noopener"><img src="/img/hotel-suite-royal/01-inicio.jpg" alt="Portada con la piscina en la azotea" loading="lazy" /></a><figcaption>Portada con la piscina en la azotea</figcaption></figure>
        <figure><a href="/img/hotel-suite-royal/02-el-hotel.jpg" target="_blank" rel="noopener"><img src="/img/hotel-suite-royal/02-el-hotel.jpg" alt="Presentación del hotel" loading="lazy" /></a><figcaption>Presentación del hotel</figcaption></figure>
        <figure><a href="/img/hotel-suite-royal/03-habitaciones.jpg" target="_blank" rel="noopener"><img src="/img/hotel-suite-royal/03-habitaciones.jpg" alt="Habitaciones" loading="lazy" /></a><figcaption>Habitaciones</figcaption></figure>
        <figure><a href="/img/hotel-suite-royal/04-jacuzzi.jpg" target="_blank" rel="noopener"><img src="/img/hotel-suite-royal/04-jacuzzi.jpg" alt="Habitaciones con jacuzzi" loading="lazy" /></a><figcaption>Habitaciones con jacuzzi</figcaption></figure>
        <figure><a href="/img/hotel-suite-royal/05-experiencias.jpg" target="_blank" rel="noopener"><img src="/img/hotel-suite-royal/05-experiencias.jpg" alt="Experiencias" loading="lazy" /></a><figcaption>Experiencias</figcaption></figure>
        <figure><a href="/img/hotel-suite-royal/06-servicios.jpg" target="_blank" rel="noopener"><img src="/img/hotel-suite-royal/06-servicios.jpg" alt="Servicios incluidos" loading="lazy" /></a><figcaption>Servicios incluidos</figcaption></figure>
        <figure><a href="/img/hotel-suite-royal/07-galeria.jpg" target="_blank" rel="noopener"><img src="/img/hotel-suite-royal/07-galeria.jpg" alt="Galería con filtros" loading="lazy" /></a><figcaption>Galería con filtros</figcaption></figure>
        <figure><a href="/img/hotel-suite-royal/08-opiniones.jpg" target="_blank" rel="noopener"><img src="/img/hotel-suite-royal/08-opiniones.jpg" alt="Opiniones de los huéspedes" loading="lazy" /></a><figcaption>Opiniones de los huéspedes</figcaption></figure>
        <figure><a href="/img/hotel-suite-royal/09-reserva.jpg" target="_blank" rel="noopener"><img src="/img/hotel-suite-royal/09-reserva.jpg" alt="Llamado a reservar y pie de página" loading="lazy" /></a><figcaption>Llamado a reservar y pie de página</figcaption></figure>
      </div>
      <h3>En el celular</h3>
      <div class="galeria movil">
        <figure><a href="/img/hotel-suite-royal/20-movil-inicio.jpg" target="_blank" rel="noopener"><img src="/img/hotel-suite-royal/20-movil-inicio.jpg" alt="Portada y reserva" loading="lazy" /></a><figcaption>Portada y reserva</figcaption></figure>
        <figure><a href="/img/hotel-suite-royal/21-movil-habitaciones.jpg" target="_blank" rel="noopener"><img src="/img/hotel-suite-royal/21-movil-habitaciones.jpg" alt="Habitaciones" loading="lazy" /></a><figcaption>Habitaciones</figcaption></figure>
        <figure><a href="/img/hotel-suite-royal/22-movil-galeria.jpg" target="_blank" rel="noopener"><img src="/img/hotel-suite-royal/22-movil-galeria.jpg" alt="Galería" loading="lazy" /></a><figcaption>Galería</figcaption></figure>
        <figure><a href="/img/hotel-suite-royal/23-movil-opiniones.jpg" target="_blank" rel="noopener"><img src="/img/hotel-suite-royal/23-movil-opiniones.jpg" alt="Opiniones" loading="lazy" /></a><figcaption>Opiniones</figcaption></figure>
      </div>`,
      en: `<p>Landing page for Hotel Suite Royal, a 4-star hotel in Melgar (Tolima, Colombia), a warm-weather getaway near Bogotá. It was designed in an editorial style inspired by luxury hotel brands and published in Spanish and English. I built it with the help of artificial intelligence (Claude Code).</p>
      <p>The photos, the rating (8.3 out of 10) and the number of reviews (688) come from the hotel's public listing on Booking.com.</p>

      <h2>The problem</h2>
      <p>A hotel that sells mainly through booking platforms pays a commission on every guest and has little control over how it is presented. The goal was a channel of its own: a page that conveys the hotel's quality, clearly shows rooms and amenities, and leads visitors to book directly with the hotel.</p>

      <h2>What it does</h2>
      <ul>
        <li><strong>Full-screen hero:</strong> a photo carousel featuring the rooftop pool, the guest rating and a call to book.</li>
        <li><strong>Direct booking over WhatsApp:</strong> visitors choose dates, number of adults and room type; the page validates the dates and opens WhatsApp with the message already written.</li>
        <li><strong>Rooms and experiences:</strong> Double, Triple and Family rooms with sizes and beds, jacuzzi rooms, both pools and the restaurant.</li>
        <li><strong>Gallery:</strong> 39 photos with filters (rooms, pools, spaces, exterior) and a viewer that works with the keyboard or by swiping.</li>
        <li><strong>Reviews and location:</strong> scores by category, a map, distances to the main attractions and the hotel's policies.</li>
        <li><strong>English version</strong> at its own address (<code>/en</code>) for international guests.</li>
      </ul>

      <h2>How it's built</h2>
      <div data-arquitectura></div>
      <ul>
        <li><strong>HTML, CSS and JavaScript</strong> with no frameworks or dependencies: fast to load and nothing to build.</li>
        <li>Design based on color and type tokens (Cormorant Garamond and Manrope), responsive across phone, tablet and desktop.</li>
        <li>Accessibility: keyboard navigation, visible focus, alt text, screen-reader labels and support for the reduced-motion preference.</li>
        <li>SEO: description and share preview in each language, plus <code>hreflang</code> tags between the two versions.</li>
        <li>Hosted on <strong>Vercel</strong> with automatic deployment from <strong>GitHub</strong>.</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li>The site is live and working in two languages, on phones and desktops.</li>
        <li>Every change pushed to GitHub is published automatically.</li>
      </ul>

      <h2>Screenshots</h2>
      <p>Spanish version shown.</p>
      <div class="galeria">
        <figure><a href="/img/hotel-suite-royal/01-inicio.jpg" target="_blank" rel="noopener"><img src="/img/hotel-suite-royal/01-inicio.jpg" alt="Hero with the rooftop pool" loading="lazy" /></a><figcaption>Hero with the rooftop pool</figcaption></figure>
        <figure><a href="/img/hotel-suite-royal/02-el-hotel.jpg" target="_blank" rel="noopener"><img src="/img/hotel-suite-royal/02-el-hotel.jpg" alt="About the hotel" loading="lazy" /></a><figcaption>About the hotel</figcaption></figure>
        <figure><a href="/img/hotel-suite-royal/03-habitaciones.jpg" target="_blank" rel="noopener"><img src="/img/hotel-suite-royal/03-habitaciones.jpg" alt="Rooms" loading="lazy" /></a><figcaption>Rooms</figcaption></figure>
        <figure><a href="/img/hotel-suite-royal/04-jacuzzi.jpg" target="_blank" rel="noopener"><img src="/img/hotel-suite-royal/04-jacuzzi.jpg" alt="Jacuzzi rooms" loading="lazy" /></a><figcaption>Jacuzzi rooms</figcaption></figure>
        <figure><a href="/img/hotel-suite-royal/05-experiencias.jpg" target="_blank" rel="noopener"><img src="/img/hotel-suite-royal/05-experiencias.jpg" alt="Experiences" loading="lazy" /></a><figcaption>Experiences</figcaption></figure>
        <figure><a href="/img/hotel-suite-royal/06-servicios.jpg" target="_blank" rel="noopener"><img src="/img/hotel-suite-royal/06-servicios.jpg" alt="Included amenities" loading="lazy" /></a><figcaption>Included amenities</figcaption></figure>
        <figure><a href="/img/hotel-suite-royal/07-galeria.jpg" target="_blank" rel="noopener"><img src="/img/hotel-suite-royal/07-galeria.jpg" alt="Gallery with filters" loading="lazy" /></a><figcaption>Gallery with filters</figcaption></figure>
        <figure><a href="/img/hotel-suite-royal/08-opiniones.jpg" target="_blank" rel="noopener"><img src="/img/hotel-suite-royal/08-opiniones.jpg" alt="Guest reviews" loading="lazy" /></a><figcaption>Guest reviews</figcaption></figure>
        <figure><a href="/img/hotel-suite-royal/09-reserva.jpg" target="_blank" rel="noopener"><img src="/img/hotel-suite-royal/09-reserva.jpg" alt="Booking call to action and footer" loading="lazy" /></a><figcaption>Booking call to action and footer</figcaption></figure>
      </div>
      <h3>On mobile</h3>
      <div class="galeria movil">
        <figure><a href="/img/hotel-suite-royal/20-movil-inicio.jpg" target="_blank" rel="noopener"><img src="/img/hotel-suite-royal/20-movil-inicio.jpg" alt="Hero and booking" loading="lazy" /></a><figcaption>Hero and booking</figcaption></figure>
        <figure><a href="/img/hotel-suite-royal/21-movil-habitaciones.jpg" target="_blank" rel="noopener"><img src="/img/hotel-suite-royal/21-movil-habitaciones.jpg" alt="Rooms" loading="lazy" /></a><figcaption>Rooms</figcaption></figure>
        <figure><a href="/img/hotel-suite-royal/22-movil-galeria.jpg" target="_blank" rel="noopener"><img src="/img/hotel-suite-royal/22-movil-galeria.jpg" alt="Gallery" loading="lazy" /></a><figcaption>Gallery</figcaption></figure>
        <figure><a href="/img/hotel-suite-royal/23-movil-opiniones.jpg" target="_blank" rel="noopener"><img src="/img/hotel-suite-royal/23-movil-opiniones.jpg" alt="Reviews" loading="lazy" /></a><figcaption>Reviews</figcaption></figure>
      </div>`,
    },
  },
  {
    slug: "hotel-pms",
    titulo: { es: "Hotel PMS — Administración hotelera", en: "Hotel PMS — Hotel management" },
    resumen: {
      es: "Sistema web de gestión hotelera (PMS) para un hotel pequeño en Colombia: reservas en línea de tiempo, check-in y check-out por pasos, cuenta del huésped, inventario, limpieza desde el celular, postventa y reportes legales TRA y SIRE.",
      en: "Web-based property management system (PMS) for a small hotel in Colombia: timeline bookings, step-by-step check-in and check-out, guest folio, inventory, housekeeping from the phone, post-stay follow-up and TRA/SIRE regulatory reports.",
    },
    fecha: "2026-10-03",
    tipo: "web",
    conIA: "Claude Code",
    estado: { es: "En curso", en: "Ongoing" },
    etiquetas: ["React", "Node.js", "Express", "SQLite", "Vite", "PDFKit", "ExcelJS"],
    resultado: { es: "13 módulos operativos; el siguiente paso es el módulo de reservas en línea.", en: "13 working modules; the next step is the online booking module." },
    cifras: [
      { valor: "13", etiqueta: { es: "módulos, de reservas a reportes legales", en: "modules, from bookings to regulatory reports" } },
      { valor: "3", etiqueta: { es: "roles con permisos: administración, recepción y limpieza", en: "roles with permissions: admin, front desk and housekeeping" } },
      { valor: "5", etiqueta: { es: "pasos de check-in: huésped, acompañantes, vehículo, pago y confirmación", en: "check-in steps: guest, companions, vehicle, payment and confirmation" } },
    ],
    arquitectura: [
      {
        capa: { es: "Interfaz · React + Vite", en: "Interface · React + Vite" },
        nodos: [
          { titulo: { es: "Recepción", en: "Front desk" }, detalle: { es: "Calendario, check-in/out, cuenta y ventas", en: "Calendar, check-in/out, folio and sales" } },
          { titulo: { es: "Vista móvil", en: "Mobile view" }, detalle: { es: "Limpieza y operación desde el celular", en: "Housekeeping and operations from the phone" } },
        ],
      },
      {
        capa: { es: "Servidor · Node + Express", en: "Server · Node + Express" },
        nodos: [
          { titulo: { es: "Motor de reservas", en: "Booking engine" }, detalle: { es: "Disponibilidad y tarifas por temporada, fin de semana y estadía larga", en: "Availability and rates by season, weekend and long stay" } },
          { titulo: { es: "Cuenta y auditoría", en: "Folio & audit" }, detalle: { es: "Cargos, pagos, anulaciones con motivo y registro por usuario", en: "Charges, payments, voids with reason and per-user log" } },
          { titulo: { es: "Reportes", en: "Reports" }, detalle: { es: "PDF, Excel, TRA y archivo plano SIRE", en: "PDF, Excel, TRA and SIRE flat file" } },
        ],
      },
      {
        capa: { es: "Datos e integraciones", en: "Data & integrations" },
        nodos: [
          { titulo: "SQLite", detalle: { es: "Módulo nativo node:sqlite, sin compilación", en: "Native node:sqlite module, no build step" } },
          { titulo: { es: "Facturación electrónica", en: "E-invoicing" }, detalle: { es: "Adaptadores para proveedor tecnológico", en: "Adapters for a certified provider" }, futuro: true },
          { titulo: { es: "Reservas en línea", en: "Online booking" }, detalle: { es: "Mismo motor de disponibilidad", en: "Same availability engine" }, futuro: true },
        ],
      },
    ],
    imagen: "/img/hotel-pms/portada.png",
    demo: "https://hotel-pms-beryl.vercel.app",
    codigo: "https://github.com/HANDREYMARTINEZ/hotel-pms",
    contenido: {
      es: `<p>Proyecto en desarrollo: un panel de administración para un hotel de aproximadamente diez habitaciones en Colombia, pensado para un equipo de una a tres personas que con frecuencia trabaja desde el celular. Lo desarrollo con apoyo de inteligencia artificial (Claude Code), en español y con valores en pesos colombianos.</p>
      <p><strong>Las capturas de esta página usan datos ficticios:</strong> el hotel, los huéspedes y las cifras no son reales. Puede probar la <a href="https://hotel-pms-beryl.vercel.app" target="_blank" rel="noopener">demostración en línea</a>: elija un rol en la pantalla de ingreso; los datos se reinician periódicamente.</p>

      <h2>El problema</h2>
      <p>En un hotel pequeño la operación suele repartirse entre cuadernos, hojas de cálculo y mensajes de WhatsApp: las reservas, los anticipos, el estado de limpieza de cada habitación y los consumos de los huéspedes no quedan en un solo lugar. A esto se suman las obligaciones legales en Colombia, como la Tarjeta de Registro Hotelero (TRA) y el reporte a Migración Colombia (SIRE) de los huéspedes extranjeros, que exigen capturar datos específicos en cada ingreso.</p>

      <h2>Qué hace</h2>
      <ul>
        <li><strong>Inicio del día:</strong> ocupación, llegadas, salidas, habitaciones por limpiar, ingresos por método de pago y alertas (salidas vencidas, posibles no show, stock bajo, reclamos abiertos y movimientos sin reportar a SIRE).</li>
        <li><strong>Reservas:</strong> calendario tipo línea de tiempo (habitaciones por días), creación desde una celda libre, anticipos, origen de la reserva (presencial, teléfono, WhatsApp, agencia o plataforma externa), modificación, cancelación con motivo y no show con penalidad.</li>
        <li><strong>Check-in por pasos:</strong> huésped, acompañantes, vehículo y parqueadero, pago y confirmación; reconoce huéspedes ya registrados por su documento.</li>
        <li><strong>Cuenta del huésped:</strong> las noches se cargan una a una y se reajustan solas si cambian las fechas, la habitación o la hora real de salida; servicios y consumos se cargan a la habitación; recibo en PDF.</li>
        <li><strong>Tarifas:</strong> precio base por tipo, temporadas, recargo de fin de semana y descuento por estadía larga, con un simulador noche por noche.</li>
        <li><strong>Exención de IVA:</strong> para extranjeros no residentes, con los documentos de soporte guardados en la ficha del huésped.</li>
        <li><strong>Inventario y ventas:</strong> punto de venta directo o con cargo a la habitación, entradas, salidas, ajustes por conteo y alerta de stock bajo.</li>
        <li><strong>Limpieza:</strong> vista para el celular con acciones directas (empezar, lista, reportar daño); al hacer check-out la habitación pasa sola a limpieza.</li>
        <li><strong>Postventa:</strong> encuesta de satisfacción enviada por WhatsApp o correo y seguimiento de comentarios y reclamos.</li>
        <li><strong>Reportes y cumplimiento:</strong> ocupación, tarifa promedio (ADR), RevPAR, ingresos, ventas por producto y origen de reservas, exportables a Excel y PDF; datos de la TRA en Excel y archivo plano para el cargue en SIRE.</li>
        <li><strong>Roles y auditoría:</strong> administración, recepción y limpieza; cada cobro, anulación y cancelación queda registrado con el usuario y la hora.</li>
      </ul>

      <h2>Cómo está hecha</h2>
      <div data-arquitectura></div>
      <ul>
        <li><strong>React</strong> con <strong>Vite</strong> en la interfaz, diseñada primero para el celular: barra de navegación inferior en el teléfono y menú lateral en el escritorio.</li>
        <li><strong>Node.js</strong> con <strong>Express</strong> y <strong>SQLite</strong> mediante el módulo nativo <code>node:sqlite</code>, de modo que la instalación no requiere compilar dependencias.</li>
        <li>Un único motor de disponibilidad y tarifas, compartido por recepción y por el futuro módulo de reservas en línea, que ya contempla reservas pendientes con retención temporal del inventario.</li>
        <li>El estado de cada habitación (ocupada o reservada) se calcula a partir de las reservas, para que nunca quede desincronizado.</li>
        <li>Recibos y reportes en PDF con <strong>PDFKit</strong> y exportaciones a Excel con <strong>ExcelJS</strong>.</li>
        <li>Facturación electrónica preparada mediante adaptadores para conectar el proveedor tecnológico que elija el hotel.</li>
      </ul>

      <h2>Estado actual</h2>
      <ul>
        <li>Los trece módulos funcionan de extremo a extremo y el código está publicado en GitHub.</li>
        <li><strong>Próximos pasos:</strong> el módulo de reservas en línea para huéspedes (se activará desde Configuración), la conexión con un proveedor de facturación electrónica y la validación del formato SIRE con la guía vigente de Migración Colombia antes de la puesta en marcha.</li>
      </ul>

      <h2>Capturas</h2>
      <p>Datos ficticios: el hotel, los huéspedes y las cifras no son reales.</p>
      <div class="galeria">
        <figure><a href="/img/hotel-pms/01-inicio.png" target="_blank" rel="noopener"><img src="/img/hotel-pms/01-inicio.png" alt="Inicio del día con ocupación, llegadas y alertas" loading="lazy" /></a><figcaption>Inicio del día: ocupación, llegadas, salidas y alertas</figcaption></figure>
        <figure><a href="/img/hotel-pms/02-reservas-calendario.png" target="_blank" rel="noopener"><img src="/img/hotel-pms/02-reservas-calendario.png" alt="Calendario de reservas por habitación y día" loading="lazy" /></a><figcaption>Calendario de reservas por habitación y día</figcaption></figure>
        <figure><a href="/img/hotel-pms/03-habitaciones.png" target="_blank" rel="noopener"><img src="/img/hotel-pms/03-habitaciones.png" alt="Habitaciones por estado con colores" loading="lazy" /></a><figcaption>Habitaciones por estado</figcaption></figure>
        <figure><a href="/img/hotel-pms/06-nueva-reserva.png" target="_blank" rel="noopener"><img src="/img/hotel-pms/06-nueva-reserva.png" alt="Nueva reserva con disponibilidad y precio" loading="lazy" /></a><figcaption>Nueva reserva con disponibilidad y precio</figcaption></figure>
        <figure><a href="/img/hotel-pms/05-checkin.png" target="_blank" rel="noopener"><img src="/img/hotel-pms/05-checkin.png" alt="Check-in por pasos" loading="lazy" /></a><figcaption>Check-in por pasos</figcaption></figure>
        <figure><a href="/img/hotel-pms/04-cuenta-huesped.png" target="_blank" rel="noopener"><img src="/img/hotel-pms/04-cuenta-huesped.png" alt="Cuenta del huésped con exención de IVA" loading="lazy" /></a><figcaption>Cuenta de un huésped extranjero exento de IVA</figcaption></figure>
        <figure><a href="/img/hotel-pms/07-checkout.png" target="_blank" rel="noopener"><img src="/img/hotel-pms/07-checkout.png" alt="Check-out con salida anticipada" loading="lazy" /></a><figcaption>Check-out con salida anticipada recalculada</figcaption></figure>
        <figure><a href="/img/hotel-pms/08-ventas.png" target="_blank" rel="noopener"><img src="/img/hotel-pms/08-ventas.png" alt="Punto de venta" loading="lazy" /></a><figcaption>Punto de venta: pago directo o cargo a la habitación</figcaption></figure>
        <figure><a href="/img/hotel-pms/09-tarifas.png" target="_blank" rel="noopener"><img src="/img/hotel-pms/09-tarifas.png" alt="Tarifas por temporada, fin de semana y estadía larga" loading="lazy" /></a><figcaption>Tarifas por temporada, fin de semana y estadía larga</figcaption></figure>
        <figure><a href="/img/hotel-pms/10-reportes.png" target="_blank" rel="noopener"><img src="/img/hotel-pms/10-reportes.png" alt="Reportes de ocupación e ingresos" loading="lazy" /></a><figcaption>Reportes exportables a Excel y PDF</figcaption></figure>
        <figure><a href="/img/hotel-pms/11-sire.png" target="_blank" rel="noopener"><img src="/img/hotel-pms/11-sire.png" alt="Movimientos de extranjeros para SIRE" loading="lazy" /></a><figcaption>Movimientos de extranjeros para el reporte SIRE</figcaption></figure>
      </div>
      <div class="galeria movil">
        <figure><a href="/img/hotel-pms/20-movil-inicio.png" target="_blank" rel="noopener"><img src="/img/hotel-pms/20-movil-inicio.png" alt="Inicio en el celular" loading="lazy" /></a><figcaption>Inicio en el celular</figcaption></figure>
        <figure><a href="/img/hotel-pms/21-movil-limpieza.png" target="_blank" rel="noopener"><img src="/img/hotel-pms/21-movil-limpieza.png" alt="Limpieza en el celular" loading="lazy" /></a><figcaption>Limpieza</figcaption></figure>
        <figure><a href="/img/hotel-pms/22-movil-calendario.png" target="_blank" rel="noopener"><img src="/img/hotel-pms/22-movil-calendario.png" alt="Calendario en el celular" loading="lazy" /></a><figcaption>Calendario</figcaption></figure>
      </div>`,
      en: `<p>A project in progress: an admin panel for a hotel of about ten rooms in Colombia, built for a team of one to three people who often work from their phones. I am developing it with the help of artificial intelligence (Claude Code), in Spanish and with amounts in Colombian pesos.</p>
      <p><strong>The screenshots on this page use fictitious data:</strong> the hotel, the guests and the figures are not real. You can try the <a href="https://hotel-pms-beryl.vercel.app" target="_blank" rel="noopener">live demo</a>: pick a role on the sign-in screen; the data resets periodically.</p>

      <h2>The problem</h2>
      <p>In a small hotel, operations are usually spread across notebooks, spreadsheets and WhatsApp messages: bookings, deposits, each room's housekeeping status and guest consumption never end up in one place. On top of that come Colombia's legal requirements, such as the Hotel Registration Card (TRA) and the report to Migración Colombia (SIRE) for foreign guests, which require specific data at every check-in.</p>

      <h2>What it does</h2>
      <ul>
        <li><strong>Daily overview:</strong> occupancy, arrivals, departures, rooms to clean, income by payment method and alerts (overdue departures, likely no-shows, low stock, open complaints and movements not yet reported to SIRE).</li>
        <li><strong>Bookings:</strong> timeline calendar (rooms by day), booking from an empty cell, deposits, booking source (walk-in, phone, WhatsApp, agency or online travel platform), changes, cancellation with a reason and no-show with a penalty.</li>
        <li><strong>Step-by-step check-in:</strong> guest, companions, vehicle and parking, payment and confirmation; returning guests are recognized by their ID document.</li>
        <li><strong>Guest folio:</strong> nights are posted one by one and readjust automatically when dates, room or the actual departure change; services and items are charged to the room; PDF receipt.</li>
        <li><strong>Rates:</strong> base price per room type, seasons, weekend surcharge and long-stay discount, with a night-by-night simulator.</li>
        <li><strong>VAT exemption:</strong> for non-resident foreigners, with the supporting documents stored in the guest's profile.</li>
        <li><strong>Inventory and sales:</strong> point of sale with direct payment or room charge, stock in, stock out, count adjustments and low-stock alerts.</li>
        <li><strong>Housekeeping:</strong> phone-friendly view with direct actions (start, done, report damage); on check-out the room moves to housekeeping automatically.</li>
        <li><strong>Post-stay:</strong> satisfaction survey sent via WhatsApp or email, and follow-up of comments and complaints.</li>
        <li><strong>Reports and compliance:</strong> occupancy, average daily rate (ADR), RevPAR, revenue, sales by product and booking source, exportable to Excel and PDF; TRA data in Excel and a flat file for SIRE upload.</li>
        <li><strong>Roles and audit trail:</strong> admin, front desk and housekeeping; every payment, void and cancellation is logged with the user and time.</li>
      </ul>

      <h2>How it's built</h2>
      <div data-arquitectura></div>
      <ul>
        <li><strong>React</strong> with <strong>Vite</strong> on the front end, designed mobile-first: bottom navigation bar on phones and a sidebar on desktop.</li>
        <li><strong>Node.js</strong> with <strong>Express</strong> and <strong>SQLite</strong> through the native <code>node:sqlite</code> module, so installation needs no native compilation.</li>
        <li>A single availability and rate engine, shared by the front desk and the future online booking module, which already supports pending bookings that hold inventory for a limited time.</li>
        <li>Each room's status (occupied or reserved) is derived from the bookings, so it can never get out of sync.</li>
        <li>PDF receipts and reports with <strong>PDFKit</strong> and Excel exports with <strong>ExcelJS</strong>.</li>
        <li>Electronic invoicing prepared through adapters to connect whichever certified provider the hotel chooses.</li>
      </ul>

      <h2>Current status</h2>
      <ul>
        <li>All thirteen modules work end to end, and the code is published on GitHub.</li>
        <li><strong>Next steps:</strong> the online booking module for guests (to be switched on from Settings), the connection to an electronic invoicing provider, and validating the SIRE format against Migración Colombia's current guide before go-live.</li>
      </ul>

      <h2>Screenshots</h2>
      <p>Fictitious data: the hotel, the guests and the figures are not real.</p>
      <div class="galeria">
        <figure><a href="/img/hotel-pms/01-inicio.png" target="_blank" rel="noopener"><img src="/img/hotel-pms/01-inicio.png" alt="Daily overview with occupancy, arrivals and alerts" loading="lazy" /></a><figcaption>Daily overview: occupancy, arrivals, departures and alerts</figcaption></figure>
        <figure><a href="/img/hotel-pms/02-reservas-calendario.png" target="_blank" rel="noopener"><img src="/img/hotel-pms/02-reservas-calendario.png" alt="Booking calendar by room and day" loading="lazy" /></a><figcaption>Booking calendar by room and day</figcaption></figure>
        <figure><a href="/img/hotel-pms/03-habitaciones.png" target="_blank" rel="noopener"><img src="/img/hotel-pms/03-habitaciones.png" alt="Rooms by status, color-coded" loading="lazy" /></a><figcaption>Rooms by status</figcaption></figure>
        <figure><a href="/img/hotel-pms/06-nueva-reserva.png" target="_blank" rel="noopener"><img src="/img/hotel-pms/06-nueva-reserva.png" alt="New booking with availability and price" loading="lazy" /></a><figcaption>New booking with availability and price</figcaption></figure>
        <figure><a href="/img/hotel-pms/05-checkin.png" target="_blank" rel="noopener"><img src="/img/hotel-pms/05-checkin.png" alt="Step-by-step check-in" loading="lazy" /></a><figcaption>Step-by-step check-in</figcaption></figure>
        <figure><a href="/img/hotel-pms/04-cuenta-huesped.png" target="_blank" rel="noopener"><img src="/img/hotel-pms/04-cuenta-huesped.png" alt="Guest folio with VAT exemption" loading="lazy" /></a><figcaption>Folio of a VAT-exempt foreign guest</figcaption></figure>
        <figure><a href="/img/hotel-pms/07-checkout.png" target="_blank" rel="noopener"><img src="/img/hotel-pms/07-checkout.png" alt="Check-out with early departure" loading="lazy" /></a><figcaption>Check-out with a recalculated early departure</figcaption></figure>
        <figure><a href="/img/hotel-pms/08-ventas.png" target="_blank" rel="noopener"><img src="/img/hotel-pms/08-ventas.png" alt="Point of sale" loading="lazy" /></a><figcaption>Point of sale: direct payment or room charge</figcaption></figure>
        <figure><a href="/img/hotel-pms/09-tarifas.png" target="_blank" rel="noopener"><img src="/img/hotel-pms/09-tarifas.png" alt="Rates by season, weekend and long stay" loading="lazy" /></a><figcaption>Rates by season, weekend and long stay</figcaption></figure>
        <figure><a href="/img/hotel-pms/10-reportes.png" target="_blank" rel="noopener"><img src="/img/hotel-pms/10-reportes.png" alt="Occupancy and revenue reports" loading="lazy" /></a><figcaption>Reports exportable to Excel and PDF</figcaption></figure>
        <figure><a href="/img/hotel-pms/11-sire.png" target="_blank" rel="noopener"><img src="/img/hotel-pms/11-sire.png" alt="Foreign guest movements for SIRE" loading="lazy" /></a><figcaption>Foreign guest movements for the SIRE report</figcaption></figure>
      </div>
      <div class="galeria movil">
        <figure><a href="/img/hotel-pms/20-movil-inicio.png" target="_blank" rel="noopener"><img src="/img/hotel-pms/20-movil-inicio.png" alt="Overview on the phone" loading="lazy" /></a><figcaption>Overview on the phone</figcaption></figure>
        <figure><a href="/img/hotel-pms/21-movil-limpieza.png" target="_blank" rel="noopener"><img src="/img/hotel-pms/21-movil-limpieza.png" alt="Housekeeping on the phone" loading="lazy" /></a><figcaption>Housekeeping</figcaption></figure>
        <figure><a href="/img/hotel-pms/22-movil-calendario.png" target="_blank" rel="noopener"><img src="/img/hotel-pms/22-movil-calendario.png" alt="Calendar on the phone" loading="lazy" /></a><figcaption>Calendar</figcaption></figure>
      </div>`,
    },
  },
  {
    slug: "reportes-con-ia",
    titulo: { es: "Reportes con IA — Informes y dashboards en una instrucción", en: "AI Reports — Reports and dashboards from one instruction" },
    resumen: {
      es: "Agentes de IA que generan, a partir de una única instrucción, informes completos en Power BI, Excel, PowerPoint y Datorama, y reducen el tiempo de elaboración de semanas a uno o dos días.",
      en: "AI agents that produce complete reports in Power BI, Excel, PowerPoint and Datorama from a single instruction, cutting turnaround time from weeks to one or two days.",
    },
    fecha: "2026-03-01",
    tipo: "ia",
    estado: { es: "En curso", en: "Ongoing" },
    etiquetas: ["Claude", "Power BI", "Power Automate", "Datorama", "Excel", "PowerPoint", "Python", "SQL"],
    resultado: { es: "Informes completos en 1–2 días en lugar de 2 o 3 semanas.", en: "Complete reports in 1–2 days instead of 2 or 3 weeks." },
    cifras: [
      { valor: "1–2 días", etiqueta: { es: "para reportes que a mano toman 2 o 3 semanas", en: "for reports that take 2 or 3 weeks by hand" } },
      { valor: "1", etiqueta: { es: "instrucción para generar un informe completo", en: "instruction to produce a full report" } },
      { valor: "4", etiqueta: { es: "formatos: Power BI, Excel, PowerPoint y Datorama", en: "formats: Power BI, Excel, PowerPoint and Datorama" } },
    ],
    arquitectura: [
      {
        capa: { es: "Entrada", en: "Input" },
        nodos: [
          { titulo: { es: "Instrucción", en: "Instruction" }, detalle: { es: "Una sola, en lenguaje natural (one-shot)", en: "A single one, in plain language (one-shot)" } },
          { titulo: { es: "Datos", en: "Data" }, detalle: { es: "Excel, SQL y plataformas de marketing", en: "Excel, SQL and marketing platforms" } },
        ],
      },
      {
        capa: { es: "IA · Agentes", en: "AI · Agents" },
        nodos: [
          { titulo: "Claude", detalle: { es: "API, Claude Code y Cowork: entiende, limpia y calcula", en: "API, Claude Code and Cowork: understands, cleans and computes" } },
          { titulo: { es: "Agentes programados", en: "Scheduled agents" }, detalle: { es: "Repiten el reporte cada semana", en: "Rerun the report every week" } },
          { titulo: "Power Automate", detalle: { es: "Mueve archivos y dispara los flujos", en: "Moves files and triggers flows" } },
        ],
      },
      {
        capa: { es: "Entregables", en: "Deliverables" },
        nodos: [
          { titulo: "Power BI", detalle: { es: "Dashboards y flujos de datos", en: "Dashboards and dataflows" } },
          { titulo: "Excel · PowerPoint", detalle: { es: "Informes y presentaciones listas", en: "Ready-to-send reports and decks" } },
          { titulo: "Datorama", detalle: { es: "Tableros de marketing (JS, HTML, CSS)", en: "Marketing dashboards (JS, HTML, CSS)" } },
        ],
      },
    ],
    imagen: "/img/reportes-ia/01-dashboard.png",
    demo: "",
    codigo: "",
    contenido: {
      es: `<p>Solución desarrollada en mi rol actual como consultor independiente (desde marzo de 2026), para un cliente vinculado a una empresa de Estados Unidos: flujos de análisis de datos en los que la inteligencia artificial asume la construcción de los reportes de principio a fin.</p>
      <p><strong>Por acuerdos de confidencialidad no se muestran datos ni pantallas reales.</strong> Las imágenes de esta página son ilustraciones con datos ficticios que reproducen el funcionamiento del flujo.</p>

      <h2>El problema</h2>
      <p>La elaboración manual de un informe de rendimiento exige consolidar datos de múltiples fuentes, depurarlos, calcular indicadores, construir el dashboard y trasladar los resultados a una presentación ejecutiva. Cada reporte podía requerir dos o tres semanas de trabajo y debía repetirse de forma periódica.</p>

      <h2>Qué hace</h2>
      <ul>
        <li><strong>Informes con una sola instrucción (one-shot):</strong> se le pide a la IA el reporte en lenguaje natural y entrega el resultado completo, sin ir paso a paso.</li>
        <li><strong>Varios formatos:</strong> dashboards y flujos en Power BI, libros de Excel, presentaciones en PowerPoint y tableros en Datorama.</li>
        <li><strong>Agentes semanales:</strong> agentes que generan cada semana reportes y proyectos específicos, sin empezar de cero.</li>
        <li><strong>Hallazgos accionables:</strong> cada reporte incluye un resumen ejecutivo con las variaciones relevantes y las recomendaciones derivadas.</li>
      </ul>

      <h2>Cómo está hecha</h2>
      <div data-arquitectura></div>
      <ul>
        <li><strong>Claude</strong> (API, Claude Code y Cowork) conectado a <strong>Power BI</strong>; también ChatGPT y Copilot según la tarea.</li>
        <li><strong>Power Automate</strong> y <strong>Azure</strong> para mover archivos y disparar los flujos.</li>
        <li><strong>Datorama</strong> con JavaScript, HTML y CSS para los tableros de marketing.</li>
        <li>Instrucciones (prompts) diseñadas para que el resultado salga completo y consistente en un solo intento.</li>
      </ul>

      <h2>Resultado</h2>
      <ul>
        <li>Reportes y dashboards que a mano toman <strong>dos o tres semanas</strong> quedan listos en <strong>uno o dos días</strong>.</li>
        <li>Agentes que entregan cada semana reportes y proyectos específicos.</li>
      </ul>

      <h2>Capturas</h2>
      <p>Ilustraciones con datos ficticios: la empresa y las cifras no son reales.</p>
      <div class="galeria">
        <figure><a href="/img/reportes-ia/02-instruccion.png" target="_blank" rel="noopener"><img src="/img/reportes-ia/02-instruccion.png" alt="La instrucción y los pasos del agente" loading="lazy" /></a><figcaption>La instrucción y los pasos del agente</figcaption></figure>
        <figure><a href="/img/reportes-ia/01-dashboard.png" target="_blank" rel="noopener"><img src="/img/reportes-ia/01-dashboard.png" alt="Dashboard generado en Power BI" loading="lazy" /></a><figcaption>Dashboard generado en Power BI</figcaption></figure>
        <figure><a href="/img/reportes-ia/03-presentacion.png" target="_blank" rel="noopener"><img src="/img/reportes-ia/03-presentacion.png" alt="Presentación con los hallazgos" loading="lazy" /></a><figcaption>Presentación con los hallazgos</figcaption></figure>
      </div>`,
      en: `<p>A solution developed in my current role as an independent consultant (since March 2026), for a client working with a US company: data analysis workflows in which artificial intelligence builds the reports end to end.</p>
      <p><strong>Due to confidentiality agreements, no real data or screens are shown.</strong> The images on this page are illustrations with fictitious data that recreate how the workflow operates.</p>

      <h2>The problem</h2>
      <p>Building a performance report by hand means gathering data from several sources, cleaning it, computing metrics, building the dashboard and then moving everything into a presentation. Each report could take two or three weeks, and it had to be repeated regularly.</p>

      <h2>What it does</h2>
      <ul>
        <li><strong>Reports from a single instruction (one-shot):</strong> you ask the AI for the report in plain language and it delivers the complete result, without going step by step.</li>
        <li><strong>Several formats:</strong> dashboards and dataflows in Power BI, Excel workbooks, PowerPoint decks and Datorama dashboards.</li>
        <li><strong>Weekly agents:</strong> agents that produce specific reports and projects every week, without starting from scratch.</li>
        <li><strong>Actionable findings:</strong> each report includes an executive summary with the relevant changes and the resulting recommendations.</li>
      </ul>

      <h2>How it's built</h2>
      <div data-arquitectura></div>
      <ul>
        <li><strong>Claude</strong> (API, Claude Code and Cowork) connected to <strong>Power BI</strong>; also ChatGPT and Copilot depending on the task.</li>
        <li><strong>Power Automate</strong> and <strong>Azure</strong> to move files and trigger flows.</li>
        <li><strong>Datorama</strong> with JavaScript, HTML and CSS for marketing dashboards.</li>
        <li>Instructions (prompts) designed so the result comes out complete and consistent on the first try.</li>
      </ul>

      <h2>Result</h2>
      <ul>
        <li>Reports and dashboards that take <strong>two or three weeks</strong> by hand are ready in <strong>one or two days</strong>.</li>
        <li>Agents that deliver specific reports and projects every week.</li>
      </ul>

      <h2>Screenshots</h2>
      <p>Illustrations with fictitious data: the company and the figures are not real.</p>
      <div class="galeria">
        <figure><a href="/img/reportes-ia/02-instruccion.png" target="_blank" rel="noopener"><img src="/img/reportes-ia/02-instruccion.png" alt="The instruction and the agent's steps" loading="lazy" /></a><figcaption>The instruction and the agent's steps</figcaption></figure>
        <figure><a href="/img/reportes-ia/01-dashboard.png" target="_blank" rel="noopener"><img src="/img/reportes-ia/01-dashboard.png" alt="Dashboard generated in Power BI" loading="lazy" /></a><figcaption>Dashboard generated in Power BI</figcaption></figure>
        <figure><a href="/img/reportes-ia/03-presentacion.png" target="_blank" rel="noopener"><img src="/img/reportes-ia/03-presentacion.png" alt="Presentation with the findings" loading="lazy" /></a><figcaption>Presentation with the findings</figcaption></figure>
      </div>`,
    },
  },
  {
    slug: "app-gimnasio",
    titulo: { es: "GymApp — Administración de gimnasio", en: "GymApp — Gym management" },
    resumen: {
      es: "Sistema de escritorio en producción para la gestión integral de un gimnasio: membresías, control de acceso biométrico con apertura automática de puerta, punto de venta, inventario y caja.",
      en: "Desktop system in production for end-to-end gym management: memberships, biometric access control with automatic door opening, point of sale, inventory and cash register.",
    },
    fecha: "2026-09-12",
    tipo: "escritorio",
    conIA: "Claude Code",
    estado: { es: "En producción", en: "In production" },
    etiquetas: ["Electron", "React", "SQLite", "Arduino", ".NET"],
    resultado: { es: "En producción, con más de 300 clientes registrados.", en: "In production, with 300+ registered clients." },
    cifras: [
      { valor: "300+", etiqueta: { es: "clientes registrados", en: "registered clients" } },
      { valor: "3", etiqueta: { es: "formas de entrar: huella, carnet o PIN", en: "ways in: fingerprint, card or PIN" } },
      { valor: "31", etiqueta: { es: "suites de pruebas automáticas", en: "automated test suites" } },
    ],
    arquitectura: [
      {
        capa: { es: "Interfaz · React", en: "Interface · React" },
        nodos: [
          { titulo: { es: "Kiosco de entrada", en: "Entry kiosk" }, detalle: { es: "Pantalla completa: huella, carnet o PIN", en: "Full screen: fingerprint, card or PIN" } },
          { titulo: { es: "Mostrador", en: "Front desk" }, detalle: { es: "Clientes, ventas, inventario y caja", en: "Clients, sales, inventory and cash" } },
        ],
      },
      {
        capa: { es: "Núcleo · Electron", en: "Core · Electron" },
        nodos: [
          { titulo: { es: "Reglas del negocio", en: "Business rules" }, detalle: { es: "Acceso, membresías, fiados y caja por turno", en: "Access, memberships, credit and shift cash" } },
          { titulo: { es: "Seguridad", en: "Security" }, detalle: { es: "Datos, fotos y huellas cifrados; Argon2", en: "Encrypted data, photos and fingerprints; Argon2" } },
          { titulo: { es: "Tareas", en: "Jobs" }, detalle: { es: "Recordatorios por correo, respaldos y Excel", en: "Email reminders, backups and Excel" } },
        ],
      },
      {
        capa: { es: "Datos y hardware", en: "Data & hardware" },
        nodos: [
          { titulo: "SQLite", detalle: { es: "better-sqlite3 con migraciones, sin internet", en: "better-sqlite3 with migrations, offline" } },
          { titulo: { es: "Lector de huella", en: "Fingerprint reader" }, detalle: { es: "DigitalPersona a través de un proceso .NET", en: "DigitalPersona through a .NET process" } },
          { titulo: { es: "Puerta", en: "Door" }, detalle: { es: "Arduino Nano + relé por puerto serie, hacia el controlador del electroimán", en: "Arduino Nano + relay over serial port, into the electromagnetic lock controller" } },
        ],
      },
    ],
    imagen: "/img/gymapp/13-dashboards.png",
    demo: "",
    codigo: "https://github.com/HANDREYMARTINEZ/gymapp",
    contenido: {
      es: `<p>Sistema de escritorio para la administración integral de un gimnasio en operación: clientes, membresías, control de acceso, punto de venta, inventario y caja. <strong>En producción desde septiembre de 2026</strong> en el equipo de recepción, con más de 300 clientes registrados.</p>
      <p>Opera sin conexión a internet: la información reside en una base de datos SQLite local y los datos sensibles de los clientes se almacenan cifrados.</p>

      <h2>El problema</h2>
      <p>El gimnasio gestionaba pagos, vencimientos, cuentas por cobrar y ventas en hojas de Excel. No existía control de acceso y el cierre de caja se realizaba manualmente.</p>

      <h2>Qué hace</h2>
      <ul>
        <li><strong>Clientes y membresías:</strong> ficha con foto, planes por días o por tiquetes, renovaciones, pausas y pagos a crédito (fiados).</li>
        <li><strong>Control de acceso:</strong> kiosco a pantalla completa donde el cliente entra con huella, código de barras del carnet o PIN. Cada entrada queda registrada con su motivo.</li>
        <li><strong>Kiosco en la segunda pantalla:</strong> con dos monitores, el kiosco se abre a pantalla completa en el de los clientes (un botón o F2) mientras recepción sigue vendiendo en el otro. Los dos comparten el mismo lector de huella: cada huella cuenta una sola entrada y se muestra en ambos. Con tres o más monitores se elige en cuál sale (con un botón que numera cada pantalla), y si se conecta o desconecta alguno el kiosco se recoloca solo, sin tapar nunca la pantalla de recepción. Mientras está abierto, el teclado numérico es del kiosco: quien no marca con la huella escribe su documento y su PIN sin tocar el mouse, aunque recepción esté trabajando en otra ventana.</li>
        <li><strong>Puerta automática:</strong> cuando el acceso es válido, un Arduino Nano con un relé le da la orden al controlador del electroimán y la puerta se suelta unos segundos. Ya está probada de punta a punta; falta montarla en la entrada.</li>
        <li><strong>Punto de venta, inventario y caja:</strong> productos con código de barras, entradas y salidas de mercancía, apertura y cierre por turno. Cada cobro entra a la caja con su medio (efectivo, QR, Llave, Nequi, tarjeta) y al cerrar se ve cuánto entró por cada uno; el arqueo cuenta solo el efectivo.</li>
        <li><strong>Recordatorios por correo:</strong> aviso automático a quien está por vencer o ya venció, con frenos para no escribirle dos veces a nadie.</li>
        <li><strong>Excel y respaldos:</strong> importación masiva de clientes, exportación del padrón y copias de seguridad con restauración verificada.</li>
      </ul>

      <h2>Cómo está hecha</h2>
      <div data-arquitectura></div>
      <ul>
        <li><strong>Electron + React</strong> para la interfaz y <strong>SQLite</strong> (better-sqlite3) con migraciones.</li>
        <li><strong>Cifrado</strong> de datos sensibles, fotos y huellas; contraseñas con <strong>Argon2</strong>.</li>
        <li>Un proceso aparte en <strong>.NET</strong> habla con el lector de huella DigitalPersona.</li>
        <li><strong>Autodiagnóstico del lector:</strong> si detecta el dedo pero deja de entregar la huella, el kiosco lo avisa y pide entrar con PIN, en vez de fallar en silencio.</li>
        <li><strong>Acceso de mantenimiento con huella:</strong> el panel técnico se abre con la huella del desarrollador, guardada cifrada y aparte de la de los clientes para que nunca abra la puerta; la frase secreta queda como respaldo.</li>
        <li>Firmware propio para <strong>Arduino Nano</strong> por puerto serie.</li>
        <li>31 suites de pruebas automáticas que corren sobre Electron.</li>
      </ul>

      <h2>Resultado</h2>
      <ul>
        <li><strong>En producción desde septiembre de 2026</strong> en el PC del mostrador, con más de 300 clientes registrados.</li>
        <li>Lo que antes estaba repartido en hojas de Excel (pagos, vencimientos, deudas y ventas) quedó en un solo sistema.</li>
        <li>La entrada quedó controlada: cada ingreso queda registrado con su motivo, y la puerta, una vez montada, solo se abrirá con un acceso válido.</li>
        <li>El cierre de caja por turno se arma solo, separado por medio de pago.</li>
      </ul>

      <h2>Capturas</h2>
      <p>Todas con datos de ejemplo, ningún cliente real.</p>
      <div class="galeria">
        <figure><a href="/img/gymapp/02-kiosco.png" target="_blank" rel="noopener"><img src="/img/gymapp/02-kiosco.png" alt="Kiosco de entrada" loading="lazy" /></a><figcaption>Kiosco de entrada</figcaption></figure>
        <figure><a href="/img/gymapp/03-clientes.png" target="_blank" rel="noopener"><img src="/img/gymapp/03-clientes.png" alt="Clientes, estados y quién debe" loading="lazy" /></a><figcaption>Clientes, estados y quién debe</figcaption></figure>
        <figure><a href="/img/gymapp/04-cliente-ficha.png" target="_blank" rel="noopener"><img src="/img/gymapp/04-cliente-ficha.png" alt="Ficha del cliente" loading="lazy" /></a><figcaption>Ficha del cliente</figcaption></figure>
        <figure><a href="/img/gymapp/04e-ficha-fiar.png" target="_blank" rel="noopener"><img src="/img/gymapp/04e-ficha-fiar.png" alt="Fiar una membresía" loading="lazy" /></a><figcaption>Fiar una membresía</figcaption></figure>
        <figure><a href="/img/gymapp/06-vender-carrito.png" target="_blank" rel="noopener"><img src="/img/gymapp/06-vender-carrito.png" alt="Punto de venta" loading="lazy" /></a><figcaption>Punto de venta</figcaption></figure>
        <figure><a href="/img/gymapp/07-caja.png" target="_blank" rel="noopener"><img src="/img/gymapp/07-caja.png" alt="Caja por turno" loading="lazy" /></a><figcaption>Caja por turno</figcaption></figure>
        <figure><a href="/img/gymapp/11-inventario.png" target="_blank" rel="noopener"><img src="/img/gymapp/11-inventario.png" alt="Inventario" loading="lazy" /></a><figcaption>Inventario</figcaption></figure>
        <figure><a href="/img/gymapp/13-dashboards.png" target="_blank" rel="noopener"><img src="/img/gymapp/13-dashboards.png" alt="Resumen del día" loading="lazy" /></a><figcaption>Resumen del día</figcaption></figure>
        <figure><a href="/img/gymapp/16b-configuracion-puerta.png" target="_blank" rel="noopener"><img src="/img/gymapp/16b-configuracion-puerta.png" alt="Puerta con Arduino" loading="lazy" /></a><figcaption>Puerta con Arduino</figcaption></figure>
        <figure><a href="/img/gymapp/16d-configuracion-recordatorios.png" target="_blank" rel="noopener"><img src="/img/gymapp/16d-configuracion-recordatorios.png" alt="Recordatorios por correo" loading="lazy" /></a><figcaption>Recordatorios por correo</figcaption></figure>
        <figure><a href="/img/gymapp/18-desarrollador.png" target="_blank" rel="noopener"><img src="/img/gymapp/18-desarrollador.png" alt="Panel de desarrollador" loading="lazy" /></a><figcaption>Panel de desarrollador</figcaption></figure>
      </div>`,
      en: `<p>Desktop system for end-to-end management of an operating gym: clients, memberships, access control, point of sale, inventory and cash register. <strong>In production since September 2026</strong> on the front-desk computer, with more than 300 registered clients.</p>
      <p>It runs fully offline: data lives in a local SQLite database and sensitive client information is stored encrypted.</p>

      <h2>The problem</h2>
      <p>The gym tracked payments, expirations, receivables and sales in Excel spreadsheets. There was no access control and the cash count was done manually.</p>

      <h2>What it does</h2>
      <ul>
        <li><strong>Clients and memberships:</strong> profile with photo, day-based or ticket-based plans, renewals, pauses and payments on credit.</li>
        <li><strong>Access control:</strong> full-screen kiosk where clients check in with fingerprint, membership-card barcode or PIN. Every entry is logged with its reason.</li>
        <li><strong>Kiosk on a second screen:</strong> with two monitors, the kiosk opens full screen on the one facing clients (a button or F2) while the front desk keeps selling on the other. Both share the same fingerprint reader: each fingerprint counts as one entry and shows on both. With three or more monitors you pick which one it uses (a button numbers each screen), and if a monitor is plugged in or unplugged the kiosk moves on its own, never covering the front-desk screen. While it is open, the numeric keypad belongs to the kiosk: clients who don't use their fingerprint type their ID and PIN without touching the mouse, even while the front desk is working in another window.</li>
        <li><strong>Automatic door:</strong> when access is valid, an Arduino Nano with a relay signals the electromagnetic lock controller and the door releases for a few seconds. Fully tested end to end; mounting it at the entrance is still pending.</li>
        <li><strong>Point of sale, inventory and cash register:</strong> barcode products, stock in and out, shift opening and closing. Every payment enters the register with its method (cash, QR, bank transfer, Nequi, card) and the closing view shows how much came in through each one; the cash count only includes cash.</li>
        <li><strong>Email reminders:</strong> automatic notice to members about to expire or already expired, with safeguards so nobody gets written twice.</li>
        <li><strong>Excel and backups:</strong> bulk client import, roster export and backups with verified restore.</li>
      </ul>

      <h2>How it's built</h2>
      <div data-arquitectura></div>
      <ul>
        <li><strong>Electron + React</strong> for the interface and <strong>SQLite</strong> (better-sqlite3) with migrations.</li>
        <li><strong>Encryption</strong> of sensitive data, photos and fingerprints; passwords with <strong>Argon2</strong>.</li>
        <li>A separate <strong>.NET</strong> process talks to the DigitalPersona fingerprint reader.</li>
        <li><strong>Reader self-check:</strong> if it senses the finger but stops delivering the fingerprint, the kiosk says so and asks for the PIN instead of failing silently.</li>
        <li><strong>Fingerprint maintenance access:</strong> the technical panel opens with the developer's fingerprint, stored encrypted and apart from the clients' so it never opens the door; the secret passphrase remains as a fallback.</li>
        <li>Custom <strong>Arduino Nano</strong> firmware over serial port.</li>
        <li>31 automated test suites running on Electron.</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li><strong>In production since September 2026</strong> on the front-desk PC, with more than 300 registered clients.</li>
        <li>What used to be spread across Excel sheets (payments, expirations, debts and sales) now lives in a single system.</li>
        <li>The entrance is under control: every entry is logged with its reason, and once mounted, the door will only open for valid access.</li>
        <li>The per-shift cash count is built automatically, split by payment method.</li>
      </ul>

      <h2>Screenshots</h2>
      <p>All with sample data, no real clients. The interface is in Spanish.</p>
      <div class="galeria">
        <figure><a href="/img/gymapp/02-kiosco.png" target="_blank" rel="noopener"><img src="/img/gymapp/02-kiosco.png" alt="Entry kiosk" loading="lazy" /></a><figcaption>Entry kiosk</figcaption></figure>
        <figure><a href="/img/gymapp/03-clientes.png" target="_blank" rel="noopener"><img src="/img/gymapp/03-clientes.png" alt="Clients, status and who owes" loading="lazy" /></a><figcaption>Clients, status and who owes</figcaption></figure>
        <figure><a href="/img/gymapp/04-cliente-ficha.png" target="_blank" rel="noopener"><img src="/img/gymapp/04-cliente-ficha.png" alt="Client profile" loading="lazy" /></a><figcaption>Client profile</figcaption></figure>
        <figure><a href="/img/gymapp/04e-ficha-fiar.png" target="_blank" rel="noopener"><img src="/img/gymapp/04e-ficha-fiar.png" alt="Membership on credit" loading="lazy" /></a><figcaption>Membership on credit</figcaption></figure>
        <figure><a href="/img/gymapp/06-vender-carrito.png" target="_blank" rel="noopener"><img src="/img/gymapp/06-vender-carrito.png" alt="Point of sale" loading="lazy" /></a><figcaption>Point of sale</figcaption></figure>
        <figure><a href="/img/gymapp/07-caja.png" target="_blank" rel="noopener"><img src="/img/gymapp/07-caja.png" alt="Cash register per shift" loading="lazy" /></a><figcaption>Cash register per shift</figcaption></figure>
        <figure><a href="/img/gymapp/11-inventario.png" target="_blank" rel="noopener"><img src="/img/gymapp/11-inventario.png" alt="Inventory" loading="lazy" /></a><figcaption>Inventory</figcaption></figure>
        <figure><a href="/img/gymapp/13-dashboards.png" target="_blank" rel="noopener"><img src="/img/gymapp/13-dashboards.png" alt="Daily dashboard" loading="lazy" /></a><figcaption>Daily dashboard</figcaption></figure>
        <figure><a href="/img/gymapp/16b-configuracion-puerta.png" target="_blank" rel="noopener"><img src="/img/gymapp/16b-configuracion-puerta.png" alt="Arduino-controlled door" loading="lazy" /></a><figcaption>Arduino-controlled door</figcaption></figure>
        <figure><a href="/img/gymapp/16d-configuracion-recordatorios.png" target="_blank" rel="noopener"><img src="/img/gymapp/16d-configuracion-recordatorios.png" alt="Email reminders" loading="lazy" /></a><figcaption>Email reminders</figcaption></figure>
        <figure><a href="/img/gymapp/18-desarrollador.png" target="_blank" rel="noopener"><img src="/img/gymapp/18-desarrollador.png" alt="Developer panel" loading="lazy" /></a><figcaption>Developer panel</figcaption></figure>
      </div>`,
    },
  },
  {
    slug: "mis-finanzas",
    titulo: { es: "Mis Finanzas — App de finanzas personales", en: "Mis Finanzas — Personal finance app" },
    resumen: {
      es: "Aplicación Android para la gestión de finanzas personales —ingresos, gastos, tarjetas de crédito, préstamos y metas de ahorro— con almacenamiento exclusivamente local.",
      en: "Android app for personal finance management —income, expenses, credit cards, loans and savings goals— with storage kept entirely on the device.",
    },
    fecha: "2026-08-02",
    tipo: "movil",
    conIA: "Claude Code",
    etiquetas: ["React", "Vite", "Capacitor", "Android", "Recharts"],
    resultado: { es: "Todos los datos se quedan en el teléfono: funciona sin internet.", en: "All data stays on the phone: works fully offline." },
    cifras: [
      { valor: "0", etiqueta: { es: "peticiones de red", en: "network requests" } },
      { valor: "7", etiqueta: { es: "módulos, de movimientos a préstamos", en: "modules, from transactions to loans" } },
      { valor: "100%", etiqueta: { es: "de los datos en el teléfono", en: "of the data stays on the phone" } },
    ],
    arquitectura: [
      {
        capa: { es: "Interfaz · React 19 + Vite", en: "Interface · React 19 + Vite" },
        nodos: [
          { titulo: { es: "Pantallas", en: "Screens" }, detalle: { es: "Inicio, movimientos, cuentas, préstamos y salud del crédito", en: "Home, transactions, accounts, loans and credit health" } },
          { titulo: { es: "Gráficas", en: "Charts" }, detalle: { es: "Recharts: ingresos vs. gastos por periodo", en: "Recharts: income vs. expenses by period" } },
        ],
      },
      {
        capa: { es: "Lógica local", en: "Local logic" },
        nodos: [
          { titulo: { es: "Motor de consejos", en: "Tips engine" }, detalle: { es: "Reglas locales, sin APIs externas", en: "Local rules, no external APIs" } },
          { titulo: { es: "Validaciones", en: "Validation" }, detalle: { es: "Fondos y cupo en pagos divididos y traslados", en: "Funds and credit on split payments and transfers" } },
          { titulo: { es: "Intereses", en: "Interest" }, detalle: { es: "Simple o compuesto, con abonos parciales", en: "Simple or compound, with partial payments" } },
        ],
      },
      {
        capa: { es: "Dispositivo · Capacitor 8", en: "Device · Capacitor 8" },
        nodos: [
          { titulo: "Preferences", detalle: { es: "SharedPreferences nativo de Android", en: "Native Android SharedPreferences" } },
          { titulo: { es: "Archivos y compartir", en: "Files & share" }, detalle: { es: "Respaldo en JSON y exportación a CSV", en: "JSON backup and CSV export" } },
          { titulo: { es: "App Android", en: "Android app" }, detalle: { es: "Sin servidor ni cuentas de usuario", en: "No server, no user accounts" } },
        ],
      },
    ],
    imagen: "/img/mis-finanzas/portada.png",
    demo: "",
    codigo: "https://github.com/HANDREYMARTINEZ/mis-finanzas",
    contenido: {
      es: `<p>Aplicación de finanzas personales diseñada para el contexto colombiano: registra ingresos y gastos, controla tarjetas y cupos, lleva préstamos y deudas, metas de ahorro y presupuestos. Hecha con <strong>React</strong> y empaquetada como app <strong>Android</strong> con Capacitor.</p>
      <p><strong>Todo se guarda en el dispositivo:</strong> no hay servidor, ni cuentas de usuario, ni sincronización en la nube. La app no hace ninguna petición de red.</p>

      <h2>El problema</h2>
      <p>La mayoría de las aplicaciones de finanzas exige vincular cuentas bancarias o almacenar la información en la nube, y pocas contemplan las particularidades del contexto colombiano: billeteras como Nequi y Daviplata, compras a cuotas con tarjeta y préstamos entre particulares. El objetivo fue centralizar esa información en una sola herramienta sin exponer los datos a terceros.</p>

      <h2>Qué hace</h2>
      <ul>
        <li><strong>Inicio:</strong> balance del mes, acciones rápidas (gasto, ingreso, mover), carrusel de cuentas con el patrimonio y gráfica de ingresos vs. gastos por día, semana, quincena, mes, año o rango propio.</li>
        <li><strong>Movimientos:</strong> ingresos y gastos con categoría, método de pago, nota y fecha. Permite <strong>pago dividido</strong> entre varias cuentas, validando fondos y cupo disponible. El historial se agrupa por día, con su total neto y un buscador.</li>
        <li><strong>Mover fondos:</strong> traslados entre cuentas propias (por ejemplo, de Bancolombia a efectivo) que no se registran como ingreso ni gasto y se pueden deshacer.</li>
        <li><strong>Cuentas y tarjetas:</strong> débito, ahorros, efectivo y crédito, con logos de bancos y billeteras colombianas o uno propio.</li>
        <li><strong>Salud del crédito:</strong> porcentaje de uso del cupo, score estimado y compras a cuotas; además, gastos recurrentes mensuales.</li>
        <li><strong>Consejos:</strong> análisis local por reglas que sugiere, por ejemplo, qué tarjeta pagar primero. Sin APIs externas.</li>
        <li><strong>Préstamos y deudas:</strong> lo que presté y lo que me prestaron, con interés simple o compuesto, plazos y abonos parciales.</li>
        <li><strong>Metas, presupuestos y categorías</strong> personalizables, <strong>respaldo completo en JSON</strong> y exportación de movimientos a CSV, compartibles desde Android.</li>
      </ul>

      <h2>Cómo está hecha</h2>
      <div data-arquitectura></div>
      <ul>
        <li><strong>React 19 + Vite</strong> para la interfaz y <strong>Recharts</strong> para las gráficas.</li>
        <li><strong>Capacitor 8</strong> para empaquetarla como app Android nativa.</li>
        <li>Persistencia con <strong>Capacitor Preferences</strong> (SharedPreferences nativo), que sobrevive a la limpieza de caché del WebView; en web usa localStorage.</li>
        <li>Exportación e importación con los plugins de <strong>archivos y compartir</strong> de Capacitor.</li>
      </ul>

      <h2>Resultado</h2>
      <ul>
        <li>Una app Android que reúne en un solo lugar cuentas, tarjetas, préstamos, metas y presupuestos, pensada para cómo se maneja la plata en Colombia.</li>
        <li><strong>Privacidad total:</strong> la app no hace ninguna petición de red, así que los datos financieros nunca salen del teléfono.</li>
        <li>Los datos sobreviven a la limpieza de caché del WebView y se pueden respaldar y restaurar con un archivo JSON.</li>
      </ul>

      <h2>Capturas</h2>
      <p>Todas con datos de demostración.</p>
      <div class="galeria movil">
        <figure><a href="/img/mis-finanzas/01-dashboard.png" target="_blank" rel="noopener"><img src="/img/mis-finanzas/01-dashboard.png" alt="Inicio con acciones rápidas" loading="lazy" /></a><figcaption>Inicio con acciones rápidas</figcaption></figure>
        <figure><a href="/img/mis-finanzas/02-movimientos.png" target="_blank" rel="noopener"><img src="/img/mis-finanzas/02-movimientos.png" alt="Movimientos agrupados por día" loading="lazy" /></a><figcaption>Movimientos agrupados por día</figcaption></figure>
        <figure><a href="/img/mis-finanzas/03-estadisticas.png" target="_blank" rel="noopener"><img src="/img/mis-finanzas/03-estadisticas.png" alt="Estadísticas por categoría" loading="lazy" /></a><figcaption>Estadísticas por categoría</figcaption></figure>
        <figure><a href="/img/mis-finanzas/04-cuentas.png" target="_blank" rel="noopener"><img src="/img/mis-finanzas/04-cuentas.png" alt="Cuentas y tarjetas" loading="lazy" /></a><figcaption>Cuentas y tarjetas</figcaption></figure>
        <figure><a href="/img/mis-finanzas/05-credito.png" target="_blank" rel="noopener"><img src="/img/mis-finanzas/05-credito.png" alt="Salud del crédito" loading="lazy" /></a><figcaption>Salud del crédito</figcaption></figure>
        <figure><a href="/img/mis-finanzas/06-prestamos.png" target="_blank" rel="noopener"><img src="/img/mis-finanzas/06-prestamos.png" alt="Préstamos y deudas" loading="lazy" /></a><figcaption>Préstamos y deudas</figcaption></figure>
        <figure><a href="/img/mis-finanzas/07-agregar.png" target="_blank" rel="noopener"><img src="/img/mis-finanzas/07-agregar.png" alt="Mover fondos entre cuentas" loading="lazy" /></a><figcaption>Mover fondos entre cuentas</figcaption></figure>
      </div>`,
      en: `<p>Personal finance application designed for the Colombian context: it tracks income and expenses, credit cards and limits, loans and debts, savings goals and budgets. Built with <strong>React</strong> and packaged as an <strong>Android</strong> app with Capacitor.</p>
      <p><strong>Everything is stored on the device:</strong> no server, no user accounts, no cloud sync. The app makes no network requests at all.</p>

      <h2>The problem</h2>
      <p>Most finance apps require linking bank accounts or storing data in the cloud, and few account for the specifics of the Colombian context: digital wallets such as Nequi and Daviplata, card purchases in installments and informal loans. The goal was to bring all of that into a single tool without exposing the data to third parties.</p>

      <h2>What it does</h2>
      <ul>
        <li><strong>Home:</strong> monthly balance, quick actions (expense, income, transfer), an account carousel with net worth and an income vs. expenses chart by day, week, fortnight, month, year or custom range.</li>
        <li><strong>Transactions:</strong> income and expenses with category, payment method, note and date. Supports <strong>split payments</strong> across several accounts, checking available funds and credit. History is grouped by day, with a daily net total and search.</li>
        <li><strong>Move funds:</strong> transfers between one's own accounts (for example, from Bancolombia to cash) that are not recorded as income or expense and can be undone.</li>
        <li><strong>Accounts and cards:</strong> debit, savings, cash and credit, with logos of Colombian banks and wallets or a custom one.</li>
        <li><strong>Credit health:</strong> credit utilization, estimated score and installment purchases, plus monthly recurring expenses.</li>
        <li><strong>Tips:</strong> local rule-based analysis that suggests, for example, which card to pay first. No external APIs.</li>
        <li><strong>Loans and debts:</strong> money lent and borrowed, with simple or compound interest, terms and partial payments.</li>
        <li>Customizable <strong>goals, budgets and categories</strong>, plus a <strong>full JSON backup</strong> and CSV export of transactions, shareable from Android.</li>
      </ul>

      <h2>How it's built</h2>
      <div data-arquitectura></div>
      <ul>
        <li><strong>React 19 + Vite</strong> for the interface and <strong>Recharts</strong> for the charts.</li>
        <li><strong>Capacitor 8</strong> to package it as a native Android app.</li>
        <li>Persistence with <strong>Capacitor Preferences</strong> (native SharedPreferences), which survives WebView cache clearing; on the web it uses localStorage.</li>
        <li>Export and import with Capacitor's <strong>filesystem and share</strong> plugins.</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li>An Android app that brings accounts, cards, loans, goals and budgets together in one place, designed around how money works in Colombia.</li>
        <li><strong>Full privacy:</strong> the app makes no network requests, so financial data never leaves the phone.</li>
        <li>Data survives WebView cache clearing and can be backed up and restored with a JSON file.</li>
      </ul>

      <h2>Screenshots</h2>
      <p>All with demo data. The interface is in Spanish.</p>
      <div class="galeria movil">
        <figure><a href="/img/mis-finanzas/01-dashboard.png" target="_blank" rel="noopener"><img src="/img/mis-finanzas/01-dashboard.png" alt="Home with quick actions" loading="lazy" /></a><figcaption>Home with quick actions</figcaption></figure>
        <figure><a href="/img/mis-finanzas/02-movimientos.png" target="_blank" rel="noopener"><img src="/img/mis-finanzas/02-movimientos.png" alt="Transactions grouped by day" loading="lazy" /></a><figcaption>Transactions grouped by day</figcaption></figure>
        <figure><a href="/img/mis-finanzas/03-estadisticas.png" target="_blank" rel="noopener"><img src="/img/mis-finanzas/03-estadisticas.png" alt="Stats by category" loading="lazy" /></a><figcaption>Stats by category</figcaption></figure>
        <figure><a href="/img/mis-finanzas/04-cuentas.png" target="_blank" rel="noopener"><img src="/img/mis-finanzas/04-cuentas.png" alt="Accounts and cards" loading="lazy" /></a><figcaption>Accounts and cards</figcaption></figure>
        <figure><a href="/img/mis-finanzas/05-credito.png" target="_blank" rel="noopener"><img src="/img/mis-finanzas/05-credito.png" alt="Credit health" loading="lazy" /></a><figcaption>Credit health</figcaption></figure>
        <figure><a href="/img/mis-finanzas/06-prestamos.png" target="_blank" rel="noopener"><img src="/img/mis-finanzas/06-prestamos.png" alt="Loans and debts" loading="lazy" /></a><figcaption>Loans and debts</figcaption></figure>
        <figure><a href="/img/mis-finanzas/07-agregar.png" target="_blank" rel="noopener"><img src="/img/mis-finanzas/07-agregar.png" alt="Moving funds between accounts" loading="lazy" /></a><figcaption>Moving funds between accounts</figcaption></figure>
      </div>`,
    },
  },
  {
    slug: "pagina-gimnasio",
    titulo: { es: "Web de gimnasio con entrenamiento personalizado", en: "Gym website with personal training area" },
    resumen: {
      es: "Plataforma web para un gimnasio con sitio comercial y área privada por roles, donde los entrenadores asignan rutinas, videos, mediciones y planes de alimentación a cada cliente.",
      en: "Web platform for a gym with a commercial site and a role-based private area, where trainers assign routines, videos, measurements and meal plans to each client.",
    },
    fecha: "2026-09-17",
    tipo: "web",
    conIA: "Claude Code",
    estado: { es: "Prototipo", en: "Prototype" },
    etiquetas: ["Next.js", "React", "TypeScript", "Tailwind"],
    resultado: { es: "Área privada con 4 roles de equipo y permisos por rol.", en: "Private area with 4 staff roles and role-based permissions." },
    cifras: [
      { valor: "4", etiqueta: { es: "roles de equipo con permisos", en: "staff roles with permissions" } },
      { valor: "1000", etiqueta: { es: "códigos de clase gratis por lote", en: "free-class codes per batch" } },
      { valor: "1", etiqueta: { es: "capa de datos para todo el sitio", en: "data layer for the whole site" } },
    ],
    arquitectura: [
      {
        capa: { es: "Pantallas · Next.js 16", en: "Screens · Next.js 16" },
        nodos: [
          { titulo: { es: "Web pública", en: "Public website" }, detalle: { es: "Planes, horario, rutinas y clase gratis", en: "Plans, hours, routines and free class" } },
          { titulo: { es: "Área privada", en: "Private area" }, detalle: { es: "Administración, recepción, entrenador y cliente", en: "Admin, front desk, trainer and client" } },
        ],
      },
      {
        capa: { es: "Capa de datos · lib/api", en: "Data layer · lib/api" },
        nodos: [
          { titulo: { es: "Única puerta de entrada", en: "Single entry point" }, detalle: { es: "Toda lectura y escritura pasa por aquí", en: "Every read and write goes through here" } },
          { titulo: { es: "Permisos por rol", en: "Role permissions" }, detalle: { es: "Cada rol ve solo lo suyo", en: "Each role only sees its own tools" } },
        ],
      },
      {
        capa: { es: "Almacenamiento", en: "Storage" },
        nodos: [
          { titulo: { es: "Hoy: datos locales", en: "Today: local data" }, detalle: { es: "Versionados con migraciones en el navegador", en: "Versioned with migrations in the browser" } },
          { titulo: { es: "Mañana: base de datos", en: "Next: a real database" }, detalle: { es: "Solo cambia lib/api, no las pantallas", en: "Only lib/api changes, not the screens" }, futuro: true },
        ],
      },
    ],
    imagen: "/img/pagina-gym/portada.png",
    demo: "https://web-handreymartinez.vercel.app",
    codigo: "",
    contenido: {
      es: `<p>Plataforma web para un gimnasio de barrio en Bogotá, desarrollada junto a un cliente real y refinada en ciclos iterativos a partir de su retroalimentación. Tiene dos caras: una <strong>web pública</strong> que vende (planes, servicios, rutinas, clase gratis) y un <strong>área privada</strong> para el equipo y para los clientes con entrenamiento personalizado.</p>
      <p><strong>Es un prototipo en revisión:</strong> el enlace de la demo funciona de punta a punta, pero los datos son de ejemplo y se guardan en el navegador de cada visitante. Nombre, precios y dirección son provisionales.</p>

      <h2>El problema</h2>
      <p>El gimnasio ya tenía su sistema de recepción (<a href="/proyectos/app-gimnasio">GymApp</a>), pero nada hacia afuera: quien preguntaba por precios, horarios o una clase de prueba lo hacía por WhatsApp, y los clientes con entrenador recibían la rutina en papel o en fotos sueltas.</p>

      <h2>Qué hace</h2>
      <ul>
        <li><strong>Web pública:</strong> planes y precios, servicios, horario, bienestar, barra fit, preguntas frecuentes y contacto, con WhatsApp siempre a la mano en el celular.</li>
        <li><strong>Rutinas generales:</strong> el visitante elige para quién es, cuántos días entrena y su objetivo, y ve qué hacer cada día con series y descansos.</li>
        <li><strong>Clase gratis con códigos:</strong> quien la pide recibe un código de un lote de 1000 que vale 3 días; recepción lo marca como usado y el sistema frena a quien intenta repetir.</li>
        <li><strong>Entrenamiento personalizado:</strong> el entrenador arma la ficha de cada cliente, sus medidas, valoraciones, rutina, plan de alimentación y pausas. Cada ejercicio puede llevar un video general o uno grabado solo para esa persona.</li>
        <li><strong>Área del cliente:</strong> entra con su documento y un PIN, y ve su rutina con videos, su alimentación y su progreso.</li>
        <li><strong>Equipo y permisos:</strong> desarrollador, administradores, recepción y entrenadores, cada uno con lo suyo. El acceso de un cliente nuevo se le envía por WhatsApp con un clic.</li>
      </ul>

      <h2>Cómo está hecha</h2>
      <div data-arquitectura></div>
      <ul>
        <li><strong>Next.js 16</strong> (App Router), <strong>React 19</strong>, <strong>TypeScript</strong> y <strong>Tailwind CSS 4</strong>.</li>
        <li>Toda la lectura y escritura de datos pasa por una sola capa (<code>lib/api</code>), así que conectar una base de datos real solo cambia ese archivo, no las pantallas.</li>
        <li>Base local versionada con migraciones, para que un cambio de datos no borre lo que el visitante ya tenía.</li>
        <li>Los mapas musculares de las rutinas son SVG dibujados en código, sin imágenes de terceros.</li>
        <li>Despliegue continuo en <strong>Vercel</strong> desde GitHub y un script propio que genera las capturas con Edge sin ventana.</li>
      </ul>

      <h2>Resultado</h2>
      <ul>
        <li><strong>Prototipo funcionando de punta a punta</strong>, publicado en Vercel y ajustado iteración por iteración con los comentarios del cliente.</li>
        <li>Cubre los dos frentes del gimnasio: la web pública que vende y el área privada donde cada cliente ve su rutina, sus videos y su alimentación.</li>
        <li>Lista para crecer: como todos los datos pasan por <code>lib/api</code>, conectar una base de datos real no toca ninguna pantalla.</li>
      </ul>

      <h2>Capturas</h2>
      <p>Todas con datos de ejemplo, ninguna persona real.</p>
      <div class="galeria">
        <figure><a href="/img/pagina-gym/03-planes.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/03-planes.png" alt="Planes y precios" loading="lazy" /></a><figcaption>Planes y precios</figcaption></figure>
        <figure><a href="/img/pagina-gym/04-horarios.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/04-horarios.png" alt="Horario continuo" loading="lazy" /></a><figcaption>Horario continuo</figcaption></figure>
        <figure><a href="/img/pagina-gym/09-clase-gratis.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/09-clase-gratis.png" alt="Clase gratis con código" loading="lazy" /></a><figcaption>Clase gratis con código</figcaption></figure>
        <figure><a href="/img/pagina-gym/12-login.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/12-login.png" alt="Ingreso de clientes y equipo" loading="lazy" /></a><figcaption>Ingreso de clientes y equipo</figcaption></figure>
        <figure><a href="/img/pagina-gym/20-admin-solicitudes.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/20-admin-solicitudes.png" alt="Bandeja de solicitudes" loading="lazy" /></a><figcaption>Bandeja de solicitudes</figcaption></figure>
        <figure><a href="/img/pagina-gym/21-admin-clases-gratis.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/21-admin-clases-gratis.png" alt="Control de códigos de clase gratis" loading="lazy" /></a><figcaption>Control de códigos de clase gratis</figcaption></figure>
        <figure><a href="/img/pagina-gym/22-admin-equipo.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/22-admin-equipo.png" alt="Equipo y permisos" loading="lazy" /></a><figcaption>Equipo y permisos</figcaption></figure>
        <figure><a href="/img/pagina-gym/31-entrenador-ficha.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/31-entrenador-ficha.png" alt="Ficha del cliente" loading="lazy" /></a><figcaption>Ficha del cliente</figcaption></figure>
        <figure><a href="/img/pagina-gym/32-entrenador-medidas.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/32-entrenador-medidas.png" alt="Medidas y evolución" loading="lazy" /></a><figcaption>Medidas y evolución</figcaption></figure>
        <figure><a href="/img/pagina-gym/33-entrenador-rutina.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/33-entrenador-rutina.png" alt="Rutina asignada" loading="lazy" /></a><figcaption>Rutina asignada</figcaption></figure>
        <figure><a href="/img/pagina-gym/35-entrenador-cargar-video.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/35-entrenador-cargar-video.png" alt="Cargar video de un ejercicio" loading="lazy" /></a><figcaption>Cargar video de un ejercicio</figcaption></figure>
        <figure><a href="/img/pagina-gym/36-entrenador-alimentacion.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/36-entrenador-alimentacion.png" alt="Plan de alimentación" loading="lazy" /></a><figcaption>Plan de alimentación</figcaption></figure>
        <figure><a href="/img/pagina-gym/41b-cliente-rutina-videos.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/41b-cliente-rutina-videos.png" alt="El cliente ve su rutina con videos" loading="lazy" /></a><figcaption>El cliente ve su rutina con videos</figcaption></figure>
        <figure><a href="/img/pagina-gym/43-cliente-progreso.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/43-cliente-progreso.png" alt="Progreso del cliente" loading="lazy" /></a><figcaption>Progreso del cliente</figcaption></figure>
      </div>
      <h3>En el celular</h3>
      <div class="galeria movil">
        <figure><a href="/img/pagina-gym/51-movil-inicio.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/51-movil-inicio.png" alt="Inicio" loading="lazy" /></a><figcaption>Inicio</figcaption></figure>
        <figure><a href="/img/pagina-gym/52-movil-planes.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/52-movil-planes.png" alt="Planes" loading="lazy" /></a><figcaption>Planes</figcaption></figure>
        <figure><a href="/img/pagina-gym/53-movil-horarios.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/53-movil-horarios.png" alt="Horarios" loading="lazy" /></a><figcaption>Horarios</figcaption></figure>
        <figure><a href="/img/pagina-gym/50-movil-cliente-rutina.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/50-movil-cliente-rutina.png" alt="Rutina del cliente" loading="lazy" /></a><figcaption>Rutina del cliente</figcaption></figure>
      </div>`,
      en: `<p>Web platform for a neighborhood gym in Bogotá, developed alongside a real client and refined through iterative cycles based on their feedback. It has two sides: a <strong>public website</strong> that sells (plans, services, routines, free class) and a <strong>private area</strong> for the staff and for clients with personal training.</p>
      <p><strong>It's a prototype under review:</strong> the demo link works end to end, but the data is sample data stored in each visitor's browser. Name, prices and address are placeholders.</p>

      <h2>The problem</h2>
      <p>The gym already had its front-desk system (<a href="/proyectos/app-gimnasio">GymApp</a>), but nothing public-facing: anyone asking about prices, hours or a trial class did it over WhatsApp, and clients with a trainer got their routine on paper or as loose photos.</p>

      <h2>What it does</h2>
      <ul>
        <li><strong>Public website:</strong> plans and prices, services, opening hours, wellness, fit bar, FAQ and contact, with WhatsApp always one tap away on mobile.</li>
        <li><strong>General routines:</strong> visitors choose who it's for, how many days they train and their goal, and see what to do each day with sets and rest times.</li>
        <li><strong>Free class with codes:</strong> each request gets a code from a batch of 1000, valid for 3 days; the front desk marks it as used and the system stops repeat attempts.</li>
        <li><strong>Personal training:</strong> the trainer builds each client's profile, measurements, assessments, routine, meal plan and pauses. Every exercise can carry a general video or one recorded just for that person.</li>
        <li><strong>Client area:</strong> clients sign in with their ID number and a PIN, and see their routine with videos, their meal plan and their progress.</li>
        <li><strong>Team and roles:</strong> developer, admins, front desk and trainers, each with their own tools. A new client's access is sent over WhatsApp in one click.</li>
      </ul>

      <h2>How it's built</h2>
      <div data-arquitectura></div>
      <ul>
        <li><strong>Next.js 16</strong> (App Router), <strong>React 19</strong>, <strong>TypeScript</strong> and <strong>Tailwind CSS 4</strong>.</li>
        <li>All data reads and writes go through a single layer (<code>lib/api</code>), so plugging in a real database only changes that file, not the screens.</li>
        <li>Versioned local data with migrations, so a data change never wipes what a visitor already had.</li>
        <li>The muscle maps in the routines are SVG drawn in code, with no third-party images.</li>
        <li>Continuous deployment to <strong>Vercel</strong> from GitHub, plus a custom script that takes the screenshots with headless Edge.</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li><strong>A prototype that works end to end</strong>, deployed on Vercel and refined iteration by iteration with the client's feedback.</li>
        <li>It covers both sides of the gym: the public website that sells and the private area where each client sees their routine, videos and meal plan.</li>
        <li>Ready to grow: since all data goes through <code>lib/api</code>, plugging in a real database doesn't touch a single screen.</li>
      </ul>

      <h2>Screenshots</h2>
      <p>All with sample data, no real people. The interface is in Spanish.</p>
      <div class="galeria">
        <figure><a href="/img/pagina-gym/03-planes.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/03-planes.png" alt="Plans and prices" loading="lazy" /></a><figcaption>Plans and prices</figcaption></figure>
        <figure><a href="/img/pagina-gym/04-horarios.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/04-horarios.png" alt="Opening hours" loading="lazy" /></a><figcaption>Opening hours</figcaption></figure>
        <figure><a href="/img/pagina-gym/09-clase-gratis.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/09-clase-gratis.png" alt="Free class with a code" loading="lazy" /></a><figcaption>Free class with a code</figcaption></figure>
        <figure><a href="/img/pagina-gym/12-login.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/12-login.png" alt="Sign-in for clients and staff" loading="lazy" /></a><figcaption>Sign-in for clients and staff</figcaption></figure>
        <figure><a href="/img/pagina-gym/20-admin-solicitudes.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/20-admin-solicitudes.png" alt="Request inbox" loading="lazy" /></a><figcaption>Request inbox</figcaption></figure>
        <figure><a href="/img/pagina-gym/21-admin-clases-gratis.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/21-admin-clases-gratis.png" alt="Free-class code tracking" loading="lazy" /></a><figcaption>Free-class code tracking</figcaption></figure>
        <figure><a href="/img/pagina-gym/22-admin-equipo.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/22-admin-equipo.png" alt="Team and roles" loading="lazy" /></a><figcaption>Team and roles</figcaption></figure>
        <figure><a href="/img/pagina-gym/31-entrenador-ficha.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/31-entrenador-ficha.png" alt="Client profile" loading="lazy" /></a><figcaption>Client profile</figcaption></figure>
        <figure><a href="/img/pagina-gym/32-entrenador-medidas.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/32-entrenador-medidas.png" alt="Measurements and progress" loading="lazy" /></a><figcaption>Measurements and progress</figcaption></figure>
        <figure><a href="/img/pagina-gym/33-entrenador-rutina.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/33-entrenador-rutina.png" alt="Assigned routine" loading="lazy" /></a><figcaption>Assigned routine</figcaption></figure>
        <figure><a href="/img/pagina-gym/35-entrenador-cargar-video.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/35-entrenador-cargar-video.png" alt="Adding an exercise video" loading="lazy" /></a><figcaption>Adding an exercise video</figcaption></figure>
        <figure><a href="/img/pagina-gym/36-entrenador-alimentacion.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/36-entrenador-alimentacion.png" alt="Meal plan" loading="lazy" /></a><figcaption>Meal plan</figcaption></figure>
        <figure><a href="/img/pagina-gym/41b-cliente-rutina-videos.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/41b-cliente-rutina-videos.png" alt="Client's routine with videos" loading="lazy" /></a><figcaption>Client's routine with videos</figcaption></figure>
        <figure><a href="/img/pagina-gym/43-cliente-progreso.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/43-cliente-progreso.png" alt="Client progress" loading="lazy" /></a><figcaption>Client progress</figcaption></figure>
      </div>
      <h3>On mobile</h3>
      <div class="galeria movil">
        <figure><a href="/img/pagina-gym/51-movil-inicio.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/51-movil-inicio.png" alt="Home" loading="lazy" /></a><figcaption>Home</figcaption></figure>
        <figure><a href="/img/pagina-gym/52-movil-planes.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/52-movil-planes.png" alt="Plans" loading="lazy" /></a><figcaption>Plans</figcaption></figure>
        <figure><a href="/img/pagina-gym/53-movil-horarios.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/53-movil-horarios.png" alt="Hours" loading="lazy" /></a><figcaption>Hours</figcaption></figure>
        <figure><a href="/img/pagina-gym/50-movil-cliente-rutina.png" target="_blank" rel="noopener"><img src="/img/pagina-gym/50-movil-cliente-rutina.png" alt="Client routine" loading="lazy" /></a><figcaption>Client routine</figcaption></figure>
      </div>`,
    },
  },
];
