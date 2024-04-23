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
    <div className="flex flex-col items-center overflow-scroll">
      <Avatar className="mb-2.5 flex-shrink-0" />
      <p className="mb-2.5">Your Bitcoin address</p>
      <AddressWithCopy className="mb-2.5" fullAdress={address} />
      <Balance className="mb-2.5" />
      <Actions className="mb-2.5" />
      <TransactionsList className="w-full" />
    </div>
  );
};
