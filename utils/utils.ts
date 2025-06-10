const acftScores = require("../data/data.json");
const aftScores = require("../data/aft_scores.json");
import { Age, Gender, Exercise, ScoreObject } from "@/types";

export const padTo2Digits = (num: number) => {
  return num.toString().padStart(2, "0");
};

export const secondsToMinutesAndSeconds = (secondsInput: number) => {
  const minutes = Math.floor(secondsInput / 60);
  // 👇️ get the remainder of the seconds
  const seconds = secondsInput % 60;
  // format as MM:SS
  const result = `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
  return result;
};

export const getScoreDecreasingIsBetter = (
  gender: Gender,
  age: Age,
  exercise: Exercise,
  raw: number,
  testType: "acft" | "aft" = "acft"
) => {
  const data = testType === "acft" ? acftScores : aftScores;
  const exerciseData = data[exercise][gender][age];
  for (let i = 0; i < exerciseData.length; i++) {
    if (exerciseData[0].raw < raw) {
      return 0;
    } else if (exerciseData[i].raw === raw) {
      return exerciseData[i].score;
    } else if (exerciseData[i].raw < raw) {
      return exerciseData[i - 1]?.score;
    } else if (exerciseData[exerciseData.length - 1].raw > raw) {
      return 100;
    }
  }
};

export const getScoreIncreasingIsBetter = (
  gender: Gender,
  age: Age,
  exercise: Exercise,
  raw: number,
  testType: "acft" | "aft" = "acft"
) => {
  const data = testType === "acft" ? acftScores : aftScores;
  const exerciseData = data[exercise][gender][age];
  for (let i = 0; i < exerciseData.length; i++) {
    if (exerciseData[0].raw > raw) {
      return 0;
    } else if (exerciseData[i].raw === raw) {
      return exerciseData[i].score;
    } else if (exerciseData[i].raw > raw) {
      return exerciseData[i - 1]?.score;
    } else if (exerciseData[exerciseData.length - 1].raw < raw) {
      return 100;
    }
  }
};

type MinMaxReturn = {
  mdlMin: ScoreObject;
  mdlMax: ScoreObject;
  sptMin: ScoreObject;
  sptMax: ScoreObject;
  hrpMin: ScoreObject;
  hrpMax: ScoreObject;
  sdcMin: ScoreObject;
  sdcMax: ScoreObject;
  plkMin: ScoreObject;
  plkMax: ScoreObject;
  tmrMin: ScoreObject;
  tmrMax: ScoreObject;
};

export const getMinMaxScores = (
  gender: Gender,
  age: Age,
  testType: "acft" | "aft" = "acft"
): MinMaxReturn => {
  const data = testType === "acft" ? acftScores : aftScores;
  const mdlMin = data.mdl[gender][age].find((score: ScoreObject) => {
    return score.score === 60;
  });
  const mdlMax = data.mdl[gender][age].find((score: ScoreObject) => {
    return score.score === 100;
  });
  const sptMin =
    testType === "acft"
      ? data.spt[gender][age].find((score: ScoreObject) => {
          return score.score === 60;
        })
      : null;
  const sptMax =
    testType === "acft"
      ? data.spt[gender][age].find((score: ScoreObject) => {
          return score.score === 100;
        })
      : null;
  const hrpMin = data.hrp[gender][age].find((score: ScoreObject) => {
    return score.score === 60;
  });
  const hrpMax = data.hrp[gender][age].find((score: ScoreObject) => {
    return score.score === 100;
  });
  const sdcMin = data.sdc[gender][age].find((score: ScoreObject) => {
    return score.score === 60;
  });
  const sdcMax = data.sdc[gender][age].find((score: ScoreObject) => {
    return score.score === 100;
  });
  const plkMin = data.plk[gender][age].find((score: ScoreObject) => {
    return score.score === 60;
  });
  const plkMax = data.plk[gender][age].find((score: ScoreObject) => {
    return score.score === 100;
  });
  const tmrMin = data.tmr[gender][age].find((score: ScoreObject) => {
    return score.score === 60;
  });
  const tmrMax = data.tmr[gender][age].find((score: ScoreObject) => {
    return score.score === 100;
  });

  return {
    mdlMin,
    mdlMax,
    sptMin,
    sptMax,
    hrpMin,
    hrpMax,
    sdcMin,
    sdcMax,
    plkMin,
    plkMax,
    tmrMin,
    tmrMax,
  };
};
