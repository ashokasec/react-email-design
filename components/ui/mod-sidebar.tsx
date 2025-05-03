import { Button } from "@/components/ui/button";
import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const SidebarGroup = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export const SidebarGroupTitle = ({ children }: { children: string }) => {
  return (
    <h6
      className="text-sm mb-2 font-semibold px-2 text-neutral-800 underline underline-offset-2 decoration-neutral-200"
      style={inter.style}
    >
      {children}
    </h6>
  );
};

export const SidebarListItem = ({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) => {
  return (
    <li>
      {href ? (
        <Button
          className={cn(
            "w-full items-start justify-start shadow-none px-2.5 py-1.5 h-fit",
            className,
          )}
          variant={"ghost"}
          asChild
        >
          <Link href={href}>{children}</Link>
        </Button>
      ) : (
        <Button
          className={cn(
            "w-full items-start justify-start shadow-none px-2.5 py-1.5 h-fit",
            className,
          )}
          variant={"ghost"}
        >
          {children}
        </Button>
      )}
    </li>
  );
};
