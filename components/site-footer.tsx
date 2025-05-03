import { APP } from "@/lib/config";
import { geistSans } from "@/lib/fonts";
import Link from "next/link";

export function Footer() {
  return (
    <div className="border-t w-full">
      <footer className="flex items-center h-16 justify-between max-w-screen-xl mx-auto border-x px-6 leading-none bg-white z-[100] relative">
        <div className="flex items-center justify-between w-full">
          <div
            style={geistSans.style}
            className="text-[15.5px] flex items-center font-semibold leading-none pt-[2px] text-blue-600"
          >
            <Link href="/">{APP.name} </Link>
            <span className="bg-blue-100 rounded-md text-xs leading-none px-1.5 py-0.5 ml-1 text-blue-600">
              WIP
            </span>
          </div>
          <div
            className="text-sm text-neutral-500 font-medium"
            style={geistSans.style}
          >
            Brought to you by{" "}
            <Link
              href="https://x.com/ashokasec"
              target="_blank"
              className="underline underline-offset-4 text-neutral-700"
            >
              ashokasec
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
