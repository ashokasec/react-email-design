import { ChevronRight } from "lucide-react";

const Breadcrumb = ({ items }: { items: string[] }) => {
  return (
    <div className="flex text-sm items-center font-medium mb-4 mt-1">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <span className="text-neutral-500">{item}</span>
          {index < items.length - 1 && <ChevronRight className="h-4 mx-0.5" />}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
