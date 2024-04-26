"use client";
import { Avatar } from "@/components/avatar";
import { AddressWithCopy } from "./address";
import { Balance } from "./balance";
import { Actions } from "./actions";
import { TransactionsList } from "./transactions-list";
import { useAppSelector } from "@/store/hooks";

export const AccountScreen = () => {
  const address = useAppSelector((state) => state.account.address);
  return (
    <div className="flex flex-col gap-2.5 items-center">
      <Avatar className="flex-shrink-0" />
      <p>Your Bitcoin address</p>
      <AddressWithCopy fullAdress={address} />
      <Balance />
      <Actions />
      <TransactionsList className="w-full" />
    </div>
  );
};
