import useMediaQuery from '@mui/material/useMediaQuery';

export function useIsMobile() {
  return useMediaQuery('(max-width: 996px)');
}

export function currencyValueFormatter(value: number | null) {
  return new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
    maximumFractionDigits: 0,
  }).format(value);
}
