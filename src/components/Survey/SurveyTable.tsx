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
  data: Dataset;
  question: Question;
};

export default function SurveyTable({ data, question }: SurveyTableProps) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <SurveyAnswerList data={data} question={question} />;
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
            {Object.keys(data[0]).map((label, headerItemIndex) => (
              <TableCell key={headerItemIndex}>{label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
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
