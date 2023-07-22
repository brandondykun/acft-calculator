type Props = {
  children: React.ReactNode;
};

const ExerciseContainer = ({ children }: Props) => {
  return <div className="text-stone-100 py-4">{children}</div>;
};

export default ExerciseContainer;
