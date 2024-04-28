import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { BarChart, BarChartProps } from '@mui/x-charts/BarChart';
import { ResponseWithCount } from './types';

export type SurveyBarChartProps = {
  dataset: ResponseWithCount[];
  question: string;
  totalNumberOfResponses: number;
};

export default function SurveyBarChart({
  question,
  dataset,
  totalNumberOfResponses,
}: SurveyBarChartProps) {
  const valueFormatter = (value) =>
    `${value} (${Math.round((value / totalNumberOfResponses) * 100)}%)`;

  return (
    <Paper
      sx={{ p: 1, my: 2, display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <Typography variant="subtitle1">{question}</Typography>
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: 'band', dataKey: 'response' }]}
        series={[{ dataKey: 'count', valueFormatter }]}
        yAxis={[
          {
            label: 'liczba osób',
          },
        ]}
        height={500}
      />
    </Paper>
  );
}
