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
import SptSlider from "@/components/eventSliders/SptSlider";
import HrpSlider from "@/components/eventSliders/HrpSlider";
import SdcSlider from "@/components/eventSliders/SdcSlider";
import PlkSlider from "@/components/eventSliders/PlkSlider";
import TmrSlider from "@/components/eventSliders/TmrSlider";

export default function Home() {
  const [age, setAge] = useState<Age>("17");
  const [gender, setGender] = useState<Gender>("male");
  // raw scores state
  const [mdlRaw, setMdlRaw] = useState(0);
  const [sptRaw, setSptRaw] = useState(0);
  const [hrpRaw, setHrpRaw] = useState(0);
  const [sdcRaw, setSdcRaw] = useState(0);
  const [plkRaw, setPlkRaw] = useState(0);
  const [tmrRaw, setTmrRaw] = useState(801);

  // point scores for each event
  const mdlScore = getScoreIncreasingIsBetter(gender, age, "mdl", mdlRaw);
  const sptScore = getScoreIncreasingIsBetter(gender, age, "spt", sptRaw);
  const hrpScore = getScoreIncreasingIsBetter(gender, age, "hrp", hrpRaw);
  const sdcScore = getScoreDecreasingIsBetter(gender, age, "sdc", sdcRaw);
  const plkScore = getScoreIncreasingIsBetter(gender, age, "plk", plkRaw);
  const tmrScore = getScoreDecreasingIsBetter(gender, age, "tmr", tmrRaw);

  // total score from all the events
  const totalScore =
    Number(mdlScore) +
    Number(sptScore) +
    Number(hrpScore) +
    Number(sdcScore) +
    Number(plkScore) +
    Number(tmrScore);

  // boolean if all events meet 60 point score
  const scorePassing =
    mdlScore >= 60 &&
    sptScore >= 60 &&
    hrpScore >= 60 &&
    sdcScore >= 60 &&
    plkScore >= 60 &&
    tmrScore >= 60;

  return (
    <main className="min-h-screen dark:bg-stone-950 dark:text-stone-100">
      <div className="text-2xl p-8 text-amber-400">ACFT Score Calculator</div>
      <div className="max-w-[600px] m-auto p-4">
        <div className="flex justify-between m-auto py-6 gap-4">
          <GenderSelect gender={gender} setGender={setGender} />
          <AgeSelect age={age} setAge={setAge} />
        </div>
        <MdlSlider mdlRaw={mdlRaw} setMdlRaw={setMdlRaw} mdlScore={mdlScore} />
        <SptSlider sptRaw={sptRaw} setSptRaw={setSptRaw} sptScore={sptScore} />
        <HrpSlider hrpRaw={hrpRaw} setHrpRaw={setHrpRaw} hrpScore={hrpScore} />
        <SdcSlider sdcRaw={sdcRaw} setSdcRaw={setSdcRaw} sdcScore={sdcScore} />
        <PlkSlider plkRaw={plkRaw} setPlkRaw={setPlkRaw} plkScore={plkScore} />
        <TmrSlider tmrRaw={tmrRaw} setTmrRaw={setTmrRaw} tmrScore={tmrScore} />
        <div className="py-6 text-2xl text-stone-100 text-center">{`${totalScore} / 600`}</div>
        <div
          className={`${
            scorePassing ? "text-green-600" : "text-red-600"
          } text-xl text-center`}
        >
          {scorePassing ? "Pass" : "Fail"}
        </div>
      </div>
    </main>
  );
}
