import { cn } from "@/lib/utils";
import Markdown from "markdown-to-jsx";
import type React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark as CodeTheme } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyCodeButton } from "./component-preview";

export function Heading1({
  children,
  className,
}: { children: string; className?: string }) {
  return (
    <h1 className={cn("text-2xl font-semibold text-gray-800", className)}>
      {children}
    </h1>
  );
}
export function Heading2({ children }: { children: string }) {
  return (
    <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-3">
      {children}
    </h2>
  );
}

export function Paragraph({
  children,
  className,
}: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("mt-3 text-[16px] leading-[1.75]", className)}>
      {children}
    </p>
  );
}

export function CodeBlock({ children }: { children: React.ReactNode }) {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const code = (children as any)?.props?.children ?? ""; // eslint-disable-line @typescript-eslint/no-explicit-any
  return (
    <div className="relative">
      <CopyCodeButton
        code={code}
        className="absolute right-4 top-4 bg-gray-300 rounded-md"
        successfulToastMessage="Email Layout Code Copied to Clipboard"
      />
      <SyntaxHighlighter wrapLongLines language="typescript" style={CodeTheme}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

const CommonMarkdown = ({ children }: { children: string }) => {
  return (
    <Markdown
      options={{
        wrapper: "article",
        overrides: {
          h1: {
            component: Heading1,
          },
          h2: {
            component: Heading2,
          },
          p: {
            component: Paragraph,
          },
          ul: {
            props: {
              className: "list-disc mt-3 ml-4 space-y-2 text-[16px]",
            },
          },
          strong: {
            props: {
              className: "font-semibold",
            },
          },
          pre: {
            component: CodeBlock,
          },
        },
      }}
      className="documentation"
    >
      {children}
    </Markdown>
  );
};

export default CommonMarkdown;
