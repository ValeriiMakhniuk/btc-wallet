import { Avatar } from "@/components/avatar";
import { ContentBlock } from "@/components/content-block";
import { BackLink } from "@/components/shared/back-link";
import { Input } from "@/components/shared/input";

export const SendScreen = () => {
  return (
    <section className="flex flex-col gap-2.5 items-center">
      <BackLink />
      <Avatar />
      <p className="font-bold text-3xl">Send BTC</p>
      <ContentBlock className="w-full flex flex-col gap-2.5 items-center">
        <Input type="text" placeholder="Address" className="w-full" />
        <Input type="text" placeholder="Amount" className="w-full" />
      </ContentBlock>
    </section>
  );
};
