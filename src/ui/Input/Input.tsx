import {
  useId,
  forwardRef,
  type ComponentPropsWithRef,
  ForwardedRef,
} from "react";

type Props = {
  label: string;
} & ComponentPropsWithRef<"input">;

export const Input = forwardRef(
  ({ label, ...rest }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const id = useId();

    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <input ref={ref} {...rest} id={id} />
      </div>
    );
  }
);

// forwardRef, memo
Input.displayName = "forwardRef(Input)";
