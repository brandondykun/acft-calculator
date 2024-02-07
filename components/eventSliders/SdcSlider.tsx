"use client";

import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import ExerciseContainer from "../ExerciseContainer";
import ExerciseTitle from "../ExerciseTitle";
import ScoreContainer from "../ScoreContainer";
import { secondsToMinutesAndSeconds } from "@/utils/utils";

type Props = {
  sdcRaw: number;
  setSdcRaw: React.Dispatch<React.SetStateAction<number>>;
  sdcScore: number;
};

const MIN_TIME_IN_SECS = 89;
const MAX_TIME_IN_SECS = 348;

const SdcSlider = ({ sdcRaw, setSdcRaw, sdcScore }: Props) => {
  return (
    <ExerciseContainer id="sdc-slider">
      <ExerciseTitle>
        <div className="mb-4 text-xl text-stone-400">Sprint Drag Carry</div>
        <div className="flex justify-between md:gap-4 md:justify-end">
          <Button
            data-testid="sdc-minus-button"
            disabled={sdcRaw === MIN_TIME_IN_SECS}
            variant="outline"
            onClick={() => {
              setSdcRaw((prev) => {
                if (prev === MIN_TIME_IN_SECS) {
                  return prev;
                }
                return prev - 1;
              });
            }}
          >
            <Minus size={15} />
          </Button>
          <Button
            data-testid="sdc-add-button"
            disabled={sdcRaw === MAX_TIME_IN_SECS}
            variant="outline"
            onClick={() => {
              setSdcRaw((prev) => {
                if (prev === MAX_TIME_IN_SECS) {
                  return prev;
                }
                return prev + 1;
              });
            }}
          >
            <Plus size={15} />
          </Button>
        </div>
      </ExerciseTitle>
      <Slider
        defaultValue={[0]}
        min={MIN_TIME_IN_SECS}
        max={MAX_TIME_IN_SECS}
        step={1}
        value={[sdcRaw]}
        onValueChange={(val) => setSdcRaw(val[0])}
      />
      <div className="py-4 flex justify-between text-lg text-stone-500">
        <div data-testid="sdc-raw">
          {sdcRaw === MIN_TIME_IN_SECS
            ? `< ${secondsToMinutesAndSeconds(sdcRaw)}`
            : sdcRaw === MAX_TIME_IN_SECS
            ? `${secondsToMinutesAndSeconds(sdcRaw)} +`
            : secondsToMinutesAndSeconds(sdcRaw)}
        </div>
        <ScoreContainer score={sdcScore} id="sdc-score" />
      </div>
    </ExerciseContainer>
  );
};

export default SdcSlider;
