"use client";

import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import ExerciseContainer from "../ExerciseContainer";
import ExerciseTitle from "../ExerciseTitle";
import ScoreContainer from "../ScoreContainer";

type Props = {
  mdlRaw: number;
  setMdlRaw: React.Dispatch<React.SetStateAction<number>>;
  mdlScore: number;
};

const MIN_WEIGHT = 0;
const MAX_WEIGHT = 340;

const MdlSlider = ({ mdlRaw, setMdlRaw, mdlScore }: Props) => {
  return (
    <ExerciseContainer>
      <ExerciseTitle>
        <div className="mb-4 text-xl">Max Dead Lift</div>
        <div className="flex justify-between md:gap-4 md:justify-end">
          <Button
            disabled={mdlRaw === MIN_WEIGHT}
            variant="outline"
            onClick={() => {
              setMdlRaw((prev) => {
                if (prev > MIN_WEIGHT) {
                  return prev - 10;
                }
                return prev;
              });
            }}
          >
            <Minus size={15} />
          </Button>
          <Button
            disabled={mdlRaw === MAX_WEIGHT}
            variant="outline"
            onClick={() => {
              setMdlRaw((prev) => {
                if (prev === MAX_WEIGHT) {
                  return prev;
                }
                return prev + 10;
              });
            }}
          >
            <Plus size={15} />
          </Button>
        </div>
      </ExerciseTitle>
      <Slider
        defaultValue={[0]}
        min={MIN_WEIGHT}
        max={MAX_WEIGHT}
        step={10}
        value={[mdlRaw]}
        onValueChange={(val) => setMdlRaw(val[0])}
      />
      <div className="py-4 flex justify-between text-lg text-stone-500">
        <div>{mdlRaw === MAX_WEIGHT ? `${mdlRaw} lbs +` : `${mdlRaw} lbs`}</div>
        <ScoreContainer score={mdlScore} />
      </div>
    </ExerciseContainer>
  );
};

export default MdlSlider;
