import { SelectChangeEvent } from '@mui/material/Select';
import { BarChart } from '@mui/x-charts/BarChart';
import { useState } from 'react';
import ChartWrapper from '../ChartWrapper';
import { currencyFormatter } from '../helpers';
import ChartSelect from './ChartSelect';
import { yearlyStats } from './data';

export default function YearlyComparisonChart() {
  const questions = Object.keys(yearlyStats);
  const [selectedQuestion, setSelectedQuestion] = useState(questions[0]);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedQuestion(event.target.value as string);
  };

  return (
    <ChartWrapper title="Porównaj wyniki ankiety rok do roku">
      <ChartSelect
        handleChange={handleChange}
        selectedValue={selectedQuestion}
        values={questions}
      />
      <BarChart
        xAxis={[
          {
            id: 'barCategories',
            data: Object.keys(yearlyStats[selectedQuestion]),
            scaleType: 'band',
          },
        ]}
        series={[
          {
            data: Object.values(yearlyStats[selectedQuestion]),
            valueFormatter:
              questions.indexOf(selectedQuestion) === questions.length - 1
                ? undefined
                : currencyFormatter,
          },
        ]}
        height={400}
      />
    </ChartWrapper>
  );
}
