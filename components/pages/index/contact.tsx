import { FC } from "react";
import { FaPaperPlane } from "react-icons/fa";
import Button from "../../button";
import Input, { TextArea } from "../../input";
import Section from "../../section";

interface ContactProps {}

const Contact: FC<ContactProps> = (props) => {
  return (
    <Section>
      <h2 className="text-center text-4xl font-extrabold text-slate-900 dark:text-slate-50">
        Contact
      </h2>
      <p className="mx-auto mt-5 max-w-screen-md text-center text-xl text-slate-500">
        Are you interested in my services? Do you want to talk about tech, cats
        or anything else? Hit me up and I will get back to you!
      </p>
      <div className="relative mx-auto flex max-w-screen-md flex-col gap-5 pt-10">
        <Input placeholder="Your name" />
        <Input placeholder="Email address and/or Phone number" />
        <TextArea placeholder="Message" />
        <div className="flex flex-row justify-end">
          <Button variant="solid" color="primary" icon={<FaPaperPlane />}>
            Send
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
