import Paper, { PaperProps } from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

type ChartWrapperProps = PaperProps & {
  title: string;
};

export default function ChartWrapper({ children, title }: ChartWrapperProps) {
  return (
    <Paper
      sx={{ p: 1, my: 2, display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <Typography variant="subtitle1">{title}</Typography>
      {children}
    </Paper>
  );
}
