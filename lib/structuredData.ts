const SITE_URL = "https://armyaftcalculator.com";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "Army AFT Calculator",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/android-chrome-512x512.png`,
        width: 512,
        height: 512,
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: "Army AFT Calculator",
      description:
        "Calculate Army AFT and ACFT scores by age and gender, with event instructions and min/max score references.",
      publisher: { "@id": ORG_ID },
      inLanguage: "en-US",
    },
  ],
};

export const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${SITE_URL}/#webapp`,
  name: "Army AFT / ACFT Calculator",
  url: SITE_URL,
  applicationCategory: "UtilitiesApplication",
  applicationSubCategory: "Fitness Calculator",
  operatingSystem: "Any",
  browserRequirements: "Requires JavaScript",
  description:
    "Calculate Army AFT and ACFT scores based on performance in each event, adjusted for age, gender, and Combat MOS. View min and max scores needed to pass or max each event.",
  inLanguage: "en-US",
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Calculate AFT scores",
    "Calculate ACFT scores",
    "Combat MOS scoring adjustment",
    "Minimum and maximum raw scores by age and gender",
    "Event instructions with video demonstrations",
  ],
  publisher: { "@id": ORG_ID },
  isPartOf: { "@id": WEBSITE_ID },
};

export const hrpHowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Perform the Hand Release Push-Up (HRP)",
  description:
    "The Hand Release Push-Up — Arm Extension (HRP) is an AFT/ACFT event that assesses upper body muscular endurance through a four-movement push-up cycle.",
  totalTime: "PT2M",
  inLanguage: "en-US",
  mainEntityOfPage: `${SITE_URL}/hrp`,
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Starting position",
      text: "On the command 'GET SET,' assume the prone position with hands flat on the ground and index fingers inside the outer edges of the shoulders. Chest, hips and thighs touch the ground; feet are together or up to a boot's width apart with toes touching and ankles flexed.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Movement 1 — Push up",
      text: "On the command 'GO,' push the whole body up as a single unit by fully extending the elbows into the front leaning rest. Maintain generally straight body alignment from head to ankles throughout the event.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Movement 2 — Lower body",
      text: "After fully extending the elbows, bend the elbows and lower the body back to the ground so the chest, hips and thighs touch down at the same time.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Movement 3 — Hand release",
      text: "Without moving the head, body or legs, fully extend both arms out to the sides into the T position until the arms are generally straight.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Movement 4 — Return",
      text: "Immediately move the hands back onto the ground to the starting position to complete the repetition.",
    },
  ],
};

export const mdlHowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Perform the 3 Repetition Maximum Deadlift (MDL)",
  description:
    "The 3 Repetition Maximum Deadlift (MDL) is an AFT/ACFT event that measures lower-body, grip and core muscular strength using a hex bar.",
  inLanguage: "en-US",
  mainEntityOfPage: `${SITE_URL}/mdl`,
  tool: [{ "@type": "HowToTool", name: "Hex bar with weight plates" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Phase 1 — Preparatory phase",
      text: "On the command 'GET SET,' step inside the hex bar with feet shoulder-width apart and locate the midpoint of the handles. Bend at the knees and hips and grasp the handles using a closed grip with arms fully extended, back flat, head aligned with the spine, and heels in contact with the ground.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Phase 2 — Upward movement phase",
      text: "On the command 'GO,' lift the bar by straightening the hips and knees to reach the straddle stance. Hips must not rise before or above the shoulders. Keep the back straight and the weight balanced and controlled throughout the movement.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Phase 3 — Downward movement phase",
      text: "Lower the bar back to the ground under control while maintaining a straight back. The weight plates must touch the ground to complete each repetition. Execute three continuous repetitions with the same weight.",
    },
  ],
};

