import { ForwardedRef, MouseEventHandler, forwardRef } from "react";

type Props = {
  label: string;
  onMouseEnter: MouseEventHandler<HTMLButtonElement>;
  onMouseLeave: MouseEventHandler<HTMLButtonElement>;
};

const styles = {
  backgroundColor: "#2980b9",
  color: "#ecf0f1",
};

export const MagicButton = forwardRef(
  (
    { label, onMouseEnter, onMouseLeave }: Props,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        style={styles}
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {label}
      </button>
    );
  }
);
