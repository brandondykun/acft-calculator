type Props = {
  children: React.ReactNode;
  id: string;
};

const ExerciseContainer = ({ id, children }: Props) => {
  return (
    <div className="text-stone-100 py-4" id={id}>
      {children}
    </div>
  );
};

export default ExerciseContainer;