export const sdcHowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Perform the Sprint-Drag-Carry (SDC)",
  description:
    "The Sprint-Drag-Carry (SDC) is an AFT/ACFT event that measures anaerobic power, endurance and muscular strength through five 50-meter shuttles totaling 250 meters.",
  inLanguage: "en-US",
  mainEntityOfPage: `${SITE_URL}/sdc`,
  tool: [
    { "@type": "HowToTool", name: "Weighted sled with two pulling straps" },
    { "@type": "HowToTool", name: "Two 40-pound kettlebells" },
  ],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Starting position",
      text: "On the command 'GET SET,' assume the prone position with the top of the head behind the start line.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Sprint",
      text: "On the command 'GO,' stand and sprint 25m, touch the 25m line with foot and hand, turn and sprint back to the start line.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Drag",
      text: "Grasp the strap handles and pull the sled backwards until the entire sled crosses the 25m line, then turn the sled around and pull back until the entire sled crosses the start line.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Lateral",
      text: "Perform a lateral shuffle for 25m, touch the 25m line with foot and hand, and lateral back to the start line — leading with each foot in turn and without crossing the feet.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Carry",
      text: "Grasp the handles of the two 40-pound kettlebells and run to the 25m line, step on or over the line with one foot, then turn and run back to the start line.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Final sprint",
      text: "After stepping on or over the start line, place the kettlebells on the ground, turn and sprint 25m, touch the 25m line with foot and hand, then sprint back to the start line. Time stops when the Soldier crosses the start line (250 meters total).",
    },
  ],
};

export const plkHowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Perform the Plank (PLK)",
  description:
    "The Plank (PLK) is an AFT/ACFT event that measures muscular endurance by assessing core strength and endurance.",
  inLanguage: "en-US",
  mainEntityOfPage: `${SITE_URL}/plk`,
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Starting position",
      text: "On the command 'GET READY,' hands are on the ground — either in fists with the pinky side touching the ground or flat with palms down — no more than a grader's fist-width apart. Elbows are bent and aligned with the shoulders, forearms flat on the ground forming a triangle, hips bent with one or both knees resting on the ground.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Set position",
      text: "On the command 'GET SET,' lift both knees off the ground and move the hips into a straight line with the legs, shoulders, head and eyes focused on the ground. Feet may be up to a boot-width apart, ankles flexed with the bottom of the toes on the ground.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Execution",
      text: "On the command 'GO,' move into the proper plank position. Maintain a straight-line position from head to heels for the duration of the event. Feet, forearms and fists/palms must remain in contact with the ground throughout.",
    },
  ],
};

export const sptHowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Perform the Standing Power Throw (SPT)",
  description:
    "The Standing Power Throw (SPT) is an ACFT event that measures upper- and lower-body power using a backwards overhead throw of a 10-pound medicine ball.",
  inLanguage: "en-US",
  mainEntityOfPage: `${SITE_URL}/spt`,
  tool: [{ "@type": "HowToTool", name: "10-pound medicine ball" }],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Starting position",
      text: "Face away from the start line and grasp the 10-pound medicine ball with both hands at hip level. Stand with both heels at the start line — not on or over it — gripping the ball firmly and as far around the sides as possible.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Record throws",
      text: "Throw the medicine ball backwards overhead for distance. Soldiers are permitted preparatory movements flexing at the trunk, knees and hips while lowering the ball between the legs. The Soldier must be stationary prior to a throw — no hopping, stepping or running. Two record throws are taken; the longer of the two is the record score.",
    },
  ],
};

export const cftOverviewSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Combat Field Test (CFT): Events, Standards, and Combat MOSs",
  description:
    "Comprehensive guide to the Combat Field Test (CFT): the seven events, the 30-minute time standard, the 24 combat MOSs that take it, and the phased rollout timeline.",
  mainEntityOfPage: `${SITE_URL}/cft`,
  url: `${SITE_URL}/cft`,
  inLanguage: "en-US",
  about: { "@type": "Thing", name: "Combat Field Test" },
  keywords: [
    "Army CFT",
    "Combat Field Test",
    "Army fitness test",
    "CFT events",
    "CFT MOS",
    "AFT vs CFT",
  ],
  image: {
    "@type": "ImageObject",
    url: `${SITE_URL}/android-chrome-512x512.png`,
    width: 512,
    height: 512,
  },
  datePublished: "2026-05-19",
  dateModified: "2026-05-19",
  author: { "@id": ORG_ID },
  publisher: { "@id": ORG_ID },
  isPartOf: { "@id": WEBSITE_ID },
};

