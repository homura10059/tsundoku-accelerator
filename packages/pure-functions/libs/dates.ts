import format from 'date-fns/format'
import fromUnixTime from 'date-fns/fromUnixTime'
import utcToZonedTime from 'date-fns-tz/utcToZonedTime'

export const getUnixTimeInSec = (date: Date): number =>
  Math.floor(date.getTime() / 1000)

export const getUnixTimeNow = (): number => Math.floor(Date.now() / 1000)

export const getJstString = (unixTime: number) => {
  const date = utcToZonedTime(fromUnixTime(unixTime), 'Asia/Tokyo')
  return format(date, 'yyyy-MM-dd HH:mm:ss')
}
