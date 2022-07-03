import { Typography, Props } from '..'
import { Meta, Story } from '@storybook/react'

const meta: Meta<Props> = {
  title: 'Typography',
  component: Typography,
  argTypes: {
    component: {
      control: { type: 'select' },
      defaultValue: 'span',
    },
    display: {
      control: { type: 'select' },
    },
    fontStyle: {
      control: { type: 'select' },
    },
    lineHeight: {
      control: { type: 'select' },
    },
    spacing: {
      control: { type: 'select' },
    },
    decoration: {
      control: { type: 'select' },
    },
    noWrap: {
      type: 'boolean',
      defaultValue: false,
    },
    align: {
      control: { type: 'select' },
    },
    transform: {
      control: { type: 'select' },
    },
    weight: {
      control: { type: 'select' },
      defaultValue: 'reqular',
    },
    children: {
      type: 'string',
      defaultValue:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vel nunc vitae placerat. Phasellus id urna porttitor, egestas nibh sed, eleifend turpis. Donec in volutpat risus. Vivamus congue non est non aliquam. Vivamus tincidunt molestie lorem, in suscipit mi iaculis eu. ',
    },
  },
}

export default meta

const Template: Story<Props> = (args) => <Typography {...args} />

export const Playground = Template.bind({})
