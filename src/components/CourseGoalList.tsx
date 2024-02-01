import { type ReactNode } from 'react';
import { Goal } from '../App';
import CourseGoal from './CourseGoal';
import InfoBox from './InfoBox';

interface Props {
  goals: Goal[];
  handleDeleteGoal: (goalId: number) => void;
}

const CourseGoalList = (props: Props) => {
  const { goals, handleDeleteGoal } = props;

  if (goals.length === 0) {
    return <InfoBox mode='hint'>You have no course goals yet. Start adding some!</InfoBox>;
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode='warning' severity='medium'>
        You are collecting a lot of goals. Do not put too much on your plate
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.titile} handleDeleteGoal={handleDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
