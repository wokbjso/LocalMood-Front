import type { Meta, StoryObj } from "@storybook/react";
import Chip from "./Chip";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Button/Chip",
  component: Chip,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Secondary: Story = {
  args: {
    children: "연인과의 데이트",
  },
};

export const Dark: Story = {
  args: {
    variant: "dark",
    children: "맛집탐방 님의 사진",
  },
};
