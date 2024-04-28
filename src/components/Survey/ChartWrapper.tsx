import Paper, { PaperProps } from '@mui/material/Paper';

export default function ChartWrapper({ children }: PaperProps) {
  return (
    <Paper
      sx={{ p: 1, my: 2, display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      {children}
    </Paper>
  );
}
