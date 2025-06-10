"use client";

import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import ExerciseContainer from "../ExerciseContainer";
import ExerciseTitle from "../ExerciseTitle";
import ScoreContainer from "../ScoreContainer";
import { secondsToMinutesAndSeconds } from "@/utils/utils";

type Props = {
  plkRaw: number;
  setPlkRaw: React.Dispatch<React.SetStateAction<number>>;
  plkScore: number;
};

const MIN_TIME_IN_SECS = 40; // 40 seconds
const MAX_TIME_IN_SECS = 220; // 3:40

const PlkSlider = ({ plkRaw, setPlkRaw, plkScore }: Props) => {
  return (
    <ExerciseContainer id="plk-slider">
      <ExerciseTitle>
        <div className="mb-4 text-xl text-stone-400">Plank</div>
        <div className="flex justify-between md:gap-4 md:justify-end">
          <Button
            data-testid="plk-minus-button"
            disabled={plkRaw === MIN_TIME_IN_SECS}
            variant="outline"
            onClick={() => {
              setPlkRaw((prev) => {
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
            data-testid="plk-add-button"
            disabled={plkRaw === MAX_TIME_IN_SECS}
            variant="outline"
            onClick={() => {
              setPlkRaw((prev) => {
                if (plkRaw === MAX_TIME_IN_SECS) {
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
        value={[plkRaw]}
        onValueChange={(val) => setPlkRaw(val[0])}
      />
      <div className="py-4 flex justify-between text-lg text-stone-500">
        <div data-testid="plk-raw">
          {plkRaw === MIN_TIME_IN_SECS
            ? `< ${secondsToMinutesAndSeconds(plkRaw)}`
            : plkRaw === MAX_TIME_IN_SECS
            ? `${secondsToMinutesAndSeconds(plkRaw)} +`
            : secondsToMinutesAndSeconds(plkRaw)}
        </div>
        <ScoreContainer score={plkScore} id="plk-score" />
      </div>
    </ExerciseContainer>
  );
};

export default PlkSlider;
