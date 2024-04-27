import { PieChart } from '@mui/x-charts/PieChart';
import { NumericQuestion } from './types';

type SurveyPieChartProps = {
  data: NumericQuestion;
};

export default function SurveyPieChart({ data }: SurveyPieChartProps) {
  return (
    <PieChart
      series={[
        {
          data: Object.entries(data).map(([label, value], index) => ({
            id: index,
            label,
            value,
          })),
          innerRadius: 30,
          outerRadius: 100,
          paddingAngle: 5,
          cornerRadius: 5,
          startAngle: -90,
          endAngle: 180,
          cx: 150,
          cy: 150,
        },
      ]}
      height={200}
    />
  );
}
