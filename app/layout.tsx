import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ACFT Calculator",
  description: "Army ACFT calculator.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark min-h-screen w-screen">
      <body
        className={`${space_grotesk.className} dark:bg-stone-950 min-h-screen min-w-full`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
