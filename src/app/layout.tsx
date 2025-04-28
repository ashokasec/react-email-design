import type { Metadata } from "next";
import "./globals.css";
import { geistSans } from "@/lib/fonts";
import { Navbar } from "@/components/app/navbar";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "React Email Templates | Beautiful, Responsive & Production-Ready",
  description: "Hand-crafted, customizable React Email templates built for developers, startups, and marketers. Save time designing professional emails with ready-to-use, responsive templates.",
  keywords: [
    "react email templates",
    "responsive email templates",
    "reactemail.design",
    "react.email",
    "email design system",
    "email UI kit",
    "transactional email templates",
    "marketing email templates",
    "authentication email templates",
    "professional email design",
    "react email components",
  ],
  authors: [{ name: "React Email Design", url: "https://reactemail.design" }],
  creator: "React Email Design",
  openGraph: {
    title: "React Email Templates | Beautiful, Responsive & Production-Ready",
    description: "A curated library of production-ready React Email templates — perfect for authentication flows, marketing campaigns, and transactional updates. Fully responsive and easy to customize.",
    url: "https://reactemail.design",
    siteName: "React Email Design",
    images: [
      {
        url: "https://reactemail.design/app/opengraph.png",
        width: 1200,
        height: 630,
        alt: "React Email Templates Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased`}>
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
