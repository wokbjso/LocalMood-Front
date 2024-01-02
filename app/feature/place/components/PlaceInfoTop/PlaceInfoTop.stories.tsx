import type { Meta, StoryObj } from "@storybook/react";
import PlaceInfoTop from "./PlaceInfoTop";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Feature/Place/PlaceInfoTop/PlaceInfoTop",
  component: PlaceInfoTop,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof PlaceInfoTop>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    id: 1,
    placeName: "나이스워크투데이",
    category: "카페",
    location: "마포구 망원동",
  },
};
