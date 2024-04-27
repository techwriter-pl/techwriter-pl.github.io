import { currencyValueFormatter } from '@site/src/components/Survey/helpers';

export const professionalTitles = {
  'Technical writer (specjalista ds. dokumentacji technicznej)': 96,
  'Documentation team leader (szef zespołu dokumentacji)': 14,
  'Content designer': 8,
  'UX writer': 3,
  'Product Owner': 2,
  'Doc tools developer': 2,
  'Technical writerka i team leadera zespołu TW': 1,
  'Training content developer (specjalista ds. szkoleń)': 1,
  'Technical Leader of Technical Writers': 1,
  'Technical editor': 1,
  'Medical & Technical Writer': 1,
  'Technical writer/web developer': 1,
  'Content wrangler': 1,
  'Information Developer ': 1,
};

type ProfessionalTitlesMedianDataPoint = {
  'opis stanowiska': string;
  'liczba osób': number;
  mediana: string;
  minimalne: string;
  maksymalne: string;
};

export const professionalTitlesMedian: ProfessionalTitlesMedianDataPoint[] = [
  {
    'opis stanowiska':
      'Technical writer (specjalista ds. dokumentacji technicznej)',
    'liczba osób': 90,
    mediana: currencyValueFormatter(10500),
    minimalne: currencyValueFormatter(5000),
    maksymalne: currencyValueFormatter(26291),
  },
  {
    'opis stanowiska': 'Documentation team leader (szef zespołu dokumentacji)',
    'liczba osób': 16,
    mediana: currencyValueFormatter(21500),
    minimalne: currencyValueFormatter(5500),
    maksymalne: currencyValueFormatter(32000),
  },
  {
    'opis stanowiska': 'Content designer',
    'liczba osób': 8,
    mediana: currencyValueFormatter(11750),
    minimalne: currencyValueFormatter(6000),
    maksymalne: currencyValueFormatter(15400),
  },
  {
    'opis stanowiska': 'UX writer',
    'liczba osób': 3,
    mediana: currencyValueFormatter(12000),
    minimalne: currencyValueFormatter(10800),
    maksymalne: currencyValueFormatter(13500),
  },
  {
    'opis stanowiska': 'Product Owner',
    'liczba osób': 2,
    mediana: currencyValueFormatter(18000),
    minimalne: currencyValueFormatter(14500),
    maksymalne: currencyValueFormatter(21500),
  },
  {
    'opis stanowiska': 'Doc tools developer',
    'liczba osób': 2,
    mediana: currencyValueFormatter(32000),
    minimalne: currencyValueFormatter(32000),
    maksymalne: currencyValueFormatter(32000),
  },
  {
    'opis stanowiska': 'Training content developer (specjalista ds. szkoleń)',
    'liczba osób': 1,
    mediana: currencyValueFormatter(9400),
    minimalne: '---',
    maksymalne: '---',
  },
  {
    'opis stanowiska': 'Technical editor',
    'liczba osób': 1,
    mediana: currencyValueFormatter(10500),
    minimalne: '---',
    maksymalne: '---',
  },
  {
    'opis stanowiska': 'Medical & Technical Writer',
    'liczba osób': 1,
    mediana: currencyValueFormatter(13000),
    minimalne: '---',
    maksymalne: '---',
  },
  {
    'opis stanowiska': 'Technical writer/web developer',
    'liczba osób': 1,
    mediana: currencyValueFormatter(25000),
    minimalne: '---',
    maksymalne: '---',
  },
];
