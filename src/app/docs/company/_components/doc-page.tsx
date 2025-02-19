import React from "react";
import Breadcrumb from "../../_components/breadcrumb";
import CommonMarkdown from "../../_components/common-markdown";

const DocPage = ({
  content,
  breadcrumb,
}: {
  content: string;
  breadcrumb: string[];
}) => {
  return (
    <>
      <Breadcrumb items={breadcrumb} />
      <CommonMarkdown>{content}</CommonMarkdown>
    </>
  );
};

export default DocPage;
