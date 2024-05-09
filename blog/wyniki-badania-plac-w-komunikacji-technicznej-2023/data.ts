import { SurveyBarChartProps } from '@site/src/components/Survey/SurveyBarChart';
import { SurveyPieChartProps } from '@site/src/components/Survey/SurveyPieChart';
import { SurveyTableProps } from '@site/src/components/Survey/SurveyTable';
import {
  getBarChartDataForQuestion,
  getEarningsForQuestion,
  getNumberOfPeopleAndEarnings,
  getPieChartDataset,
} from '@site/src/components/Survey/helpers';
import rawData from './rawData.json';

// At the time of creating this data set, there is not proper support for Typescript in .mdx
// so using a .ts file helps us catch type errors

export const professionalTitlesNumbersTableProps: SurveyTableProps = {
  dataset: getNumberOfPeopleAndEarnings(
    'Który opis najbardziej pasuje do wykonywanej przez Ciebie pracy?',
    rawData,
    'opis stanowiska'
  ),
  title: 'Który opis najbardziej pasuje do wykonywanej przez Ciebie pracy?',
};

export const trainingBarChartDataset = getBarChartDataForQuestion(
  'Jakie masz przygotowanie do pracy w branży?',
  rawData,
  true
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

export const experienceAndEarningsTableProps: SurveyTableProps = {
  dataset: getEarningsForQuestion(
    'Ile wynosi Twój staż pracy w branży komunikacji technicznej?',
    rawData
  ),
  title: 'Ile wynosi Twój staż pracy w branży komunikacji technicznej?',
};

export const satisfactionAndEarningsTableProps: SurveyTableProps = {
  dataset: getEarningsForQuestion(
    'Jak bardzo jesteś zadowolony/a ze swojej pracy w skali od 1 do 5?',
    rawData
  ),
  title:  'Jak bardzo jesteś zadowolony/a ze swojej pracy w skali od 1 do 5?'
}

export const educationEarningsTableProps: SurveyTableProps = {
  dataset: getEarningsForQuestion(
    'Jakie jest Twoje główne wykształcenie?',
    rawData
  ),
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

export const contractTypeTableProps: SurveyTableProps = {
  dataset: getEarningsForQuestion(
    'Jaka jest Twoja forma zatrudnienia?',
    rawData
  ),
  title: 'Jaka jest Twoja forma zatrudnienia?',
};

export const taxBreakPieChartProps: SurveyPieChartProps = {
  dataset: getPieChartDataset(
    'Czy dla Twojego wynagrodzenia zastosowanie mają autorskie koszty uzyskania przychodu (tzw. tax break)?',
    rawData
  ),
  title:
    'Czy dla Twojego wynagrodzenia zastosowanie mają autorskie koszty uzyskania przychodu (tzw. tax break)?',
};

export const documentationTypeChartProps: SurveyTableProps = {
  dataset: getBarChartDataForQuestion(
    'Jakiego rodzaju dokumentację tworzysz?',
    rawData,
    true
  ),
  title: 'Jakiego rodzaju dokumentację tworzysz?',
};

export const regionEarnings: SurveyTableProps = {
  dataset: getEarningsForQuestion(
    'W którym województwie jest siedziba Twojej firmy?',
    rawData
  ),
  title: 'W którym województwie jest siedziba Twojej firmy?',
};

export const satisfactionBarChartProps: SurveyBarChartProps = {
  dataset: getBarChartDataForQuestion(
    'Jak bardzo jesteś zadowolony/a ze swojej pracy w skali od 1 do 5?',
    rawData,
    false,
    (a, b) => (a.response > b.response ? 1 : -1)
  ),
  title: 'Jak bardzo jesteś zadowolony/a ze swojej pracy w skali od 1 do 5?',
  totalNumberOfResponses: rawData.length,
};

export const remoteWorkPieChartProps: SurveyPieChartProps = {
  dataset: getPieChartDataset('Czy pracujesz zdalnie?', rawData),
  title: 'Czy pracujesz zdalnie?',
};
