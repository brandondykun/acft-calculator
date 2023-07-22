"use client";

import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import ExerciseContainer from "../ExerciseContainer";
import ExerciseTitle from "../ExerciseTitle";
import ScoreContainer from "../ScoreContainer";
import { secondsToMinutesAndSeconds } from "@/utils/utils";

type Props = {
  tmrRaw: number;
  setTmrRaw: React.Dispatch<React.SetStateAction<number>>;
  tmrScore: number;
};

const MIN_TIME_IN_SECS = 801;
const MAX_TIME_IN_SECS = 1620;

const TmrSlider = ({ tmrRaw, setTmrRaw, tmrScore }: Props) => {
  return (
    <ExerciseContainer>
      <ExerciseTitle>
        <div className="mb-4 text-xl">Two Mile Run</div>
        <div className="flex justify-between md:gap-4 md:justify-end">
          <Button
            disabled={tmrRaw === MIN_TIME_IN_SECS}
            variant="outline"
            onClick={() => {
              setTmrRaw((prev) => {
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
            disabled={tmrRaw === MAX_TIME_IN_SECS}
            variant="outline"
            onClick={() => {
              setTmrRaw((prev) => {
                if (tmrRaw === MAX_TIME_IN_SECS) {
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
        value={[tmrRaw]}
        onValueChange={(val) => setTmrRaw(val[0])}
      />
      <div className="py-4 flex justify-between text-lg text-stone-500">
        <div>
          {tmrRaw === MIN_TIME_IN_SECS
            ? `< ${secondsToMinutesAndSeconds(tmrRaw)}`
            : tmrRaw === MAX_TIME_IN_SECS
            ? `${secondsToMinutesAndSeconds(tmrRaw)} +`
            : secondsToMinutesAndSeconds(tmrRaw)}
        </div>

        <ScoreContainer score={tmrScore} />
      </div>
    </ExerciseContainer>
  );
};

export default TmrSlider;
