export interface ResultEntry {
  name: string;
  value: number;
}

export const initialStats: ResultEntry[] = [
  {
    name: "Madrid",
    value: 174,
  },
  {
    name: "La Rioja",
    value: 39,
  },
  {
    name: "Andalucía",
    value: 34,
  },
  {
    name: "Cataluña",
    value: 24,
  },
  {
    name: "Valencia",
    value: 30,
  },
  {
    name: "Murcia",
    value: 0,
  },
  {
    name: "Extremadura",
    value: 6,
  },
  {
    name: "Castilla La Mancha",
    value: 16,
  },
  {
    name: "País Vasco",
    value: 45,
  },
  {
    name: "Cantabria",
    value: 10,
  },
  {
    name: "Asturias",
    value: 5,
  },
  {
    name: "Galicia",
    value: 3,
  },
  {
    name: "Aragón",
    value: 11,
  },
  {
    name: "Castilla y León",
    value: 19,
  },
  {
    name: "Islas Canarias",
    value: 18,
  },
  {
    name: "Islas Baleares",
    value: 6,
  },
  {
    name: "Navarra",
    value: 20,
  },
];

/*
Data taken from 
https://www.eldiario.es/sociedad/mapa-datos-coronavirus-espana-comunidades-autonomas-abril-9_1_1039633.html
"casos notificados en el dia"
10/04/2021
*/

export const todayStats: ResultEntry[] = [
  {
    name: "Madrid",
    value: 640656,
  },
  {
    name: "La Rioja",
    value: 28304,
  },
  {
    name: "Andalucía",
    value: 518285,
  },
  {
    name: "Cataluña",
    value: 547239,
  },
  {
    name: "Valencia",
    value: 387107,
  },
  {
    name: "Murcia",
    value: 109243,
  },
  {
    name: "Extremadura",
    value: 72055,
  },
  {
    name: "Castilla La Mancha",
    value: 178092,
  },
  {
    name: "País Vasco",
    value: 168334,
  },
  {
    name: "Cantabria",
    value: 26653,
  },
  {
    name: "Asturias",
    value: 48329,
  },
  {
    name: "Galicia",
    value: 117841,
  },
  {
    name: "Aragón",
    value: 112848,
  },
  {
    name: "Castilla y León",
    value: 215845,
  },
  {
    name: "Islas Canarias",
    value: 48788,
  },
  {
    name: "Islas Baleares",
    value: 58153,
  },
  {
    name: "Navarra",
    value: 56959,
  },
];
