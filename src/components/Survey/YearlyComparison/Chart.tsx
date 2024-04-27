import Box from '@mui/material/Box';
import { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BarChart } from '@mui/x-charts/BarChart';
import { useState } from 'react';
import { currencyValueFormatter } from '../helpers';
import ChartSelect from './ChartSelect';
import { yearlyStats } from './data';

export default function YearlyComparisonChart() {
  const questions = Object.keys(yearlyStats);
  const [selectedQuestion, setSelectedQuestion] = useState(questions[0]);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedQuestion(event.target.value as string);
  };

  return (
    <Stack
      sx={{
        py: 2,
        flexDirection: 'column',
        gap: 2,
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
    </Stack>
  );
}
