# Prompt de desarrollo — Sitio web de Eternal Institute

**Para:** Cursor, Claude Code, Lovable o Bolt
**Cliente:** Eternal Institute · Chía y Zipaquirá, Cundinamarca, Colombia
**Preparado por:** PropulsarIA · 22 de octubre de 2026

---

## Cómo usar este prompt

Pegar el documento completo en la herramienta elegida. Está escrito para producir un sitio nuevo desde cero, no una modificación del actual (`eternalinstitute.net`).

**Si algo de este documento choca con un supuesto tuyo, manda este documento.** Los datos de contacto, servicios y estilo están verificados con la dirección del centro.

---

# 1. El cliente

| Dato | Valor |
|:-----|:------|
| **Nombre comercial** | Eternal Institute |
| **Razón social** | Eternal Institute Medicina Estética Responsable |
| **Posicionamiento** | Estética responsable / Medicina estética responsable |
| **Sector** | Centro de estética, medicina estética y bienestar |
| **Tamaño** | Microempresa |
| **Sedes** | Chía y Zipaquirá (Cundinamarca, Colombia) |
| **Directora** | Martha Lucía Aguilera Muñoz |
| **Perfil de la directora** | Enfermera, especialista en sobrepeso y rejuvenecimiento, life coach y esteticista, con casi veinte años de experiencia |
| **Correo de contacto** | contactoeternalinstitute@gmail.com |
| **WhatsApp publicado** | 3114656836 |
| **Instagram** | @eternalinstituteestetica |
| **NIT** | 52216422-2 |

**Descripción para el sitio:**

> Eternal Institute es un centro de estética y medicina estética responsable con sedes en Chía y Zipaquirá. Acompañamos a cada persona con seguimiento personalizado, responsable y detallado, para que su proceso se desarrolle correctamente.

**El diferencial que el centro declara de sí mismo:** el seguimiento personalizado, responsable y detallado. Es lo que sostiene su reputación. El sitio debe comunicarlo, no solo mencionarlo.

---

# 2. Regla sectorial — NO NEGOCIABLE

Este es un centro de **medicina estética**. En Colombia la publicidad de servicios de salud y estética tiene restricciones legales y deontológicas. Aplican sin excepción:

- **No prometer resultados.** Nada de «resultados garantizados», «notables», «sostenibles» ni equivalentes.
- **No afirmar que un tratamiento es apto para una persona concreta.** La indicación depende de una valoración profesional.
- **No usar imágenes de antes y después** sin autorización escrita y vigente de la persona.
- **No comparar ni descalificar** a otros centros.
- **No explotar inseguridades** corporales ni usar presión emocional.
- **No presentar los tratamientos como servicios de salud curativa.**

**Toda la microcopy del sitio —botones, formularios, mensajes de éxito— debe respetar esto.** Un «¡Recupera tu figura ahora!» no es un problema de estilo: es un incumplimiento.

**Regla de redacción:** siempre «orientado a», «dirigido a», «previa valoración profesional». Nunca «elimina», «corrige», «garantiza».

---

# 3. Sistema de diseño

## Paleta — derivada de la identidad actual del centro

Mantener continuidad de marca. Estos son los colores reales del sitio vigente:

```css
--dorado:      #B88508;   /* acento principal */
--dorado-claro:#D4A73A;   /* hover, degradados */
--ciruela:     #67235E;   /* color secundario, titulares */
--magenta:     #CC3366;   /* acento terciario, llamados a la acción */
--tinta:       #333333;   /* texto principal */
--tinta-suave: #494D50;   /* texto secundario */
--niebla:      #CCD6DF;   /* bordes y separadores */
--marfil:      #FAF7F2;   /* fondo de secciones claras */
```

**Uso:** dorado para acentos y detalles finos; ciruela para titulares y bloques oscuros; magenta solo en llamados a la acción. Fondo mayoritariamente claro y aireado.

## Tipografía

- **Titulares:** serif elegante (Playfair Display, Cormorant Garamond o similar) — aporta el registro de cuidado y sofisticación.
- **Cuerpo:** sans-serif limpia (Inter, DM Sans o similar) — legible en móvil.
- Escala generosa, interlineado amplio. El público principal son mujeres adultas leyendo desde el celular.

## Tono visual

