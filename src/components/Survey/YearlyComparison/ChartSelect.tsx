import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type ChartSelectProps = {
  handleChange: (event: SelectChangeEvent) => void;
  values: string[];
  selectedValue: string;
};

export default function ChartSelect({
  handleChange,
  values,
  selectedValue,
}: ChartSelectProps) {
  const label = 'Pytanie';

  return (
    <FormControl fullWidth>
      <InputLabel id="chart-select-label">{label}</InputLabel>
      <Select
        labelId="chart-select-label"
        id="chart-select"
        value={selectedValue}
        label={label}
        onChange={handleChange}
      >
        {values.map((value, idx) => (
          <MenuItem value={value} key={idx}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
