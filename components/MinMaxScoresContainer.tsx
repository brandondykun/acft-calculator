"use client";

import { useState } from "react";
import GenderSelect from "./selects/GenderSelect";
import AgeSelect from "./selects/AgeSelect";
import { Age, Gender } from "@/types";
import { getMinMaxScores } from "@/utils/utils";
import { secondsToMinutesAndSeconds } from "@/utils/utils";

const MinMaxScoresContainer = () => {
  const [age, setAge] = useState<Age>("17");
  const [gender, setGender] = useState<Gender>("male");

  const {
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
  } = getMinMaxScores(gender, age);

  return (
    <div className="max-w-[600px] m-auto py-4">
      <div className="flex justify-between m-auto py-6 gap-4 mb-6">
        <GenderSelect gender={gender} setGender={setGender} />
        <AgeSelect age={age} setAge={setAge} />
      </div>
      <div className="mb-16 text-xl">
        <div className="text-xl text-stone-400 mb-4 pb-2 border-b dark:border-b-stone-900 border-b-solid">
          MAX DEADLIFT
        </div>
        <div className="flex justify-between dark:text-stone-300">
          <div>
            <div className="text-stone-600 text-sm pb-2">MIN</div>
            <div>{mdlMin.raw} lbs</div>
          </div>
          <div>
            <div className="text-right text-stone-600 text-sm pb-2">MAX</div>
            <div>{mdlMax.raw} lbs</div>
          </div>
        </div>
      </div>

      <div className="mb-16 text-xl">
        <div className="text-xl text-stone-400 mb-4 pb-2 border-b dark:border-b-stone-900 border-b-solid">
          STANDING POWER THROW
        </div>
        <div className="flex justify-between dark:text-stone-300">
          <div>
            <div className="text-stone-600 text-sm pb-2">MIN</div>
            <div>{sptMin.raw} m</div>
          </div>
          <div>
            <div className="text-right text-stone-600 text-sm pb-2">MAX</div>
            <div>{sptMax.raw} m</div>
          </div>
        </div>
      </div>

      <div className="mb-16 text-xl">
        <div className="text-xl text-stone-400 mb-4 pb-2 border-b dark:border-b-stone-900 border-b-solid">
          HAND RELEASE PUSHUP
        </div>
        <div className="flex justify-between dark:text-stone-300">
          <div>
            <div className="text-stone-600 text-sm pb-2">MIN</div>
            <div>{hrpMin.raw} reps</div>
          </div>
          <div>
            <div className="text-right text-stone-600 text-sm pb-2">MAX</div>
            <div>{hrpMax.raw} reps</div>
          </div>
        </div>
      </div>

      <div className="mb-16 text-xl">
        <div className="text-xl text-stone-400 mb-4 pb-2 border-b dark:border-b-stone-900 border-b-solid">
          SPRINT DRAG CARRY
        </div>
        <div className="flex justify-between dark:text-stone-300">
          <div>
            <div className="text-stone-600 text-sm pb-2">MIN</div>
            <div>{secondsToMinutesAndSeconds(sdcMin.raw)}</div>
          </div>
          <div>
            <div className="text-right text-stone-600 text-sm pb-2">MAX</div>
            <div>{secondsToMinutesAndSeconds(sdcMax.raw)}</div>
          </div>
        </div>
      </div>

      <div className="mb-16 text-xl">
        <div className="text-xl text-stone-400 mb-4 pb-2 border-b dark:border-b-stone-900 border-b-solid">
          PLANK
        </div>
        <div className="flex justify-between dark:text-stone-300">
          <div>
            <div className="text-stone-600 text-sm pb-2">MIN</div>
            <div>{secondsToMinutesAndSeconds(plkMin.raw)}</div>
          </div>
          <div>
            <div className="text-right text-stone-600 text-sm pb-2">MAX</div>
            <div>{secondsToMinutesAndSeconds(plkMax.raw)}</div>
          </div>
        </div>
      </div>

      <div className="mb-16 text-xl">
        <div className="text-xl text-stone-400 mb-4 pb-2 border-b dark:border-b-stone-900 border-b-solid">
          TWO MILE RUN
        </div>
        <div className="flex justify-between dark:text-stone-300">
          <div>
            <div className="text-stone-600 text-sm pb-2">MIN</div>
            <div>{secondsToMinutesAndSeconds(tmrMin.raw)}</div>
          </div>
          <div>
            <div className="text-right text-stone-600 text-sm pb-2">MAX</div>
            <div>{secondsToMinutesAndSeconds(tmrMax.raw)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinMaxScoresContainer;
