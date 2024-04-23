import { InputHTMLAttributes, forwardRef } from "react";
import cx from "classnames";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, IProps>(function Input(
  props,
  ref
) {
  const { className } = props;
  const placeholderClassName = "placeholder:text-gray-200";
  const baseClassName =
    "text-base font-medium bg-gray-300 text-neutral-400 p-3 rounded-lg";
  return (
    <input
      ref={ref}
      {...props}
      className={cx(className, baseClassName, placeholderClassName)}
    />
  );
});
