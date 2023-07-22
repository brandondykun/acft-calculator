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

const SptSlider = ({ sptRaw, setSptRaw, sptScore }: Props) => {
  return (
    <ExerciseContainer>
      <ExerciseTitle>
        <div className="mb-4 text-xl">Standing Power Throw</div>
        <div className="flex justify-between md:gap-4 md:justify-end">
          <Button
            disabled={sptRaw === 0}
            variant="outline"
            onClick={() => {
              setSptRaw((prev) => {
                if (prev === 0) {
                  return prev;
                }
                return Number((prev - 0.1).toFixed(1));
              });
            }}
          >
            <Minus size={15} />
          </Button>
          <Button
            disabled={sptRaw === 13.1}
            variant="outline"
            onClick={() => {
              setSptRaw((prev) => {
                if (prev === 13.1) {
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
        min={0}
        max={13.1}
        step={0.1}
        value={[sptRaw]}
        onValueChange={(val) => setSptRaw(val[0])}
      />
      <div className="py-4 flex justify-between text-lg text-stone-500">
        <div>{sptRaw === 13.1 ? `${sptRaw} m +` : `${sptRaw} m`}</div>
        <ScoreContainer score={sptScore} />
      </div>
    </ExerciseContainer>
  );
};

export default SptSlider;
