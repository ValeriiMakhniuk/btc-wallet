"use client";

import { PropsWithChildren } from "react";
import { useRouter } from "next/navigation";
import {
  getAddressFromKeys,
  getKeysFromStoarge,
  deleteKeysFromStorage,
} from "@/lib/address";
import { StoreProvider } from "@/store/provider";

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const keys = getKeysFromStoarge();
  const address = getAddressFromKeys(keys?.publicKey);

  if (!address) {
    if (keys) {
      deleteKeysFromStorage();
    }

    router.replace("/");
  }

  return address && <StoreProvider address={address}>{children}</StoreProvider>;
};

export default ProtectedRoute;
