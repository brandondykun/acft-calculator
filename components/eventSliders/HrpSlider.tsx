"use client";

import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import ExerciseContainer from "../ExerciseContainer";
import ExerciseTitle from "../ExerciseTitle";
import ScoreContainer from "../ScoreContainer";

type Props = {
  hrpRaw: number;
  setHrpRaw: React.Dispatch<React.SetStateAction<number>>;
  hrpScore: number;
};

const MIN_SCORE = 0;
const MAX_SCORE = 62;

const HrpSlider = ({ hrpRaw, setHrpRaw, hrpScore }: Props) => {
  return (
    <ExerciseContainer id="hrp-slider">
      <ExerciseTitle>
        <div className="mb-4 text-xl text-stone-400">Hand Release Pushup</div>
        <div className="flex justify-between md:gap-4 md:justify-end">
          <Button
            data-testid="hrp-minus-button"
            disabled={hrpRaw === MIN_SCORE}
            variant="outline"
            onClick={() => {
              setHrpRaw((prev) => {
                if (prev === MIN_SCORE) {
                  return prev;
                }
                return prev - 1;
              });
            }}
          >
            <Minus size={15} />
          </Button>
          <Button
            data-testid="hrp-add-button"
            disabled={hrpRaw === MAX_SCORE}
            variant="outline"
            onClick={() => {
              setHrpRaw((prev) => {
                if (prev < MAX_SCORE) {
                  return prev + 1;
                }
                return prev;
              });
            }}
          >
            <Plus size={15} />
          </Button>
        </div>
      </ExerciseTitle>
      <Slider
        defaultValue={[MIN_SCORE]}
        min={MIN_SCORE}
        max={MAX_SCORE}
        step={1}
        value={[hrpRaw]}
        onValueChange={(val) => setHrpRaw(val[0])}
      />
      <div className="py-4 flex justify-between text-lg text-stone-500">
        <div data-testid="hrp-raw">
          {hrpRaw === 62 ? `${hrpRaw} reps +` : `${hrpRaw} reps`}
        </div>
        <ScoreContainer score={hrpScore} id="hrp-score" />
      </div>
    </ExerciseContainer>
  );
};

export default HrpSlider;
