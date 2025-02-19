import React from "react";
import Breadcrumb from "../../_components/breadcrumb";
import {
  Heading1,
  Paragraph,
} from "../../_components/common-markdown";
import PreviewAndCode from "../../_components/preview";

const DocPage = ({
  title,
  description,
  reactCode,
  category,
  breadcrumb,
}: {
  title: string;
  description: string;
  category: string;
  reactCode: string;
  breadcrumb: string[];
}) => {
  return (
    <>
      <Breadcrumb items={breadcrumb} />
      <Heading1>{title}</Heading1>
      <Paragraph className="mb-4">{description}</Paragraph>
      <PreviewAndCode jsxCode={reactCode} />
      <ul className="flex space-x-3 mt-8">
        {category.split(", ").map((item, index) => (
          <li key={index} className="rounded-md border border-blue-800 py-1 px-2 h-fit bg-blue-600 text-white">{item}</li>
        ))}
      </ul>
      <div className="border-t mt-8 pt-2">
        <Paragraph>That&apos;s it from my side.<br/>Have a Good Day.</Paragraph>
      </div>
    </>
  );
};

export default DocPage;
