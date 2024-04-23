import cx from "classnames";

export interface IProps {
  className?: string;
}

export const Skeleton = (props: IProps) => {
  const { className: outerClassName } = props;

  const baseClassName = "animate-pulse h-full bg-gray-300 rounded-sm";
  const className = cx(baseClassName, outerClassName);

  return <div className={className}></div>;
};
