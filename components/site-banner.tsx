"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { geistSans, inter } from "@/lib/fonts";

export function SiteBanner() {
  return (
    <div className="group relative top-0 bg-blue-600 py-3 text-white transition-all duration-300 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row text-sm font-medium mx-auto" style={geistSans.style}>
        🚧{" "}
        <span className="ml-1 font-semibold">
          {" "}
          <strong className="font-semibold" style={inter.style}>
            Work in progress:
          </strong>{" "}
          We’re actively building React Email Design. Want to help?
        </span>{" "}
        <Link
          href="https://github.com/ashokasec/react-email-design/blob/main/CONTRIBUTING.md"
          target="_blank"
          className="group inline-flex text-xs leading-normal md:text-sm"
          style={geistSans.style}
        >
            <span className="group-hover:underline underline-offset-2 transition-all">
            Contribute
            </span>
          <ChevronRight className="ml-1 mt-[2px] hidden size-4 transition-all duration-300 ease-out group-hover:translate-x-1 lg:inline-block" />
        </Link>
      </div>
      <hr className="absolute bottom-0 m-0 h-px w-full bg-neutral-200/30" />
    </div>
  );
}
