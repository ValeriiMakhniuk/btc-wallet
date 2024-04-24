"use client";
import { Avatar } from "@/components/avatar";
import { Button, ButtonVariant } from "@/components/shared/button";
import { ContentBlock } from "@/components/content-block";
import { generateKeyPair, saveKeysToStorge } from "@/lib/address";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/routes";

export const WelcomeScreen = () => {
  const { replace } = useRouter();

  const hadlleCreateWallet = () => {
    const keyPair = generateKeyPair();
    saveKeysToStorge(keyPair);
    replace(ROUTES.ACCOUNT.ROOT);
  };

  return (
    <div className="flex w-full h-full flex-col gap-2.5 justify-center items-center">
      <Avatar />
      <p className="text-3xl font-bold">Welcome</p>
      <ContentBlock className="flex flex-col gap-2.5 items-center justify-center w-full">
        <p className="font-medium">No wallets found, please create one</p>
        <Button
          variant={ButtonVariant.PRIMARY}
          className="w-full"
          onClick={hadlleCreateWallet}
        >
          Create Wallet
        </Button>
      </ContentBlock>
    </div>
  );
};
