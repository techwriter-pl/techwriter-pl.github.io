import useMediaQuery from '@mui/material/useMediaQuery';
import { SurveyBarChartProps } from './SurveyBarChart';
import { Dataset, NumberOfPeopleAndEarnings, Question } from './types';
import { SurveyPieChartProps } from './SurveyPieChart';

export function useIsMobile() {
  return useMediaQuery('(max-width: 996px)');
}

export function currencyFormatter(value: number | null) {
  return new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
    maximumFractionDigits: 0,
  }).format(value);
}

export function percentageFormatter(value: number, total) {
  return `${value} (${Math.round((value / total) * 100)}%)`;
}

export function getMedian(values: number[]): number {
  if (values.length === 0) {
    throw new Error('Input array is empty');
  }

  // Sorting values, preventing original array
  // from being mutated.
  values = [...values].sort((a, b) => a - b);

  const half = Math.floor(values.length / 2);

  return values.length % 2
    ? values[half]
    : (values[half - 1] + values[half]) / 2;
}

export function getBarChartDataForQuestionWithCommaSeparatedValues(
  question: Question,
  allData: object[]
): SurveyBarChartProps['dataset'] {
  const results: SurveyBarChartProps['dataset'] = [];

  for (const value of allData.map((response) => response[question])) {
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

export function getEarningsForMatchingAnswer(
  question: Question,
  answer: string,
  allData: object[]
): {
  length: number;
  minimum: string;
  maximum: string;
  median: string;
  average: string;
} {
  const earnings = allData
    .filter((response) => response[question] === answer)
    .map(
      (i) => i['Ile wynosi Twoje miesięczne wynagrodzenie brutto?']
    ) as number[];

  const sum = earnings.reduce((a, b) => a + b, 0);
  const average = currencyFormatter(sum / earnings.length || 0);
  const median = currencyFormatter(getMedian(earnings));
  const minimum = currencyFormatter(Math.min(...earnings));
  const maximum = currencyFormatter(Math.max(...earnings));

  return {
    length: earnings.length,
    average,
    maximum,
    minimum,
    median,
  };
}

export function getNumberOfPeopleAndEarnings(
  question: Question,
  allData: object[],
  responseLabel: string
): NumberOfPeopleAndEarnings[] {
  const results: NumberOfPeopleAndEarnings[] = [];

  for (const item of allData) {
    const value = item[question];
    const matchingResult = results.find(
      (result) => result[responseLabel] === value
    );

    if (!matchingResult) {
      const { median, minimum, maximum, length } = getEarningsForMatchingAnswer(
        question,
        value,
        allData
      );

      results.push({
        [responseLabel]: value,
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

export function getPieChartDataset(
  question: Question,
  allData: object[]
): SurveyPieChartProps['dataset'] {
  const allResponses = allData.map((item) => item[question]);
  const uniqueResponses = new Set(allResponses);
  const responsesWithCount = Array.from(uniqueResponses).map((item) => [
    item,
    allResponses.filter((response) => response === item).length,
  ]);

  const result = Object.fromEntries(responsesWithCount);

  return result;
}

export function getEarningsForQuestion(
  question: Question,
  allData: object[]
): Dataset {
  const results: Dataset = [];

  const uniqueAnswers = Array.from(
    new Set(allData.map((response) => response[question]))
  );

  for (const answer of uniqueAnswers) {
    const { average, median, length } = getEarningsForMatchingAnswer(
      question,
      answer as string,
      allData
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
