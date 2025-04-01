import { Plus_Jakarta_Sans, Manrope, Fira_Code } from "next/font/google";

export const titleFont = Plus_Jakarta_Sans({
    variable: "--font-title",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700"],
});
export const textFont = Manrope({
    variable: "--font-text",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700"],
});
export const codeFont = Fira_Code({
    variable: "--font-code",
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700"],
});