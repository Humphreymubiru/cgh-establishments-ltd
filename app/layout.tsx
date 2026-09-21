import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CGH Establishments Ltd - Building the Infrastructure That Moves Uganda",
    template: "%s | CGH Establishments Ltd",
  },
  description:
    "CGH Establishments Ltd is a Ugandan construction company specialising in road construction, road maintenance and civil infrastructure works across Uganda. UNABCEC classified A-3.",
  keywords: [
    "CGH Establishments",
    "road construction Uganda",
    "civil infrastructure",
    "road maintenance",
    "UNABCEC",
    "Ugandan contractor",
  ],
  openGraph: {
    title: "CGH Establishments Ltd",
    description:
      "Building the infrastructure that moves Uganda. Road construction, road maintenance and civil infrastructure works.",
    type: "website",
    locale: "en_UG",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
