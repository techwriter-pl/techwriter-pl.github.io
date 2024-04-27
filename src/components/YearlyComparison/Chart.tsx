import Box from '@mui/material/Box';
import { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { BarChart } from '@mui/x-charts/BarChart';
import { useState } from 'react';
import ChartSelect from './ChartSelect';
import { yearlyStats } from './data';

export default function YearlyComparisonChart() {
  const questions = Object.keys(yearlyStats);
  const [selectedQuestion, setSelectedQuestion] = useState(questions[0]);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedQuestion(event.target.value as string);
  };

  // const currencyValueFormatter = (value: number | null) => `${value} zł`;
  const currencyValueFormatter = (value: number | null) =>
    new Intl.NumberFormat('pl-PL', {
      style: 'currency',
      currency: 'PLN',
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <Box
      sx={{
        py: 2,
      }}
    >
      <Typography variant="h5" component="div">
        Porównanie!
      </Typography>
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
              questions.indexOf(selectedQuestion) === 0
                ? undefined
                : currencyValueFormatter,
          },
        ]}
        height={400}
      />
    </Box>
  );
}
