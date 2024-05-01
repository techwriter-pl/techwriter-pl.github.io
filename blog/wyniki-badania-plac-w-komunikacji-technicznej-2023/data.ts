import { SurveyBarChartProps } from '@site/src/components/Survey/SurveyBarChart';
import { SurveyPieChartProps } from '@site/src/components/Survey/SurveyPieChart';
import { SurveyTableProps } from '@site/src/components/Survey/SurveyTable';
import {
  getBarChartDataForQuestionWithCommaSeparatedValues,
  getEarningsForQuestion,
  getNumberOfPeopleAndEarnings,
  getPieChartDataset,
} from '@site/src/components/Survey/helpers';
import rawData from './rawData.json';

// At the time of creating this data set, there is not proper support for Typescript in .mdx
// so using a .ts file helps us catch type errors

const professionalTitlesNumbers = getNumberOfPeopleAndEarnings(
  'Który opis najbardziej pasuje do wykonywanej przez Ciebie pracy?',
  rawData,
  'opis stanowiska'
);

export const professionalTitlesNumbersTableProps: SurveyTableProps = {
  dataset: professionalTitlesNumbers,
  title: 'Który opis najbardziej pasuje do wykonywanej przez Ciebie pracy?',
};

export const trainingBarChartDataset =
  getBarChartDataForQuestionWithCommaSeparatedValues(
    'Jakie masz przygotowanie do pracy w branży?',
    rawData
  );

export const trainingBarChartProps: SurveyBarChartProps = {
  dataset: trainingBarChartDataset.filter((i) => i.count > 1),
  title: 'Jakie masz przygotowanie do pracy w branży?',
  totalNumberOfResponses: rawData.length,
};

export const itcqfTableProps: SurveyTableProps = {
  dataset: trainingBarChartDataset.filter((i) => i.response.includes('ITCQF')),
  title: 'Jakie masz przygotowanie do pracy w branży?',
};

export const trainingTableProps: SurveyTableProps = {
  dataset: trainingBarChartDataset.filter((i) => i.count > 1),
  title: 'Jakie masz przygotowanie do pracy w branży?',
};

const experienceAndEarnings = getEarningsForQuestion(
  'Ile wynosi Twój staż pracy w branży komunikacji technicznej?',
  rawData
);

export const experienceAndEarningsTableProps: SurveyTableProps = {
  dataset: experienceAndEarnings,
  title: 'Ile wynosi Twój staż pracy w branży komunikacji technicznej?',
};

const educationEarnings = getEarningsForQuestion(
  'Jakie jest Twoje główne wykształcenie?',
  rawData
);

export const educationEarningsTableProps: SurveyTableProps = {
  dataset: educationEarnings,
  title: 'Jakie jest Twoje główne wykształcenie?',
};

export const companyTypePieChartProps: SurveyPieChartProps = {
  dataset: getPieChartDataset('W jakiego rodzaju firmie pracujesz?', rawData),
  title: 'W jakiego rodzaju firmie pracujesz?',
};

export const companyTableProps: SurveyTableProps = {
  dataset: getEarningsForQuestion(
    'W jakiego rodzaju firmie pracujesz?',
    rawData
  ),
  title: 'W jakiego rodzaju firmie pracujesz?',
};

export const companySizePieChartProps: SurveyPieChartProps = {
  dataset: getPieChartDataset('Jak duża jest Twoja firma?', rawData),
  title: 'Jak duża jest Twoja firma?',
  hideArcLabels: true,
};

export const companySizeTableProps: SurveyTableProps = {
  dataset: getEarningsForQuestion('Jak duża jest Twoja firma?', rawData),
  title: 'Jak duża jest Twoja firma?',
};
