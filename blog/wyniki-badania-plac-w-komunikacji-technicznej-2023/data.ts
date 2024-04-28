import {
  currencyValueFormatter,
  median,
} from '@site/src/components/Survey/helpers';
import rawData from './rawData.json';
import { SurveyBarChartProps } from '@site/src/components/Survey/SurveyBarChart';

type ProfessionalTitlesDataPoint = {
  'opis stanowiska': string;
  'liczba osób': number;
  mediana: string;
  minimalne: string;
  maksymalne: string;
};

function getProfessionalTitlesNumbers(): ProfessionalTitlesDataPoint[] {
  const results: ProfessionalTitlesDataPoint[] = [];

  for (const item of rawData) {
    const value =
      item['Który opis najbardziej pasuje do wykonywanej przez Ciebie pracy?'];
    const matchingResult = results.find(
      (result) => result['opis stanowiska'] === value
    );

    if (!matchingResult) {
      const earningsForMatchingResponses = rawData
        .filter(
          (response) =>
            response[
              'Który opis najbardziej pasuje do wykonywanej przez Ciebie pracy?'
            ] === value
        )
        .map(
          (i) => i['Ile wynosi Twoje miesięczne wynagrodzenie brutto?']
        ) as number[];

      const mediana = currencyValueFormatter(
        median(earningsForMatchingResponses)
      );

      const minimalne = currencyValueFormatter(
        Math.min(...earningsForMatchingResponses)
      );

      const maksymalne = currencyValueFormatter(
        Math.max(...earningsForMatchingResponses)
      );

      results.push({
        'opis stanowiska': value,
        'liczba osób': earningsForMatchingResponses.length,
        mediana,
        minimalne: minimalne === mediana ? '---' : minimalne,
        maksymalne: maksymalne === mediana ? '---' : maksymalne,
      });
    }
  }

  results.sort((a, b) => (a['liczba osób'] > b['liczba osób'] ? -1 : 1));

  return results;
}

export const professionalTitlesNumbers = getProfessionalTitlesNumbers();

function getBarChartDataForQuestionWithCommaSeparatedValues(
  question: string
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

  return results.filter((i) => i.count > 1);
}

const trainingBarChartDataset =
  getBarChartDataForQuestionWithCommaSeparatedValues(
    'Jakie masz przygotowanie do pracy w branży?'
  );

export const trainingBarChartProps: SurveyBarChartProps = {
  dataset: trainingBarChartDataset,
  question: 'Jakie masz przygotowanie do pracy w branży?',
  totalNumberOfResponses: rawData.length,
};
