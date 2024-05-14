import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import ChartWrapper from './ChartWrapper';
import { percentageFormatter } from './helpers';
import { NumericQuestion as NumericDataset, Question } from './types';

export type SurveyPieChartProps = {
  dataset: NumericDataset;
  title: Question;
  hideArcLabels?: boolean;
};

export default function SurveyPieChart({
  dataset,
  title,
  hideArcLabels,
}: SurveyPieChartProps) {
  const total = Object.values(dataset).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return (
    <ChartWrapper title={title}>
      <PieChart
        series={[
          {
            data: Object.entries(dataset).map(([label, value], index) => ({
              id: index,
              label,
              value,
            })),
            arcLabel: hideArcLabels
              ? undefined
              : (item) => percentageFormatter(item.value, total),
          },
        ]}
        height={300}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: 'white',
            fontWeight: 'bold',
          },
        }}
      />
    </ChartWrapper>
  );
}
