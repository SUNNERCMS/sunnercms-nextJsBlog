/*
 * @Author: your name
 * @Date: 2020-09-24 20:23:55
 * @LastEditTime: 2020-09-24 20:24:09
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /my-app/components/Date/index.js
 */
import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}