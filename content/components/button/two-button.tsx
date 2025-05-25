import { Button } from "@react-email/components";
import EmailLayout from "@/content/internals/email-layout";

const Email = () => {
  return (
    <EmailLayout>
      <div className="flex">
        <Button
          className="w-full rounded-lg bg-blue-600 py-3 font-sans text-center font-medium text-white"
          href="#"
        >
          Explore
        </Button>
        <Button
          className="ml-3 w-full rounded-lg py-3 font-sans text-center font-medium text-blue-600 border border-solid"
          href="#"
        >
          Buy
        </Button>
      </div>
    </EmailLayout>
  );
};

export default Email;
