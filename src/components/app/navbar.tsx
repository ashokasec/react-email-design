import { Button } from "@/components/ui/button";
import { APP } from "@/lib/config";
import { geistSans } from "@/lib/fonts";

export function Navbar() {
  return (
    <div className="border-b sticky top-0 w-full">
      <header className="h-[calc(4rem-1px)] flex items-center justify-between max-w-screen-xl mx-auto border-x px-6 leading-none bg-white z-[100] relative">
        <div className="flex space-x-10">
          <div
            style={geistSans.style}
            className="text-[15px] font-semibold leading-none pt-[2px]"
          >
            {APP.name}{" "}
            <span className="bg-blue-100 rounded-md text-xs leading-none px-1.5 py-0.5 ml-1 text-blue-600">
              Beta
            </span>
          </div>
          <nav>
            <ul className="flex items-center text-sm space-x-3 font-medium text-gray-">
              <li>Components</li>
            </ul>
          </nav>
        </div>
        <div>
          <Button>Github</Button>
        </div>
      </header>
    </div>
  );
}
