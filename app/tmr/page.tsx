import Iframe from "@/components/Iframe";

const TmrPage = () => {
  return (
    <main className="p-4 text-stone-300 w-full">
      <h1 className="text-3xl mb-8 text-amber-400 p-8 text-center md:text-left">
        TWO-MILE RUN (2MR)
      </h1>
      <p className="w-full md:w-4/6 md:m-auto py-8 text-xl">
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

      <div className="w-full md:w-4/6 mx-auto my-16">
        <p>
          The two mile run can be completed on an indoor or outdoor track, or an
          improved surface such as a road or sidewalk. The 2MR cannot be tested
          on unimproved terrain. The start and finish line will be near the same
          location as the test site for the other five test events. Out-and-back
          or lap track courses are authorized.
        </p>
      </div>
    </main>
  );
};

export default TmrPage;
