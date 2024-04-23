"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { CopyIcon } from "../../components/icons/copy";

interface IProps extends PropsWithChildren {
  onClick: () => Promise<void>;
  className?: string;
}

const SavedText = (props: { cb: () => void }) => {
  useEffect(() => {
    setTimeout(props.cb, 1000);
  }, []);

  return <p>Copied</p>;
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
    <button onClick={handleClick} className={className}>
      {isSaved ? <SavedText cb={savedTextCb} /> : <CopyIcon />}
    </button>
  );
};
