"use client";

import SampleEmail from "@/content/templates/company/spaceship---security-alert";
import { render } from "@react-email/render";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark as CodeTheme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const html = await render(<SampleEmail />, {
  pretty: true,
});

function CopyCodeButton({
  code,
  className,
  successfulToastMessage,
}: {
  code: string;
  className?: string;
  successfulToastMessage: string;
}) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success(successfulToastMessage);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.log(error)
      toast.error("Failed to copy!");
    }
  };
  return (
    <Button
      size="icon"
      variant="outline"
      onClick={handleCopy}
      className={className}
    >
      {copied ? <Check /> : <Copy />}
    </Button>
  );
}

function CodeBlock({
  language,
  code,
}: {
  language: "typescript" | "html";
  code: string;
}) {
  return (
    <SyntaxHighlighter wrapLines language={language} style={CodeTheme}>
      {code}
    </SyntaxHighlighter>
  );
}

function CustomTrigger({
  value,
  text,
}: {
  value: "preview" | "react" | "html";
  text: string;
}) {
  return (
    <TabsTrigger
      value={value}
      className="!shadow-none rounded-none pt-2 pb-3 px-0 border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600"
    >
      {text}
    </TabsTrigger>
  );
}

function CustomTabContent({
  value,
  className,
  children,
}: {
  value: "preview" | "react" | "html";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <TabsContent
      value={value}
      className={cn(
        "rounded border overflow-clip mt-3 overflow-y-auto no-scrollbar html-code mb-6]",
        className
      )}
    >
      {children}
    </TabsContent>
  );
}

const PreviewAndCode = ({ jsxCode }: { jsxCode: string }) => {
  const [currentTab, setCurrentTab] = useState("react");

  return (
    <Tabs
      defaultValue={currentTab}
      onValueChange={(value) => setCurrentTab(value)}
    >
      <TabsList className="border-b rounded-none h-fit bg-transparent w-full items-start justify-between p-0">
        <div className="space-x-4">
          <CustomTrigger value="preview" text="Preview" />
          <CustomTrigger value="react" text="React Email" />
          <CustomTrigger value="html" text="HTML" />
        </div>
        {currentTab === "preview" && null}
        {currentTab === "react" && <CopyCodeButton code={jsxCode} successfulToastMessage="React Email Template Copied." />}
        {currentTab === "html" && <CopyCodeButton code={html} successfulToastMessage="Rendered HTML Copied to Clipboard." />}
      </TabsList>
      <CustomTabContent value="preview">
        <iframe srcDoc={html} className="w-full h-full"></iframe>
      </CustomTabContent>
      <CustomTabContent value="react">
        <CodeBlock language="typescript" code={jsxCode} />
      </CustomTabContent>
      <CustomTabContent value="html">
        <CodeBlock language="html" code={html} />
      </CustomTabContent>
    </Tabs>
  );
};

export default PreviewAndCode;
