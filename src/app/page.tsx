import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] text-gray-700 max-w-screen-xl mx-auto border-x min-h-[calc(100vh-4rem)] p-6">
      <Link href="/docs">Get Started</Link>
    </div>
  );
}
