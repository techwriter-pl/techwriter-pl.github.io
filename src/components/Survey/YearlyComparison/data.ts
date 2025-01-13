type YearlyStat = {
  2017: number;
  2018: number;
  2019: number;
  2020: number;
  2021: number;
  2022: number;
  2023: number;
  2024: number;
};

type Stats = {
  'Mediana wynagrodzeń brutto': YearlyStat;
  'Średnie wynagrodzenie brutto': YearlyStat;
  'Najniższe wynagrodzenie brutto': YearlyStat;
  'Najwyższe wynagrodzenie brutto': YearlyStat;
  'Liczba odpowiedzi': YearlyStat;
};

export const yearlyStats: Stats = {
  'Mediana wynagrodzeń brutto': {
    2017: 6000,
    2018: 7000,
    2019: 8000,
    2020: 8700,
    2021: 9000,
    2022: 10500,
    2023: 12000,
    2024: 12500,
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
  },
  'Najwyższe wynagrodzenie brutto': {
    2017: 15000,
    2018: 16000,
    2019: 20000,
    2020: 20500,
    2021: 21500,
    2022: 31000,
    2023: 32000,
    2024: 65555,
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
  },
};
