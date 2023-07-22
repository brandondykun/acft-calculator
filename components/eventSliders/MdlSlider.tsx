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

const MdlSlider = ({ mdlRaw, setMdlRaw, mdlScore }: Props) => {
  return (
    <ExerciseContainer>
      <ExerciseTitle>
        <div className="mb-4 text-xl">Max Dead Lift</div>
        <div className="flex justify-between md:gap-4 md:justify-end">
          <Button
            disabled={mdlRaw === 0}
            variant="outline"
            onClick={() => {
              setMdlRaw((prev) => {
                if (prev > 0) {
                  return prev - 10;
                }
                return prev;
              });
            }}
          >
            <Minus size={15} />
          </Button>
          <Button
            disabled={mdlRaw === 340}
            variant="outline"
            onClick={() => {
              setMdlRaw((prev) => {
                if (prev === 340) {
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
        min={0}
        max={340}
        step={10}
        value={[mdlRaw]}
        onValueChange={(val) => setMdlRaw(val[0])}
      />
      <div className="py-4 flex justify-between text-lg text-stone-500">
        <div>{mdlRaw === 340 ? `${mdlRaw} lbs +` : `${mdlRaw} lbs`}</div>
        <ScoreContainer score={mdlScore} />
      </div>
    </ExerciseContainer>
  );
};

export default MdlSlider;
