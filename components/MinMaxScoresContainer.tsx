"use client";

import { useState } from "react";
import GenderSelect from "./selects/GenderSelect";
import AgeSelect from "./selects/AgeSelect";
import { Age, Gender } from "@/types";
import { getMinMaxScores } from "@/utils/utils";
import { secondsToMinutesAndSeconds } from "@/utils/utils";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import CombatMosDialog from "./CombatMosDialog";

const MinMaxScoresContainer = () => {
  const [testType, setTestType] = useState<"acft" | "aft">("aft");
  const [age, setAge] = useState<Age>("17");
  const [gender, setGender] = useState<Gender>("male");
  const [isCombatMos, setIsCombatMos] = useState(false);

  // if combat MOS, use male for all events
  const genderToUse = !isCombatMos ? gender : "male";

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
  } = getMinMaxScores(genderToUse, age, testType);

  return (
    <div className="max-w-[600px] m-auto py-4 pb-12">
      <div className="flex justify-between mb-4">
        <button
          className={`flex-1 text-xl font-bold py-2 border-b border-solid ${
            testType === "aft"
              ? "border-b-amber-400 text-amber-400"
              : "border-b-transparent text-stone-300/50"
          }`}
          onClick={() => setTestType("aft")}
          data-testid="aft-button"
        >
          AFT
        </button>
        <button
          className={`flex-1 text-xl font-bold py-2 border-b border-solid ${
            testType === "acft"
              ? "border-b-amber-400 text-amber-400"
              : "border-b-transparent text-stone-300/50"
          }`}
          onClick={() => setTestType("acft")}
          data-testid="acft-button"
        >
          ACFT
        </button>
      </div>
      <div
        className={`flex justify-between m-auto py-6 gap-4 ${
          testType === "acft" ? "mb-6" : "mb-2"
        }`}
      >
        <GenderSelect gender={gender} setGender={setGender} />
        <AgeSelect age={age} setAge={setAge} />
      </div>
      {testType === "aft" ? (
        <div className="flex justify-between m-auto pb-6 pt-2 gap-4 items-center mb-12 flex-col sm:flex-row">
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
      ) : null}
      <div className="mb-16 text-xl">
        <div className="text-xl text-amber-400 mb-4 pb-2 border-b dark:border-b-stone-900 border-b-solid">
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

      {testType === "acft" ? (
        <div className="mb-16 text-xl">
          <div className="text-xl text-amber-400 mb-4 pb-2 border-b dark:border-b-stone-900 border-b-solid">
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
      ) : null}

      <div className="mb-16 text-xl">
        <div className="text-xl text-amber-400 mb-4 pb-2 border-b dark:border-b-stone-900 border-b-solid">
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
        <div className="text-xl text-amber-400 mb-4 pb-2 border-b dark:border-b-stone-900 border-b-solid">
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
        <div className="text-xl text-amber-400 mb-4 pb-2 border-b dark:border-b-stone-900 border-b-solid">
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
        <div className="text-xl text-amber-400 mb-4 pb-2 border-b dark:border-b-stone-900 border-b-solid">
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
