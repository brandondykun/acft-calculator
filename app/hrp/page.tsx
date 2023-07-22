import Iframe from "@/components/Iframe";

const HrpPage = () => {
  return (
    <main className="p-4 text-stone-300 w-full">
      <h1 className="text-2xl mb-8">Hand Release Pushup</h1>
      <p className="w-4/6 m-auto">
        The HRP assesses the Muscular Endurance component of fitness by
        measuring a Soldier’s upper body endurance. The HRP is a strong driver
        for upper body and core strength training. Flexibility is a secondary
        component of fitness assessed by the HRP.
      </p>

      <div className="w-fit mx-auto my-12">
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

      <p className="w-4/6 mx-auto my-16">
        <span className="font-bold">Starting position</span>
        <br />
        On the command of “GET SET,” one Soldier in each lane will assume the
        prone position facing the start line with hands flat on the ground and
        index fingers inside the outer edges of the shoulders. The chest and
        front of the hips and thighs will be on the ground. Toes will touch the
        ground with feet together or up to a boot’s width apart. The ankles will
        be flexed. The head does not have to be on the ground. Feet will remain
        generally together, no more than a boot’s width apart, throughout the
        HRP. Soldiers may adjust their feet during the test event as long as
        they do not lift a foot off the ground.
      </p>

      <p className="w-4/6 mx-auto my-16">
        <span className="font-bold">Movement 1</span>
        <br />
        On the command “GO,” a Soldier will push their whole body up from the
        ground as a single unit to the up position by fully extending the elbows
        (front leaning rest).
        <ul className="px-8 py-6">
          <li>
            The Soldier will maintain a generally straight body alignment from
            the top of the head to the ankles. This generally straight position
            will be maintained for the duration of the HRP.
          </li>
          <li>
            Failing to maintain a generally straight alignment during a
            repetition will cause that repetition to not count.
          </li>
          <li>
            The front leaning rest is the only authorized rest position. Bending
            or flexing the knees, hips, trunk, or neck while in the rest
            position is not authorized.
          </li>
        </ul>
      </p>

      <p className="w-4/6 mx-auto my-16">
        <span className="font-bold">Movement 2</span> <br />
        After the elbows are fully extended and the Soldier has reached the up
        position, the Soldier will bend their elbows to lower the body back to
        the ground. The chest, hips and thighs should touch down at the same
        time. The head or face do not have to contact the ground.
      </p>

      <p className="w-4/6 mx-auto my-16">
        <span className="font-bold">Movement 3</span> <br />
        The hand release — without moving the head, body or legs, the Soldier
        fully extends both arms into the T position until the arms are generally
        straight out to the side. The arms and hands may touch or slide along
        the ground during this movement.
      </p>

      <p className="w-4/6 mx-auto my-16">
        <span className="font-bold">Movement 4</span> <br />
        The Soldier immediately moves his or her hands back on the ground to
        return to the starting position to complete the repetition.
      </p>
    </main>
  );
};

export default HrpPage;