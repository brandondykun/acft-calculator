const data = require("../data/data.json");
import { Age, Gender, Exercise } from "@/types";

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
  raw: number
) => {
  const exerciseData = data[exercise][gender][age];
  for (let i = 0; i < exerciseData.length; i++) {
    if (exerciseData[0].raw < raw) {
      return "0";
    } else if (exerciseData[i].raw === raw) {
      return exerciseData[i].score;
    } else if (exerciseData[i].raw < raw) {
      return exerciseData[i - 1]?.score;
    } else if (exerciseData[exerciseData.length - 1].raw > raw) {
      return "100";
    }
  }
};

export const getScoreIncreasingIsBetter = (
  gender: Gender,
  age: Age,
  exercise: Exercise,
  raw: number
) => {
  const exerciseData = data[exercise][gender][age];
  for (let i = 0; i < exerciseData.length; i++) {
    if (exerciseData[0].raw > raw) {
      return "0";
    } else if (exerciseData[i].raw === raw) {
      return exerciseData[i].score;
    } else if (exerciseData[i].raw > raw) {
      return exerciseData[i - 1]?.score;
    } else if (exerciseData[exerciseData.length - 1].raw < raw) {
      return "100";
    }
  }
};
