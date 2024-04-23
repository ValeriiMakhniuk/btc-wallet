import Link from "next/link";
import cx from "classnames";

import { ROUTES } from "@/routes";
import { Button, ButtonType, ButtonVariant } from "@/components/shared/button";
import { PropsWithChildren } from "react";
import { DepositIcon } from "../icons/deposit";

interface IProps extends PropsWithChildren {
  className?: string;
}

export const DepositLink = (props: IProps) => {
  const { className } = props;
  return (
    <Link href={ROUTES.ACCOUNT.DEPOSIT} passHref legacyBehavior>
      <Button
        as={ButtonType.LINK}
        variant={ButtonVariant.PRIMARY}
        className={cx(className, "flex flex-1 justify-center items-center")}
      >
        <div className="flex items-center gap-2.5">
          <DepositIcon />
          Deposit
        </div>
      </Button>
    </Link>
  );
};
