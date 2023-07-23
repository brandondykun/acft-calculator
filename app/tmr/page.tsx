import Iframe from "@/components/Iframe";

const TmrPage = () => {
  return (
    <main className="p-4 text-stone-300 w-full">
      <h1 className="text-3xl mb-8 text-amber-400 p-8 text-center md:text-left">
        TWO-MILE RUN (2MR)
      </h1>
      <p className="w-full md:w-4/6 md:m-auto py-8 text-md md:text-lg relative p-4 dark:border-stone-400 dark:border-solid dark:border rounded-md dark:border-opacity-30 md:p-12 md:mb-16">
        <span className="absolute top-[-10px] left-10 bg-stone-950 px-4 text-stone-400 text-sm">
          TMR
        </span>
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
        <p className="pl-4 dark:border-l dark:border-l-amber-400 dark:border-l-solid dark:border-opacity-50">
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
