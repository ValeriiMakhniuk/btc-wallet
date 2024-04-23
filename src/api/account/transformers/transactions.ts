import { BitcoinUnit } from "bitcoin-units";
import {
  TTransaction,
  TTransactionType,
  TTransactionsResponse,
} from "../types";

export const trnasformTransactions = (
  txs: TTransactionsResponse,
  address: string
): TTransaction[] => {
  const transactions = txs.map((rawTx) => {
    const {
      vin,
      vout,
      status: { confirmed },
      txid,
      fee,
    } = rawTx;

    let amount = 0;
    let type: TTransactionType;
    let from: string;
    let to;

    const spentTx = vin.find(
      (tx) => tx.prevout.scriptpubkey_address === address
    );
    const recievedTx = vout.find((tx) => tx.scriptpubkey_address === address);

    if (spentTx) {
      type = TTransactionType.SENT;
      amount = spentTx.prevout.value + fee;
      from = spentTx.prevout.scriptpubkey_address;
      // It can be that `vout` will be the same as vin as UTXO. So in UI it can't be shown who is reciever
      to = vout.find(
        (vOutAddress) => vOutAddress.scriptpubkey_address !== address
      )?.scriptpubkey_address;
    } else if (recievedTx) {
      type = TTransactionType.RECIEVE;
      amount = recievedTx.value;
      from = vin.find(
        (vinTx) => vinTx.prevout.scriptpubkey_address !== address
      )!.prevout.scriptpubkey_address!;
      to = address;
    } else {
      return null;
    }

    return {
      id: txid,
      amount: new BitcoinUnit(amount, "sat").to("BTC").format(),
      confirmed,
      type,
      from,
      to,
    };
  });

  return transactions.filter<TTransaction>(
    (tx): tx is TTransaction => tx !== null
  );
};
