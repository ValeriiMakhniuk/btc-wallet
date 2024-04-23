import { CheckIcon } from "@/components/icons/check";
import { TxType } from "./types";
import { TTransactionType } from "@/api/account/types";

interface IProps {
  isTxAproved?: boolean;
  txType: TTransactionType;
}

const AprovedCheck = () => {
  return (
    <div className="text-green-400 ml-1">
      <CheckIcon />
    </div>
  );
};

const titleTextByType = {
  [TTransactionType.RECIEVE]: "Received",
  [TTransactionType.SENT]: "Sent",
};

export const Title = (props: IProps) => {
  const { isTxAproved, txType } = props;
  const title = titleTextByType[txType];

  return (
    <div className="flex items-center">
      <p className="text-base font-medium">{title}</p>
      {isTxAproved && <AprovedCheck />}
    </div>
  );
};
