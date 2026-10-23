/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface LocationDetail {
  id: 'chia' | 'zipaquira';
  name: string;
  city: string;
  address: string;
  landmark: string;
  scheduleWeekdays: string;
  scheduleSaturdays: string;
  scheduleSundaysHolidays: string;
  phone: string;
  whatsappNumber: string;
  whatsappMessage: string;
  googleMapsUrl: string;
  wazeUrl: string;
  lat: number;
  lng: number;
  features: string[];
  notes: string;
}

export const LOCATIONS: LocationDetail[] = [
  {
    id: 'chia',
    name: 'Sede Chía',
    city: 'Chía, Cundinamarca',
    address: 'Avenida Pradilla 2 Este 71, local 129',
    landmark: 'Centro Comercial Sabana Norte',
    scheduleWeekdays: '10:00 a. m. a 7:00 p. m.',
    scheduleSaturdays: '10:00 a. m. a 1:00 p. m. (hasta el mediodía)',
    scheduleSundaysHolidays: 'Sin servicio (Domingos y Festivos cerrado)',
    phone: '3114656836',
    whatsappNumber: '3114656836',
    whatsappMessage: 'Hola, quisiera información sobre la sede de Chía.',
    googleMapsUrl: 'https://maps.google.com/?q=Avenida+Pradilla+2+Este+71+Chia+Centro+Comercial+Sabana+Norte',
    wazeUrl: 'https://waze.com/ul?q=Centro+Comercial+Sabana+Norte+Chia',
    lat: 4.8601,
    lng: -74.0535,
    features: [
      'Estacionamiento cubierto dentro del centro comercial',
      'Cabinas individuales climatizadas',
      'Acceso sobre la Avenida Pradilla',
      'Atención por auxiliares de enfermería'
    ],
    notes: 'Ubicado en el local 129, primer nivel. Fácil acceso vehicular y peatonal.'
  },
  {
    id: 'zipaquira',
    name: 'Sede Zipaquirá',
    city: 'Zipaquirá, Cundinamarca',
    address: 'Centro Comercial La Casona, local 230',
    landmark: 'Centro Comercial La Casona',
    scheduleWeekdays: '10:00 a. m. a 7:00 p. m.',
    scheduleSaturdays: '10:00 a. m. a 1:00 p. m. (hasta el mediodía)',
    scheduleSundaysHolidays: 'Sin servicio (Domingos y Festivos cerrado)',
    phone: '3114656836',
    whatsappNumber: '3114656836',
    whatsappMessage: 'Hola, quisiera información sobre la sede de Zipaquirá.',
    googleMapsUrl: 'https://maps.google.com/?q=Centro+Comercial+La+Casona+Zipaquira',
    wazeUrl: 'https://waze.com/ul?q=Centro+Comercial+La+Casona+Zipaquira',
    lat: 5.0232,
    lng: -74.0042,
    features: [
      'Ubicación estratégica en el centro de Zipaquirá',
      'Parqueadero en el centro comercial',
      'Ambiente reservado y tranquilo en segundo nivel',
      'Equipos de estética y tecnología certificada'
    ],
    notes: 'Local 230 en el segundo piso de CC La Casona. Zona cómoda para tu cita.'
  }
];
