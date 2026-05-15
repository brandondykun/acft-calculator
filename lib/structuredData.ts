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
