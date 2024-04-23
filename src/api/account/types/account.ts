export type TBalanceResponse = {
  txid: string;
  status: {
    confirmed: boolean;
  };
  value: number;
}[];
