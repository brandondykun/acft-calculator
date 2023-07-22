import Iframe from "@/components/Iframe";

const SdcPage = () => {
  return (
    <main className="p-4 text-stone-300 w-full">
      <h1 className="text-2xl mb-8">SPRINT-DRAG-CARRY (SDC)</h1>
      <p className="w-4/6 m-auto">
        The SDC assesses the Muscular Endurance, Muscular Strength, Anaerobic
        Power and Anaerobic Endurance components of fitness by measuring a
        Soldier’s ability to sustain moderate to high intensity muscular work
        over a short duration. Secondary components of fitness assessed by the
        SDC include Balance, Coordination, Agility, Flexibility and Reaction
        Time.
      </p>

      <div className="w-fit mx-auto my-12">
        <Iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Mv2T2bpbJpw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></Iframe>
      </div>

      <p className="w-4/6 mx-auto my-16">
        <span className="font-bold"> Starting position</span>
        <br />
        On the command “GET SET,” one Soldier in each lane will assume the prone
        position with the top of the head behind the start line. The grader is
        positioned to see both the start line and the 25m line. The grader can
        position a Soldier/battle buddy on the 25m line to ensure compliance
        with test event standards.
      </p>

      <p className="w-4/6 mx-auto my-16">
        <span className="font-bold">Sprint</span>
        <br />
        On the command “GO,” Soldiers stand and sprint 25m; touch the 25m line
        with foot and hand; turn and sprint back to the start line. If the
        Soldier fails to touch the 25m line with hand and foot, the grader
        watching the 25m turn line will call them back.
      </p>

      <p className="w-4/6 mx-auto my-16">
        <span className="font-bold">Drag</span> <br />
        Soldiers will grasp each strap handle, which will be positioned and
        resting on the sled behind the start line; pull the sled backwards until
        the entire sled crosses the 25m line; turn the sled around and pull back
        until the entire sled crosses the start line. If the entire sled does
        not cross the 25m or start line, the grader watching the 25m turn line
        will call them back.
      </p>

      <p className="w-4/6 mx-auto my-16">
        <span className="font-bold"> Lateral</span> <br />
        After the entire sled crosses the start line, the Soldier will perform a
        lateral for 25m, touch the 25m turn line with foot and hand, and perform
        the lateral back to the start line. The Soldier will face the same
        direction moving back to the 25m start line and returning to the start
        line so they lead with each foot. If the Soldier fails to touch the 25m
        turn line with hand and foot, the grader watching the 25m turn line will
        call them back. Graders will correct Soldiers if they cross their feet.
      </p>

      <p className="w-4/6 mx-auto my-16">
        <span className="font-bold">Carry</span> <br />
        Soldiers will grasp the handles of the two 40-pound kettlebells and run
        to the 25m turn line; step on or over the 25m turn line with one foot;
        turn and run back to the start line. If the Soldier drops the
        kettlebells during movement, the carry will resume from the point the
        kettlebells were dropped. If the Soldier fails to touch the 25m turn
        line with their foot, the grader watching the 25m turn line will call
        them back.
      </p>

      <p className="w-4/6 mx-auto my-16">
        <span className="font-bold">Sprint</span> <br />
        After stepping on/over the start line, Soldiers will place the
        kettlebells on the ground; turn and sprint 25m; touch the 25m turn line
        with foot and hand; turn and sprint back to the start line. If the
        Soldier fails to touch the 25m turn line with hand and foot, the grader
        watching the 25m turn line will call them back.
      </p>

      <p className="w-4/6 mx-auto my-16">
        The time is stopped when the Soldier crosses the start line after the
        final sprint (250 meters).
      </p>
    </main>
  );
};

export default SdcPage;
