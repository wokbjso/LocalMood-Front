import type { Meta, StoryObj } from "@storybook/react";
import Tab from "./Tab";
import MyCurationFillIcon from "@common/assets/icons/curation/MyCurationFillIcon";
import ScrapLineIcon from "@common/assets/icons/scrap/ScrapLineIcon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Common/UI/Tab/Tab",
  component: Tab,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Text: Story = {
  args: {
    sections: [
      {
        text: "카페",
      },
      {
        text: "음식점",
      },
    ],
  },
};

export const Icon: Story = {
  args: {
    sections: [
      {
        icon: MyCurationFillIcon,
        text: "카페",
      },
      {
        icon: ScrapLineIcon,
        text: "음식점",
      },
    ],
  },
};
