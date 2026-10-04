// ============================================================
//  Asistente del portafolio: función de Vercel que conversa con el visitante
//  (Google Gemini, plan gratuito) para reunir lo que necesita antes de pasar a WhatsApp.
//
//  Variables de entorno en Vercel (Settings → Environment Variables):
//    GEMINI_API_KEY  clave de Google AI Studio (obligatoria)
//    GEMINI_MODELO   opcional, por defecto "gemini-3.5-flash-lite"
//
//  No guarda nada: el navegador envía la conversación completa en cada mensaje.
//  Si falla, responde con error y el chat sigue con preguntas fijas.
// ============================================================

const MODELO = process.env.GEMINI_MODELO || "gemini-3.5-flash-lite";
const MAX_MENSAJES = 24;   // turnos que se aceptan por conversación
const MAX_LARGO = 600;     // caracteres por mensaje del visitante
const LIMITE_POR_IP = 40;  // mensajes por IP cada hora (por instancia, de mejor esfuerzo)

const CAMPOS = ["nombre", "negocio", "necesidad", "situacionActual", "usuarios", "plataforma", "plazo", "presupuesto", "notas"];

const INSTRUCCIONES = `Usted es el asistente virtual de Andrey Martínez (marca "H.A.M.C Soluciones en IA"), ingeniero colombiano que desarrolla soluciones con inteligencia artificial y software a la medida. Atiende a los visitantes de su portafolio web.

Su único objetivo: entender qué necesita el visitante y reunir la información general del proyecto para que Andrey lo contacte por WhatsApp con contexto. Usted no vende, no cotiza ni cierra acuerdos.

Servicios de Andrey: reportes y dashboards con IA (Excel, PowerPoint, Power BI), agentes de IA y automatización de tareas, sistemas de gestión (ventas, inventario, caja, clientes, control de acceso), plataformas y páginas web (empresas, colegios, comercios), aplicaciones móviles y de escritorio, y proyectos con electrónica (Arduino, ESP32, sensores).

Información que debe reunir, adaptando las preguntas al caso:
- nombre: nombre de la persona (y empresa si la menciona)
- negocio: tipo de negocio o institución
- necesidad: qué quiere (app, web, automatización…) y para qué
- situacionActual: cómo lo maneja hoy (cuaderno, Excel, otro sistema, nada)
- usuarios: cuántas personas lo usarían
- plataforma: celular, computador, web, o no sabe
- plazo: para cuándo lo necesita
- presupuesto: presupuesto aproximado (opcional; si no quiere decirlo, anote "por definir")
- notas: funciones clave o detalles importantes que mencione

Reglas:
- El visitante ya recibió este saludo en el chat: "Hola, es un gusto saludarle. Soy el asistente virtual de Andrey Martínez. ¿En qué le puedo ayudar hoy?". No vuelva a saludar ni a presentarse: responda directo a lo que dijo.
- Trato de "usted", tono profesional, cálido y breve: máximo 2 o 3 frases por mensaje.
- Haga una o dos preguntas por mensaje, nunca un cuestionario largo. Si el visitante ya respondió algo, no lo repita.
- Si la necesidad es vaga, ayude a concretarla con ejemplos según el negocio (p. ej., en una cafetería: inventario de insumos, ventas, alertas de faltantes).
- Nunca dé precios, plazos de entrega ni prometa funciones: diga que Andrey le enviará una propuesta personalizada.
- No pida datos sensibles (documentos, contraseñas, datos bancarios). No pida el número de teléfono: el visitante enviará el resumen desde su propio WhatsApp.
- Si preguntan por Andrey, responda solo con lo dicho aquí y sugiera ver sus proyectos en el portafolio.
- Si el tema no tiene relación con un proyecto o con contactar a Andrey, redirija con amabilidad.
- Marque "listo": true solo cuando ya tenga el nombre, la necesidad y al menos dos datos más (idealmente también plazo y presupuesto). Si falta el nombre, pídalo antes de cerrar. Excepción: si el visitante pide hablar ya con Andrey o no quiere responder más, marque "listo" con lo que tenga. En ese mensaje final agradezca y diga que abajo verá el resumen para enviarlo a Andrey por WhatsApp.
- Escriba en el idioma indicado; en "datos" use ese mismo idioma, frases cortas, y deje vacío lo que no sepa (no invente).`;

