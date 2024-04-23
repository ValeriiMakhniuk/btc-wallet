import { Address } from "@/components/shared/address";
import { TxType } from "./types";
import { TTransactionType } from "@/api/account/types";

interface IProps {
  txAddress: string;
  txType: TTransactionType;
}

const descTextByType = {
  [TTransactionType.RECIEVE]: "From",
  [TTransactionType.SENT]: "To",
};

export const Description = (props: IProps) => {
  const { txAddress, txType } = props;
  return (
    <div className="flex text-xs">
      <span>{descTextByType[txType]}</span>&nbsp;
      <Address fullAdress={txAddress} />
    </div>
  );
};
