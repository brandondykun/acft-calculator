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

const PlkSlider = ({ plkRaw, setPlkRaw, plkScore }: Props) => {
  return (
    <ExerciseContainer>
      <ExerciseTitle>
        <div className="mb-4 text-xl">Plank</div>
        <div className="flex justify-between md:gap-4 md:justify-end">
          <Button
            disabled={plkRaw === 40}
            variant="outline"
            onClick={() => {
              setPlkRaw((prev) => {
                if (prev === 40) {
                  return prev;
                }
                return prev - 1;
              });
            }}
          >
            <Minus size={15} />
          </Button>
          <Button
            disabled={plkRaw === 220}
            variant="outline"
            onClick={() => {
              setPlkRaw((prev) => {
                if (plkRaw === 220) {
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
        min={40}
        max={220}
        step={1}
        value={[plkRaw]}
        onValueChange={(val) => setPlkRaw(val[0])}
      />
      <div className="py-4 flex justify-between text-lg text-stone-500">
        <div>
          {plkRaw === 40
            ? `< ${secondsToMinutesAndSeconds(plkRaw)}`
            : plkRaw === 220
            ? `${secondsToMinutesAndSeconds(plkRaw)} +`
            : secondsToMinutesAndSeconds(plkRaw)}
        </div>
        <ScoreContainer score={plkScore} />
      </div>
    </ExerciseContainer>
  );
};

export default PlkSlider;
