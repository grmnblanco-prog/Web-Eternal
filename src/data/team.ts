/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TeamMember {
  name: string;
  role: string;
  credentials: string[];
  bio: string;
  imageUrl?: string;
  experienceYears: number;
}

export const DIRECTOR_DATA: TeamMember = {
  name: 'Martha Lucía Aguilera Muñoz',
  role: 'Directora & Especialista en Estética Responsable',
  experienceYears: 20,
  credentials: [
    'Enfermera profesional',
    'Especialista en sobrepeso y rejuvenecimiento facial y corporal',
    'Life Coach certificada',
    'Esteticista con casi veinte años de trayectoria clínica y estética'
  ],
  bio: 'Con casi veinte años de vocación dedicada al cuidado humano y la estética de la salud, Martha Lucía lidera Eternal Institute bajo la premisa de la responsabilidad deontológica. Su visión combina la precisión de la formación en enfermería con técnicas estéticas no invasivas avanzadas y el acompañamiento humano mediante coaching de bienestar.',
  imageUrl: 'https://eternalinstitute.net/wp-content/uploads/2021/03/Martha-Lucia-Aguilera-e1618281708597.jpg'
};

export const CLINICAL_STAFF = {
  title: 'Equipo de Auxiliares de Enfermería en Sedes',
  description: 'En cada una de nuestras sedes (Chía y Zipaquirá), la atención en cabina y los procedimientos estéticos son ejecutados por auxiliares de enfermería capacitadas, con estricto apego a protocolos de bioseguridad, calidez humana y supervisión técnica directa.',
  locations: [
    {
      sede: 'Chía',
      role: 'Equipo auxiliar de enfermería estética',
      detail: 'Atención personalizada en cabinas del Centro Comercial Sabana Norte'
    },
    {
      sede: 'Zipaquirá',
      role: 'Equipo auxiliar de enfermería estética',
      detail: 'Atención personalizada en cabinas del Centro Comercial La Casona'
    }
  ]
};
