/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ImageProvenance {
  description: string;
  source: string;
  status: 'Propiedad del centro' | 'Logo SVG nuevo' | 'Vector UI local';
  usage: string;
}

export const IMAGE_PROVENANCE_LIST: ImageProvenance[] = [
  {
    description: 'Fotografía de la Directora Martha Lucía Aguilera Muñoz',
    source: 'https://eternalinstitute.net/wp-content/uploads/2021/03/Martha-Lucia-Aguilera-e1618281708597.jpg',
    status: 'Propiedad del centro',
    usage: 'Página /nosotras y ficha de dirección'
  },
  {
    description: 'Fotografía de Instalaciones y Cabinas SPA-1',
    source: 'https://eternalinstitute.net/wp-content/uploads/2021/03/SPA-1.jpg',
    status: 'Propiedad del centro',
    usage: 'Galería de sedes e infraestructura'
  },
  {
    description: 'Fotografía de Instalaciones y Cabinas SPA-2',
    source: 'https://eternalinstitute.net/wp-content/uploads/2021/03/SPA-2.jpg',
    status: 'Propiedad del centro',
    usage: 'Galería de sedes e infraestructura'
  },
  {
    description: 'Fotografía de Instalaciones y Cabinas SPA-3',
    source: 'https://eternalinstitute.net/wp-content/uploads/2021/02/SPA-3.jpg',
    status: 'Propiedad del centro',
    usage: 'Galería de sedes e infraestructura'
  },
  {
    description: 'Fotografía Editorial Arquitectónica Suite de Consulta (Hero)',
    source: 'Google Stitch Studio Assets (ID: AB6AXuCdrPPioesSdWticwcP18...)',
    status: 'Vector UI local',
    usage: 'Hero página de Inicio'
  },
  {
    description: 'Fotografía Editorial de Consulta Metabólica y Nutricional',
    source: 'Google Stitch Studio Assets (ID: AB6AXuDodznSvzu7ro...)',
    status: 'Vector UI local',
    usage: 'Servicio destacado: Manejo de sobrepeso'
  },
  {
    description: 'Fotografía Editorial de Consulta Dermocosmética Facial',
    source: 'Google Stitch Studio Assets (ID: AB6AXuCoUrFEdRJgo...)',
    status: 'Vector UI local',
    usage: 'Servicio destacado: Rejuvenecimiento facial'
  },
  {
    description: 'Fotografía Editorial de Cabina Láser Médica',
    source: 'Google Stitch Studio Assets (ID: AB6AXuBlScQAc18ks...)',
    status: 'Vector UI local',
    usage: 'Servicio destacado: Depilación láser definitiva'
  },
  {
    description: 'Fotografía Editorial Retrato de Dirección General',
    source: 'Google Stitch Studio Assets (ID: AB6AXuAbeyTkqpIqH...)',
    status: 'Vector UI local',
    usage: 'Página /nosotras: Perfil de Martha Lucía Aguilera Muñoz'
  },
  {
    description: 'Fotografías de Atención de Auxiliares de Enfermería en Sede Chía y Zipaquirá',
    source: 'Google Stitch Studio Assets (IDs: AB6AXuBU2nUxKaTk5... y AB6AXuBZGDihuLKG...)',
    status: 'Vector UI local',
    usage: 'Página /nosotras: Sección Equipo Auxiliar'
  },
  {
    description: 'Fotografías Arquitectónicas Interiores Sedes Chía y Zipaquirá',
    source: 'Google Stitch Studio Assets (IDs: AB6AXuDUHsRZ... y AB6AXuCYYM2Q...)',
    status: 'Vector UI local',
    usage: 'Página /sedes: Fichas de Chía (Sabana Norte) y Zipaquirá (La Casona)'
  },
  {
    description: 'Identidad visual: Logotipos SVG (Horizontal y Cuadrado, Color y Monocromo)',
    source: 'Creado a medida para Eternal Institute respetando la paleta oficial (#B88508, #67235E)',
    status: 'Logo SVG nuevo',
    usage: 'Cabecera, pie de página, favicon y kit de marca descargable'
  },
  {
    description: 'Imágenes vectoriales de apoyo, texturas de fondo e iconografía',
    source: 'Generados en código SVG limpio y libre de licencias externas',
    status: 'Vector UI local',
    usage: 'Texturas de fondo, iconos de servicios y sellos de calidad'
  }
];

