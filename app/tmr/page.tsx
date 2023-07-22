import Iframe from "@/components/Iframe";

const TmrPage = () => {
  return (
    <main className="p-4 text-stone-300 w-full">
      <h1 className="text-2xl mb-8">TWO-MILE RUN (2MR)</h1>
      <p className="w-4/6 m-auto">
        The 2MR assesses the Aerobic Endurance component of fitness. Higher
        aerobic endurance allows a Soldier to work for long periods of time and
        to recover more quickly when executing repetitive physical tasks.
      </p>

      <div className="w-fit mx-auto my-12">
        <Iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/NRvQA5UXNMk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></Iframe>
      </div>

      <p className="w-4/6 mx-auto my-16">
        The two mile run can be completed on an indoor or outdoor track, or an
        improved surface such as a road or sidewalk. The 2MR cannot be tested on
        unimproved terrain. The start and finish line will be near the same
        location as the test site for the other five test events. Out-and-back
        or lap track courses are authorized.
      </p>
    </main>
  );
};

export default TmrPage;
