import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");
export const COMPONENTS_DIR = path.join(CONTENT_DIR, "components");

export function getAllDirectories({ dir }: { dir: string }) {
    const directories = readdirSync(dir).filter((name) => {
        const fullPath = path.join(dir, name);
        return statSync(fullPath).isDirectory();
    });
    return directories;
}

export function getAllFiles({ dir }: { dir: string }) {
    const files = readdirSync(dir).filter((name) => {
        const filePath = path.join(dir, name);
        return statSync(filePath).isFile();
    });
    return files;
}

export function getFileContent({
    dir,
    filename,
}: { dir: string; filename: string }) {
    const filePath = path.join(dir, filename);
    const content = readFileSync(filePath, "utf-8");
    return content;
}

// ----------------

export function getAllComponents() {
    const directories = getAllDirectories({ dir: COMPONENTS_DIR });
    const components = directories.map((elem) => {
        const filePath = path.join(COMPONENTS_DIR, elem, "meta.mdx");
        const content = readFileSync(filePath, "utf-8");
        const { data } = matter(content);
        return {
            title: data.title as string,
            description: data.description as string,
            slug: data.slug as string,
            ogImage: data.ogImage as string,
            ogTitle: data.ogTitle as string,
            ogDescription: data.ogDescription as string,
        };
    });
    return components;
}
