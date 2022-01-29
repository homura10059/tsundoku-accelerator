import React from 'react'

export type HeadLess<P> = React.VFC<P & { className?: string }>
