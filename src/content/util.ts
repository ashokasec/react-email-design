import { existsSync, readdirSync, readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import COMPANIES_DATA from "./data/companies"

export const COMPANY_DIR = path.join(process.cwd(), 'src', 'content', 'company');

export const getAllDocuments = ({ folder }: { folder: string }) => {
    const fileNames = readdirSync(folder)

    return fileNames
        .filter((file) => file.endsWith('.mdx'))
        .map((file) => {
            const slug = file.replace('.mdx', '');
            const filePath = path.join(folder, file);
            const content = readFileSync(filePath, 'utf-8');
            const { data } = matter(content);

            return {
                title: data.title,
                description: data.description,  // Get the description
                slug,
            };
        });
}

export const getDocumentsByCompanyId = ({ companyId }: { companyId: string }) => {
    const fileNames = readdirSync(COMPANY_DIR)
    const allTemplates = fileNames.filter((file) => file.endsWith('.mdx')).map((item) => {
        const result = item.split("---")
        return {
            companyId: result[0],
            template: result[1]
        }
    })

    const specificCompanyDocuments = allTemplates.filter((item) => item.companyId === companyId);

    return specificCompanyDocuments.map((item) => {
        const filePath = path.join(COMPANY_DIR, `${item.companyId}---${item.template}`);
        const content = readFileSync(filePath, 'utf-8');
        const { data } = matter(content);
        return {
            template: item.template.replace(".mdx", ""),
            title: data.title,
            description: data.description,
            companyId,
        };
    });
}

const getAllUniqueCompanies = () => {
    const fileNames = readdirSync(COMPANY_DIR)

    const companies = fileNames.filter((file) => file.endsWith('.mdx')).map((item) => {
        const result = item.split("---")
        return COMPANIES_DATA.filter((company => company.id === result[0]))[0]
    })

    const uniqueCompanies = Object.values(
        companies.reduce((acc, company) => {
            if (!acc[company.id]) {
                acc[company.id] = { ...company, count: 0 }; 
            }
            acc[company.id].count += 1;
            return acc;
        }, {} as Record<string, { id: string; name: string; description: string; url: string; count: number }>)
    );

    return uniqueCompanies;
}

export const getEmailTeamplateContent = (folder: string, slug: string) => {
    const filePath = path.join(folder, `${slug}.mdx`);

    if (!existsSync(filePath)) {
        return {
            content: null,
            metadata: {
                title: null,
                description: null,
                slug: slug,
                error: 'File not found'
            }
        };
    }

    const content = readFileSync(filePath, 'utf-8');
    const matterResult = matter(content);

    return {
        content: matterResult.content,
        metadata: {
            title: matterResult.data.title,
            description: matterResult.data.description,
            slug: slug
        }
    };
};

export const UNIQUE_COMPANIES = getAllUniqueCompanies()

export const getCompanyDetails = (companyId: string) => {
    return UNIQUE_COMPANIES.find((company) => company.id === companyId)
}