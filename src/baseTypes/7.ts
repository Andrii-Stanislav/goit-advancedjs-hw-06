/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

export enum DayOfWeek {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
}

export function isWeekend(day: DayOfWeek): boolean {
  return day === DayOfWeek.SATURDAY || day === DayOfWeek.SUNDAY;
}

export function isWeekendV2(day: DayOfWeek): boolean {
  return [DayOfWeek.SATURDAY, DayOfWeek.SUNDAY].includes(day);
}
