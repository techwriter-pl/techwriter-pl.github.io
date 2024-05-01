import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import ChartWrapper from './ChartWrapper';
import SurveyAnswerList from './SurveyAnswerList';
import { useIsMobile } from './helpers';
import { Dataset, Question } from './types';

export type SurveyTableProps = {
  dataset: Dataset;
  question: Question;
};

export default function SurveyTable({ dataset, question }: SurveyTableProps) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <SurveyAnswerList data={dataset} question={question} />;
  }

  return (
    <TableContainer component={ChartWrapper}>
      <Typography variant="subtitle1">{question}</Typography>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="tabela ze statystyką dotyczącą pytania"
        size="small"
      >
        <TableHead>
          <TableRow>
            {Object.keys(dataset[0]).map((label, headerItemIndex) => (
              <TableCell key={headerItemIndex}>{label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {dataset.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {Object.values(row).map((value, cellIndex) => (
                <TableCell key={cellIndex}>{value}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
