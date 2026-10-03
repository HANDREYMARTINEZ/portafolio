// ============================================================
//  AQUÍ AGREGAS TUS PROYECTOS
//  Copia un bloque { ... }, pégalo al inicio de la lista y edítalo.
//  - slug: identificador único, sin espacios ni tildes (va en la URL)
//  - tipo: "ia" | "web" | "escritorio" | "movil" (se usa para los filtros)
//  - conIA: herramienta de IA con la que se desarrolló, ej. "Claude Code" (chip "Hecho con IA")
//  - estado: opcional, ej. { es: "En producción", en: "In production" }
//  - destacado: true para mostrarlo en la portada (solo uno)
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
    destacado: true,
    etiquetas: ["Electron", "React", "SQLite", "Arduino", ".NET"],
    resultado: { es: "En producción, con más de 300 clientes registrados.", en: "In production, with 300+ registered clients." },
    cifras: [
      { valor: "300+", etiqueta: { es: "clientes registrados", en: "registered clients" } },
      { valor: "3", etiqueta: { es: "formas de entrar: huella, carnet o PIN", en: "ways in: fingerprint, card or PIN" } },
      { valor: "27", etiqueta: { es: "suites de pruebas automáticas", en: "automated test suites" } },
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
          { titulo: { es: "Puerta", en: "Door" }, detalle: { es: "Arduino Nano + relé por puerto serie", en: "Arduino Nano + relay over serial port" } },
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
        <li><strong>Puerta automática:</strong> un Arduino Nano con un relé abre el torniquete cuando el acceso es válido.</li>
        <li><strong>Punto de venta, inventario y caja:</strong> productos con código de barras, entradas y salidas de mercancía, apertura y cierre por turno con cada medio de pago.</li>
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
        <li>Firmware propio para <strong>Arduino Nano</strong> por puerto serie.</li>
        <li>27 suites de pruebas automáticas que corren sobre Electron.</li>
      </ul>

      <h2>Resultado</h2>
      <ul>
        <li><strong>En producción desde septiembre de 2026</strong> en el PC del mostrador, con más de 300 clientes registrados.</li>
        <li>Lo que antes estaba repartido en hojas de Excel (pagos, vencimientos, deudas y ventas) quedó en un solo sistema.</li>
        <li>La entrada quedó controlada: la puerta solo se abre con una membresía vigente y cada ingreso queda registrado con su motivo.</li>
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
        <li><strong>Automatic door:</strong> an Arduino Nano with a relay opens the turnstile when access is valid.</li>
        <li><strong>Point of sale, inventory and cash register:</strong> barcode products, stock in and out, shift opening and closing with every payment method.</li>
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
        <li>Custom <strong>Arduino Nano</strong> firmware over serial port.</li>
        <li>27 automated test suites running on Electron.</li>
      </ul>

      <h2>Outcome</h2>
      <ul>
        <li><strong>In production since September 2026</strong> on the front-desk PC, with more than 300 registered clients.</li>
        <li>What used to be spread across Excel sheets (payments, expirations, debts and sales) now lives in a single system.</li>
        <li>The entrance is under control: the door only opens for an active membership, and every entry is logged with its reason.</li>
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
