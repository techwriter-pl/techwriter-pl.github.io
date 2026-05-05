import { summary2025 } from '@site/blog/wyniki-badania-plac-w-komunikacji-technicznej-2025/data';

const years = [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025] as const;

type Year = (typeof years)[number];
type YearlyStat = Record<Year, number>;

const questions = [
  'Mediana wynagrodzeń brutto',
  'Średnie wynagrodzenie brutto',
  'Najniższe wynagrodzenie brutto',
  'Najwyższe wynagrodzenie brutto',
  'Liczba odpowiedzi',
] as const;

type YearlyStats = {
  [K in (typeof questions)[number]]: YearlyStat;
};

export type StatsForSingleYear = {
  [K in (typeof questions)[number]]: number;
};

export const yearlyStats: YearlyStats = {
  'Mediana wynagrodzeń brutto': {
    2017: 6000,
    2018: 7000,
    2019: 8000,
    2020: 8700,
    2021: 9000,
    2022: 10500,
    2023: 12000,
    2024: 12500,
    2025: summary2025['Mediana wynagrodzeń brutto'],
  },
  'Średnie wynagrodzenie brutto': {
    2017: 6969,
    2018: 7352,
    2019: 8877,
    2020: 9131,
    2021: 10018,
    2022: 11461,
    2023: 13427,
    2024: 14441,
    2025: summary2025['Średnie wynagrodzenie brutto'],
  },
  'Najniższe wynagrodzenie brutto': {
    2017: 1970,
    2018: 3000,
    2019: 3500,
    2020: 3000,
    2021: 4000,
    2022: 4500,
    2023: 5000,
    2024: 5400,
    2025: summary2025['Najniższe wynagrodzenie brutto'],
  },
  'Najwyższe wynagrodzenie brutto': {
    2017: 15000,
    2018: 16000,
    2019: 20000,
    2020: 20500,
    2021: 21500,
    2022: 31000,
    2023: 32000,
    2024: 35000,
    2025: summary2025['Najwyższe wynagrodzenie brutto'],
  },
  'Liczba odpowiedzi': {
    2017: 70,
    2018: 80,
    2019: 103,
    2020: 111,
    2021: 104,
    2022: 110,
    2023: 133,
    2024: 132,
    2025: summary2025['Liczba odpowiedzi'],
  },
};
