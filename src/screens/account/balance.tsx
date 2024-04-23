import { PropsWithChildren } from "react";
import cx from "classnames";
import { useGetBalanceQuery } from "@/api";
import { useAppSelector } from "@/store/hooks";
import { Skeleton } from "@/components/shared/skeleton";

interface IProps extends PropsWithChildren {
  className?: string;
}

export const Balance = (props: IProps) => {
  const { className } = props;

  const address = useAppSelector((state) => state.account.address);
  const { data: balance, isLoading } = useGetBalanceQuery(address);
  return (
    <p className={cx(className, "text-2xl flex")}>
      {isLoading ? <Skeleton className="w-20 mr-2.5 h-4" /> : balance}
    </p>
  );
};
