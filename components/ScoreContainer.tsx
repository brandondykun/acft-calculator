type Props = {
  score: number;
  id: string;
};
const ScoreContainer = ({ score, id }: Props) => {
  return (
    <div
      className={`${score < 60 ? "text-red-600" : ""} ${
        score >= 60 ? "text-green-600" : ""
      }`}
      id={id}
    >
      Score: {score}
    </div>
  );
};

export default ScoreContainer;