export const cftEventsItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "The seven events of the Combat Field Test",
  description:
    "The seven events of the Combat Field Test (CFT), performed continuously and scored on total time, with a 30-minute standard.",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: 7,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "One-Mile Run",
      description:
        "Opening one-mile run performed in the Army Combat Uniform with combat boots.",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Dead-Stop Push-Ups",
      description:
        "30 repetitions of dead-stop push-ups assessing upper-body strength under fatigue.",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "100-Meter Sprint",
      description:
        "All-out 100-meter sprint that measures anaerobic power.",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Sandbag Lift",
      description:
        "16 lifts of a 40-pound sandbag onto a 65-inch platform.",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Water Can Carry",
      description:
        "A 50-meter carry of two five-gallon Army water cans (40 pounds each).",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Movement Drill",
      description:
        "A 25-meter high crawl followed by 25 meters of three-to-five-second rushes.",
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "Final One-Mile Run",
      description:
        "A second one-mile run measuring aerobic endurance under accumulated fatigue.",
    },
  ],
};

export const cftFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Combat Field Test (CFT)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Combat Field Test (CFT) is a mission-based annual fitness test for Soldiers in 24 designated combat military occupational specialties. It consists of seven events performed continuously and scored on total time, with a 30-minute standard. Soldiers test in the Army Combat Uniform, combat boots, and a brown T-shirt, with no cover.",
      },
    },
    {
      "@type": "Question",
      name: "When does the Army CFT start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Army CFT begins phased implementation on April 17, 2026, when Soldiers in the designated combat MOSs will take the CFT as a diagnostic test. No adverse administrative actions result from a failed attempt through April 16, 2027. Testing for record begins April 17, 2027.",
      },
    },
    {
      "@type": "Question",
      name: "Who has to take the Army CFT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Soldiers in 24 designated combat MOSs take the CFT. Active duty, Active Guard Reserve, and Reserve Component Soldiers on active-duty orders for 365 days or more in combat specialties take one AFT and one CFT every year. Other Reserve Component Soldiers in combat specialties take one fitness test per calendar year, alternating between the AFT and the CFT.",
      },
    },
    {
      "@type": "Question",
      name: "What are the seven events of the Army CFT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The seven CFT events, performed continuously, are: a one-mile run, 30 dead-stop push-ups, a 100-meter sprint, 16 sandbag lifts of 40 pounds onto a 65-inch platform, a 50-meter water can carry with two 40-pound cans, a 50-meter movement drill (25-meter high crawl plus 25 meters of three-to-five-second rushes), and a final one-mile run.",
      },
    },
    {
      "@type": "Question",
      name: "Is the CFT replacing the AFT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The CFT is an additional, mission-based fitness test for Soldiers in combat MOSs. It complements the Army Fitness Test (AFT) rather than replacing it. Soldiers in combat specialties take both tests on a defined cadence based on their component and duty status.",
      },
    },
    {
      "@type": "Question",
      name: "How is the Army CFT scored?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The CFT is scored on total time to complete all seven events as a single continuous sequence. The 30-minute standard applies to the entire sequence, not to any single event.",
      },
    },
  ],
};

export const tmrHowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Perform the Two-Mile Run (TMR)",
  description:
    "The Two-Mile Run (TMR) is an AFT/ACFT event that measures aerobic endurance by timing a Soldier over a two-mile course.",
  inLanguage: "en-US",
  mainEntityOfPage: `${SITE_URL}/tmr`,
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Course",
      text: "The two-mile run can be completed on an indoor or outdoor track, or an improved surface such as a road or sidewalk. The 2MR cannot be tested on unimproved terrain. Out-and-back or lap courses are authorized.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Execution",
      text: "Run two miles for time. The start and finish line are near the same location as the test site for the other five test events.",
    },
  ],
};
