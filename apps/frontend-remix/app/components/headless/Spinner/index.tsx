import cx from 'classnames'
import React from 'react'

type Props = {
  borderColor?: string
}

export const Spinner: React.VFC<Props> = ({ borderColor }) => {
  return (
    <div className="flex justify-center">
      <div
        className={cx([
          'animate-spin',
          'h-10',
          'w-10',
          'border-4',
          borderColor ? borderColor : 'border-blue-500',
          'rounded-full',
          'border-t-transparent'
        ])}
      />
    </div>
  )
}
