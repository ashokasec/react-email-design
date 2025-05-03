import { Button } from "@react-email/components";
import EmailLayout from "@/content/internals/email-layout";

const Email = () => {
  return (
    <EmailLayout>
      <Button
        className="w-full rounded-lg bg-blue-600 py-3 font-sans text-center font-medium text-white"
        href="#"
      >
        Explore
      </Button>
    </EmailLayout>
  );
};

export default Email;
