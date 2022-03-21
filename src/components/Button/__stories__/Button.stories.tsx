import { Button, Props } from '..'
import { Meta, Story } from '@storybook/react'
import { IconJs } from '../../../icons'

const meta: Meta<Props> = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    label: {
      type: 'string',
      required: false,
      defaultValue: 'Click',
    },
    view: {
      control: { type: 'select' },
      defaultValue: 'primary',
    },
    size: {
      control: { type: 'select' },
      defaultValue: 'm',
    },
    disabled: {
      type: 'boolean',
      defaultValue: false,
    },
    width: {
      control: { type: 'select' },
      defaultValue: 'default',
    },
    iconLeft: {
      type: 'boolean',
      defaultValue: false,
    },
    iconRight: {
      type: 'boolean',
      defaultValue: false,
    },
    onlyIcon: {
      type: 'boolean',
      defaultValue: false,
    },
  },
}

export default meta

const Template: Story<Props> = (args) => (
  <Button
    {...args}
    iconLeft={args.iconLeft ? IconJs : undefined}
    iconRight={args.iconRight ? IconJs : undefined}
  />
)

export const Playground = Template.bind({})
export const Primary = Template.bind({})
export const Secondary = Template.bind({})
export const Ghost = Template.bind({})
export const Clear = Template.bind({})

Primary.args = {
  view: 'primary',
}

Secondary.args = {
  view: 'secondary',
}

Ghost.args = {
  view: 'ghost',
}

Clear.args = {
  view: 'clear',
}
