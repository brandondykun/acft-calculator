import type { Metadata } from "next";
import { ArrowDown, ExternalLink, Newspaper } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import {
  cftEventsItemListSchema,
  cftFaqSchema,
  cftOverviewSchema,
} from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Combat Field Test (CFT): Events, Standards & MOS List",
  description:
    "Complete guide to the Combat Field Test (CFT): the seven events, the 30-minute time standard, the 24 combat MOSs that test on it, and the 2026 to 2027 rollout timeline.",
  keywords: [
    "Army CFT",
    "Combat Field Test",
    "Army CFT events",
    "Army CFT MOS list",
    "Army fitness test",
    "AFT vs CFT",
    "CFT standards",
  ],
  alternates: { canonical: "/cft" },
  openGraph: {
    type: "article",
    title: "Combat Field Test (CFT): Events, Standards & MOS List",
    description:
      "Everything Soldiers need to know about the Combat Field Test (CFT): the seven events, scoring, the 24 combat MOSs, and the phased 2026 to 2027 rollout.",
    url: "/cft",
    siteName: "Army AFT Calculator",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Combat Field Test (CFT): Events, Standards & MOS List",
    description:
      "The seven events, the 30-minute time standard, the 24 combat MOSs, and the 2026 to 2027 rollout for the Combat Field Test (CFT).",
  },
};

const faqs: { question: string; answer: string }[] = [
  {
    question: "What is the Combat Field Test (CFT)?",
    answer:
      "The Combat Field Test (CFT) is a mission-based annual fitness test for Soldiers in 24 designated combat military occupational specialties. It consists of seven events performed continuously and scored on total time, with a 30-minute standard. Soldiers test in the Army Combat Uniform, combat boots, and a brown T-shirt, with no cover.",
  },
  {
    question: "When does the Army CFT start?",
    answer:
      "The Army CFT begins phased implementation on April 17, 2026, when Soldiers in the designated combat MOSs will take it as a diagnostic test. No adverse administrative actions result from a failed attempt through April 16, 2027. Testing for record begins April 17, 2027.",
  },
  {
    question: "Who has to take the Army CFT?",
    answer:
      "Soldiers in 24 designated combat MOSs take the CFT. Active duty, Active Guard Reserve, and Reserve Component Soldiers on active-duty orders for 365 days or more in combat specialties take one AFT and one CFT each year. Other Reserve Component Soldiers in combat specialties take one fitness test per calendar year, alternating between the AFT and the CFT.",
  },
  {
    question: "Is the Army CFT replacing the AFT?",
    answer:
      "No. The Army CFT is an additional, mission-based fitness test for Soldiers in combat MOSs. It complements the Army Fitness Test (AFT) rather than replacing it. Soldiers in combat specialties take both tests on a defined cadence based on their component and duty status.",
  },
  {
    question: "How is the Army CFT scored?",
    answer:
      "The Army CFT is scored on total time to complete all seven events as one continuous sequence. The 30-minute standard applies to the full sequence rather than to any single event.",
  },
];

const events: { name: string; detail: string; description: string }[] = [
  {
    name: "One-Mile Run",
    detail: "1 mile",
    description:
      "The CFT opens with a one-mile run. The Soldier runs in the Army Combat Uniform with combat boots, brown T-shirt, and no cover.",
  },
  {
    name: "Dead-Stop Push-Ups",
    detail: "30 reps",
    description:
      "The Soldier performs 30 dead-stop push-ups. Unlike a continuous push-up, each repetition starts and ends from a fully grounded position to assess upper-body strength under fatigue.",
  },
  {
    name: "100-Meter Sprint",
    detail: "100 m",
    description:
      "A short, all-out 100-meter sprint that measures anaerobic power and the ability to accelerate after a strength task.",
  },
  {
    name: "Sandbag Lift",
    detail: '16 × 40 lb → 65" platform',
    description:
      "The Soldier lifts a 40-pound sandbag onto a 65-inch platform 16 times. This event mirrors common combat loading tasks such as loading vehicles and reinforcing positions.",
  },
  {
    name: "Water Can Carry",
    detail: "50 m · 2 × 40 lb",
    description:
      "The Soldier carries two five-gallon Army water cans (40 pounds each) a distance of 50 meters, simulating the resupply tasks Soldiers perform in the field.",
  },
  {
    name: "Movement Drill",
    detail: "25 m crawl + 25 m rushes",
    description:
      "A 50-meter movement drill consisting of a 25-meter high crawl followed by 25 meters of three-to-five-second rushes — a direct translation of individual movement techniques used under fire.",
  },
  {
    name: "Final One-Mile Run",
    detail: "1 mile",
    description:
      "The CFT closes with a second one-mile run. Performed after the strength and movement events, it measures the Soldier's ability to sustain aerobic output under accumulated fatigue.",
  },
];

