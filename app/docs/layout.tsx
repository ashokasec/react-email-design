import DocSidebar from "@/components/doc-sidebar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] text-gray-700">
      <div className="flex-1 items-start md:grid md:grid-cols-[16rem_minmax(0,1fr)] lg:grid-cols-[17rem_minmax(0,1fr)] max-w-screen-xl mx-auto border-x">
        <DocSidebar />
        <div className="py-6 max-w-screen-lg">{children}</div>
      </div>
    </div>
  );
}
