export type ScoreObject = {
  raw: number;
  score: number;
};

export type AgeType = {
  "17": ScoreObject[];
  "22": ScoreObject[];
  "27": ScoreObject[];
  "32": ScoreObject[];
  "37": ScoreObject[];
  "42": ScoreObject[];
  "47": ScoreObject[];
  "52": ScoreObject[];
  "57": ScoreObject[];
  "62": ScoreObject[];
};

export type GenderType = {
  male: AgeType;
  female: AgeType;
};

export type DataType = {
  mdl: GenderType;
  spt: GenderType;
  hrp: GenderType;
  sdc: GenderType;
  plk: GenderType;
  tmr: GenderType;
};

export type Gender = "male" | "female";

export type Exercise = "mdl" | "spt" | "hrp" | "sdc" | "plk" | "tmr";

export type Age =
  | "17"
  | "22"
  | "27"
  | "32"
  | "37"
  | "42"
  | "47"
  | "52"
  | "57"
  | "62";
