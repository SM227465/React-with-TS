import { type ReactNode } from 'react';

interface Props {
  id: number;
  title: string;
  children: ReactNode;
  handleDeleteGoal: (goalId: number) => void;
}

const CourseGoal = (props: Props) => {
  const { id, title, children, handleDeleteGoal } = props;

  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>

      <button onClick={() => handleDeleteGoal(id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;
