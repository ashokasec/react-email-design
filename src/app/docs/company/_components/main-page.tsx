import { UNIQUE_COMPANIES } from "@/content/util";
import React from "react";

const MainPage = () => {
  return (
    <div className="space-y-4">
      {UNIQUE_COMPANIES.map((company) => (
        <div key={company.id} className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold">
            <a
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {company.name}
            </a>
          </h2>
          <p className="text-sm text-gray-500">
            Templates available: {company.count}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MainPage;