const mosList: string[] = [
  "11A. Infantry Officer",
  "11B. Infantryman",
  "11C. Indirect Fire Infantryman",
  "11Z. Infantry Senior Sergeant",
  "12A. Engineer Officer",
  "12B. Combat Engineer",
  "12D. Diver",
  "13A. Field Artillery Officer",
  "13F. Joint Fire Support Specialist",
  "18A. Special Forces Officer",
  "180A. Special Forces Warrant Officer",
  "18B. Special Forces Weapons Sergeant",
  "18C. Special Forces Engineer Sergeant",
  "18D. Special Forces Medical Sergeant",
  "18E. Special Forces Communications Sergeant",
  "18F. Special Forces Intelligence Sergeant",
  "18Z. Special Forces Operations Sergeant",
  "19A. Armor Officer",
  "19C. Bradley Crewmember",
  "19D. Cavalry Scout",
  "19K. Armor Crewmember",
  "19Z. Armor Senior Sergeant",
  "89D. Explosive Ordnance Disposal (EOD) Specialist",
  "89E. Explosive Ordnance Disposal (EOD) Officer",
];

const CftPage = () => {
  return (
    <main className="p-4 text-stone-300 w-full">
      <JsonLd data={cftOverviewSchema} />
      <JsonLd data={cftEventsItemListSchema} />
      <JsonLd data={cftFaqSchema} />
      <h1 className="text-3xl mb-8 text-amber-400 p-8 text-center md:text-left">
        COMBAT FIELD TEST (CFT)
      </h1>

      <nav
        aria-label="Jump to section"
        className="hidden md:block max-w-3xl mx-auto px-4 mb-12"
      >
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { href: "#events", label: "What are the events?" },
            { href: "#who-tests", label: "Who has to take it?" },
            { href: "#timeline", label: "When does it start?" },
            { href: "#mos", label: "Which MOSs take it?" },
            { href: "#faq", label: "FAQ" },
            { href: "#learn-more", label: "Where can I learn more?" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group inline-flex items-center gap-2 rounded-full border border-solid border-stone-700 bg-stone-900 px-5 py-2.5 text-base font-medium text-stone-100 shadow-sm transition-all hover:border-amber-400 hover:text-amber-400 hover:shadow-md hover:shadow-amber-400/10"
            >
              <ArrowDown
                size={16}
                className="text-amber-400 transition-transform group-hover:translate-y-0.5"
              />
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <p className="w-full md:w-4/6 md:m-auto py-8 text-md md:text-lg relative p-4 dark:border-stone-400 dark:border-solid dark:border rounded-md dark:border-opacity-30 md:p-12 md:mb-16">
        <span className="absolute top-[-10px] left-10 bg-stone-950 px-4 text-stone-400 text-sm">
          CFT
        </span>
        The Combat Field Test (CFT) is a mission-based annual fitness test
        for Soldiers in 24 designated combat military occupational
        specialties. Its seven events are performed continuously and scored on
        total time, with a 30-minute standard. Soldiers test in the Army
        Combat Uniform, combat boots, and a brown T-shirt — no cover. The
        Army CFT is designed to align fitness standards with the physical
        demands of modern combat.
      </p>

      <section
        id="events"
        className="w-full md:w-4/6 mx-auto my-16 scroll-mt-8"
      >
        <h2 className="font-bold text-2xl mb-4">
          The seven events of the Army CFT
        </h2>
        <p className="pl-4 dark:border-l dark:border-l-amber-400 dark:border-l-solid dark:border-opacity-50">
          The CFT is performed as a single, continuous sequence. The Soldier's
          score is the total time to complete all seven events. The 30-minute
          standard applies to the full sequence, not to any single event.
        </p>
      </section>

      <ol className="max-w-3xl mx-auto my-16 flex flex-col gap-10">
        {events.map((event, i) => (
          <li
            key={event.name}
            className="relative rounded-lg border border-solid border-stone-800 bg-stone-900/40 p-6 pt-10 transition-colors hover:border-amber-400/40"
          >
            <span
              aria-hidden="true"
              className="absolute -top-5 left-5 flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 font-bold text-stone-900 shadow-md shadow-amber-400/10"
            >
              {i + 1}
            </span>
            <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-xl font-bold text-stone-100">{event.name}</h3>
              <span className="text-xs uppercase tracking-wider text-amber-400/90">
                {event.detail}
              </span>
            </div>
            <p className="mt-2 text-md text-stone-400">{event.description}</p>
          </li>
        ))}
      </ol>

      <section
        id="who-tests"
        className="w-full md:w-4/6 mx-auto my-16 scroll-mt-8"
      >
        <h2 className="font-bold text-2xl mb-4">
          Who has to take the Army CFT
        </h2>
        <p className="pl-4 dark:border-l dark:border-l-amber-400 dark:border-l-solid dark:border-opacity-50">
          Active duty, Active Guard Reserve, and Reserve Component Soldiers on
          active-duty orders for 365 days or more in combat specialties take one
          AFT and one CFT every year. All other Reserve Component Soldiers in
          combat specialties take one fitness test per calendar year,
          alternating between the AFT and the CFT.
        </p>
      </section>

      <section
        id="timeline"
        className="w-full md:w-4/6 mx-auto my-16 scroll-mt-8"
      >
        <h2 className="font-bold text-2xl mb-4">
          Army CFT rollout timeline
        </h2>
        <p className="pl-4 dark:border-l dark:border-l-amber-400 dark:border-l-solid dark:border-opacity-50">
          The CFT rolls out in two phases. Beginning April 17, 2026, Soldiers in
          the designated combat MOSs will take the CFT as a diagnostic test, and
          no adverse administrative actions will result from a failed attempt
          through April 16, 2027. Testing for record begins April 17, 2027; from
          that date forward, failing a CFT can lead to administrative actions.
        </p>
      </section>

      <section
        id="mos"
        className="w-full md:w-4/6 mx-auto my-16 scroll-mt-8"
      >
        <h2 className="font-bold text-2xl mb-4">
          Combat MOSs that take the Army CFT
        </h2>
        <p className="pl-4 dark:border-l dark:border-l-amber-400 dark:border-l-solid dark:border-opacity-50 mb-6">
          CFT standards apply to the following 24 combat military occupational
          specialties:
        </p>
        <ul className="flex flex-col gap-1 text-stone-400 pl-4">
          {mosList.map((mos) => (
            <li key={mos}>{mos}</li>
          ))}
        </ul>
      </section>

      <section
        id="faq"
        className="w-full md:w-4/6 mx-auto my-16 scroll-mt-8"
      >
        <h2 className="font-bold text-2xl mb-6">
          Frequently asked questions about the Army CFT
        </h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-lg border border-solid border-stone-800 bg-stone-900/40 px-5 py-4 transition-colors hover:border-amber-400/40 open:border-amber-400/40"
            >
              <summary className="cursor-pointer list-none font-semibold text-stone-100 marker:hidden flex items-center justify-between gap-4">
                <h3 className="text-base font-semibold text-stone-100">
                  {faq.question}
                </h3>
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 text-amber-400 transition-transform group-open:rotate-45 text-2xl leading-none"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-stone-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="learn-more" className="max-w-3xl mx-auto my-16 scroll-mt-8">
        <div className="rounded-lg border border-solid border-stone-800 bg-stone-900/40 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-full bg-amber-400/10 border border-solid border-amber-400/30 text-amber-400">
            <Newspaper size={24} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-stone-100 mb-2">
              Want to find out more?
            </h3>
            <p className="text-stone-400 mb-5">
              The Army's official announcement covers the CFT's purpose,
              rollout, and how it fits alongside the AFT — straight from the
              source.
            </p>
            <a
              href="https://www.army.mil/article/291880/us_army_announces_new_combat_field_test_to_enhance_soldier_readiness"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-solid border-amber-400/60 px-4 py-2 text-sm font-medium text-amber-400 transition-colors hover:bg-amber-400 hover:text-stone-900 hover:border-amber-400"
            >
              Read the Army's CFT announcement
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CftPage;
