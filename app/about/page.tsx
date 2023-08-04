import { HelpCircle, Hammer, BarChart3, Scale } from "lucide-react";

type DividerText = {
  text: string;
};
const DividerText = ({ text }: DividerText) => {
  return (
    <div className="text-2xl text-center mb-24 flex items-center text-stone-400">
      <div className="h-[1px] dark:bg-stone-500 flex-1"></div>
      <div className="px-6">{text}</div>
      <div className="h-[1px] dark:bg-stone-500 flex-1"></div>
    </div>
  );
};

type TextBoxWithIcon = {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
};

const TextBoxWithIcon = ({ title, children, icon }: TextBoxWithIcon) => {
  return (
    <div className="sm:px-8 px-4 pb-12 pt-16 relative border border-solid dark:border-stone-700 rounded max-w-4xl mx-auto mb-32">
      <div className="sm:text-lg text-sm text-stone-300 dark:bg-stone-950 border border-solid dark:border-amber-400 absolute top-[-20px] sm:top-[-25px] left-0 right-0 m-auto w-fit px-4 py-2 rounded">
        {title}
      </div>
      <div className="sm:flex">
        <div className="px-4 flex items-center justify-center mb-6 sm:mb-0 sm:border-r border-solid dark:border-stone-800">
          {icon}
        </div>
        <p className="sm:pl-8 dark:text-stone-400">{children}</p>
      </div>
    </div>
  );
};

type GoalCard = {
  number: number;
  title: string;
  body: string;
};

const GoalCard = ({ number, title, body }: GoalCard) => {
  return (
    <div className="border border-solid dark:border-stone-800 rounded p-4 mb-12 flex-1 ">
      <div className="text-xl bold pb-4 border-b dark:border-b-stone-800 border-solid mb-4 flex items-center gap-4">
        <span className="w-10 h-10 rounded-[50%] bg-amber-400 flex justify-center items-center text-stone-900">
          {number}
        </span>
        <span className="text-stone-100 bold">{title}</span>
      </div>
      <p className="dark:text-stone-400">{body}</p>
    </div>
  );
};

const AboutPage = () => {
  return (
    <main className="min-h-screen p-4 pb-24 dark:bg-stone-950 dark:text-stone-300 max-w-[1000px] mx-auto">
      <div className="text-3xl p-8 text-stone-300 mb-12">ABOUT</div>
      <div className="mb-32">
        <DividerText text="Our Goals" />
        <div className="md:flex gap-8 justify-center">
          <GoalCard
            number={1}
            title="Simplicity"
            body="Nothing fancy. No BS. Just the tools you need, without extra ads
              and click bait that distract and slow you down."
          />
          <GoalCard
            number={2}
            title="Accuracy"
            body="Accuracy is key. We ensure that scores are calculated correctly
            every time, so you can use our tool with confidence."
          />
          <GoalCard
            number={2}
            title="Efficiency"
            body="You have important things to do. Calculating ACFT scores should be
            quick and easy, so you can get back to the important stuff."
          />
        </div>
      </div>

      <DividerText text="Our Purpose" />
      <TextBoxWithIcon
        title="Why was this site created?"
        icon={<HelpCircle size={60} color="#fbbf24" />}
      >
        Calculating ACFT scores can be a pain and other tools just weren't
        cutting it. They were either cluttered with ads, or didn't work well on
        a mobile device. A tool was needed that didn't require downloading
        another app, and was easy to use from any mobile device. Hence, the Army
        ACFT Calculator was born.
      </TextBoxWithIcon>

      <DividerText text="Our Motivation" />
      <TextBoxWithIcon
        title="Made for Soldiers by Soldiers"
        icon={<Hammer size={60} color="#fbbf24" />}
      >
        First and foremost, the ACFT Calculator was made entirely by Soldiers as
        a tool to help other Soldiers. We are motivated to get it right. We know
        that Army software isn't the best sometimes, so we are doing our part to
        give you a better experience and to make your life a little easier.
      </TextBoxWithIcon>

      <DividerText text="Our Commitment" />
      <TextBoxWithIcon
        title="Accurate Data"
        icon={<BarChart3 size={60} color="#fbbf24" />}
      >
        Your ACFT score matters. To ensure the highest accuracy, robust tests
        were written to ensure that the raw values entered calculate to the
        correct scores. Yea yea, we get it. The technical coding stuff isn't
        important. But what is important is that your scores are accurate, and
        we went out of our way to prioritize calculating accurate scores to
        ensure you get the score you deserve. In fact,{" "}
        <span className="text-amber-400">
          our tests caught errors on the Army's ACFT Scoring Scales pdf.
        </span>{" "}
        Don't believe us? Check out the Male 52-56 Sprint Drag Carry scale.
        Points 79 and 80 both have a raw value of 02:23. That's not the only
        error hidden on that score sheet, but don't worry. We put in the work to
        make sure you get the score you deserve.
      </TextBoxWithIcon>

      <div className="sm:p-8 px-4">
        <div className="text-3xl text-stone-300 pb-6 flex gap-4 items-center">
          <Scale size={30} />
          <span>Disclaimer</span>
        </div>
        <div>
          This site has no affiliation with the US Army, and the views and
          opinions expressed here do not reflect that of the U.S. Army, the
          Department of Defense or the United States government.
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
