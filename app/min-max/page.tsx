import type { Metadata } from "next";
import MinMaxScoresContainer from "@/components/MinMaxScoresContainer";

export const metadata: Metadata = {
  title: "AFT / ACFT Min and Max Scores by Age and Gender",
  description:
    "View the minimum and maximum raw scores needed to pass and to max each AFT/ACFT event, broken down by age group and gender.",
  alternates: { canonical: "/min-max" },
};

const MinMaxPage = () => {
  return (
    <main className="p-4 text-stone-300 w-full">
      <div className="text-3xl p-8 text-amber-400 text-center md:text-left">
        MIN AND MAX SCORES
      </div>
      <div className="md:pl-8 text-center md:text-left dark:text-stone-300 mb-6">
        Select a gender and age group to view min and max scores for each event.
      </div>
      <MinMaxScoresContainer />
    </main>
  );
};

export default MinMaxPage;
