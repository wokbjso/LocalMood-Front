import type { Meta, StoryObj } from "@storybook/react";
import PlaceInfo from "./PlaceInfo";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Feature/Place/PlaceInfo/PlaceInfo",
  component: PlaceInfo,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof PlaceInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    placeName: "나이스워크투데이",
    category: "카페",
    location: "마포구 망원동",
    tags: [
      {
        category: "방문목적",
        detail: "연인과의 데이트",
      },
      {
        category: "방문목적",
        detail: "작업/공부",
      },
      {
        category: "인테리어",
        detail: "통창뷰",
      },
      {
        category: "공간무드",
        detail: "넓은 공간",
      },
    ],
  },
};
