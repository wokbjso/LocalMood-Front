import type { Meta, StoryObj } from "@storybook/react";
import CurationInfoCardDark from "../molecules/CurationInfoCardDark";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Feature/Curation/CurationScrapped/CurationScrapped",
  component: CurationInfoCardDark,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof CurationInfoCardDark>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ScrappedFalse: Story = {
  args: {
    id: 0,
    image: [
      "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
    ],
    author: "김현민",
    title: "크리스마스에 즐기기 좋은 마포구 데이트 코스",
    keyword: ["연인과의 데이트", "크리스마스"],
    isScraped: true,
  },
};

export const ScrappedTrue: Story = {
  args: {
    id: 0,
    image: [
      "https://cdn.pixabay.com/photo/2016/12/03/15/44/fireworks-1880045_1280.jpg",
    ],
    author: "김현민",
    title: "크리스마스에 즐기기 좋은 마포구 데이트 코스",
    keyword: ["연인과의 데이트", "크리스마스"],
    isScraped: true,
  },
};
