import { Goal } from '../App';
import CourseGoal from './CourseGoal';

interface Props {
  goals: Goal[];
  handleDeleteGoal: (goalId: number) => void;
}

const CourseGoalList = (props: Props) => {
  const { goals, handleDeleteGoal } = props;

  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.titile} handleDeleteGoal={handleDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
