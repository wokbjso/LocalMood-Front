import type { Meta, StoryObj } from "@storybook/react";
import CurationMain from "./CurationMain";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Feature/Curation/CurationMain/CurationMain",
  component: CurationMain,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof CurationMain>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ScrappedFalse: Story = {
  args: {
    id: 0,
    curationPhoto: [
      "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
    ],
    userImg:
      "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
    userName: "김현민",
    mainText: "크리스마스에 즐기기 좋은 마포구 데이트 코스",
    hashTags: ["연인과의 데이트", "크리스마스"],
  },
};

export const ScrappedTrue: Story = {
  args: {
    id: 0,
    curationPhoto: [
      "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
    ],
    userImg:
      "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
    userName: "김현민",
    mainText: "크리스마스에 즐기기 좋은 마포구 데이트 코스",
    hashTags: ["연인과의 데이트", "크리스마스"],
    scrapped: true,
  },
};
