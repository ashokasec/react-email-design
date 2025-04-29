import React from "react";
import {
  SidebarGroup,
  SidebarGroupTitle,
  SidebarListItem,
} from "@/components/app/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { getAllComponents } from "@/content/components/util";

const DocSidebar = () => {
  const components = getAllComponents();
  return (
    <aside className="fixed top-16 z-30 hidden h-[calc(100vh-4rem)] w-full shrink-0 md:sticky md:block">
      <ScrollArea className="h-[calc(100vh-7rem)] border-r w-full relative">
        <div className="space-y-8 px-4 py-6">
          <SidebarGroup>
            <SidebarGroupTitle>Getting Started</SidebarGroupTitle>
            <ul>
              {[{ name: "Introduction", href: "/docs" }].map((item, index) => (
                <SidebarListItem href={item.href} key={index}>
                  {item.name}
                </SidebarListItem>
              ))}
            </ul>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupTitle>Components</SidebarGroupTitle>
            <ul>
              {components.map(({ title, slug }, index) => (
                <SidebarListItem
                  href={`/docs/components/${slug}`}
                  key={index}
                  className="justify-between"
                >
                  <span>{title}</span>
                </SidebarListItem>
              ))}
            </ul>
          </SidebarGroup>
        </div>
      </ScrollArea>
      <div className="h-12 border-t border-r flex items-center px-4 text-sm text-neutral-500">
        Brought To You by&nbsp;
        <Link
          href="https://x.com/ashokasec"
          target="_blank"
          className="underline text-blue-600"
        >
          @ashokasec
        </Link>
      </div>
    </aside>
  );
};

export default DocSidebar;
