import { Icon } from "./icon";
import { Title } from "./title";
import { Description } from "./description";
import { Amount } from "./amount";
import { TBaseTx, TxType } from "./types";
import { TTransaction, TTransactionType } from "@/api/account/types";

type IProps = TTransaction;

export const Transaction = (props: IProps) => {
  const { type, amount, confirmed, id } = props;
  const txAddress =
    props.type === TTransactionType.RECIEVE ? props.from : props.to;
  const txLinkToBlockScan = `https://blockstream.info/testnet/tx/${id}`;

  return (
    <a
      className="flex items-center text-neutral-400"
      href={txLinkToBlockScan}
      target="_blank"
    >
      <Icon txType={type} />
      <div>
        <Title isTxAproved={confirmed} txType={type} />
        <Description txAddress={txAddress} txType={type} />
      </div>
      <Amount txType={type} amount={amount} />
    </a>
  );
};
