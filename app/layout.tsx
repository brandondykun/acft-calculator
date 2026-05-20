import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import JsonLd from "@/components/JsonLd";
import { siteSchema } from "@/lib/structuredData";

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://armyaftcalculator.com"),
  title: {
    default: "Army AFT / ACFT Calculator",
    template: "%s | Army AFT Calculator",
  },
  description:
    "The Army AFT/ACFT calculator. Calculate AFT and ACFT scores based on performance in each event. View min and max scores necessary to pass or max each event.",
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark min-h-screen w-screen scroll-smooth">
      <body
        className={`${space_grotesk.className} dark:bg-stone-950 min-h-screen min-w-full`}
      >
        <JsonLd data={siteSchema} />
        <NavBar />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID} />
    </html>
  );
}
