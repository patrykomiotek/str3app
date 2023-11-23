import type { Meta, StoryObj } from "@storybook/react";

import { Generator } from "./Generator";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Generator",
  component: Generator,
  // tags: ["autodocs"],
} satisfies Meta<typeof Generator>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const _Generator: Story = {};
