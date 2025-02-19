import { cn } from "@/lib/utils";
import Markdown from "markdown-to-jsx";
import React from "react";

export function Heading1({ children, className }: { children: string, className?: string }) {
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

export function Paragraph({ children, className }: { children: React.ReactNode, className?: string }) {
  return <p className={cn("mt-3 text-[16px] leading-[1.75]", className)}>{children}</p>;
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
                className: "list-disc mt-3 ml-4 space-y-2 text-[16px]"
            }
          },
          strong: {
            props: { 
                className: "font-semibold"
            }
          }
        },
      }}
      className="documentation"
    >
      {children}
    </Markdown>
  );
};

export default CommonMarkdown;
