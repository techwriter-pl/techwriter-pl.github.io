import TableSortLabel from '@mui/material/TableSortLabel';

type ColumnSortButtonProps = {
  isActive: boolean;
  isSortingDescending: boolean;
  label: string;
  onClick: (label: string) => void;
};

export default function ColumnSortButton({
  isActive,
  isSortingDescending,
  label,
  onClick,
}: ColumnSortButtonProps) {
  return (
    <TableSortLabel
      sx={{ display: 'flex', gap: 1, fontSize: '1rem' }}
      onClick={() => onClick(label)}
      active={isActive}
      direction={isSortingDescending ? 'desc' : 'asc'}
    >
      {label}
    </TableSortLabel>
  );
}
