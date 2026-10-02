// ============================================================
//  PUBLICACIONES DEL BLOG
//  Se abren en /blog/<slug>. Al agregar una nota: sumar su dirección a sitemap.xml
//  y correr scripts/prerender.ps1 (genera blog/<slug>.html).
//  Plantilla: { slug, titulo: { es, en }, resumen: { es, en }, fecha, etiquetas: [], imagen, contenido: { es, en } }
// ============================================================

const PUBLICACIONES = [
  {
    slug: "de-semanas-a-dias-reportes-con-ia",
    titulo: {
      es: "De semanas a días: lo que cambia cuando la IA arma los reportes",
      en: "From weeks to days: what changes when AI builds the reports",
    },
    resumen: {
      es: "Cómo un flujo con IA generativa redujo la elaboración de reportes y dashboards de dos o tres semanas a uno o dos días, y qué hace falta para que funcione.",
      en: "How a generative AI workflow cut the time to build reports and dashboards from two or three weeks to one or two days, and what it takes to make it work.",
    },
    fecha: "2026-10-02",
    etiquetas: ["IA", "Power BI", "Automatización"],
    imagen: "/img/reportes-ia/01-dashboard.png",
    contenido: {
      es: `<p>Durante años, un informe de rendimiento se construyó de la misma forma: consolidar datos de varias fuentes, depurarlos, calcular indicadores, armar el dashboard y, al final, trasladar los resultados a una presentación ejecutiva. Cada reporte podía tomar dos o tres semanas, y había que repetirlo periódicamente.</p>
<p>Desde marzo de 2026 trabajo como consultor independiente en flujos de análisis de datos en los que la inteligencia artificial asume esa construcción de principio a fin. Hoy, un reporte que a mano toma dos o tres semanas queda listo en uno o dos días.</p>
<h2>Una sola instrucción</h2>
<p>El cambio más importante es el enfoque <em>one-shot</em>: en lugar de pedirle a la IA cada paso, se le describe el reporte completo en lenguaje natural y entrega el resultado terminado —en Power BI, Excel, PowerPoint o Datorama—, incluido un resumen ejecutivo con las variaciones relevantes y las recomendaciones derivadas.</p>
<p>Para que eso funcione, la instrucción tiene que estar diseñada con cuidado. Gran parte del trabajo está en escribir prompts que produzcan un resultado completo y consistente en un solo intento, no en corregir después.</p>
<h2>Agentes que trabajan cada semana</h2>
<p>El segundo paso fue dejar de empezar de cero. Hay agentes que elaboran de forma programada los reportes semanales y proyectos específicos, conectados a Power BI con la API de Claude, Claude Code y Cowork, y apoyados en Power Automate y Azure para mover archivos y disparar los flujos.</p>
<h2>Lo que aprendí</h2>
<ul>
<li>La IA no reemplaza el criterio sobre qué medir: el valor está en definir bien la pregunta antes de pedir el reporte.</li>
<li>Cada entrega se revisa antes de enviarla: la IA acelera la construcción, pero la responsabilidad sobre las cifras sigue siendo humana.</li>
<li>El ahorro de tiempo no viene de una herramienta sola, sino de conectar varias: el modelo de lenguaje, la herramienta de BI y la automatización que mueve los datos.</li>
</ul>
<p><em>Por acuerdos de confidencialidad, esta nota no incluye datos, nombres ni pantallas del cliente. La imagen es una ilustración con datos ficticios.</em> Más detalles en el caso de estudio <a href="/proyectos/reportes-con-ia">Reportes con IA</a>.</p>`,
      en: `<p>For years, a performance report was built the same way: gather data from several sources, clean it, compute metrics, build the dashboard and, finally, move the results into an executive presentation. Each report could take two or three weeks, and it had to be repeated regularly.</p>
<p>Since March 2026 I have worked as an independent consultant on data analysis workflows in which artificial intelligence takes over that construction end to end. Today, a report that takes two or three weeks by hand is ready in one or two days.</p>
<h2>A single instruction</h2>
<p>The biggest change is the <em>one-shot</em> approach: instead of asking the AI for each step, you describe the complete report in plain language and it delivers the finished result —in Power BI, Excel, PowerPoint or Datorama—, including an executive summary with the relevant changes and the resulting recommendations.</p>
<p>For that to work, the instruction has to be carefully designed. Much of the work lies in writing prompts that produce a complete, consistent result on the first try, not in fixing it afterwards.</p>
<h2>Agents that work every week</h2>
<p>The second step was to stop starting from scratch. Agents produce the weekly reports and specific projects on a schedule, connected to Power BI through the Claude API, Claude Code and Cowork, and supported by Power Automate and Azure to move files and trigger the flows.</p>
<h2>What I learned</h2>
<ul>
<li>AI does not replace judgment about what to measure: the value lies in framing the question well before asking for the report.</li>
<li>Every deliverable is reviewed before it is sent: AI speeds up the building, but responsibility for the numbers remains human.</li>
<li>The time savings do not come from a single tool but from connecting several: the language model, the BI tool and the automation that moves the data.</li>
</ul>
<p><em>Due to confidentiality agreements, this note includes no client data, names or screens. The image is an illustration with fictitious data.</em> More details in the <a href="/proyectos/reportes-con-ia">AI Reports</a> case study.</p>`,
    },
  },
  {
    slug: "gymapp-de-excel-a-produccion",
    titulo: {
      es: "GymApp: de hojas de Excel a un sistema en producción",
      en: "GymApp: from Excel sheets to a system in production",
    },
    resumen: {
      es: "Las decisiones detrás del sistema que hoy administra un gimnasio con más de 300 clientes: funcionar sin internet, cifrar los datos y no fallar en silencio.",
      en: "The decisions behind the system that now runs a gym with more than 300 clients: working offline, encrypting the data and never failing silently.",
    },
    fecha: "2026-10-02",
    etiquetas: ["Electron", "SQLite", "Arduino"],
    imagen: "/img/gymapp/02-kiosco.png",
    contenido: {
      es: `<p>El gimnasio llevaba pagos, vencimientos, deudas y ventas en hojas de Excel. No había control de acceso y el cierre de caja se hacía a mano. GymApp nació para reunir todo eso en un solo sistema, y desde septiembre de 2026 funciona en el computador del mostrador con más de 300 clientes registrados.</p>
<h2>Decisión 1: funcionar sin internet</h2>
<p>Un gimnasio no puede dejar de recibir clientes porque se cayó la conexión. Por eso GymApp guarda todo en una base de datos SQLite local, y los datos sensibles —fotos, huellas e información de los clientes— se almacenan cifrados. Las contraseñas usan Argon2.</p>
<h2>Decisión 2: la puerta solo abre con membresía vigente</h2>
<p>El cliente entra en un kiosco a pantalla completa con su huella, el código de barras del carnet o un PIN. Si el acceso es válido, un Arduino Nano con un relé abre el torniquete. Cada entrada queda registrada con su motivo.</p>
<h2>Decisión 3: no fallar en silencio</h2>
<p>El lector de huella es el punto más frágil: puede detectar el dedo y aun así dejar de entregar la huella. En lugar de que el cliente se quede esperando frente a una puerta cerrada, el kiosco detecta esa falla, la avisa y le pide entrar con PIN. Un sistema confiable no es el que nunca falla, sino el que avisa cuando algo anda mal.</p>
<h2>Cómo se construyó</h2>
<p>Electron y React para la interfaz, un proceso aparte en .NET para comunicarse con el lector de huella, firmware propio para el Arduino y 27 suites de pruebas automáticas. Lo desarrollé con asistencia de IA (Claude Code) en todo el ciclo: diseño, implementación y pruebas.</p>
<h2>El resultado</h2>
<p>Lo que estaba repartido en hojas de Excel quedó en un solo lugar, la entrada quedó controlada y el cierre de caja por turno se arma solo, separado por medio de pago. Más detalles y capturas en el caso de estudio <a href="/proyectos/app-gimnasio">GymApp</a>.</p>`,
      en: `<p>The gym tracked payments, expirations, debts and sales in Excel sheets. There was no access control and the cash count was done by hand. GymApp was built to bring all of that into a single system, and since September 2026 it has been running on the front-desk computer with more than 300 registered clients.</p>
<h2>Decision 1: work offline</h2>
<p>A gym cannot stop letting clients in because the connection went down. That is why GymApp stores everything in a local SQLite database, and sensitive data —photos, fingerprints and client information— is stored encrypted. Passwords use Argon2.</p>
<h2>Decision 2: the door only opens for an active membership</h2>
<p>Clients check in at a full-screen kiosk with their fingerprint, the barcode on their membership card or a PIN. If access is valid, an Arduino Nano with a relay opens the turnstile. Every entry is logged with its reason.</p>
<h2>Decision 3: never fail silently</h2>
<p>The fingerprint reader is the most fragile part: it can sense the finger and still stop delivering the fingerprint. Instead of leaving the client waiting at a closed door, the kiosk detects that failure, reports it and asks for the PIN. A reliable system is not one that never fails, but one that says so when something goes wrong.</p>
<h2>How it was built</h2>
<p>Electron and React for the interface, a separate .NET process to talk to the fingerprint reader, custom Arduino firmware and 27 automated test suites. I built it with AI assistance (Claude Code) across the full cycle: design, implementation and testing.</p>
<h2>The outcome</h2>
<p>What used to be spread across Excel sheets now lives in one place, the entrance is under control and the per-shift cash count is built automatically, split by payment method. More details and screenshots in the <a href="/proyectos/app-gimnasio">GymApp</a> case study.</p>`,
    },
  },
  {
    slug: "mis-finanzas-sin-internet",
    titulo: {
      es: "Por qué Mis Finanzas no se conecta a internet",
      en: "Why Mis Finanzas never connects to the internet",
    },
    resumen: {
      es: "Una app de finanzas personales que no hace ninguna petición de red: por qué tomé esa decisión y qué implicó en el diseño.",
      en: "A personal finance app that makes no network requests at all: why I made that decision and what it meant for the design.",
    },
    fecha: "2026-10-02",
    etiquetas: ["React", "Android", "Privacidad"],
    imagen: "/img/mis-finanzas/portada.png",
    contenido: {
      es: `<p>La mayoría de las aplicaciones de finanzas pide vincular las cuentas bancarias o guardar la información en la nube. Para muchas personas, esa es justamente la razón para no usarlas. Mis Finanzas parte de la decisión contraria: <strong>la app no hace ninguna petición de red</strong>. No hay servidor, ni cuentas de usuario, ni sincronización. Los datos financieros nunca salen del teléfono.</p>
<h2>Pensada para Colombia</h2>
<p>Además de la privacidad, faltaba algo: pocas apps contemplan cómo se maneja el dinero aquí. Mis Finanzas incluye billeteras como Nequi y Daviplata, compras a cuotas con tarjeta, préstamos entre particulares con interés simple o compuesto, y pagos divididos entre varias cuentas.</p>
<h2>Lo que implicó no tener servidor</h2>
<ul>
<li><strong>Que los datos no se pierdan:</strong> en Android, la información se guarda con Capacitor Preferences, que sobrevive a la limpieza de caché del navegador interno de la app.</li>
<li><strong>Respaldos en manos del usuario:</strong> un archivo JSON con todo, que se puede guardar o compartir y restaurar después, además de la exportación de movimientos a CSV.</li>
<li><strong>Consejos sin enviar datos a nadie:</strong> las recomendaciones —por ejemplo, qué tarjeta pagar primero— salen de un análisis por reglas que corre en el propio teléfono, sin APIs externas.</li>
</ul>
<h2>La lección</h2>
<p>La privacidad no es una función que se agrega al final: es una decisión de arquitectura que se toma al principio y condiciona todo lo demás. Renunciar al servidor obligó a resolver de otra forma el almacenamiento, los respaldos y el análisis, pero el resultado es una app en la que el usuario no tiene que confiar en nadie para usarla.</p>
<p>Hecha con React 19, Vite, Recharts y Capacitor 8, con asistencia de IA (Claude Code). Más detalles y capturas en el caso de estudio <a href="/proyectos/mis-finanzas">Mis Finanzas</a>.</p>`,
      en: `<p>Most finance apps ask you to link your bank accounts or store your information in the cloud. For many people, that is precisely the reason not to use them. Mis Finanzas starts from the opposite decision: <strong>the app makes no network requests at all</strong>. No server, no user accounts, no sync. Financial data never leaves the phone.</p>
<h2>Built for Colombia</h2>
<p>Beyond privacy, something else was missing: few apps account for how money is handled here. Mis Finanzas supports wallets such as Nequi and Daviplata, card purchases in installments, informal loans with simple or compound interest, and payments split across several accounts.</p>
<h2>What going serverless meant</h2>
<ul>
<li><strong>Not losing data:</strong> on Android, information is stored with Capacitor Preferences, which survives clearing the app's internal browser cache.</li>
<li><strong>Backups in the user's hands:</strong> a JSON file with everything, which can be saved or shared and restored later, plus CSV export of transactions.</li>
<li><strong>Advice without sending data anywhere:</strong> recommendations —for example, which card to pay first— come from rule-based analysis that runs on the phone itself, with no external APIs.</li>
</ul>
<h2>The lesson</h2>
<p>Privacy is not a feature you add at the end: it is an architectural decision made at the start that shapes everything else. Giving up the server meant solving storage, backups and analysis differently, but the result is an app in which users do not have to trust anyone to use it.</p>
<p>Built with React 19, Vite, Recharts and Capacitor 8, with AI assistance (Claude Code). More details and screenshots in the <a href="/proyectos/mis-finanzas">Mis Finanzas</a> case study.</p>`,
    },
  },
];
