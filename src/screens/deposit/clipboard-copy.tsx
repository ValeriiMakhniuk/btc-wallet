"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { CopyIcon } from "../../components/icons/copy";
import { Button, ButtonVariant } from "@/components/shared/button";

interface IProps extends PropsWithChildren {
  onClick: () => void;
  className?: string;
}

const SavedText = (props: { cb: () => void }) => {
  useEffect(() => {
    setTimeout(props.cb, 1000);
  }, []);

  return <p className="h-6">Copied</p>;
};

export const ClipboardCopy = (props: IProps) => {
  const [isSaved, setIsSaved] = useState(false);

  const { className, onClick } = props;

  const handleClick = async () => {
    try {
      await onClick();
      setIsSaved(true);
    } catch {
      setIsSaved(false);
    }
  };

  const savedTextCb = () => {
    setIsSaved(false);
  };

  return (
    <Button
      variant={ButtonVariant.PRIMARY}
      onClick={handleClick}
      className={className}
    >
      {isSaved ? (
        <SavedText cb={savedTextCb} />
      ) : (
        <div className="flex space-x-2 items-center">
          <span>Copy Address</span> <CopyIcon />
        </div>
      )}
    </Button>
  );
};
