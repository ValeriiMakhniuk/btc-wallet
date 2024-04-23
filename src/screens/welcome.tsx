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
    <div className="flex w-full h-full flex-col justify-center items-center">
      <Avatar className="mb-2" />
      <p className="text-3xl font-bold mb-2.5">Welcome</p>
      <ContentBlock className="flex flex-col items-center justify-center w-full">
        <p className="font-medium mb-2.5">
          No wallets found, please create one
        </p>
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
