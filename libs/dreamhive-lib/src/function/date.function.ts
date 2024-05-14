import dayjs, {Dayjs, ManipulateType, OptionType, QUnitType} from "dayjs";

import utc from 'dayjs/plugin/utc'
import localizeFormat from 'dayjs/plugin/localizedFormat'
import timezone from 'dayjs/plugin/timezone'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import isBetween from 'dayjs/plugin/isBetween'
import { RFC3339_DATE_FORMAT } from '../constant';

dayjs.extend(utc);
dayjs.extend(localizeFormat);
dayjs.extend(timezone);
dayjs.extend(isLeapYear);
dayjs.extend(isBetween);


export function getCurrentTimezone() {
  return dayjs.tz.guess();
}
export function setDayjsLocale(date?:string, currentFormat?: string) {
  return dayjs(date, currentFormat);
}

export function setDayjsLocaleWithTimezone(date?: string, currentFormat?: string) {
  return setDayjsLocale(date, currentFormat).tz(getCurrentTimezone())
}

export function getCurrentUTCDateTime(format?: string) {
  return setDayjsLocaleWithTimezone().utc().format(format);
}

export function convertToDayjsDate(date: string, format = RFC3339_DATE_FORMAT) {
  return setDayjsLocaleWithTimezone(date).format(format)
}

