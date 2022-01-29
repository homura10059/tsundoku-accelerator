import React from 'react'

import { Card } from '../Card'
import { HeadLess } from '../interface'

type Props = {
  children: React.ReactNode
  cardClassName?: string
}

export const CardList: HeadLess<Props> = ({
  children,
  className = 'grid grid-cols-1 md:grid-cols-2 gap-2 auto-cols-auto',
  cardClassName
}) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <Card className={cardClassName} key={index}>
          {child}
        </Card>
      ))}
    </div>
  )
}
