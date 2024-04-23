import { truncateAddress } from "@/lib/address";

interface IProps {
  className?: string;
  fullAdress: string;
}

export const Address = (props: IProps) => {
  const { className, fullAdress } = props;
  const address = truncateAddress(fullAdress);

  return <p className={className}>{address}</p>;
};
