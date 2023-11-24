import type { Meta, StoryObj } from "@storybook/react";

import { RegistrationFormRefs } from "./RegistrationFormRefs";

const meta = {
  title: "Components/RegistrationFormRefs",
  component: RegistrationFormRefs,
  // tags: ["autodocs"],
} satisfies Meta<typeof RegistrationFormRefs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
