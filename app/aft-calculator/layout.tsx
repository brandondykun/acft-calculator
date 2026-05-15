import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AFT Score Calculator",
  description:
    "Calculate your Army Fitness Test (AFT) score by entering raw scores for the MDL, HRP, SDC, PLK, and TMR. Adjusts for gender, age, and Combat MOS.",
  alternates: { canonical: "/aft-calculator" },
};

export default function AftCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
