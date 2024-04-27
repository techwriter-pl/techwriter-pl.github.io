import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { yearlyStats } from './data';
import { BarChart } from '@mui/x-charts/BarChart';

export default function YearlyComparisonChart() {
  return (
    <Box
      sx={{
        py: 2,
      }}
    >
      <Typography variant="h5" component="div">
        Porównanie!
      </Typography>
      <BarChart
        xAxis={[
          {
            id: 'barCategories',
            data: Object.keys(yearlyStats['Liczba odpowiedzi']),
            scaleType: 'band',
          },
        ]}
        series={[
          {
            data: Object.values(yearlyStats['Liczba odpowiedzi']),
          },
        ]}
        width={500}
        height={300}
      />
    </Box>
  );
}
