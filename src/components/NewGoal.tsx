import { useRef, type FormEvent } from 'react';

interface Props {
  handleAddGoal: (goal: string, summary: string) => void;
}

const NewGoal = (props: Props) => {
  const { handleAddGoal } = props;

  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const goal = goalRef.current!.value;
    const summary = summaryRef.current!.value;

    handleAddGoal(goal, summary);

    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='goal'>Your Goal</label>
        <input id='goal' type='text' ref={goalRef} />
      </p>

      <p>
        <label htmlFor='summary'>Short Summary</label>
        <input id='summary' type='text' ref={summaryRef} />
      </p>

      <p>
        <button type='submit'>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
