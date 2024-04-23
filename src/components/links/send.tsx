import Link from "next/link";
import cx from "classnames";

import { ROUTES } from "@/routes";
import { Button, ButtonType, ButtonVariant } from "@/components/shared/button";
import { PropsWithChildren } from "react";
import { SendIcon } from "../icons/send";

interface IProps extends PropsWithChildren {
  className?: string;
}

export const SendLink = (props: IProps) => {
  const { className } = props;
  return (
    <Link href={ROUTES.ACCOUNT.SEND} passHref legacyBehavior>
      <Button
        as={ButtonType.LINK}
        variant={ButtonVariant.PRIMARY}
        className={cx(className, "flex flex-1 justify-center items-center")}
      >
        <div className="flex items-center gap-2.5">
          <SendIcon />
          Send
        </div>
      </Button>
    </Link>
  );
};
