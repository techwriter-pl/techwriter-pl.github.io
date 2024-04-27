type YearlyStat = {
  2017: number;
  2018: number;
  2019: number;
  2020: number;
  2021: number;
  2022: number;
  2023: number;
};

type Stats = {
  'Liczba odpowiedzi': YearlyStat;
  'Średnie wynagrodzenie brutto': YearlyStat;
  'Mediana wynagrodzeń brutto': YearlyStat;
  'Najniższe wynagrodzenie brutto': YearlyStat;
  'Najwyższe wynagrodzenie brutto': YearlyStat;
};

export const yearlyStats: Stats = {
  'Liczba odpowiedzi': {
    2017: 70,
    2018: 80,
    2019: 103,
    2020: 111,
    2021: 104,
    2022: 110,
    2023: 133,
  },
  'Średnie wynagrodzenie brutto': {
    2017: 6969,
    2018: 7352,
    2019: 8877,
    2020: 9131,
    2021: 10018,
    2022: 11461,
    2023: 13427,
  },
  'Mediana wynagrodzeń brutto': {
    2017: 6000,
    2018: 7000,
    2019: 8000,
    2020: 8700,
    2021: 9000,
    2022: 10500,
    2023: 12000,
  },
  'Najniższe wynagrodzenie brutto': {
    2017: 1970,
    2018: 3000,
    2019: 3500,
    2020: 3000,
    2021: 4000,
    2022: 4500,
    2023: 5000,
  },
  'Najwyższe wynagrodzenie brutto': {
    2017: 15000,
    2018: 16000,
    2019: 20000,
    2020: 20500,
    2021: 21500,
    2022: 31000,
    2023: 32000,
  },
};