export const FINAL_TEXTS_DOCUMENT = {
  title: 'Documento Oficial de Textos para Revisión de Dirección',
  client: 'Eternal Institute Medicina Estética Responsable',
  preparedFor: 'Martha Lucía Aguilera Muñoz · Directora',
  date: '22 de octubre de 2026',
  sections: [
    {
      page: 'Página de Inicio (/)',
      content: `Titular Principal: Medicina estética responsable en Chía y Zipaquirá.
Subtítulo: Acompañamos a cada persona con seguimiento personalizado, responsable y detallado, para que su proceso se desarrolle correctamente.
Botones: [Agendar valoración] y [Ver servicios].

Pilares (Por qué elegirnos):
1. Tratamientos faciales y corporales: orientados a mejorar la salud, la estética y la autoestima de cada persona.
2. Infraestructura y equipos: sedes cómodas con equipos de tecnología adecuada para una atención personalizada.
3. Amplia experiencia: equipo liderado por Martha Lucía Aguilera Muñoz, con casi veinte años de experiencia.
4. Atención integral: seguimiento personalizado, responsable y detallado durante todo el proceso.

Sedes Destacadas:
- Chía: Avenida Pradilla 2 Este 71, local 129 — Centro Comercial Sabana Norte. Horario: 10:00 a. m. a 7:00 p. m. Sábados hasta el mediodía.
- Zipaquirá: Centro Comercial La Casona, local 230. Horario: 10:00 a. m. a 7:00 p. m. Sábados hasta el mediodía.`
    },
    {
      page: 'Catálogo de Servicios (/servicios)',
      content: `Catálogo de 15 servicios activos:
1. Manejo de sobrepeso — Acompañamiento profesional para el manejo del peso, con seguimiento personalizado durante todo el proceso.
2. Moldeo corporal — Tratamientos orientados a mejorar la apariencia y el contorno corporal.
3. Celulitis — Tratamientos estéticos dirigidos a la apariencia de la piel con celulitis.
4. Tonificación — Procedimientos orientados a mejorar la firmeza y la apariencia de la piel.
5. Rejuvenecimiento facial — Tratamientos no invasivos orientados a la apariencia de la piel del rostro.
6. Armonización facial — Procedimientos orientados a armonizar las proporciones del rostro, previa valoración profesional.
7. Depilación láser definitiva — Reducción del vello mediante tecnología láser, con protocolo personalizado según cada persona.
8. Maquillaje microblading — Técnica de maquillaje semipermanente para cejas.
9. Maquillaje permanente — Maquillaje semipermanente de larga duración.
10. Relajación — Sesiones orientadas al bienestar y la relajación.
11. Tratamiento de acné — Atención estética para piel con tendencia acneica, según valoración profesional.
12. Tratamiento de manchas — Tratamientos orientados a la apariencia de manchas en la piel.
13. Tratamiento de líneas de expresión — Tratamientos orientados a la apariencia de las líneas de expresión.
14. Coaching — Acompañamiento personal, en modalidad presencial o virtual.
15. Bronceo — Servicio de bronceado estético.

*Nota de cumplimiento: Sin precios ni promociones. Indicación expresa de previa valoración profesional en cada servicio.*`
    },
    {
      page: 'Nosotras (/nosotras)',
      content: `Directora: Martha Lucía Aguilera Muñoz
Perfil: Enfermera, especialista en sobrepeso y rejuvenecimiento, life coach y esteticista, con casi veinte años de experiencia.
Equipo auxiliar: Auxiliares de enfermería presentes en cada sede (Chía y Zipaquirá) encargadas de la atención en cabina y la aplicación de protocolos bajo supervisión clínica.`
    },
    {
      page: 'Sedes (/sedes)',
      content: `Sede Chía: Avenida Pradilla 2 Este 71, local 129 — Centro Comercial Sabana Norte.
Sede Zipaquirá: Centro Comercial La Casona, local 230.
Horarios: Lunes a viernes de 10:00 a. m. a 7:00 p. m. Sábados de 10:00 a. m. a 1:00 p. m. Domingos y festivos sin servicio.`
    },
    {
      page: 'Valoración Profesional (/valoracion)',
      content: `Concepto de valoración: Es un espacio de diagnóstico individual y honesto donde evaluamos tu condición biológica particular sin ningún compromiso de adquirir un tratamiento. No publicamos precios ni paquetes genéricos porque cada protocolo se diseña exclusivamente a la medida de la persona.`
    },
    {
      page: 'Preguntas Frecuentes (/preguntas)',
      content: `Preguntas resueltas:
1. ¿Qué es la valoración y para qué sirve?
2. ¿Es obligatorio adquirir un tratamiento? (No)
3. ¿Los resultados son iguales en todas las personas? (No, cada cuerpo responde de forma distinta)
4. ¿Cómo se agenda una cita?
5. ¿Qué ocurre si no puedo asistir a mi cita? (Aviso con 24 horas)
6. ¿Cómo se realiza el seguimiento durante el tratamiento? (El diferencial del centro)`
    },
    {
      page: 'Política de Tratamiento de Datos (/datos)',
      content: `Estructura formal acorde a la Ley Estatutaria 1581 de 2012 y el Decreto 1377 de 2013 de Colombia, marcando los derechos de los titulares (conocer, actualizar, rectificar y suprimir) y los canales de atención.`
    }
  ]
};
