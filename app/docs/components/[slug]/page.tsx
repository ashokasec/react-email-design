import path from "node:path";
import Breadcrumb from "@/components/breadcrumb";
import PreviewAndCodeComponents from "@/components/component-preview";
import { Heading1 } from "@/components/mdx-component";
import {
    COMPONENTS_DIR,
    getAllComponents,
    getAllFiles,
    getFileContent,
} from "@/content/util";
import { absoluteUrl } from "@/lib/utils";
import { render } from "@react-email/render";
import type { Metadata } from "next";
import React from "react";

export const dynamic = "force-static";

export async function generateStaticParams() {
    const components = getAllComponents();
    return components.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;

    const components = getAllComponents();
    const component = components.find((c) => c.slug === slug);

    if (!component) {
        return {};
    }

    return {
        title: `${component.title} | React Email Design`,
        description: component.description,
        openGraph: {
            title: `${component.ogTitle} | React Email Design`,
            description: component.ogDescription,
            type: "article",
            url: absoluteUrl(component.slug),
            images: [
                {
                    url: component.ogImage,
                    width: 1200,
                    height: 630,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${component.title} | React Email Design`,
            description: component.description,
            images: [component.ogImage],
            creator: "@ashokasec",
        },
    };
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
        }),
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
                <div key={index.toString()}>
                    {index !== 0 && (
                        <div
                            className={
                                index === specificComponents.length
                                    ? "border-t-0"
                                    : ""
                            }
                        >
                            <div className="h-8 w-full bg-[repeating-linear-gradient(-45deg,#e4e4e7,#e4e4e7_1px,transparent_1px,transparent_6px)] opacity-50" />
                        </div>
                    )}
                    <div className="border-b">
                        <PreviewAndCodeComponents
                            html={elem.html}
                            jsx={elem.jsx}
                        />
                    </div>
                </div>
            ))}
        </>
    );
};

export default Page;
