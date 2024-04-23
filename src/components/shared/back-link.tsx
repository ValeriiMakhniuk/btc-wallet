"use client";

import { BackIcon } from "@/components/icons/back";
import { useRouter } from "next/navigation";

export const BackLink = () => {
  const { back } = useRouter();

  return (
    <button
      onClick={back}
      className="flex items-center justify-center w-11 h-11 rounded-full bg-gray-300 text-neural-400 self-start"
    >
      <BackIcon />
    </button>
  );
};
