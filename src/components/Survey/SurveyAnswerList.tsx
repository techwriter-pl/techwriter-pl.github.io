import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { ColumnQuestion } from './types';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

type SurveyAnswerListProps = {
  data: ColumnQuestion;
  question: string;
};

export default function SurveyAnswerList({
  data,
  question,
}: SurveyAnswerListProps) {
  return (
    <Paper
      sx={{ p: 1, my: 2, gap: 2, display: 'flex', flexDirection: 'column' }}
    >
      <Typography variant="subtitle1">{question}</Typography>
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
    </Paper>
  );
}
