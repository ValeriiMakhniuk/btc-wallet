"use client";

import cx from "classnames";

import { Address } from "@/components/shared/address";
import { ClipboardCopy } from "@/screens/account/clipboard-copy";
import { saveToClipboard } from "@/lib/clipboard";

interface IProps {
  fullAdress: string;
  className?: string;
}

export const AddressWithCopy = (props: IProps) => {
  const { fullAdress, className } = props;

  const handleAddressCopy = () => {
    return saveToClipboard(fullAdress);
  };

  return (
    <div className={cx("flex items-center w-full justify-center", className)}>
      <Address className="text-2xl" fullAdress={fullAdress} />
      <ClipboardCopy className="ml-2.5" onClick={handleAddressCopy} />
    </div>
  );
};