// Formato JSON que debe devolver Gemini
const ESQUEMA = {
  type: "OBJECT",
  properties: {
    mensaje: { type: "STRING" },
    datos: {
      type: "OBJECT",
      properties: Object.fromEntries(CAMPOS.map((c) => [c, { type: "STRING" }])),
    },
    listo: { type: "BOOLEAN" },
  },
  required: ["mensaje", "datos", "listo"],
};

const ORIGENES = [/^https:\/\/andreymartinezportafolio\.vercel\.app$/, /^https:\/\/portafolio-[\w-]+-handreymartinez\.vercel\.app$/, /^http:\/\/localhost(:\d+)?$/, /^http:\/\/127\.0\.0\.1(:\d+)?$/];

const conteoIP = new Map();
function superaLimite(ip) {
  const ahora = Date.now();
  const registro = conteoIP.get(ip);
  if (!registro || ahora - registro.desde > 3600_000) {
    conteoIP.set(ip, { desde: ahora, n: 1 });
    return false;
  }
  return ++registro.n > LIMITE_POR_IP;
}

const responder = (res, codigo, cuerpo) => {
  res.statusCode = codigo;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(cuerpo));
};

module.exports = async (req, res) => {
  if (req.method !== "POST") return responder(res, 405, { error: "metodo" });

  const origen = req.headers.origin || "";
  if (!ORIGENES.some((r) => r.test(origen))) return responder(res, 403, { error: "origen" });

  const ip = String(req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "").split(",")[0].trim();
  if (superaLimite(ip)) return responder(res, 429, { error: "limite" });

  if (!process.env.GEMINI_API_KEY) return responder(res, 503, { error: "sin_clave" });

  let cuerpo = req.body;
  if (typeof cuerpo === "string") {
    try { cuerpo = JSON.parse(cuerpo); } catch { cuerpo = null; }
  }
  const idioma = cuerpo?.idioma === "en" ? "en" : "es";
  const mensajes = Array.isArray(cuerpo?.mensajes) ? cuerpo.mensajes : [];
  if (!mensajes.length || mensajes.length > MAX_MENSAJES) return responder(res, 400, { error: "mensajes" });

  // Gemini exige que la conversación empiece con el visitante y alterne los turnos
  const contenidos = [];
  for (const m of mensajes) {
    const rol = m?.rol === "asistente" ? "model" : "user";
    const texto = String(m?.texto || "").slice(0, MAX_LARGO).trim();
    if (!texto) continue;
    const ultimo = contenidos[contenidos.length - 1];
    if (ultimo?.role === rol) ultimo.parts[0].text += "\n" + texto;
    else if (contenidos.length || rol === "user") contenidos.push({ role: rol, parts: [{ text: texto }] });
  }
  if (contenidos[contenidos.length - 1]?.role !== "user") return responder(res, 400, { error: "mensajes" });

  try {
    const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODELO}:generateContent`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": process.env.GEMINI_API_KEY },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: `${INSTRUCCIONES}\n\nIdioma de la conversación: ${idioma === "en" ? "inglés" : "español"}.` }] },
        contents: contenidos,
        generationConfig: {
          maxOutputTokens: 2048, // incluye el razonamiento del modelo
          responseMimeType: "application/json",
          responseSchema: ESQUEMA,
        },
      }),
      signal: AbortSignal.timeout(20_000),
    });
    if (!r.ok) {
      console.error("Gemini", r.status, (await r.text()).slice(0, 300));
      return responder(res, 502, { error: r.status === 429 ? "cuota" : "modelo", estado: r.status });
    }
    const json = await r.json();
    const salida = JSON.parse(json.candidates?.[0]?.content?.parts?.map((p) => p.text || "").join("") || "{}");
    const mensaje = String(salida.mensaje || "").trim();
    if (!mensaje) return responder(res, 502, { error: "vacio" });

    const datos = {};
    for (const c of CAMPOS) {
      const v = String(salida.datos?.[c] || "").trim().slice(0, 300);
      if (v) datos[c] = v;
    }
    return responder(res, 200, { mensaje: mensaje.slice(0, 1200), datos, listo: !!salida.listo });
  } catch (e) {
    console.error("Asistente", e);
    return responder(res, 502, { error: "modelo" });
  }
};
