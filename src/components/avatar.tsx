import Image from "next/image";
import cx from "classnames";

interface IProps {
  className?: string;
}

export const Avatar = (props: IProps) => {
  return (
    <div
      className={cx(
        "rounded-full w-[90px] h-[90px] overflow-hidden",
        props.className
      )}
    >
      <Image
        src="/images/avatar.png"
        alt="user avatar"
        width={90}
        height={90}
      />
    </div>
  );
};
