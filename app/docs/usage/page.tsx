import Breadcrumb from "@/components/breadcrumb";
import CommonMarkdown from "@/components/mdx-component";
import React from "react";

const content = `
# Usage

We’re assuming you’ve already set up **[react.email](https://react.email)** in your project. If not, follow their official [Getting Started Guide](https://react.email/docs/introduction) before proceeding.

## Step 1: Create a Shared Layout

Copy the following \`EmailLayout.tsx\` file into your \`/emails\` folder:

\`\`\`tsx
import {
  Body,
  Container,
  Font,
  Head,
  Html,
  Tailwind,
} from "@react-email/components";

export default function EmailLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <Html>
      <Tailwind>
        <Head>
          <Font
            fontFamily="Inter"
            fallbackFontFamily="Helvetica"
            webFont={{
              url: "https://fonts.googleapis.com/css2?family=Inter&display=swap",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Body className="bg-white font-sans text-zinc-800">
          <Container className="mx-auto my-[40px] rounded border border-solid border-gray-200 bg-white p-8 max-w-xl">
            {children}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
\`\`\`

## Step 2: Use the Layout in Your Templates

Wrap every email component with this layout:

\`\`\`tsx
import { Button } from "@react-email/components";
import EmailLayout from "@/content/components/layout/email-layout";

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
\`\`\`

This ensures consistent structure, styling, and font usage across all your email templates.
`;

const page = () => {
  return (
    <div className="px-12">
      <Breadcrumb items={["Docs", "Usage"]} />
      <CommonMarkdown>{content}</CommonMarkdown>
      <div className="py-20" />
    </div>
  );
};

export default page;
