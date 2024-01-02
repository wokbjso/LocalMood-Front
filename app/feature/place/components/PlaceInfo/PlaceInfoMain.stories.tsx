import type { Meta, StoryObj } from "@storybook/react";
import PlaceInfoMain from "./PlaceInfoMain";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Feature/Place/PlaceInfo/PlaceInfo",
  component: PlaceInfoMain,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof PlaceInfoMain>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    id: 0,
    placeName: "나이스워크투데이",
    placeImg:
      "https://media.istockphoto.com/id/1446199740/ko/%EC%82%AC%EC%A7%84/%ED%96%87%EB%B3%95%EC%9D%B4-%EC%9E%98-%EB%93%9C%EB%8A%94-%EC%88%B2%EC%9D%84-%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94-%EA%B8%B8.jpg?s=2048x2048&w=is&k=20&c=3z_ODBT78uZDVqy-3B6r8LBa825AuSpL0xfzySe2fj8=",
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

export const Scrapped: Story = {
  args: {
    id: 0,
    placeName: "나이스워크투데이",
    placeImg:
      "https://media.istockphoto.com/id/1446199740/ko/%EC%82%AC%EC%A7%84/%ED%96%87%EB%B3%95%EC%9D%B4-%EC%9E%98-%EB%93%9C%EB%8A%94-%EC%88%B2%EC%9D%84-%ED%86%B5%EA%B3%BC%ED%95%98%EB%8A%94-%EA%B8%B8.jpg?s=2048x2048&w=is&k=20&c=3z_ODBT78uZDVqy-3B6r8LBa825AuSpL0xfzySe2fj8=",
    category: "카페",
    location: "마포구 망원동",
    scrapped: true,
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