Elegante, cálido, sobrio y luminoso. **No es una marca de tecnología.** Evitar estética fría, neón o futurista. Referencias: spas de gama alta, clínicas estéticas europeas.

---

# 4. Logo — crear uno nuevo

**No existe archivo de logo.** El sitio actual solo tiene un favicon de baja resolución. Hay que crear la identidad.

Requisitos:

- **Logotipo principal** en horizontal (para cabecera) y versión cuadrada (para favicon y redes).
- **Símbolo:** abstracción elegante —proponer una marca tipográfica en serif con un detalle geométrico fino— sin recurrir a siluetas de cuerpo, hojas ni símbolos de spa genéricos.
- **Paleta:** dorado sobre ciruela, y versión monocroma en tinta para fondos claros.
- **Entregar en SVG** además de PNG a 2x y 3x.
- Debe leerse bien a 32 px (favicon) y en una sola tinta.

**El nombre «Eternal Institute» debe dominar**; «estética responsable» va como descriptor secundario, más pequeño.

---

# 5. Arquitectura de páginas

```
/                     Inicio
/servicios            Catálogo completo
/servicios/[nombre]   Ficha por servicio (los tres prioritarios)
/nosotras             La directora y el equipo
/sedes                Chía y Zipaquirá
/valoracion           Página de conversión
/preguntas            Preguntas frecuentes
/datos                Política de tratamiento de datos
/contacto             Contacto
```

**Navegación:** el sitio actual no tiene menú. Este debe tenerlo, fijo en móvil, con acceso permanente a WhatsApp y a «Agendar valoración».

---

# 6. Contenido por página

## / — Inicio

1. **Hero:** propuesta de valor del centro, sin promesas de resultados. Botón principal: «Agendar valoración». Botón secundario: «Ver servicios».
2. **Por qué Elegirnos** — cuatro pilares tomados del sitio actual, reescritos sin promesas:
   - *Tratamientos faciales y corporales* — orientados a mejorar la salud, la estética y la autoestima de cada persona.
   - *Infraestructura y equipos* — sedes cómodas con equipos de tecnología adecuada para una atención personalizada.
   - *Amplia experiencia* — equipo liderado por Martha Lucía Aguilera Muñoz, con casi veinte años de experiencia.
   - *Atención integral* — seguimiento personalizado, responsable y detallado durante todo el proceso.
3. **Servicios destacados** — las tres fichas prioritarias con enlace.
4. **Sedes** — las dos, con dirección y horario.
5. **Llamado a la valoración** — explicando qué es y para qué sirve. Sin precio.

## /servicios

Los **quince servicios activos**, cada uno con nombre y descripción corta. **Sin precios.**

1. **Manejo de sobrepeso** — Acompañamiento profesional para el manejo del peso, con seguimiento personalizado durante todo el proceso.
2. **Moldeo corporal** — Tratamientos orientados a mejorar la apariencia y el contorno corporal.
3. **Celulitis** — Tratamientos estéticos dirigidos a la apariencia de la piel con celulitis.
4. **Tonificación** — Procedimientos orientados a mejorar la firmeza y la apariencia de la piel.
5. **Rejuvenecimiento facial** — Tratamientos no invasivos orientados a la apariencia de la piel del rostro.
6. **Armonización facial** — Procedimientos orientados a armonizar las proporciones del rostro, previa valoración profesional.
7. **Depilación láser definitiva** — Reducción del vello mediante tecnología láser, con protocolo personalizado según cada persona.
8. **Maquillaje microblading** — Técnica de maquillaje semipermanente para cejas.
9. **Maquillaje permanente** — Maquillaje semipermanente de larga duración.
10. **Relajación** — Sesiones orientadas al bienestar y la relajación.
11. **Tratamiento de acné** — Atención estética para piel con tendencia acneica, según valoración profesional.
12. **Tratamiento de manchas** — Tratamientos orientados a la apariencia de manchas en la piel.
13. **Tratamiento de líneas de expresión** — Tratamientos orientados a la apariencia de las líneas de expresión.
14. **Coaching** — Acompañamiento personal, en modalidad presencial o virtual.
15. **Bronceo** — Servicio de bronceado estético.

> **Estas descripciones son un borrador.** Deben ser revisadas y aprobadas por la dirección antes de publicarse. Si el contenido final difiere, manda el contenido aprobado.

**Cada servicio debe indicar la necesidad de valoración previa** cuando la indicación dependa de la condición de la persona.

