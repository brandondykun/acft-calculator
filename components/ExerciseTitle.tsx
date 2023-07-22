type Props = {
  children: React.ReactNode;
};

const ExerciseTitle = ({ children }: Props) => {
  return (
    <div className="py-6 text-xl text-stone-300 uppercase md:flex md:justify-between md:align-middle">
      {children}
    </div>
  );
};

export default ExerciseTitle;
