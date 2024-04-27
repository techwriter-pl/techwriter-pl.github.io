import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import SurveyAnswerList from './SurveyAnswerList';
import { useIsMobile } from './helpers';
import { ColumnQuestion } from './types';

type SurveyTableProps = {
  data: ColumnQuestion;
  question: string;
};

export default function SurveyTable({ data, question }: SurveyTableProps) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <SurveyAnswerList data={data} question={question} />;
  }

  return (
    <TableContainer component={Paper} sx={{ p: 1, my: 2 }}>
      <Typography variant="subtitle1">{question}</Typography>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="tabela ze statystyką dotyczącą pytania"
        size="small"
      >
        <TableHead>
          <TableRow>
            {Object.keys(data[0]).map((label) => (
              <TableCell key={label}>{label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {Object.values(row).map((value) => (
                <TableCell>{value}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
