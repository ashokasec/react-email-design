import path from "path";
import { COMPONENTS_DIR, getAllDirectories } from "../util";
import { readFileSync } from "fs";
import matter from "gray-matter";

export function getAllComponents() {
    const directories = getAllDirectories({ dir: COMPONENTS_DIR })
    const components = directories.map((elem) => {
        const filePath = path.join(COMPONENTS_DIR, elem, "index.mdx");
        console.log(filePath)
        const content = readFileSync(filePath, 'utf-8');
        const { data } = matter(content);
        return {
            title: data.title as string,
            slug: elem
        }
    })
    return components
}