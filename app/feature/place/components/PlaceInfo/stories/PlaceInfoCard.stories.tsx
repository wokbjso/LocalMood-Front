import type { Meta, StoryObj } from "@storybook/react";
import PlaceInfoCard from "../organisms/PlaceInfoCard";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Feature/Place/PlaceInfoCard/PlaceInfoCard",
  component: PlaceInfoCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof PlaceInfoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ScrappedFalse: Story = {
  args: {
    id: 0,
    name: "나이스워크투데이",
    imgUrl:
      "https://media.istockphoto.com/id/1446199740/ko/%EC%82%AC%EC%A7%84/%ED%96%87%EB%B3%95%EC%9D%B4-%EC%9E%98-%EB%93%9C%EB%8A%94-%EC%88%B2%EC%9D%84-%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94-%EA%B8%B8.jpg?s=2048x2048&w=is&k=20&c=3z_ODBT78uZDVqy-3B6r8LBa825AuSpL0xfzySe2fj8=",
    type: "카페",
    address: "마포구 망원동",
    isScraped: false,
    purpose: ["sdg", "wegweg"],
    interior: ["wegw", "weqge"],
  },
};

export const isScrapedTrue: Story = {
  args: {
    id: 0,
    name: "나이스워크투데이",
    imgUrl:
      "https://media.istockphoto.com/id/1446199740/ko/%EC%82%AC%EC%A7%84/%ED%96%87%EB%B3%95%EC%9D%B4-%EC%9E%98-%EB%93%9C%EB%8A%94-%EC%88%B2%EC%9D%84-%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94-%EA%B8%B8.jpg?s=2048x2048&w=is&k=20&c=3z_ODBT78uZDVqy-3B6r8LBa825AuSpL0xfzySe2fj8=",
    type: "카페",
    address: "마포구 망원동",
    isScraped: true,
    purpose: ["sdg", "wegweg"],
    interior: ["wegw", "weqge"],
  },
};
