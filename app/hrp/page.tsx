import Iframe from "@/components/Iframe";
import hrpImage from "../../public/pushup.svg";

const HrpPage = () => {
  return (
    <main className="p-4 text-stone-300 w-full">
      <h1 className="text-3xl mb-8 text-amber-400 p-8 text-center md:text-left">
        HAND RELEASE PUSHUP - ARM EXTENSION (HRP)
      </h1>
      <p className="w-full md:w-4/6 md:m-auto py-8 text-md md:text-lg relative p-4 dark:border-stone-400 dark:border-solid dark:border rounded-md dark:border-opacity-30 md:p-12 md:mb-16">
        <span className="absolute top-[-10px] left-10 bg-stone-950 px-4 text-stone-400 text-sm">
          HRP
        </span>
        The HRP assesses the Muscular Endurance component of fitness by
        measuring a Soldier’s upper body endurance. The HRP is a strong driver
        for upper body and core strength training. Flexibility is a secondary
        component of fitness assessed by the HRP.
      </p>

      <div className="w-fit mx-auto my-20">
        <Iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9mO6ygDS7y4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></Iframe>
      </div>

      <div className="relative">
        <div className="h-[1px] dark:bg-stone-400 absolute top-[50%] left-0 right-0 md:left-[15%] md:right-[15%]"></div>
        <div className="m-auto p-6 border-2 border-solid dark:border-stone-400 rounded-[50%] relative h-40 w-40 dark:bg-stone-900 flex justify-center items-center">
          <img
            src={hrpImage.src}
            alt="Hand Release Pushup Image"
            className="w-[110px]"
          />
        </div>
      </div>

      <div className="w-full md:w-4/6 mx-auto my-16">
        <div className="font-bold text-2xl mb-4">Starting position</div>
        <p className="pl-4 dark:border-l dark:border-l-amber-400 dark:border-l-solid dark:border-opacity-50">
          On the command of “GET SET,” one Soldier in each lane will assume the
          prone position facing the start line with hands flat on the ground and
          index fingers inside the outer edges of the shoulders. The chest and
          front of the hips and thighs will be on the ground. Toes will touch
          the ground with feet together or up to a boot’s width apart. The
          ankles will be flexed. The head does not have to be on the ground.
          Feet will remain generally together, no more than a boot’s width
          apart, throughout the HRP. Soldiers may adjust their feet during the
          test event as long as they do not lift a foot off the ground.
        </p>
      </div>

      <div className="w-full md:w-4/6 mx-auto my-16">
        <div className="font-bold text-2xl mb-4">Movement 1</div>
        <p className="pl-4 dark:border-l dark:border-l-amber-400 dark:border-l-solid dark:border-opacity-50">
          On the command “GO,” a Soldier will push their whole body up from the
          ground as a single unit to the up position by fully extending the
          elbows (front leaning rest).
        </p>
        <ul className="px-8 py-6">
          <li className="mb-4">
            The Soldier will maintain a generally straight body alignment from
            the top of the head to the ankles. This generally straight position
            will be maintained for the duration of the HRP.
          </li>
          <li className="mb-4">
            Failing to maintain a generally straight alignment during a
            repetition will cause that repetition to not count.
          </li>
          <li className="mb-4">
            The front leaning rest is the only authorized rest position. Bending
            or flexing the knees, hips, trunk, or neck while in the rest
            position is not authorized.
          </li>
        </ul>
      </div>

      <div className="w-full md:w-4/6 mx-auto my-16">
        <div className="font-bold text-2xl mb-4">Movement 2</div>
        <p className="pl-4 dark:border-l dark:border-l-amber-400 dark:border-l-solid dark:border-opacity-50">
          After the elbows are fully extended and the Soldier has reached the up
          position, the Soldier will bend their elbows to lower the body back to
          the ground. The chest, hips and thighs should touch down at the same
          time. The head or face do not have to contact the ground.
        </p>
      </div>

      <div className="w-full md:w-4/6 mx-auto my-16">
        <div className="font-bold text-2xl mb-4">Movement 3</div>
        <p className="pl-4 dark:border-l dark:border-l-amber-400 dark:border-l-solid dark:border-opacity-50">
          The hand release — without moving the head, body or legs, the Soldier
          fully extends both arms into the T position until the arms are
          generally straight out to the side. The arms and hands may touch or
          slide along the ground during this movement.
        </p>
      </div>

      <div className="w-full md:w-4/6 mx-auto my-16">
        <div className="font-bold text-2xl mb-4">Movement 4</div>
        <p className="pl-4 dark:border-l dark:border-l-amber-400 dark:border-l-solid dark:border-opacity-50">
          The Soldier immediately moves his or her hands back on the ground to
          return to the starting position to complete the repetition.
        </p>
      </div>
    </main>
  );
};

export default HrpPage;
