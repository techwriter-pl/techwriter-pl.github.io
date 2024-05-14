import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import ChartWrapper from './ChartWrapper';
import ColumnSortButton from './ColumnSortButton';
import SurveyAnswerList from './SurveyAnswerList';
import { useIsMobile } from './helpers';
import { Dataset, Question } from './types';

export type SurveyTableProps = {
  dataset: Dataset;
  title: Question;
};

function getDisplayLabel(label: string) {
  switch (label) {
    case 'response':
      return 'Odpowiedź';
    case 'count':
      return 'Liczba osób';
    default:
      return label;
  }
}

function zlotyToNumber(zlotyString: string) {
  const cleanedUpString = zlotyString.replace(/[^0-9]/g, '');
  const valueAsNumber = parseInt(cleanedUpString);

  return valueAsNumber;
}

export default function SurveyTable({ dataset, title }: SurveyTableProps) {
  const isMobile = useIsMobile();
  const [sortSettings, setSortSettings] = useState({
    sortLabel: undefined,
    sortDescending: false,
  });
  const [dataToDisplay, setDataToDisplay] = useState(dataset);

  function handleSort(label: string) {
    setSortSettings((currentSortSettings) => ({
      sortLabel: label,
      sortDescending: !currentSortSettings.sortDescending,
    }));
  }

  useEffect(() => {
    // pensjonatus: I apologize for this sort function
    const copyOfDataset = [...dataset];
    copyOfDataset.sort((a, b) => {
      const aValue = a[sortSettings.sortLabel];
      const bValue = b[sortSettings.sortLabel];
      const multiplier = sortSettings.sortDescending ? 1 : -1;
      const numericCompare = (left, right) =>
        (left > right ? -1 : 1) * multiplier;

      if (
        typeof aValue === 'string' &&
        typeof bValue === 'string' &&
        aValue.endsWith('zł')
      ) {
        return numericCompare(zlotyToNumber(aValue), zlotyToNumber(bValue));
      }

      return numericCompare(aValue, bValue);
    });
    setDataToDisplay(copyOfDataset);
  }, [sortSettings]);

  if (isMobile) {
    return <SurveyAnswerList data={dataToDisplay} title={title} />;
  }

  return (
    <TableContainer component={ChartWrapper} title={title}>
      <Table aria-label="tabela ze statystyką dotyczącą pytania" size="small">
        <TableHead>
          <TableRow>
            {Object.keys(dataToDisplay[0]).map((label, headerItemIndex) => (
              <TableCell key={headerItemIndex}>
                <ColumnSortButton
                  label={getDisplayLabel(label)}
                  isActive={sortSettings.sortLabel === label}
                  isSortingDescending={sortSettings.sortDescending}
                  onClick={handleSort}
                />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {dataToDisplay.map((row, rowIndex) => (
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
