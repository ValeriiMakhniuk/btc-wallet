import { DepositLink } from "@/components/links/deposit";
import { SendLink } from "@/components/links/send";
import cx from "classnames";

interface IProps {
  className?: string;
}

export const Actions = (props: IProps) => {
  const { className } = props;
  return (
    <div className={cx(className, "flex gap-1 w-full")}>
      <DepositLink />
      <SendLink />
    </div>
  );
};
