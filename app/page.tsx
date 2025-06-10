import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronsDown, AlertCircle } from "lucide-react";
import iphoneImage from "../public/iphone-mockup.png";

const LandingPage = () => {
  return (
    <main>
      <div className="bg-[url('../public/sdc-image.png')] bg-cover bg-center bg-no-repeat h-[calc(100vh-49px)] w-screen">
        <div className="backdrop-blur-[3px] h-full w-full flex flex-col justify-around items-center relative pb-12">
          <h1 className="text-stone-100 text-4xl md:text-6xl font-bold drop-shadow-lg pt-4 tracking-wide text-center px-4">
            ARMY AFT/ACFT CALCULATOR
          </h1>
          <div className="text-stone-100 drop-shadow-md text-xl p-4 text-center md:text-2xl">
            <p>The AFT is hard.</p>
            <p>Calculating your score shouldn't be.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 text-center">
            <Link href="/aft-calculator">
              <Button variant="gold" className="w-[180px]">
                Calculate AFT Score
              </Button>
            </Link>
            <Link href="/calculator">
              <Button variant="gold" className="w-[180px]">
                Calculate ACFT Score
              </Button>
            </Link>
          </div>

          <div className="text-stone-100 flex flex-col justify-center items-center absolute bottom-2 ">
            <div>Learn More</div>
            <ChevronsDown />
          </div>
        </div>
      </div>

      <div className="bg-amber-400 py-12 text-stone-950 text-center flex items-center justify-center gap-4 px-8">
        <AlertCircle size={18} className="hidden md:flex" />
        <div className="md:text-lg">
          On June 1, 2025, the ACFT will be replaced by the Army Fitness Test
          (AFT)!
        </div>
        <AlertCircle size={18} className="hidden md:flex" />
      </div>

      <div className="p-4 pt-12 md:pt-24 text-stone-300 md:flex">
        <div className="flex justify-center items-center text-center text-stone-300 md:text-4xl flex-1 mb-12 text-2xl p-6  md:px-12 lg:px-24 tracking-wide">
          What can the Army AFT Calculator do for you?
        </div>
        <div className="flex-2 md:pr-6 lg:pr-12">
          <p className="w-full md:w-5/6 md:ml-auto py-8 text-md md:text-lg relative p-4 dark:border-stone-400 dark:border-solid dark:border rounded-md dark:border-opacity-30 md:p-12 mb-8">
            <span className="absolute top-[-10px] left-10 bg-stone-950 px-4 text-stone-400 text-sm">
              CALCULATOR
            </span>
            Easily{" "}
            <span className="text-amber-400">calculate AFT or ACFT scores</span>{" "}
            based on gender and age. Entering raw score values for each event
            will automatically calculate the overall AFT or ACFT score.
          </p>
          <p className="w-full md:w-5/6 md:ml-auto py-8 text-md md:text-lg relative p-4 dark:border-stone-400 dark:border-solid dark:border rounded-md dark:border-opacity-30 md:p-12 mb-8">
            <span className="absolute top-[-10px] left-10 bg-stone-950 px-4 text-stone-400 text-sm">
              MIN/MAX
            </span>
            View the{" "}
            <span className="text-amber-400">
              minimum and maximum raw scores
            </span>{" "}
            necessary to pass and max each event for any age group.
          </p>
          <p className="w-full md:w-5/6 md:ml-auto py-8 text-md md:text-lg relative p-4 dark:border-stone-400 dark:border-solid dark:border rounded-md dark:border-opacity-30 md:p-12 mb-8">
            <span className="absolute top-[-10px] left-10 bg-stone-950 px-4 text-stone-400 text-sm">
              EVENTS
            </span>
            Need to know how to perform each event? Go to the Events dropdown at
            the top of the page to{" "}
            <span className="text-amber-400">view detailed instructions </span>
            about each event and watch a video on how to perform them correctly.
          </p>
        </div>
      </div>
      <div className="px-4 py-12 md:py-24 text-stone-300 bg-stone-900">
        <div className="md:flex justify-evenly flex-row-reverse">
          <div className="flex flex-col justify-center sm:items-center max-w-[500px] md:text-center">
            <h3 className="text-3xl mb-4">Optimized for mobile devices</h3>
            <p className="text-lg text-stone-400 mb-8">
              Mobile first, responsive design provides seamless experience on
              any device. Know your score before you leave the PT field.
            </p>
          </div>
          <img
            src={iphoneImage.src}
            alt="Mobile version."
            className="h-[400px] md:h-[500px] flex-2 m-auto md:m-0"
          />
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
