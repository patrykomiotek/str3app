import type { Meta } from "@storybook/react";

import { MagicButton } from "./MagicButton";
import { MouseEventHandler, useEffect, useRef } from "react";

const meta = {
  title: "UI/MagicButton",
  component: MagicButton,
  tags: ["autodocs"],
} satisfies Meta<typeof MagicButton>;

export default meta;

export const _MagicButton = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "#c0392b";
    }
  }, []);

  const handleMouseEnter: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "#27ae60";
    }
  };

  const handleMouseLeave: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "#2980b9";
    }
  };

  return (
    <MagicButton
      ref={buttonRef}
      label="Click me"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};
