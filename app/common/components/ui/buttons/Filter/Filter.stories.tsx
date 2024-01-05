import type { Meta, StoryObj } from "@storybook/react";
import Filter from "./Filter";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Common/UI/Button/Filter",
  component: Filter,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Static: Story = {
  args: {
    label: "연인과의 데이트",
  },
};

export const StaticPhoto: Story = {
  args: {
    photo:
      "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
    label: "연인과의 데이트",
  },
};

export const ShowOptions: Story = {
  args: {
    variant: "showOptions",
    label: "한식",
  },
};
