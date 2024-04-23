import cx from "classnames";

import { TxType } from "./types";
import { TTransactionType } from "@/api/account/types";

interface IProps {
  txType: TTransactionType;
  amount: string;
}

const amountClassNameByType = {
  [TTransactionType.RECIEVE]: "text-green-400",
  [TTransactionType.SENT]: "text-neutral-400",
};

export const Amount = (props: IProps) => {
  const { txType, amount } = props;
  return (
    <p className={cx("text-base ml-auto", amountClassNameByType[txType])}>
      {amount}
    </p>
  );
};
