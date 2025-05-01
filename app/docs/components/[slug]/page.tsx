import React from "react";
import { COMPONENTS_DIR, getAllComponents, getAllFiles, getFileContent } from "@/content/util";
import path from "node:path";
import { render } from "@react-email/render";
import Breadcrumb from "@/components/breadcrumb";
import { Heading1 } from "@/components/mdx-component";
import PreviewAndCodeComponents from "@/components/component-preview";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const components = getAllComponents();
  return components.map((c) => ({ slug: c.slug }));
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const components = getAllComponents();
  const component = components.find((c) => c.slug === slug);

  if (!component) return <Heading1>Not Found</Heading1>;

  const files = getAllFiles({
    dir: path.join(COMPONENTS_DIR, slug),
  }).filter((file) => file.endsWith(".tsx"));

  const specificComponents = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(COMPONENTS_DIR, slug);
      const content = getFileContent({ dir: filePath, filename: file });

      const EmailComponent = (
        await import(`@/content/components/${slug}/${file}`)
      ).default;

      const html = await render(<EmailComponent />, { pretty: true });

      return {
        html,
        jsx: content,
      };
    })
  );

  return (
    <>
      <div className="px-12 pb-6">
        <Breadcrumb items={["Docs", "Components", component.title]} />
        <Heading1 className="font-extrabold text-neutral-800">
          {component?.title}
        </Heading1>
      </div>

      {specificComponents.map((elem, index) => (
        <div key={index}>
          {index !== 0 && (
            <div
              className={
                index === specificComponents.length ? "border-t-0" : ""
              }
            >
              <div className="h-8 w-full bg-[repeating-linear-gradient(-45deg,#e4e4e7,#e4e4e7_1px,transparent_1px,transparent_6px)] opacity-50" />
            </div>
          )}
          <div className="border-b">
            <PreviewAndCodeComponents html={elem.html} jsx={elem.jsx} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Page;
