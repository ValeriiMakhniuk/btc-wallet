import { ContentBlock } from "@/components/content-block";
import cx from "classnames";
import { Transaction } from "./transaction";
import { TxType } from "./transaction/types";
import { useGetTransactionsQuery } from "@/api";
import { useAppSelector } from "@/store/hooks";
import { Spinner, SpinnerSize } from "@/components/shared/spinner";
import { TTransactionType } from "@/api/account/types";

interface IProps {
  className?: string;
}

const EmptyText = (props: { className?: string }) => {
  const { className } = props;
  return (
    <p className={cx("text-neutral-300 text-base", className)}>
      No transactions found, please send some BTC
    </p>
  );
};

export const TransactionsList = (props: IProps) => {
  const { className } = props;
  const address = useAppSelector((state) => state.account.address);
  const { data, isLoading, isSuccess } = useGetTransactionsQuery(address, {
    pollingInterval: 5000,
  });

  let content;

  if (isLoading) {
    content = <Spinner className="m-5" size={SpinnerSize.L} />;
  } else if (isSuccess && data.length === 0) {
    content = <EmptyText className="mt-7" />;
  }

  return (
    <ContentBlock className={cx(className, "relative")}>
      <p className="text-neutral-300 text-sm uppercase">Transaction history</p>
      {content ? (
        <div className="flex w-full justify-center">{content}</div>
      ) : (
        <ul className="space-y-2.5">
          {data?.map((tx) => {
            return (
              <li className="py-3" key={tx.id}>
                <Transaction
                  amount={tx.amount}
                  type={tx.type}
                  to={tx.to}
                  from={tx.from}
                  confirmed={tx.confirmed}
                  id={tx.id}
                />
              </li>
            );
          })}
        </ul>
      )}
    </ContentBlock>
  );
};
