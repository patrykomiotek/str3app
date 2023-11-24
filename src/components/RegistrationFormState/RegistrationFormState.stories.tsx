import type { Meta, StoryObj } from "@storybook/react";

import { RegistrationFormState } from "./RegistrationFormState";

const meta = {
  title: "Components/RegistrationFormState",
  component: RegistrationFormState,
  // tags: ["autodocs"],
} satisfies Meta<typeof RegistrationFormState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
