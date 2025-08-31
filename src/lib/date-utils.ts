export function isDateInFuture(inputDate: Date): boolean {
  if (isNaN(inputDate.getTime())) {
    throw new Error('Invalid date format');
  }

  const currentDate = new Date();
  return inputDate > currentDate;
}
