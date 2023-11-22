import { ForwardedRef, MouseEventHandler, forwardRef } from "react";

type Props = {
  label: string;
  onMouseEnter: MouseEventHandler<HTMLButtonElement>;
};

const styles = {
  backgroundColor: "#2980b9",
  color: "#ecf0f1",
};

export const MagicButton = forwardRef(
  ({ label, onMouseEnter }: Props, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <button style={styles} ref={ref} onMouseEnter={onMouseEnter}>
        {label}
      </button>
    );
  }
);
