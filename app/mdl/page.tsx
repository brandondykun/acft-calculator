import Iframe from "@/components/Iframe";

const MdlPage = () => {
  return (
    <main className="p-4 text-stone-300 w-full">
      <h1 className="text-3xl mb-8 text-amber-400 p-8 text-center md:text-left">
        3 REPETITION MAXIMUM DEADLIFT (MDL)
      </h1>
      <p className="w-full md:w-4/6 md:m-auto py-8 text-md md:text-lg relative p-4 dark:border-stone-400 dark:border-solid dark:border rounded-md dark:border-opacity-30 md:p-12 md:mb-16">
        <span className="absolute top-[-10px] left-10 bg-stone-950 px-4 text-stone-400 text-sm">
          MDL
        </span>
        The MDL assesses the Muscular Strength component of fitness by measuring
        a Soldier’s lower body, grip and core muscular strength. It requires
        well-conditioned back and leg muscles and helps Soldiers to avoid hip,
        knee and lower back injuries. Flexibility and balance are secondary
        components of fitness assessed by the MDL.
      </p>

      <div className="w-fit mx-auto my-12">
        <Iframe
          width="580"
          height="335"
          src="https://www.youtube.com/embed/DcxGLmmbZYA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="shadow"
        ></Iframe>
      </div>

      <div className="w-full md:w-4/6 mx-auto my-16">
        <div className="font-bold text-2xl mb-4">Phase 1 Preparatory Phase</div>
        <p className="pl-4 dark:border-l dark:border-l-amber-400 dark:border-l-solid dark:border-opacity-50">
          On the command of “GET SET,” the Soldier steps inside the hex bar,
          feet shoulder width apart, and locates the mid-point of the hex bar
          handles. The Soldier bends at the knees and hips, reaches down and
          grasps the center of the handles using a closed grip. Arms are fully
          extended, back is flat, head aligns with the spine or is slightly
          extended, and heels are in contact with the ground. Each repetition
          begins from this position.
        </p>
      </div>

      <div className="w-full md:w-4/6 mx-auto my-16">
        <div className="font-bold text-2xl mb-4">
          Phase 2 Upward Movement Phase
        </div>
        <p className="pl-4 dark:border-l dark:border-l-amber-400 dark:border-l-solid dark:border-opacity-50">
          On the command of “GO,” the Soldier lifts the bar by straightening the
          hips and knees in order to reach the Straddle Stance. The hips should
          not rise before or above the shoulders. The back should remain
          straight — not rounded out or flexed. The feet remain in the same
          position. The Soldier and the weight must remain balanced and
          controlled throughout the movement.
        </p>
      </div>

      <div className="w-full md:w-4/6 mx-auto my-16">
        <div className="font-bold text-2xl mb-4">
          Phase 3 Downward Movement Phase
        </div>
        <p className="pl-4 dark:border-l dark:border-l-amber-400 dark:border-l-solid dark:border-opacity-50">
          After reaching the Straddle Stance position, the Soldier lowers the
          bar back to the ground under control while maintaining a straight
          back. The bar must be placed on the ground and not dropped. The weight
          plates must touch the ground to complete a repetition. Execute three
          continuous repetitions with the same weight. If the Soldier fails to
          complete three continuous repetitions under control, he or she is
          permitted one retest at a lower weight. If the Soldier successfully
          completes three continuous repetitions on the first attempt, he or she
          may elect an additional attempt at a higher weight. The maximum number
          of attempts on the MDL is two.
        </p>
      </div>
    </main>
  );
};

export default MdlPage;
