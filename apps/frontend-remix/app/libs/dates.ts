import format from 'date-fns/format'
import fromUnixTime from 'date-fns/fromUnixTime'
import utcToZonedTime from 'date-fns-tz/utcToZonedTime'

export const getJstString = (unixTime: number) => {
  const date = utcToZonedTime(fromUnixTime(unixTime), 'Asia/Tokyo')
  return format(date, 'yyyy-MM-dd HH:mm:ss')
}
