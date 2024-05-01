import { SurveyBarChartProps } from '@site/src/components/Survey/SurveyBarChart';
import { SurveyTableProps } from '@site/src/components/Survey/SurveyTable';
import {
  getBarChartDataForQuestionWithCommaSeparatedValues,
  getEarningsForMatchingAnswer,
  getNumberOfPeopleAndEarnings,
} from '@site/src/components/Survey/helpers';
import { Dataset, Question } from '@site/src/components/Survey/types';
import rawData from './rawData.json';

const professionalTitlesNumbers = getNumberOfPeopleAndEarnings(
  'Który opis najbardziej pasuje do wykonywanej przez Ciebie pracy?',
  rawData,
  'opis stanowiska'
);

export const professionalTitlesNumbersTableProps: SurveyTableProps = {
  dataset: professionalTitlesNumbers,
  question: 'Który opis najbardziej pasuje do wykonywanej przez Ciebie pracy?',
};

export const trainingBarChartDataset =
  getBarChartDataForQuestionWithCommaSeparatedValues(
    'Jakie masz przygotowanie do pracy w branży?',
    rawData
  );

export const trainingBarChartProps: SurveyBarChartProps = {
  dataset: trainingBarChartDataset.filter((i) => i.count > 1),
  question: 'Jakie masz przygotowanie do pracy w branży?',
  totalNumberOfResponses: rawData.length,
};

export const itcqfTableProps: SurveyTableProps = {
  dataset: trainingBarChartDataset.filter((i) => i.response.includes('ITCQF')),
  question: 'Jakie masz przygotowanie do pracy w branży?',
};

export const trainingTableProps: SurveyTableProps = {
  dataset: trainingBarChartDataset.filter((i) => i.count > 1),
  question: 'Jakie masz przygotowanie do pracy w branży?',
};

function getEarningsForQuestion(question: Question): Dataset {
  const results: Dataset = [];

  const uniqueAnswers = Array.from(
    new Set(rawData.map((response) => response[question]))
  );

  for (const answer of uniqueAnswers) {
    const { average, median, length } = getEarningsForMatchingAnswer(
      question,
      answer as string,
      rawData
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
  dataset: experienceAndEarnings,
  question: 'Ile wynosi Twój staż pracy w branży komunikacji technicznej?',
};

const educationEarnings = getEarningsForQuestion(
  'Jakie jest Twoje główne wykształcenie?'
);

export const educationEarningsTableProps: SurveyTableProps = {
  dataset: educationEarnings,
  question: 'Jakie jest Twoje główne wykształcenie?',
};
