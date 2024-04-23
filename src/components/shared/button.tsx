import {
  ButtonHTMLAttributes,
  ElementType,
  PropsWithChildren,
  forwardRef,
} from "react";
import cx from "classnames";

export enum ButtonVariant {
  PRIMARY,
}

export enum ButtonType {
  LINK,
  BUTTON,
}

interface IProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant: ButtonVariant;
  as?: ButtonType;
}

interface classNameConfig {
  bgColor: string;
  textColor: string;
}

const tagByButtonType: Record<ButtonType, ElementType> = {
  [ButtonType.BUTTON]: "button",
  [ButtonType.LINK]: "a",
};

const classNameByVariant: Record<ButtonVariant, classNameConfig> = {
  [ButtonVariant.PRIMARY]: {
    bgColor: "bg-neutral-400",
    textColor: "text-gray-900",
  },
};

const baseClassName = "rounded-xl text-sm py-4 font-medium";

export const Button = forwardRef<unknown, IProps>(function Button(props, ref) {
  const {
    children,
    className: externalClassName,
    variant,
    as = ButtonType.BUTTON,
    ...restProps
  } = props;
  const { bgColor, textColor } = classNameByVariant[variant];
  const className = cx(baseClassName, bgColor, textColor, externalClassName);

  const Tag = tagByButtonType[as];

  return (
    <Tag ref={ref} className={className} {...restProps}>
      {children}
    </Tag>
  );
});
