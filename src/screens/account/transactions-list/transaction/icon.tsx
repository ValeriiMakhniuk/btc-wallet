import cx from "classnames";

import { TxType } from "./types";
import { DepositIcon } from "@/components/icons/deposit";
import { TTransactionType } from "@/api/account/types";

interface IProps {
  txType: TTransactionType;
}

export const Icon = (props: IProps) => {
  const { txType } = props;
  const className =
    txType === TTransactionType.RECIEVE ? "rotate-90" : "-rotate-90";

  return (
    <div
      className={cx(
        "rounded-full bg-neutral-400 w-[40px] h-[40px] flex items-center justify-center mr-3 text-gray-900",
        className
      )}
    >
      <DepositIcon />
    </div>
  );
};
