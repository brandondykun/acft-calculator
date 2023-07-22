"use client";

import { Select } from "../ui/select";
import {
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import { Age } from "@/types";
import { Label } from "@/components/ui/label";

type Props = {
  age: Age;
  setAge: React.Dispatch<React.SetStateAction<Age>>;
};

const AgeSelect = ({ age, setAge }: Props) => {
  return (
    <div className="w-[180px]">
      <div className="mb-2 pl-1 text-stone-300">
        <Label htmlFor="age-input">Age</Label>
      </div>
      <Select
        onValueChange={(val) => setAge(val as Age)}
        value={age}
        name="age-input"
      >
        <SelectTrigger className="max-w-[180px]">
          <SelectValue placeholder="Age" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="17">17-21</SelectItem>
          <SelectItem value="22">22-26</SelectItem>
          <SelectItem value="27">27-31</SelectItem>
          <SelectItem value="32">32-36</SelectItem>
          <SelectItem value="37">37-41</SelectItem>
          <SelectItem value="42">42-46</SelectItem>
          <SelectItem value="47">47-51</SelectItem>
          <SelectItem value="52">52-56</SelectItem>
          <SelectItem value="57">57-61</SelectItem>
          <SelectItem value="62">62+</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default AgeSelect;
