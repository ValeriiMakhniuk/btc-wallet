"use client";

import { Avatar } from "@/components/avatar";
import { ClipboardCopy } from "./clipboard-copy";
import { ContentBlock } from "@/components/content-block";
import { Address } from "@/components/shared/address";
import { BackLink } from "@/components/shared/back-link";
import { saveToClipboard } from "@/lib/clipboard";
import { useAppSelector } from "@/store/hooks";

export const DepositScreen = () => {
  const address = useAppSelector((state) => state.account.address);

  const handleCopy = () => {
    saveToClipboard(address);
  };
  return (
    <section className="flex flex-col justify-center items-center">
      <BackLink />
      <Avatar className="mb-2.5" />
      <p className="mb-2.5 text-3xl font-bold">Deposit BTC</p>
      <ContentBlock className="w-full flex flex-col items-center">
        <p className="text-base font-medium mb-2.5">Your Bitcoin address</p>
        <Address fullAdress={address} className="text-3xl font-bold mb-2.5" />
        <ClipboardCopy
          className="flex flex-1 justify-center items-center w-full"
          onClick={handleCopy}
        />
      </ContentBlock>
    </section>
  );
};