## /nosotras

Página de confianza. Foto de la directora, su trayectoria y sus credenciales: enfermera, especialista en sobrepeso y rejuvenecimiento, life coach y esteticista, con casi veinte años de experiencia. Mencionar a las auxiliares de enfermería presentes en cada sede, sin nombres hasta que la dirección los autorice.

**Autorizado para publicar:** nombre completo y credenciales de la directora.

## /sedes

| Sede | Dirección | Horario |
|:-----|:----------|:--------|
| **Chía** | Avenida Pradilla 2 Este 71, local 129 — Centro Comercial Sabana Norte | 10:00 a. m. a 7:00 p. m. |
| **Zipaquirá** | Centro Comercial La Casona, local 230 | 10:00 a. m. a 7:00 p. m. |

- Sábados: hasta el mediodía. Domingos y festivos: sin servicio.
- Mapa embebido de OpenStreetMap o Google Maps por sede.
- Botón de indicaciones y botón de WhatsApp por sede.

## /valoracion

La página de conversión. Explica **qué es una valoración y para qué sirve** —orientación profesional individual antes de decidir, sin compromiso de adquirir un tratamiento—, y ofrece el formulario de agendamiento. **Sin precios y sin mencionar promociones**: esas condiciones las comunica el equipo en la conversación.

## /preguntas

Tomar las preguntas frecuentes ya redactadas para el asistente: qué es la valoración, si hay que adquirir un tratamiento, si los resultados son iguales en todas las personas (respuesta: no, y explicar por qué), cómo se agenda, y qué pasa si no se puede asistir.

## /datos

Política de tratamiento de datos personales. **Dejar la estructura armada y el contenido como marcador** hasta que la dirección entregue el documento vigente.

---

# 7. Movimiento y animación — moderado a propósito

Este es un centro de estética, no una marca de tecnología. **El movimiento debe ser sutil y elegante, nunca el protagonista.**

- **Hero:** animación lenta y continua —un degradado en movimiento suave, o líneas finas desplazándose—. Evitar partículas tipo tecnológico, cubos girando y efectos de ciencia ficción.
- **Scroll reveal:** aparición suave de secciones, una por una. Sin rebotes ni rotaciones.
- **Micro-interacciones:** en todos los elementos accionables. Elevación sutil de tarjetas, cambio de color en botones, subrayados animados en enlaces.
- **Separadores:** líneas finas animadas en dorado entre secciones.
- **Galería:** transiciones suaves, nunca carruseles automáticos que se muevan solos.
- **Rendimiento:** el movimiento no puede costar fluidez en móvil. Respetar `prefers-reduced-motion`.

**Un efecto distintivo por página, no cinco.**

---

# 8. Imágenes

## Aprovechar lo que ya existe

**No generar todas las imágenes de cero.** El centro ya tiene material propio y con derechos. Usar:

**Fotos del centro (disponibles y aprovechables sin trámite):**
```
https://eternalinstitute.net/wp-content/uploads/2021/02/SPA-3-*.jpg
https://eternalinstitute.net/wp-content/uploads/2021/03/SPA-1-*.jpg
https://eternalinstitute.net/wp-content/uploads/2021/03/SPA-2-*.jpg
```
Son galerías del centro. **Descargar las versiones originales, no las miniaturas**: quitar el sufijo de tamaño del nombre (`-150x150`) para obtener la resolución completa.

**Foto de la directora:**
```
https://eternalinstitute.net/wp-content/uploads/2021/03/Martha-Lucia-Aguilera-e1618281708597.jpg
```
Resolución 582×715. Buena para la página /nosotras. Se puede mejorar con un recorte y un ajuste de luz, no reemplazar por una imagen generada.

**Instagram @eternalinstituteestetica** — usar solo material propio del centro, no capturas con texto de otras marcas.

## Lo que NO se puede usar sin autorización

**Las tres fotos de testimonios del sitio actual** (Eliana Plazas, Milena Moreno, Cristina Ferro) requieren autorización vigente por escrito. **No incluirlas** hasta que la dirección confirme que las tiene.

**Ninguna imagen de antes y después** de pacientes, aunque esté publicada hoy.

## Lo que sí conviene generar

