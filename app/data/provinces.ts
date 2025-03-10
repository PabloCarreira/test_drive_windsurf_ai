export interface Province {
  name: string;
  code: string;
  mainCities: string[];
}

export const provinces: Province[] = [
  {
    name: 'Buenos Aires',
    code: 'BA',
    mainCities: ['La Plata', 'Mar del Plata', 'Bahía Blanca', 'Quilmes', 'Tandil']
  },
  {
    name: 'Ciudad Autónoma de Buenos Aires',
    code: 'CABA',
    mainCities: ['Buenos Aires']
  },
  {
    name: 'Catamarca',
    code: 'CT',
    mainCities: ['San Fernando del Valle de Catamarca', 'Santa María', 'Belén']
  },
  {
    name: 'Chaco',
    code: 'CH',
    mainCities: ['Resistencia', 'Barranqueras', 'Fontana']
  },
  {
    name: 'Chubut',
    code: 'CHU',
    mainCities: ['Rawson', 'Trelew', 'Puerto Madryn', 'Comodoro Rivadavia']
  },
  {
    name: 'Córdoba',
    code: 'CB',
    mainCities: ['Córdoba', 'Villa Carlos Paz', 'Río Cuarto', 'Alta Gracia']
  },
  {
    name: 'Corrientes',
    code: 'CR',
    mainCities: ['Corrientes', 'Goya', 'Mercedes']
  },
  {
    name: 'Entre Ríos',
    code: 'ER',
    mainCities: ['Paraná', 'Concordia', 'Gualeguaychú']
  },
  {
    name: 'Formosa',
    code: 'FO',
    mainCities: ['Formosa', 'Clorinda', 'Pirané']
  },
  {
    name: 'Jujuy',
    code: 'JY',
    mainCities: ['San Salvador de Jujuy', 'San Pedro', 'Palpalá']
  },
  {
    name: 'La Pampa',
    code: 'LP',
    mainCities: ['Santa Rosa', 'General Pico', 'Toay']
  },
  {
    name: 'La Rioja',
    code: 'LR',
    mainCities: ['La Rioja', 'Chilecito', 'Chamical']
  },
  {
    name: 'Mendoza',
    code: 'MZ',
    mainCities: ['Mendoza', 'San Rafael', 'Godoy Cruz', 'Maipú']
  },
  {
    name: 'Misiones',
    code: 'MI',
    mainCities: ['Posadas', 'Oberá', 'Puerto Iguazú']
  },
  {
    name: 'Neuquén',
    code: 'NQ',
    mainCities: ['Neuquén', 'Cutral Có', 'Zapala']
  },
  {
    name: 'Río Negro',
    code: 'RN',
    mainCities: ['Viedma', 'Bariloche', 'Cipolletti']
  },
  {
    name: 'Salta',
    code: 'SA',
    mainCities: ['Salta', 'San Ramón de la Nueva Orán', 'Tartagal']
  },
  {
    name: 'San Juan',
    code: 'SJ',
    mainCities: ['San Juan', 'Rivadavia', 'Chimbas']
  },
  {
    name: 'San Luis',
    code: 'SL',
    mainCities: ['San Luis', 'Villa Mercedes', 'Merlo']
  },
  {
    name: 'Santa Cruz',
    code: 'SC',
    mainCities: ['Río Gallegos', 'Caleta Olivia', 'El Calafate']
  },
  {
    name: 'Santa Fe',
    code: 'SF',
    mainCities: ['Santa Fe', 'Rosario', 'Venado Tuerto']
  },
  {
    name: 'Santiago del Estero',
    code: 'SE',
    mainCities: ['Santiago del Estero', 'La Banda', 'Termas de Río Hondo']
  },
  {
    name: 'Tierra del Fuego',
    code: 'TF',
    mainCities: ['Ushuaia', 'Río Grande', 'Tolhuin']
  },
  {
    name: 'Tucumán',
    code: 'TU',
    mainCities: ['San Miguel de Tucumán', 'Yerba Buena', 'Tafí Viejo']
  }
];
