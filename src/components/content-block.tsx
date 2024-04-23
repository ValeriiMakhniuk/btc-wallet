import { PropsWithChildren } from "react";
import cx from "classnames";

interface IProps extends PropsWithChildren {
  className?: string;
}

export const ContentBlock = (props: IProps) => {
  const { children, className } = props;
  return (
    <div className={cx("bg-gray-400 p-2 sm:p-4 rounded-xl", className)}>
      {children}
    </div>
  );
};
