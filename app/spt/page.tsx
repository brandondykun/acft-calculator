import Iframe from "@/components/Iframe";

const SptPage = () => {
  return (
    <main className="p-4 text-stone-300 w-full">
      <h1 className="text-3xl mb-8 text-amber-400 p-8 text-center md:text-left">
        STANDING POWER THROW (SPT)
      </h1>
      <p className="w-full md:w-4/6 md:m-auto py-8 text-md md:text-lg relative p-4 dark:border-stone-400 dark:border-solid dark:border rounded-md dark:border-opacity-30 md:p-12 md:mb-16">
        <span className="absolute top-[-10px] left-10 bg-stone-950 px-4 text-stone-400 text-sm">
          SPT
        </span>
        The SPT event assesses the Power component of fitness by measuring a
        Soldier’s ability to generate quick, explosive movements with their
        upper and lower body. Secondary components of fitness assessed by the
        SPT include Balance, Coordination and Flexibility.
      </p>

      <div className="w-fit mx-auto my-12">
        <Iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xcDiEr3Meds"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></Iframe>
      </div>

      <div className="w-full md:w-4/6 mx-auto my-16">
        <div className="font-bold text-2xl mb-4">Starting Position</div>
        <p className="pl-4 dark:border-l dark:border-l-amber-400 dark:border-l-solid dark:border-opacity-50">
          The Soldiers will face away from the start line, grasp the medicine
          ball (10 pounds) with both hands at hip level and stand with both
          heels at (but not on or over) the start line. Grasp the ball firmly
          and as far around the sides of the ball as possible. Towels or rags
          will be provided to remove excess moisture/debris from the medicine
          ball.
        </p>
      </div>

      <div className="w-full md:w-4/6 mx-auto my-16">
        <div className="font-bold text-2xl mb-4">Record Throws</div>
        <p className="pl-4 dark:border-l dark:border-l-amber-400 dark:border-l-solid dark:border-opacity-50">
          Soldiers will have two record attempts on the Standing Power Throw.
          Soldiers are permitted several preparatory movements flexing at the
          trunk, knees and hips while lowering the ball between their legs.
          Soldiers in lanes one and two will alternately execute record throw
          one and two. As directed by the grader, the Soldier in lane one
          executes the first record attempt. When directed by the grader, the
          Soldier in lane two executes first record attempt. The Soldier must be
          stationary prior to a throw—no hopping, stepping or running to
          initiate the throw. The Soldier may jump to exert more power during
          the throw with one or both feet leaving the ground, however, if the
          Soldier falls or steps onto or beyond the start line, the grader
          records the repetition as a zero.
        </p>
      </div>

      <div className="w-full md:w-4/6 mx-auto my-16">
        <p className="pl-4 dark:border-l dark:border-l-amber-400 dark:border-l-solid dark:border-opacity-50">
          If a Soldier faults on the first record throw, they will receive a raw
          score of 0.0 meters. In the event a Soldier faults on both throw
          attempts, the grader gives the Soldier one more attempt to score a
          record throw. This is recorded as the second attempt on the DA Form
          705-TEST. The score for a fault on the first throw is recorded as a
          zero.
        </p>
      </div>

      <div className="w-full md:w-4/6 mx-auto my-16">
        <p className="pl-4 dark:border-l dark:border-l-amber-400 dark:border-l-solid dark:border-opacity-50">
          Once the Soldier has attempted two record throws, they will move onto
          the SPT lane to retrieve the medicine balls for the next Soldiers, and
          then return to the back of the line.
        </p>
      </div>

      <div className="w-full md:w-4/6 mx-auto my-16">
        <p className="pl-4 dark:border-l dark:border-l-amber-400 dark:border-l-solid dark:border-opacity-50">
          Although Soldiers are required to execute two record throws and both
          record throws are recorded, only the longer of the two throws will
          count as the record score. The start line grader will circle the best
          score.
        </p>
      </div>
    </main>
  );
};

export default SptPage;
