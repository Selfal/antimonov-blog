import { Button, Props } from '..'
import { Meta, Story } from '@storybook/react'

const meta: Meta<Props> = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      type: 'string',
      required: false,
      defaultValue: 'Click me',
    },
    view: {
      control: { type: 'select' },
      defaultValue: 'primary',
    },
    size: {
      control: { type: 'select' },
      defaultValue: 'medium',
    },
    disabled: {
      type: 'boolean',
      defaultValue: false,
    },
    width: {
      control: { type: 'select' },
      defaultValue: 'default',
    },
  },
}

export default meta

const Template: Story<Props> = (args) => <Button {...args} />

export const Playground = Template.bind({})
export const Primary = Template.bind({})
export const Secondary = Template.bind({})
export const Ghost = Template.bind({})
export const Clear = Template.bind({})

Primary.args = {
  view: 'primary',
  size: 'medium',
}

Secondary.args = {
  view: 'secondary',
  size: 'medium',
}

Ghost.args = {
  view: 'ghost',
  size: 'medium',
}

Clear.args = {
  view: 'clear',
  size: 'medium',
}
