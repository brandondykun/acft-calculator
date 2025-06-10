import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Info, ExternalLink } from "lucide-react";

const CombatMosDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Info size={18} />
      </DialogTrigger>
      <DialogContent className="overflow-y-scroll max-h-screen">
        <DialogHeader>
          <DialogTitle className="text-stone-200 mb-4">
            Combat MOSs for the purposes of the AFT:
          </DialogTitle>
        </DialogHeader>
        <ul className="flex flex-col gap-1 text-stone-400">
          <li>11A. Infantry Officer</li>
          <li>11B. Infantryman</li>
          <li>11C. Indirect Fire Infantryman (Mortarman)</li>
          <li>11Z. Infantry Senior Sergeant</li>
          <li>12A. Engineer; General Engineer</li>
          <li>12B. Combat Engineer</li>
          <li>13A. Field Artillery Officer</li>
          <li>13F. Fire Support Specialist</li>
          <li>18A. Special Forces Officer</li>
          <li>180A. Special Forces Warrant Officer</li>
          <li>18B. Special Forces Weapons Sergeant</li>
          <li>18C. Special Forces Engineer Sergeant</li>
          <li>18D. Special Forces Medical Sergeant</li>
          <li>18E. Special Forces Communications Sergeant</li>
          <li>18F. Special Forces Intelligence Sergeant</li>
          <li>18Z. Special Forces Senior Sergeant</li>
          <li>19A. Armor Officer</li>
          <li>19C. Bradley Crew member</li>
          <li>19D. Cavalry Scout</li>
          <li>19K. M1 Armor Crewman</li>
          <li>19Z. Armor Senior Sergeant</li>
        </ul>
        <div className="text-stone-200 underline mt-4">
          <a
            href="https://www.army.mil/aft/#faq"
            target="_blank"
            rel="noopener noreferrer"
          >
            For more information check out the Army website's FAQ section here.
            <span className="inline-block -mb-[3px] ml-2">
              <ExternalLink size={16} />
            </span>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CombatMosDialog;
