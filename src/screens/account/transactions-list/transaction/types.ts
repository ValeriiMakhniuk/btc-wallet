export enum TxType {
  SENT,
  RECIEVED,
}

export type TBaseTx = {
  amount: string;
  aproved?: boolean;
};
