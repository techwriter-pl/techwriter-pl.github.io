import useMediaQuery from '@mui/material/useMediaQuery';
import { SurveyBarChartProps } from './SurveyBarChart';
import { SurveyPieChartProps } from './SurveyPieChart';
import {
  Dataset,
  NumberOfPeopleAndEarnings,
  Question,
  ResponseWithCount,
} from './types';

export function useIsMobile() {
  return useMediaQuery('(max-width: 1445px)');
}

export function currencyFormatter(value: number | null) {
  return new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
    maximumFractionDigits: 0,
    useGrouping: true,
  }).format(value);
}

export function percentageFormatter(value: number, total) {
  return `${value} (${Math.round((value / total) * 100)}%)`;
}

function getMedian(values: number[]): number {
  // Handle empty array or undefined
  if (!values || values.length === 0) {
    throw new Error('Cannot calculate median of an empty array');
  }

  // Create a copy and sort the array
  const sorted = [...values].sort((a, b) => a - b);
  const length = sorted.length;

  // If odd length, return middle value
  if (length % 2 === 1) {
    return sorted[Math.floor(length / 2)];
  }

  // If even length, return average of two middle values
  const midIndex = length / 2;
  return (sorted[midIndex - 1] + sorted[midIndex]) / 2;
}

type SortFunction = (a: ResponseWithCount, b: ResponseWithCount) => number;

function getSurveyBarChartDataset(
  allResponses: string[],
  customSortFunction?: SortFunction
): SurveyBarChartProps['dataset'] {
  const results: SurveyBarChartProps['dataset'] = [];

  for (const response of allResponses) {
    const matchingResultValue = results.find(
      (existing) => existing['response'] === response
    );

    if (matchingResultValue) {
      matchingResultValue['count'] =
        (matchingResultValue['count'] as number) + 1;
    } else {
      results.push({
        response,
        count: 1,
      });
    }
  }

  if (customSortFunction) {
    results.sort(customSortFunction);
  } else {
    results.sort((a, b) => (a.count > b.count ? -1 : 1));
  }

  return results;
}

export function getBarChartDataForQuestion(
  question: Question,
  allData: object[],
  commaSeparatedSubValues?: boolean,
  customSortFunction?: SortFunction
): SurveyBarChartProps['dataset'] {
  const allResponses = allData.map((response) => response[question]);

  if (!commaSeparatedSubValues) {
    return getSurveyBarChartDataset(allResponses, customSortFunction);
  }

  const allSubResponses = allResponses
    .map((subValue) => subValue.split(','))
    .flat()
    .map((item) => item.trim());

  return getSurveyBarChartDataset(allSubResponses, customSortFunction);
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
        minimalne: minimum,
        maksymalne: maximum,
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

  results.sort((a, b) => (a['liczba osób'] > b['liczba osób'] ? -1 : 1));

  return results;
}
