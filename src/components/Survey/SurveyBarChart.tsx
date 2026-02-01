import { BarChart } from '@mui/x-charts/BarChart';
import ChartWrapper from './ChartWrapper';
import { percentageFormatter } from './helpers';
import { Question, ResponseWithCount } from './types';

export type SurveyBarChartProps = {
  dataset: ResponseWithCount[];
  title: Question;
  totalNumberOfResponses: number;
};

export default function SurveyBarChart({
  title,
  dataset,
  totalNumberOfResponses,
}: SurveyBarChartProps) {
  const valueFormatter = (value) =>
    percentageFormatter(value, totalNumberOfResponses);

  return (
    <ChartWrapper title={title}>
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: 'band', dataKey: 'response' }]}
        series={[{ dataKey: 'count', valueFormatter }]}
        yAxis={[
          {
            label: 'Liczba osób',
          },
        ]}
        height={500}
      />
    </ChartWrapper>
  );
}
