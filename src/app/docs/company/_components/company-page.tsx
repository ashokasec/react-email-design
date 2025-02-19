import { getCompanyDetails, getDocumentsByCompanyId } from "@/content/util";
import Link from "next/link";
import React from "react";
import Breadcrumb from "../../_components/breadcrumb";
import { Heading1, Paragraph } from "../../_components/common-markdown";
import { inter } from "@/lib/fonts";
import { ShieldCheck } from "lucide-react";

const CompanyPage = ({ companyId }: { companyId: string }) => {
  const company = getCompanyDetails(companyId);
  const allDocuments = getDocumentsByCompanyId({ companyId });

  return (
    <>
      <Breadcrumb items={["Docs", "Company", company ? company.name : ""]} />
      <span className="flex items-center space-x-2">
        <Heading1>{company ? company.name : ""}</Heading1>
      </span>
      <Paragraph>{company ? company.description : ""}</Paragraph>
      <div>
        <h2 className="font-semibold mt-8 mb-4" style={inter.style}>
          Available - {allDocuments.length}
        </h2>
        <div className="grid grid-cols-2">
          {allDocuments.map((item, index) => (
            <Link
              key={index}
              href={`/docs/company/${companyId}/${item.template}`}
              className="inline-block ml-0.5 aspect-video p-1.5 pt-0 w-full border rounded-lg bg-blue-50/50"
            >
              <div className="py-2 flex items-center">
                <ShieldCheck className="h-4" />
                <h2 className="text-[15px] font-medium w-fit">{item.title}</h2>
              </div>
              <figure className="w-full h-full overflow-hidden rounded-md border">
                <img
                  src={`/content/emails/company/${companyId}---${item.template}.png`}
                  className="w-full"
                  alt=""
                />
              </figure>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CompanyPage;
