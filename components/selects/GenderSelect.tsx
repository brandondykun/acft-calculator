"use client";

import { Select } from "../ui/select";
import {
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import { Gender } from "@/types";
import { Label } from "@/components/ui/label";

type Props = {
  gender: Gender;
  setGender: React.Dispatch<React.SetStateAction<Gender>>;
};

const GenderSelect = ({ gender, setGender }: Props) => {
  return (
    <div className="w-[180px]">
      <div className="mb-2 pl-1 text-stone-300">
        <Label htmlFor="gender-input">Gender</Label>
      </div>
      <Select
        onValueChange={(val) => setGender(val as Gender)}
        value={gender}
        name="gender-input"
      >
        <SelectTrigger className="max-w-[180px]">
          <SelectValue placeholder="Gender" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="male">Male</SelectItem>
          <SelectItem value="female">Female</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default GenderSelect;
