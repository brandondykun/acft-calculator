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

const SdcSlider = ({ sdcRaw, setSdcRaw, sdcScore }: Props) => {
  return (
    <ExerciseContainer>
      <ExerciseTitle>
        <div className="mb-4 text-xl">Sprint Drag Carry</div>
        <div className="flex justify-between md:gap-4 md:justify-end">
          <Button
            disabled={sdcRaw === 89}
            variant="outline"
            onClick={() => {
              setSdcRaw((prev) => {
                if (prev === 89) {
                  return prev;
                }
                return prev - 1;
              });
            }}
          >
            <Minus size={15} />
          </Button>
          <Button
            disabled={sdcRaw === 438}
            variant="outline"
            onClick={() => {
              setSdcRaw((prev) => {
                if (prev === 438) {
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
        min={89}
        max={348}
        step={1}
        value={[sdcRaw]}
        onValueChange={(val) => setSdcRaw(val[0])}
      />
      <div className="py-4 flex justify-between text-lg text-stone-500">
        <div>
          {sdcRaw === 89
            ? `< ${secondsToMinutesAndSeconds(sdcRaw)}`
            : sdcRaw === 348
            ? `${secondsToMinutesAndSeconds(sdcRaw)} +`
            : secondsToMinutesAndSeconds(sdcRaw)}
        </div>
        <ScoreContainer score={sdcScore} />
      </div>
    </ExerciseContainer>
  );
};

export default SdcSlider;
