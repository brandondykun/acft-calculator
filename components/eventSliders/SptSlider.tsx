"use client";

import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import ExerciseContainer from "../ExerciseContainer";
import ExerciseTitle from "../ExerciseTitle";
import ScoreContainer from "../ScoreContainer";

type Props = {
  sptRaw: number;
  setSptRaw: React.Dispatch<React.SetStateAction<number>>;
  sptScore: number;
};

const MIN_DISTANCE = 0;
const MAX_DISTANCE = 13.1;

const SptSlider = ({ sptRaw, setSptRaw, sptScore }: Props) => {
  return (
    <ExerciseContainer id="spt-slider">
      <ExerciseTitle>
        <div className="mb-4 text-xl text-stone-400">Standing Power Throw</div>
        <div className="flex justify-between md:gap-4 md:justify-end">
          <Button
            data-testid="spt-minus-button"
            disabled={sptRaw === MIN_DISTANCE}
            variant="outline"
            onClick={() => {
              setSptRaw((prev) => {
                if (prev === MIN_DISTANCE) {
                  return prev;
                }
                return Number((prev - 0.1).toFixed(1));
              });
            }}
          >
            <Minus size={15} />
          </Button>
          <Button
            data-testid="spt-add-button"
            disabled={sptRaw === MAX_DISTANCE}
            variant="outline"
            onClick={() => {
              setSptRaw((prev) => {
                if (prev === MAX_DISTANCE) {
                  return prev;
                }
                return Number((prev + 0.1).toFixed(1));
              });
            }}
          >
            <Plus size={15} />
          </Button>
        </div>
      </ExerciseTitle>
      <Slider
        defaultValue={[0]}
        min={MIN_DISTANCE}
        max={MAX_DISTANCE}
        step={0.1}
        value={[sptRaw]}
        onValueChange={(val) => setSptRaw(val[0])}
      />
      <div className="py-4 flex justify-between text-lg text-stone-500">
        <div data-testid="spt-raw">
          {sptRaw === MAX_DISTANCE ? `${sptRaw} m +` : `${sptRaw} m`}
        </div>
        <ScoreContainer score={sptScore} id="spt-score" />
      </div>
    </ExerciseContainer>
  );
};

export default SptSlider;
