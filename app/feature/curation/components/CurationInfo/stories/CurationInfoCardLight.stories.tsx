import type { Meta, StoryObj } from "@storybook/react";
import CurationInfoCardLight from "../organisms/CurationInfoCardLight";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Feature/Curation/CurationInfoCardLight/CurationInfoCardLight",
  component: CurationInfoCardLight,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof CurationInfoCardLight>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ScrappedFalse: Story = {
  args: {
    id: 0,
    image: [
      "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
    ],
    author: "김현민",
    title: "크리스마스에 즐기기 좋은 마포구 데이트 코스",
    keyword: ["연인과의 데이트", "크리스마스"],
  },
};

export const ScrappedTrue: Story = {
  args: {
    id: 0,
    image: [
      "https://cdn.pixabay.com/photo/2023/10/24/08/24/sailboats-8337698_1280.jpg",
    ],
    author: "김현민",
    title: "크리스마스에 즐기기 좋은 마포구 데이트 코스",
    keyword: ["연인과의 데이트", "크리스마스"],
  },
};
