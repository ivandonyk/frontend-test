import { ComponentStory, ComponentMeta } from "@storybook/react"

import Card from "../components/Card"

export default {
  title: "Example/Card",
  component: Card,
  argTypes: {}
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Selected = Template.bind({})
Selected.args = {
  checked: true
}

export const Unselected = Template.bind({})
Unselected.args = {
  checked: false
}
