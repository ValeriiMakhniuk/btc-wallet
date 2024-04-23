import { Avatar } from "@/components/avatar";
import { ContentBlock } from "@/components/content-block";
import { BackLink } from "@/components/shared/back-link";
import { Input } from "@/components/shared/input";

export const SendScreen = () => {
  return (
    <section className="flex flex-col items-center">
      <BackLink />
      <Avatar className="mb-2.5" />
      <p className="mb-2.5 font-bold text-3xl">Send BTC</p>
      <ContentBlock>
        <Input type="text" placeholder="Address" className="w-full mb-2.5" />
        <Input type="text" placeholder="Amount" className="w-full" />
      </ContentBlock>
    </section>
  );
};
