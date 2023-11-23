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
      <div className="my-2">
        <label htmlFor={id} className="mr-2">
          {label}
        </label>
        <input
          ref={ref}
          {...rest}
          id={id}
          className="border-2 border-stone-700"
        />
      </div>
    );
  }
);

// forwardRef, memo
Input.displayName = "forwardRef(Input)";
