import Iframe from "@/components/Iframe";

const PlkPage = () => {
  return (
    <main className="p-4 text-stone-300 w-full">
      <h1 className="text-3xl mb-8 text-amber-400 p-8 text-center md:text-left">
        PLANK (PLK)
      </h1>
      <p className="w-full md:w-4/6 md:m-auto py-8 text-md md:text-lg relative p-4 dark:border-stone-400 dark:border-solid dark:border rounded-md dark:border-opacity-30 md:p-12 md:mb-16">
        <span className="absolute top-[-10px] left-10 bg-stone-950 px-4 text-stone-400 text-sm">
          PLK
        </span>
        The PLK assesses the Muscular Endurance component of fitness by
        measuring a Soldier’s core strength and endurance. Balance is a
        secondary component of fitness assessed by the PLK.
      </p>

      <div className="w-fit mx-auto my-12">
        <Iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/XuprZeJa7G0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></Iframe>
      </div>

      <div className="w-full md:w-4/6 mx-auto my-16">
        <div className="font-bold text-2xl mb-4">Starting position</div>
        <p>
          On the command “GET READY” hands must be on the ground, either in
          fists with pinky side of the hand touching the ground or lying flat
          with palms down, no more than the grader’s fist-width apart; elbows
          will be bent, aligned with the shoulders, forearms flat on the ground
          forming a triangle; hips should be bent with one or both knees resting
          on the ground.
        </p>
      </div>

      <div className="w-full md:w-4/6 mx-auto my-16">
        <div className="font-bold text-2xl mb-4">Execution</div>
        <p>
          On the command “GET SET,” the Soldier lifts both knees off the ground
          and moves the hips into a straight line with the legs, shoulders, head
          and eyes focused on the ground, similar to the “Front Leaning Rest.”
          The Soldier’s feet may be up to the grader’s boot-width apart. Elbows
          are aligned with the shoulders, together with the forearms forming a
          triangle. Ankles are flexed with the bottom of the toes on the ground.
          The Soldier maintains his or her body in straight alignment from the
          head to the ankles. The fingers on the left hand may not be
          interlocked, interlaced, or touching with the fingers on the right
          hand, hands no more than a boot width apart. On the command “GO,” the
          Soldier moves into the proper “plank” position.
        </p>
      </div>

      <div className="w-full md:w-4/6 mx-auto my-16">
        <p>
          To maintain proper plank position, the head, shoulders, back, hips,
          and legs must remain in a straight-line position from head to heels
          throughout the event. Feet, forearms, and fists/palms must remain in
          contact with the floor throughout the event.
        </p>
      </div>

      <div className="w-full md:w-4/6 mx-auto my-16">
        <p>
          As long as the hands remain in contact with the ground, Soldiers may
          change hand position from the fist-pinky side down to palms down
          during the plank.
        </p>
      </div>

      <div className="w-full md:w-4/6 mx-auto my-16">
        <p>
          The Plank event is terminated if the Soldier touches the ground with
          any part of the body other than the feet, forearms or fists/palms,
          raises a foot or hand off the floor, or fails to maintain a
          straight-line position from head to heels.
        </p>
      </div>

      <div className="w-full md:w-4/6 mx-auto my-16">
        <p>
          Graders will give one verbal warning to correct failure to maintain
          the proper plank position or if the hands/feet slide from the required
          position. If the Soldier is unable to correct a deficiency or maintain
          the proper plank position, the Soldier’s performance will be
          terminated.
        </p>
      </div>

      <div className="w-full md:w-4/6 mx-auto my-16">
        <p>
          Shaking or trembling as a result of maximum exertion is permitted as
          long as the proper plank position is maintained.
        </p>
      </div>
    </main>
  );
};

export default PlkPage;
