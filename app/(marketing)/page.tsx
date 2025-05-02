import { Footer } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { geistSans } from "@/lib/fonts";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <>
            <main style={geistSans.style}>
                <div className="max-w-screen-xl mx-auto py-36">
                    <h1
                        className="font-bold text-6xl max-w-2xl mx-auto text-center text-neutral-800 leading-[1.1]"
                        style={geistSans.style}
                    >
                        {/* <TextGradient>React Email Templates</TextGradient> for {" "}
            <TextGradient from="from-sky-400" to="to-blue-500">Busy Developers</TextGradient> */}
                        React Email Templates for Busy Developers
                    </h1>
                    <p
                        className="max-w-2xl mx-auto text-center text-[17px] text-neutral-700 mt-6 landing-description"
                        style={geistSans.style}
                    >
                        50+ handcrafted email templates built with{" "}
                        <strong>React.email</strong>,{" "}
                        <strong>Tailwind CSS</strong>, and{" "}
                        <strong>Typescript</strong> — perfect for developers
                        shipping onboarding, transactional, and marketing emails
                        fast.
                    </p>
                    <div className="space-x-2 mx-auto w-fit mt-10">
                        <Button
                            size="lg"
                            className="text-[15px] py-3 h-fit"
                            asChild
                        >
                            <Link href="/docs/components">
                                Browse Components{" "}
                                <ChevronRight className="size-4" />
                            </Link>
                        </Button>
                        <Button
                            size="lg"
                            className="text-[15px] py-3 h-fit"
                            variant="outline"
                        >
                            Browse Templates <ChevronRight className="size-4" />
                        </Button>
                    </div>
                    <ul className="flex items-center w-fit mx-auto mt-8 space-x-2 saturate-150">
                        <li className="size-12 grid place-items-center border border-border/30 overflow-hidden rounded-xl">
                            <img
                                src="/logo/react-email.png"
                                className="size-12 invert"
                                alt="React Email Logo"
                            />
                        </li>
                        <li className="size-12 grid place-items-center border border-border/30 overflow-hidden rounded-xl">
                            <img
                                src="/logo/react-icon.svg"
                                className="size-8"
                                alt="React JS Logo"
                            />
                        </li>
                        <li className="size-12 grid place-items-center border border-border/30 overflow-hidden rounded-xl">
                            <img
                                src="/logo/tailwind-icon.svg"
                                className="size-6"
                                alt="Tailwind CSS Logo"
                            />
                        </li>
                    </ul>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default page;
