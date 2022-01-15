import React from 'react'
import {
  Area,
  Brush,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

import { ItemHistory } from '../../../domain/models'

type Props = {
  timeline: (ItemHistory & { timestamp: string; real: number })[]
}

export const Chart: React.VFC<Props> = ({ timeline }) => {
  return (
    <ResponsiveContainer aspect={16 / 9}>
      <ComposedChart data={timeline}>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="timestamp" />
        <YAxis yAxisId={'left-yaxis'} />
        <YAxis
          yAxisId={'right-yaxis'}
          unit={'%'}
          orientation={'right'}
          allowDecimals={false}
        />
        <Tooltip cursor={true} />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
        <Brush
          dataKey="timestamp"
          stroke="#ffc658"
          startIndex={timeline.length - 14}
          endIndex={timeline.length - 1}
        />
        <Area
          type="monotone"
          stackId="1"
          dataKey="real"
          name={'実質価格'}
          yAxisId={'left-yaxis'}
          stroke="#ffc658"
          fill="#ffc658"
        />
        <Line
          type="monotone"
          dataKey="discountRate"
          stroke="#8884d8"
          name={'値引率'}
          unit={'%'}
          yAxisId={'right-yaxis'}
        />
        <Line
          type="monotone"
          dataKey="pointsRate"
          stroke="#82ca9d"
          name={'ポイント率'}
          unit={'%'}
          yAxisId={'right-yaxis'}
        />
      </ComposedChart>
    </ResponsiveContainer>
  )
}

export default Chart
