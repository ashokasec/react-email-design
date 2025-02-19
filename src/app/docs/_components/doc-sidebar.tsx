import React from "react";
import {
  SidebarGroup,
  SidebarGroupTitle,
  SidebarListItem,
} from "@/components/app/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { ArrowRight, Dot } from "lucide-react";

const DocSidebar = ({
  companies,
}: {
  companies: { id: string; name: string; url: string; count: number }[];
}) => {
  return (
    <aside className="fixed top-16 z-30 hidden h-[calc(100vh-4rem)] w-full shrink-0 md:sticky md:block">
      <ScrollArea className="h-[calc(100vh-6rem)] border-r w-full relative">
        <div className="space-y-8 px-4 py-6">
          <SidebarGroup>
            <SidebarGroupTitle>Getting Started</SidebarGroupTitle>
            <ul>
              {[{ name: "Introduction", href: "/docs" }].map(
                (item, index) => (
                  <SidebarListItem href={item.href} key={index}>
                    {item.name}
                  </SidebarListItem>
                )
              )}
            </ul>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupTitle>Company</SidebarGroupTitle>
            <ul>
              {companies.map((item, index) => (
                <SidebarListItem
                  href={`/docs/company/${item.id}`}
                  key={index}
                  className="justify-between"
                >
                  <span>{item.name}</span>
                  <span className="text-[12px] text-blue-600">
                    {item.count}
                  </span>
                </SidebarListItem>
              ))}
            </ul>
            <Dot />
            <Link
              href="/docs/company"
              className="text-[13px] ml-2.5 font-medium flex items-center hover:underline underline-offset-2 mt-1 w-fit"
            >
              See All Companies
              <ArrowRight className="h-3.5" />
            </Link>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupTitle>Category</SidebarGroupTitle>
            {/* <ul>
              {TemplateCategory.map((item, index) => (
                <SidebarListItem
                  href={item.href}
                  key={index}
                  className="justify-between"
                >
                  <span>{item.name}</span>
                  <span className="text-[12px] text-blue-600">
                    {item.count}
                  </span>
                </SidebarListItem>
              ))}
              <Dot />
              <Link
                href="#"
                className="text-[13px] ml-2.5 font-medium flex items-center hover:underline underline-offset-2 mt-1 w-fit"
              >
                See All Categories
                <ArrowRight className="h-3.5" />
              </Link>
            </ul> */}
          </SidebarGroup>
        </div>
      </ScrollArea>
    </aside>
  );
};

export default DocSidebar;
