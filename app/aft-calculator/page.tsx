"use client";
import { useState } from "react";

import { Gender, Age } from "@/types";
import {
  getScoreDecreasingIsBetter,
  getScoreIncreasingIsBetter,
} from "@/utils/utils";
import GenderSelect from "@/components/selects/GenderSelect";
import AgeSelect from "@/components/selects/AgeSelect";
import MdlSlider from "@/components/eventSliders/MdlSlider";
import HrpSlider from "@/components/eventSliders/HrpSlider";
import SdcSlider from "@/components/eventSliders/SdcSlider";
import PlkSlider from "@/components/eventSliders/PlkSlider";
import TmrSlider from "@/components/eventSliders/TmrSlider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import CombatMosDialog from "@/components/CombatMosDialog";

export default function Calculator() {
  const [age, setAge] = useState<Age>("17");
  const [gender, setGender] = useState<Gender>("male");
  const [isCombatMos, setIsCombatMos] = useState(false);

  // raw scores state
  const [mdlRaw, setMdlRaw] = useState(0);
  const [hrpRaw, setHrpRaw] = useState(0);
  const [sdcRaw, setSdcRaw] = useState(348); // initialize with highest time that equals 0 points
  const [plkRaw, setPlkRaw] = useState(40); // initialize with lowest time that equals 0 points
  const [tmrRaw, setTmrRaw] = useState(1675); // initialize with highest time that equals 0 points

  // if combat MOS, use male for all events
  const genderToUse = !isCombatMos ? gender : "male";

  // point scores for each event
  const mdlScore = getScoreIncreasingIsBetter(
    genderToUse,
    age,
    "mdl",
    mdlRaw,
    "aft"
  );
  const hrpScore = getScoreIncreasingIsBetter(
    genderToUse,
    age,
    "hrp",
    hrpRaw,
    "aft"
  );
  const sdcScore = getScoreDecreasingIsBetter(
    genderToUse,
    age,
    "sdc",
    sdcRaw,
    "aft"
  );
  const plkScore = getScoreIncreasingIsBetter(
    genderToUse,
    age,
    "plk",
    plkRaw,
    "aft"
  );
  const tmrScore = getScoreDecreasingIsBetter(
    genderToUse,
    age,
    "tmr",
    tmrRaw,
    "aft"
  );

  // if combat MOS, need 350 points, otherwise 300 points
  const scoreNeededToPass = isCombatMos ? 350 : 300;

  // total score from all the events
  const totalScore =
    Number(mdlScore) +
    Number(hrpScore) +
    Number(sdcScore) +
    Number(plkScore) +
    Number(tmrScore);

  // boolean if all events meet 60 point score
  const individualEventPassing =
    mdlScore >= 60 &&
    hrpScore >= 60 &&
    sdcScore >= 60 &&
    plkScore >= 60 &&
    tmrScore >= 60;

  // boolean if total score meets the needed score and all events meet 60 point score
  const isScorePassing =
    totalScore >= scoreNeededToPass && individualEventPassing;

  const showDidNotMeet350 =
    isCombatMos && individualEventPassing && totalScore < 350;

  return (
    <main className="min-h-screen p-4 dark:bg-stone-950 dark:text-stone-100">
      <div className="text-3xl p-8 text-amber-400 text-center md:text-left">
        AFT SCORE CALCULATOR
      </div>
      <div className="max-w-[600px] m-auto p-4 pb-12">
        <div className="flex justify-between m-auto py-6 gap-4">
          <GenderSelect gender={gender} setGender={setGender} />
          <AgeSelect age={age} setAge={setAge} />
        </div>
        <div className="flex justify-between m-auto py-6 gap-4 items-center mb-4 flex-col sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="text-lg sm:text-xl text-stone-300">
              Are you in a combat MOS?
            </div>
            <CombatMosDialog />
          </div>
          <ToggleGroup
            type="single"
            defaultValue="false"
            onValueChange={(value) => setIsCombatMos(value === "true")}
            className="flex gap-2"
          >
            <ToggleGroupItem
              value="true"
              aria-label="Toggle Yes"
              variant="green"
              className="w-14"
            >
              YES
            </ToggleGroupItem>
            <ToggleGroupItem
              value="false"
              aria-label="Toggle No"
              variant="red"
              className="w-14"
            >
              NO
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div className="px-4 md:px-0">
          <MdlSlider
            mdlRaw={mdlRaw}
            setMdlRaw={setMdlRaw}
            mdlScore={mdlScore}
            testType="aft"
          />
          <HrpSlider
            hrpRaw={hrpRaw}
            setHrpRaw={setHrpRaw}
            hrpScore={hrpScore}
          />
          <SdcSlider
            sdcRaw={sdcRaw}
            setSdcRaw={setSdcRaw}
            sdcScore={sdcScore}
          />
          <PlkSlider
            plkRaw={plkRaw}
            setPlkRaw={setPlkRaw}
            plkScore={plkScore}
          />
          <TmrSlider
            tmrRaw={tmrRaw}
            setTmrRaw={setTmrRaw}
            tmrScore={tmrScore}
            testType="aft"
          />
        </div>
        <div className="py-12">
          <div
            className={`${
              isScorePassing ? "text-green-600" : "text-red-600"
            } text-2xl text-center`}
            id="result-text"
          >
            {isScorePassing ? "Meets Standard" : "Does Not Meet Standard"}
          </div>
          <div className="text-center text-red-600 py-3">
            {showDidNotMeet350 ? "Score is below 350 points" : null}
          </div>
          <div
            className="text-2xl text-stone-100 text-center"
            id="result-score"
          >{`${totalScore} / 500`}</div>
        </div>
      </div>
    </main>
  );
}
