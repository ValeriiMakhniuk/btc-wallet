"use client";

import { useRouter } from "next/navigation";
import { WelcomeScreen } from "@/screens/welcome";
import { ROUTES } from "@/routes";
import { getKeysFromStoarge } from "@/lib/address";

export default function Index() {
  const hasKeys = getKeysFromStoarge();
  const { replace } = useRouter();

  if (hasKeys) {
    replace(ROUTES.ACCOUNT.ROOT);
  }

  return !hasKeys && <WelcomeScreen />;
}
