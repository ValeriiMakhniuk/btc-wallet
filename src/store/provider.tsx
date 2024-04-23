"use client";
import { PropsWithChildren, useRef } from "react";
import { Provider } from "react-redux";
import { AppStore, makeStore, RootState } from ".";
import { accountSlice } from "./slices/account";

interface IProps {
  address?: string;
}

export const StoreProvider = (props: PropsWithChildren<IProps>) => {
  const { address, children } = props;
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(accountSlice.actions.setAddress(address ?? ""));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};
