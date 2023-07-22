type Props = {
  score: number;
};
const ScoreContainer = ({ score }: Props) => {
  return (
    <div
      className={`${score < 60 ? "text-red-600" : ""} ${
        score >= 60 ? "text-green-600" : ""
      }`}
    >
      Score: {score}
    </div>
  );
};

export default ScoreContainer;
