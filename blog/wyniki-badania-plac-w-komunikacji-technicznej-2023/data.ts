import { SurveyBarChartProps } from '@site/src/components/Survey/SurveyBarChart';
import { SurveyTableProps } from '@site/src/components/Survey/SurveyTable';
import {
  currencyValueFormatter,
  getMedian,
} from '@site/src/components/Survey/helpers';
import { Dataset, Question } from '@site/src/components/Survey/types';
import rawData from './rawData.json';

type ProfessionalTitlesDataPoint = {
  'opis stanowiska': string;
  'liczba osób': number;
  mediana: string;
  minimalne: string;
  maksymalne: string;
};

function getEarningsForMatchingAnswer(
  question: Question,
  answer: string
): {
  length: number;
  minimum: string;
  maximum: string;
  median: string;
  average: string;
} {
  const earnings = rawData
    .filter((response) => response[question] === answer)
    .map(
      (i) => i['Ile wynosi Twoje miesięczne wynagrodzenie brutto?']
    ) as number[];

  const sum = earnings.reduce((a, b) => a + b, 0);
  const average = currencyValueFormatter(sum / earnings.length || 0);
  const median = currencyValueFormatter(getMedian(earnings));
  const minimum = currencyValueFormatter(Math.min(...earnings));
  const maximum = currencyValueFormatter(Math.max(...earnings));

  return {
    length: earnings.length,
    average,
    maximum,
    minimum,
    median,
  };
}

function getProfessionalTitlesNumbers(): ProfessionalTitlesDataPoint[] {
  const results: ProfessionalTitlesDataPoint[] = [];
  const question: Question =
    'Który opis najbardziej pasuje do wykonywanej przez Ciebie pracy?';

  for (const item of rawData) {
    const value = item[question];
    const matchingResult = results.find(
      (result) => result['opis stanowiska'] === value
    );

    if (!matchingResult) {
      const { median, minimum, maximum, length } = getEarningsForMatchingAnswer(
        question,
        value
      );

      results.push({
        'opis stanowiska': value,
        'liczba osób': length,
        mediana: median,
        minimalne: minimum === median ? '---' : minimum,
        maksymalne: maximum === median ? '---' : maximum,
      });
    }
  }

  results.sort((a, b) => (a['liczba osób'] > b['liczba osób'] ? -1 : 1));

  return results;
}

const professionalTitlesNumbers = getProfessionalTitlesNumbers();

export const professionalTitlesNumbersTableProps: SurveyTableProps = {
  data: professionalTitlesNumbers,
  question: 'Który opis najbardziej pasuje do wykonywanej przez Ciebie pracy?',
};

function getBarChartDataForQuestionWithCommaSeparatedValues(
  question: Question
): SurveyBarChartProps['dataset'] {
  const results: SurveyBarChartProps['dataset'] = [];

  for (const value of rawData.map((response) => response[question])) {
    const subValues = (value as string).split(',');
    for (const subValue of subValues) {
      const cleanSubValue = subValue.trim();
      const matchingResultValue = results.find(
        (existing) => existing['response'] === cleanSubValue
      );
      if (matchingResultValue) {
        matchingResultValue['count'] =
          (matchingResultValue['count'] as number) + 1;
      } else {
        results.push({
          response: cleanSubValue,
          count: 1,
        });
      }
    }
  }

  results.sort((a, b) => (a.count > b.count ? -1 : 1));

  return results;
}

export const trainingBarChartDataset =
  getBarChartDataForQuestionWithCommaSeparatedValues(
    'Jakie masz przygotowanie do pracy w branży?'
  );

export const trainingBarChartProps: SurveyBarChartProps = {
  dataset: trainingBarChartDataset.filter((i) => i.count > 1),
  question: 'Jakie masz przygotowanie do pracy w branży?',
  totalNumberOfResponses: rawData.length,
};

function getEarningsForQuestion(question: Question): Dataset {
  const results: Dataset = [];

  const uniqueAnswers = Array.from(
    new Set(rawData.map((response) => response[question]))
  );

  for (const answer of uniqueAnswers) {
    const { average, median, length } = getEarningsForMatchingAnswer(
      question,
      answer as string
    );
    results.push({
      [question]: answer,
      'liczba osób': length,
      średnia: average,
      mediana: median,
    });
  }

  return results;
}

const experienceAndEarnings = getEarningsForQuestion(
  'Ile wynosi Twój staż pracy w branży komunikacji technicznej?'
);

export const experienceAndEarningsTableProps: SurveyTableProps = {
  data: experienceAndEarnings,
  question: 'Ile wynosi Twój staż pracy w branży komunikacji technicznej?',
};

const educationEarnings = getEarningsForQuestion(
  'Jakie jest Twoje główne wykształcenie?'
);

export const educationEarningsTableProps: SurveyTableProps = {
  data: educationEarnings,
  question: 'Jakie jest Twoje główne wykształcenie?',
};
