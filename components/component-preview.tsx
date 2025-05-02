"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark as CodeTheme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

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
      console.log(error);
      toast.error("Failed to copy!");
    }
  };
  return (
    <Button size="icon" variant="ghost" onClick={handleCopy} className={className}>
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
      className="!shadow-none data-[state=active]:bg-blue-100 data-[state=active]:text-blue-600"
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
        "rounded border overflow-clip mt-3 overflow-y-auto no-scrollbar html-code",
        className
      )}
    >
      {children}
    </TabsContent>
  );
}

const PreviewAndCodeComponents = ({
  html,
  jsx,
}: {
  html: string;
  jsx: string;
}) => {
  const [currentTab, setCurrentTab] = useState("react");

  return (
    <Tabs
      defaultValue={currentTab}
      onValueChange={(value) => setCurrentTab(value)}
    >
      <TabsList className="rounded-none h-fit bg-transparent w-full border-y items-start justify-between px-12 py-0">
        <div className="border-x w-full flex items-center justify-between pl-2 pr-1.5">
          <div className="py-2">
            <CustomTrigger value="preview" text="Preview" />
            <CustomTrigger value="react" text="React Email" />
            <CustomTrigger value="html" text="HTML" />
          </div>
          {currentTab === "preview" && null}
          {currentTab === "react" && (
            <CopyCodeButton
              code={jsx}
              successfulToastMessage="React Email Template Copied."
            />
          )}
          {currentTab === "html" && (
            <CopyCodeButton
              code={html}
              successfulToastMessage="Rendered HTML Copied to Clipboard."
            />
          )}
        </div>
      </TabsList>
      <CustomTabContent
        value="preview"
        className="mt-0 border-none border-b-[1px] rounded-none px-12"
      >
        <div className="border-x">
          <iframe srcDoc={html} className="w-full h-full"></iframe>
        </div>
      </CustomTabContent>
      <CustomTabContent
        value="react"
        className="mt-0 border-none border-b-[1px] rounded-none px-12"
      >
        <div className="border-x">
          <CodeBlock language="typescript" code={jsx} />
        </div>
      </CustomTabContent>
      <CustomTabContent
        value="html"
        className="mt-0 border-none border-b-[1px] rounded-none px-12"
      >
        <div className="border-x">
          <CodeBlock language="html" code={html} />
        </div>
      </CustomTabContent>
    </Tabs>
  );
};

export default PreviewAndCodeComponents;
