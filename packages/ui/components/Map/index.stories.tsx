import { ComponentMeta, ComponentStory } from '@storybook/react'
import React, { useState } from 'react'

import { Map } from './index'

export default {
  title: 'Design System/domain/Map'
} as ComponentMeta<typeof Map>

const Template: ComponentStory<typeof Map> = args => {
  const [selectedList, setSelectedList] = useState<string[]>([])
  const defaultProps = {
    selectedList,
    setSelectedList
  }
  const merged = {
    ...defaultProps,
    ...args
  }
  return (
    <>
      <Map {...merged} />
      <span>selected: {selectedList.join(',')}</span>
    </>
  )
}

export const NormalHeader = Template.bind({})
