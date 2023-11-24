import type { Meta, StoryObj } from "@storybook/react";

import { Stepper } from "./Stepper";

const meta = {
  title: "Components/Stepper",
  component: Stepper,
  // tags: ["autodocs"],
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
