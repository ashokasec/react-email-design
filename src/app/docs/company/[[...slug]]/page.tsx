import React from "react";
import MainPage from "../_components/main-page";
import CompanyPage from "../_components/company-page";
import DocPage from "../_components/doc-page";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  COMPANY_DIR,
  getCompanyDetails,
  getEmailTeamplateContent,
} from "@/content/util";

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
      COMPANY_DIR,
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

const page = async ({ params }: DocPageProps) => {
  const { slug } = await params;

  if (!slug) return <MainPage />;

  if (slug.length === 1) {
    return <CompanyPage companyId={slug[0]} />;
  } else if (slug.length === 2) {
    const doc = getEmailTeamplateContent(
      COMPANY_DIR,
      `${slug[0]}---${slug[1]}`
    );
    const company = getCompanyDetails(slug[0]);
    return (
      <DocPage
        content={doc.content ? doc.content : ""}
        breadcrumb={["Docs", "Company", company?.name, doc.metadata.title]}
      />
    );
  } else {
    notFound();
  }
};

export default page;
