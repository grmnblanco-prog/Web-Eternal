/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceDetail {
  id: string;
  slug: string;
  name: string;
  category: 'corporal' | 'facial' | 'bienestar' | 'mirada';
  categoryLabel: string;
  shortDescription: string;
  isPriority: boolean;
  requiresValuation: boolean;
  tag: string;
  // Detailed ficha fields
  overview: string;
  objective: string;
  valuationCriteria: string;
  followUpProcess: string;
  frequencyNote: string;
  suitableConsiderations: string[];
}

export const SERVICES: ServiceDetail[] = [
  {
    id: 'sobrepeso',
    slug: 'manejo-de-sobrepeso',
    name: 'Manejo de sobrepeso',
    category: 'corporal',
    categoryLabel: 'Tratamiento Corporal',
    shortDescription: 'Acompañamiento profesional para el manejo del peso, con seguimiento personalizado durante todo el proceso.',
    isPriority: true,
    requiresValuation: true,
    tag: 'Servicio Prioritario',
    overview: 'Un programa de orientación y acompañamiento estético-nutricional individualizado, liderado bajo supervisión profesional para apoyar hábitos saludables y el bienestar integral de la persona.',
    objective: 'Orientado a acompañar a la persona en la gestión de su composición corporal mediante pautas realistas, soporte constante y aparatología estética complementaria adaptada a su contextura.',
    valuationCriteria: 'Se realiza una valoración inicial completa que incluye revisión de antecedentes, hábitos cotidianos, estilo de vida y medición de parámetros corporales antes de sugerir cualquier fase de trabajo.',
    followUpProcess: 'Seguimiento periódico, responsable y detallado en cada sesión para ajustar recomendaciones, evaluar la respuesta del organismo y brindar motivación constante.',
    frequencyNote: 'El esquema de sesiones y la duración se determinan exclusivamente tras la valoración presencial individual.',
    suitableConsiderations: [
      'Requiere valoración profesional previa obligatoria',
      'Enfoque multidisciplinario no invasivo',
      'Acompañamiento continuo y pautas de bienestar',
      'Sin uso de métodos extremos ni promesas irreales'
    ]
  },
  {
    id: 'moldeo-corporal',
    slug: 'moldeo-corporal',
    name: 'Moldeo corporal',
    category: 'corporal',
    categoryLabel: 'Tratamiento Corporal',
    shortDescription: 'Tratamientos orientados a mejorar la apariencia y el contorno corporal.',
    isPriority: false,
    requiresValuation: true,
    tag: 'Corporal',
    overview: 'Técnicas estéticas no invasivas que combinan aparatología especializada y maniobras manuales dirigidas a estilizar la apariencia de las zonas tratadas.',
    objective: 'Orientado a acompañar los procesos de mejora visual en contornos corporales como abdomen, flancos, brazos o piernas.',
    valuationCriteria: 'Evaluación del tono tisular, elasticidad de la piel y distribución de tejido adiposo.',
    followUpProcess: 'Acompañamiento de enfermería estética con registro de evolución por sesión.',
    frequencyNote: 'Plan personalizado definido tras consulta de valoración.',
    suitableConsiderations: ['Previa valoración profesional', 'Tecnología aprobada para estética']
  },
  {
    id: 'celulitis',
    slug: 'celulitis',
    name: 'Celulitis',
    category: 'corporal',
    categoryLabel: 'Tratamiento Corporal',
    shortDescription: 'Tratamientos estéticos dirigidos a la apariencia de la piel con celulitis.',
    isPriority: false,
    requiresValuation: true,
    tag: 'Corporal',
    overview: 'Protocolos combinados orientados a estimular la microcirculación superficial y suavizar la textura cutánea con efecto visual acolchado.',
    objective: 'Dirigido a favorecer el drenaje estético y la uniformidad de la superficie cutánea en glúteos, muslos y caderas.',
    valuationCriteria: 'Clasificación visual y táctil del grado de celulitis (edematosa, fibrosa o flácida).',
    followUpProcess: 'Medición de evolución y sugerencias ergonómicas y de hidratación complementarias.',
    frequencyNote: 'Periodicidad coordinada según el diagnóstico individual.',
    suitableConsiderations: ['Requiere valoración profesional', 'Protocolo no quirúrgico']
  },
  {
    id: 'tonificacion',
    slug: 'tonificacion',
    name: 'Tonificación',
    category: 'corporal',
    categoryLabel: 'Tratamiento Corporal',
    shortDescription: 'Procedimientos orientados a mejorar la firmeza y la apariencia de la piel.',
    isPriority: false,
    requiresValuation: true,
    tag: 'Corporal',
    overview: 'Sesiones enfocadas en estimular las fibras elásticas y el tono muscular mediante tecnologías de electroestimulación y radiofrecuencia estética.',
    objective: 'Orientado a personas que desean trabajar la firmeza de tejidos tras cambios corporales o como mantenimiento preventivo.',
    valuationCriteria: 'Revisión de la flacidez dérmica vs muscular.',
    followUpProcess: 'Registro continuo de respuesta tisular.',
    frequencyNote: 'Definido en consulta inicial.',
    suitableConsiderations: ['Previa valoración profesional', 'Sin incapacidad']
  },
  {
    id: 'rejuvenecimiento-facial',
    slug: 'rejuvenecimiento-facial',
    name: 'Rejuvenecimiento facial',
    category: 'facial',
    categoryLabel: 'Tratamiento Facial',
    shortDescription: 'Tratamientos no invasivos orientados a la apariencia de la piel del rostro.',
    isPriority: true,
    requiresValuation: true,
    tag: 'Servicio Prioritario',
    overview: 'Conjunto de procedimientos estéticos avanzados diseñados para revitalizar la luminosidad, hidratación profunda y textura del rostro sin recurrir a cirugías.',
    objective: 'Orientado a brindar un aspecto descansado, luminoso y fresco a la piel, estimulando los procesos naturales de renovación cutánea.',
    valuationCriteria: 'Análisis detallado del biotipo cutáneo, fototipo solar, grado de fotoenvejecimiento y nivel de deshidratación.',
    followUpProcess: 'Monitoreo de tolerancia en cada paso y pautas personalizadas de cuidado domiciliario (rutina facial diaria y protección solar).',
    frequencyNote: 'Intervalos entre sesiones programados según la necesidad específica de cada piel.',
    suitableConsiderations: [
      'Requiere valoración profesional previa',
      'Procedimientos no invasivos y gentiles',
      'Respeto por la armonía y naturalidad facial',
      'Protocolos adaptados a cada edad biológica'
    ]
  },
  {
    id: 'armonizacion-facial',
    slug: 'armonizacion-facial',
    name: 'Armonización facial',
    category: 'facial',
    categoryLabel: 'Tratamiento Facial',
    shortDescription: 'Procedimientos orientados a armonizar las proporciones del rostro, previa valoración profesional.',
    isPriority: false,
    requiresValuation: true,
    tag: 'Facial Especializado',
    overview: 'Abordaje de proporciones faciales con enfoque de simetría y delicadeza, buscando balancear los rasgos de manera sobria.',
    objective: 'Dirigido a resaltar atributos naturales del rostro manteniendo absoluta naturalidad de gestos y expresiones.',
    valuationCriteria: 'Estudio morfofisiológico facial exhaustivo realizado exclusivamente en consulta previa.',
    followUpProcess: 'Revisión de control programada posterior a la aplicación del protocolo.',
    frequencyNote: 'Definido puntualmente en la valoración clínica.',
    suitableConsiderations: ['Previa valoración profesional estricta', 'Enfoque de máxima discreción y seguridad']
  },
  {
    id: 'depilacion-laser',
    slug: 'depilacion-laser-definitiva',
    name: 'Depilación láser definitiva',
    category: 'corporal',
    categoryLabel: 'Depilación Especializada',
    shortDescription: 'Reducción del vello mediante tecnología láser, con protocolo personalizado según cada persona.',
    isPriority: true,
    requiresValuation: true,
    tag: 'Servicio Prioritario',
    overview: 'Tecnología láser de última generación orientada a la reducción progresiva y duradera del vello en zonas corporales o faciales seleccionadas.',
    objective: 'Orientado a debilitar el folículo piloso de manera controlada y segura para la piel, reduciendo la presencia de vello y previniendo la foliculitis.',
    valuationCriteria: 'Evaluación del fototipo de piel (escala Fitzpatrick), color y grosor del vello, así como antecedentes de exposición solar reciente.',
    followUpProcess: 'Ajuste de parámetros de energía en cada sesión conforme se observa el espaciamiento del crecimiento del vello.',
    frequencyNote: 'Sesiones espaciadas entre 4 y 8 semanas según la fase de crecimiento (anágena) de la zona tratada.',
    suitableConsiderations: [
      'Previa prueba de sensibilidad y valoración',
      'Equipos con sistema de enfriamiento para mayor confort',
      'Protocolos tanto para hombres como para mujeres',
      'Pautas claras de fotoprotección antes y después de cada sesión'
    ]
  },
  {
    id: 'microblading',
    slug: 'maquillaje-microblading',
    name: 'Maquillaje microblading',
    category: 'mirada',
    categoryLabel: 'Diseño de Mirada',
    shortDescription: 'Técnica de maquillaje semipermanente para cejas.',
    isPriority: false,
    requiresValuation: true,
    tag: 'Mirada',
    overview: 'Diseño pelo a pelo con pigmentos de alta calidad certificados, trazados cuidadosamente para definir la forma de la ceja.',
    objective: 'Orientado a aportar densidad visual, definición y simetría al arco de las cejas respetando la tonalidad natural.',
    valuationCriteria: 'Visajismo previo, medición de facciones y prueba de tono.',
    followUpProcess: 'Cita de retoque y revisión incluida en el esquema protocolar.',
    frequencyNote: 'Duración semipermanente según tipo de piel y cuidados domiciliarios.',
    suitableConsiderations: ['Previa aprobación del diseño por la paciente', 'Pigmentos biocompatibles']
  },
  {
    id: 'maquillaje-permanente',
    slug: 'maquillaje-permanente',
    name: 'Maquillaje permanente',
    category: 'mirada',
    categoryLabel: 'Diseño de Mirada',
    shortDescription: 'Maquillaje semipermanente de larga duración.',
    isPriority: false,
    requiresValuation: true,
    tag: 'Mirada',
    overview: 'Técnicas de micropigmentación para delineado sutil de ojos, realce de labios o sombreado suave.',
    objective: 'Dirigido a facilitar la rutina diaria aportando un toque de color y definición equilibrado.',
    valuationCriteria: 'Análisis de tono de labios o párpados y expectativas estéticas.',
    followUpProcess: 'Acompañamiento durante el proceso de cicatrización y fijación del color.',
    frequencyNote: 'Requiere sesión de perfeccionamiento posterior.',
    suitableConsiderations: ['Previa valoración profesional', 'Higiene y bioseguridad rigurosa']
  },
  {
    id: 'relajacion',
    slug: 'relajacion',
    name: 'Relajación',
    category: 'bienestar',
    categoryLabel: 'Bienestar Integral',
    shortDescription: 'Sesiones orientadas al bienestar y la relajación.',
    isPriority: false,
    requiresValuation: false,
    tag: 'Bienestar',
    overview: 'Espacios de pausa y desconexión con maniobras suaves, aromaterapia y ambientación térmica reconfortante.',
    objective: 'Orientado a liberar tensiones musculares acumuladas, favorecer el descanso y propiciar una sensación de ligereza.',
    valuationCriteria: 'Breve cuestionario de bienestar sobre zonas de tensión y preferencias de presión aromática.',
    followUpProcess: 'Consejos de higiene postural y manejo del estrés diario.',
    frequencyNote: 'Disponible en sesiones individuales o como pausa periódica.',
    suitableConsiderations: ['Cabinas privadas y confortables', 'Ambiente de serenidad y privacidad']
  },
  {
    id: 'tratamiento-acne',
    slug: 'tratamiento-de-acne',
    name: 'Tratamiento de acné',
    category: 'facial',
    categoryLabel: 'Cuidado Facial',
    shortDescription: 'Atención estética para piel con tendencia acneica, según valoración profesional.',
    isPriority: false,
    requiresValuation: true,
    tag: 'Facial',
    overview: 'Higiene dérmica profunda no agresiva, regulación de sebo y aplicación de principios activos calmantes y purificantes.',
    objective: 'Orientado a mejorar la limpieza de los poros obstruidos, atenuar el brillo oleoso y calmar la inflamación superficial.',
    valuationCriteria: 'Diferenciación entre acné estético y patologías que requieran remisión dermatológica.',
    followUpProcess: 'Acompañamiento en el cumplimiento estricto de la rutina no comedogénica en casa.',
    frequencyNote: 'Programado por etapas de estabilización cutánea.',
    suitableConsiderations: ['Previa valoración profesional obligatoria', 'Productos específicos hipoalergénicos']
  },
  {
    id: 'tratamiento-manchas',
    slug: 'tratamiento-de-manchas',
    name: 'Tratamiento de manchas',
    category: 'facial',
    categoryLabel: 'Cuidado Facial',
    shortDescription: 'Tratamientos orientados a la apariencia de manchas en la piel.',
    isPriority: false,
    requiresValuation: true,
    tag: 'Facial',
    overview: 'Protocolos despigmentantes superficiales y peelings suaves orientados a unificar el tono cutáneo.',
    objective: 'Dirigido a suavizar la apariencia de hiperpigmentaciones solares o post-inflamatorias.',
    valuationCriteria: 'Identificación de la profundidad epidérmica de la mancha y fototipo.',
    followUpProcess: 'Recomendación de filtros solares de amplio espectro y seguimiento progresivo.',
    frequencyNote: 'Se recomienda realizarlo en temporadas de menor radiación o con estricta fotoprotección.',
    suitableConsiderations: ['Previa valoración profesional', 'Compromiso riguroso con el protector solar']
  },
  {
    id: 'lineas-de-expresion',
    slug: 'tratamiento-de-lineas-de-expresion',
    name: 'Tratamiento de líneas de expresión',
    category: 'facial',
    categoryLabel: 'Cuidado Facial',
    shortDescription: 'Tratamientos orientados a la apariencia de las líneas de expresión.',
    isPriority: false,
    requiresValuation: true,
    tag: 'Facial',
    overview: 'Procedimientos de hidratación profunda y nutrición de la dermis para suavizar el aspecto de líneas finas.',
    objective: 'Orientado a atenuar la visibilidad de los signos de fatiga y sequedad en frente, contorno periocular y comisuras.',
    valuationCriteria: 'Diferenciación entre líneas dinámicas y estáticas.',
    followUpProcess: 'Evaluación del confort cutáneo e hidratación sostenida.',
    frequencyNote: 'Esquema periódico adaptado a la respuesta de la piel.',
    suitableConsiderations: ['Previa valoración profesional', 'Procedimientos confortables']
  },
  {
    id: 'coaching',
    slug: 'coaching',
    name: 'Coaching',
    category: 'bienestar',
    categoryLabel: 'Acompañamiento Personal',
    shortDescription: 'Acompañamiento personal, en modalidad presencial o virtual.',
    isPriority: false,
    requiresValuation: false,
    tag: 'Bienestar',
    overview: 'Sesiones de life coaching orientadas al autoconocimiento, motivación y afianzamiento de hábitos que sostienen una vida saludable.',
    objective: 'Orientado a brindar herramientas de claridad, gestión emocional y perseverancia en metas personales de bienestar y salud.',
    valuationCriteria: 'Conversación inicial para identificar propósitos y dinámica de trabajo.',
    followUpProcess: 'Planes de acción concretos acordados entre sesión y sesión.',
    frequencyNote: 'Presencial en sedes de Chía o Zipaquirá, o 100% virtual.',
    suitableConsiderations: ['Dirigido por coach certificada con experiencia clínica', 'Confidencialidad absoluta']
  },
  {
    id: 'bronceo',
    slug: 'bronceo',
    name: 'Bronceo',
    category: 'corporal',
    categoryLabel: 'Estética Corporal',
    shortDescription: 'Servicio de bronceado estético.',
    isPriority: false,
    requiresValuation: false,
    tag: 'Corporal',
    overview: 'Sesiones controladas con cabina especializada orientadas a brindar un tono dorado y uniforme a la piel.',
    objective: 'Orientado a obtener un color canela luminoso cuidando la hidratación y el tiempo de exposición según el fototipo.',
    valuationCriteria: 'Revisión de tiempo máximo recomendado de exposición según el tono de piel.',
    followUpProcess: 'Pautas de hidratación y humectación post-sesión.',
    frequencyNote: 'Dosificación controlada y responsable.',
    suitableConsiderations: ['Cabina con mantenimiento técnico riguroso', 'Uso obligatorio de gafas protectoras']
  }
];

export const PRIORITY_SERVICES = SERVICES.filter(s => s.isPriority);
