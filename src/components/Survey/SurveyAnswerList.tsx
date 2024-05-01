import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ChartWrapper from './ChartWrapper';
import { Dataset } from './types';

type SurveyAnswerListProps = {
  data: Dataset;
  title: string;
};

export default function SurveyAnswerList({
  data,
  title,
}: SurveyAnswerListProps) {
  return (
    <ChartWrapper
      sx={{ p: 1, my: 2, gap: 2, display: 'flex', flexDirection: 'column' }}
      title={title}
    >
      {data.map((row, index) => (
        <Stack key={index} gap={1}>
          {Object.entries(row).map(([label, value], index) => (
            <Box key={index} sx={{ fontWeight: index === 0 ? 700 : 500 }}>
              {index > 0 ? `${label}: ` : ''}
              {value}
            </Box>
          ))}
        </Stack>
      ))}
    </ChartWrapper>
  );
}
