import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TTransactionsResponse, TBalanceResponse, TTransaction } from "./types";
import { BitcoinUnit } from "bitcoin-units";
import { trnasformTransactions } from "./transformers/transactions";

const BASE_URL = "https://blockstream.info/testnet/api/address/";
export const accountApi = createApi({
  reducerPath: "accountApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getBalance: builder.query<string, string>({
      query: (address) => `${address}/utxo`,
      transformResponse(rawResult: TBalanceResponse) {
        const utxoAmount = rawResult.reduce((acc, tx) => {
          if (tx.status.confirmed) {
            return tx.value + acc;
          }

          return acc;
        }, 0);

        const stringifiedBalance = new BitcoinUnit(utxoAmount, "sat")
          .to("BTC")
          .format();

        return stringifiedBalance;
      },
    }),
    getTransactions: builder.query<TTransaction[], string>({
      query: (address) => `${address}/txs`,
      transformResponse(baseQueryReturnValue: TTransactionsResponse, _, arg) {
        return trnasformTransactions(baseQueryReturnValue, arg);
      },
    }),
  }),
});

export const { useGetBalanceQuery, useGetTransactionsQuery } = accountApi;
