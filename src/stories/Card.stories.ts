import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardProps } from "./Card";

// Default export: metadata for the story
const meta: Meta<typeof Card> = {
  title: "Example/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    heading: { control: "text" },
    subHeading: { control: "text" },
    description: { control: "text" },
    title: { control: "text" },
    image: { control: "text" },
    link: { control: "text" },
    name: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Primary Story
export const Primary: Story = {
  args: {
    heading: "ON THE KULT BLOG",
    subHeading: "READ NOW",
    description:
      "Winter's here, and there's nothing dry, dehydrated or atopic skin likes less! Cooling temperatures, increased use of heating and declining humidity...",
    title: "BABY IT'S COLD OUTSIDE",
    link: "#",
    name: "Read more",
    image:
      "https://d37pbj8w795a0n.cloudfront.net/uploads1715774899433-fashionMain.png",
  },
};
