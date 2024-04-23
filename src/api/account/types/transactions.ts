export type TTransactionsResponse = {
  txid: string;
  vin: {
    txid: string;
    vout: number;
    prevout: {
      scriptpubkey_address: string;
      value: number;
    };
  }[];
  vout: {
    scriptpubkey_address: string;
    value: number;
  }[];
  size: number;
  fee: number;
  status: {
    confirmed: boolean;
  };
}[];

export enum TTransactionType {
  RECIEVE,
  SENT,
}

export type TTransaction = {
  id: string;
  amount: string;
  type: TTransactionType;
  confirmed: boolean;
  from: string;
  to: string;
};
