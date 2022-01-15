import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Spinner } from './index'

export default {
  title: 'Design System/headless/Spinner'
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = args => <Spinner {...args} />

export const SpinnerSandbox = Template.bind({})
SpinnerSandbox.args = {
  borderColor: 'border-blue-500'
}
