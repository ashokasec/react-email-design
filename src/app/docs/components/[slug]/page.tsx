import React from "react";
import { Metadata } from "next";
import {
  COMPONENTS_DIR,
  DOCS_COMPANY_DIR,
  getAllFiles,
  getCompanyDetails,
  getEmailTeamplateContent,
  getFileContent,
} from "@/content/util";
import path from "node:path";
import { getAllComponents } from "@/content/components/util";
import { Heading1 } from "../../_components/common-markdown";
import Breadcrumb from "../../_components/breadcrumb";
import PreviewAndCode from "../../_components/preview";

interface DocPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!slug) {
    const title = "Company";
    const description =
      "Explore a collection of manually written email templates, recreated from top companies like Google, Stripe, GitHub, and Airbnb using React.email. Learn how real-world templates are made and use them to create your own with clean, easy-to-use code. 🚀";
    return {
      title: title,
      description: description,
      openGraph: {
        title: title,
        description: description,
        type: "article",
        images: [
          {
            url: `/og?title=${encodeURIComponent(
              title
            )}&description=${encodeURIComponent(description)}`,
          },
        ],
      },
    };
  }

  if (slug.length === 1) {
    const result = getCompanyDetails(slug[0]);
    const title = result ? result.name : "";
    const description =
      "Explore a collection of manually written email templates, recreated from top companies like Google, Stripe, GitHub, and Airbnb using React.email. Learn how real-world templates are made and use them to create your own with clean, easy-to-use code. 🚀";
    return {
      title: title,
      description: description,
      openGraph: {
        title: title,
        description: description,
        type: "article",
        images: [
          {
            url: `/og?title=${encodeURIComponent(
              title
            )}&description=${encodeURIComponent(description)}`,
          },
        ],
      },
    };
  } else if (slug.length === 2) {
    const doc = getEmailTeamplateContent(
      DOCS_COMPANY_DIR,
      `${slug[0]}---${slug[1]}`
    );

    const title = doc.metadata.title;
    const description = doc.metadata.description;
    return {
      title: title,
      description: description,
      openGraph: {
        title: title,
        description: description,
        type: "article",
        images: [
          {
            url: `/og?title=${encodeURIComponent(
              title
            )}&description=${encodeURIComponent(description)}`,
          },
        ],
      },
    };
  } else {
    return {};
  }
}

const page = async ({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) => {
  const { slug } = await params;

  const components = getAllComponents();
  const component = components.find((component) => component.slug === slug);

  if (!component) {
    return <Heading1>Not Found</Heading1>;
  }

  const files = getAllFiles({ dir: path.join(COMPONENTS_DIR, slug) }).filter(
    (file) => file.endsWith(".tsx")
  );

  const specificComponents = files.map((file) => {
    const content = getFileContent({
      dir: path.join(COMPONENTS_DIR, slug),
      filename: file,
    });
    return {
      title: content.split("// ---")[0].trim().replace("// ", ""),
      code: content.split("// ---")[1].trim(),
    };
  });

  return (
    <>
      <Breadcrumb items={["Docs", "Components", component.title]} />
      <Heading1>{component?.title}</Heading1>
      {specificComponents.map((elem, index) => (
        <div className="mt-4" key={index}>
          <h3 className="text-lg font-semibold">{elem.title}</h3>
          <PreviewAndCode jsxCode={elem.code} />
        </div>
      ))}
    </>
  );
};

export default page;
