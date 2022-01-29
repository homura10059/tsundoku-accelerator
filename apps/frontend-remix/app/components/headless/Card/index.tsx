import React from 'react'

import { HeadLess } from '../interface'

type Props = {
  children: React.ReactNode
}

export const Card: HeadLess<Props> = ({
  children,
  className = 'block bg-secondary-light/20 p-1'
}) => {
  return <div className={className}>{children}</div>
}
