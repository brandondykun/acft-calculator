import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ACFT Score Calculator",
  description:
    "Calculate your Army Combat Fitness Test (ACFT) score by entering raw scores for the MDL, SPT, HRP, SDC, PLK, and TMR. Adjusts for gender and age group.",
  alternates: { canonical: "/calculator" },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
