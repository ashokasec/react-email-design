import {
    Bricolage_Grotesque,
    Epilogue,
    Geist,
    Inter,
    Space_Grotesk,
} from "next/font/google";

export const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });
export const epilogue = Epilogue({ subsets: ["latin"] });
export const spaceGrtoesk = Space_Grotesk({ subsets: ["latin"] });
export const inter = Inter({ subsets: ["latin"] });
export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});