- **Texturas de fondo** — mármol suave, lino, degradados en dorado y ciruela.
- **Imágenes de ambiente** para las secciones sin foto disponible — espacios serenos, luz natural, detalles de cuidado. **Nunca personas con rostros reconocibles ni resultados de tratamientos.**
- **Iconografía propia** para los servicios, en línea fina sobre dorado.

---

# 9. SEO

- **Títulos y descripciones únicos** por página. Las palabras clave reales son locales: «depilación láser Chía», «tratamiento de sobrepeso Zipaquirá», «centro de estética Chía».
- **Estructura semántica** con un solo `h1` por página.
- **URLs limpias** en español.
- **Imágenes con `alt` descriptivos.**
- **Datos estructurados de negocio local** — dos sedes (`LocalBusiness` / `MedicalBusiness` con `department` o dos instancias), con dirección, horario, teléfono y coordenadas.
- **Open Graph y Twitter Cards** para compartir por WhatsApp e Instagram.
- **Mapa del sitio** y `robots.txt`; si no hay blog, marcar `include_blog: false` y omitir la sección.

# 10. SEO para IA

Incluir **JSON-LD** completo para que los asistentes de IA entiendan el negocio:

- `LocalBusiness` con las dos sedes
- `Service` por cada tratamiento activo
- `FAQPage` para la página de preguntas
- `Person` para la directora, con sus credenciales
- `BreadcrumbList`

Las descripciones deben ser **texto plano y factual**. Un asistente que no encuentra el horario en datos estructurados lo dirá mal, o no lo dirá.

---

# 11. WhatsApp

- **Botón flotante** en todas las páginas, color `#25D366`, con el número **3114656836**.
- Mensaje precargado según la página:
  - Inicio: «Hola, quisiera información sobre los servicios de Eternal Institute.»
  - Servicio: «Hola, quisiera información sobre [nombre del servicio].»
  - Sedes: «Hola, quisiera información sobre la sede de [Chía / Zipaquirá].»
- En móvil, el botón no debe tapar el contenido ni el botón de agendar.

> **Nota interna — no publicar:** el número 3114656836 es el que se muestra en la web. Para integraciones con Meta (WhatsApp Business API, campañas) debe usarse el número dedicado del negocio que ya tiene Meta Business verificado. **No mezclar los dos en el mismo flujo** ni publicar el dedicado en el sitio.

---

# 12. Requisitos técnicos

- **Sitio estático** o generado estáticamente. Debe poder publicarse en **Hostinger**.
- **Responsive real**, diseñado primero para móvil — la mayoría del tráfico viene de Instagram.
- **Navegación accesible:** contraste suficiente, foco visible, navegación por teclado, etiquetas ARIA.
- **Sin jQuery.** JavaScript mínimo y moderno.
- **Rendimiento:** optimizar imágenes (WebP con respaldo JPEG), carga diferida, sin fuentes innecesarias.
- **Formulario de agendamiento** que envíe por correo a `contactoeternalinstitute@gmail.com` y ofrezca el mismo mensaje por WhatsApp como alternativa.
- **Analítica:** conservar el seguimiento de conversiones de Google Ads (`AW-11120947990`). Hay campañas activas y **perder la etiqueta significa perder la medición.**

---

# 13. Lo que NO debe aparecer en el sitio

- Precios, tarifas o promociones
- «Resultados garantizados», «notables», «sostenibles» o cualquier promesa
- Imágenes de antes y después
- Fotografías de pacientes sin autorización vigente
- Nombres de las auxiliares (hasta que la dirección los autorice)
- El NIT (verificar antes) ni datos legales no confirmados
- Porcentajes de satisfacción (el 92 % y el 99,5 %) — **su origen no está verificado**
- Testimonios sin autorización comprobada
- El número de WhatsApp dedicado de Meta

---

# 14. Al terminar

Entregar:

1. El sitio funcionando, navegable y responsive
2. El logo en SVG y PNG (cuadrado y horizontal, a color y monocromo)
3. La lista de imágenes usadas, indicando de dónde salió cada una
4. Un documento con el **texto final de cada página** para que la dirección lo revise antes de publicar

---

*Preparado por PropulsarIA a partir del levantamiento del 21 de octubre de 2026 y de la Base de conocimiento del cliente. Los datos de contacto, sedes, horarios y servicios están verificados con la dirección. Las descripciones de servicios y la política de datos quedan sujetas a su aprobación.*
