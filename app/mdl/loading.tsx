import { FadeLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="text-stone-300 text-3xl flex justify-center items-center min-h-screen">
      <FadeLoader color="#fbbf24" />
    </div>
  );
};

export default Loading;
