import type { Metadata } from "next";
import "./globals.css";
import { geistSans } from "@/lib/fonts";
import { Navbar } from "@/components/app/navbar";

export const metadata: Metadata = {
  title: `React Email Templates`,
  description: `Developed For Ease`,
  keywords: [
    "email",
    "react email templates",
    "email templates",
    "email design",
    "react email",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
