import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      {
        source: "/docs/components",
        destination: "/docs/components/button",
        permanent: true,
      },

      // Short URL Redirects
      {
        source: "/r/contribute",
        destination: "https://github.com/ashokasec/react-email-design/blob/main/CONTRIBUTING.md",
        permanent: true,
      },
      {
        source: "/r/github",
        destination: "https://github.com/ashokasec/react-email-design",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
