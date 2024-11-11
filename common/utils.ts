export function getDefaultYear(currentDate: Date): number {
  const currentYear = currentDate.getFullYear();
  const previousYear = currentYear - 1;
  const DECEMBER = 11;
  return currentDate.getMonth() < DECEMBER ? previousYear : currentYear;
}
