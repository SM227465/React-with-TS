import { useState } from 'react';

import goalsImage from './assets/goals.jpg';
import Header from './components/Header';
import CourseGoalList from './components/CourseGoalList';
import NewGoal from './components/NewGoal';

export interface Goal {
  id: number;
  titile: string;
  description: string;
}

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);

  const handleAddGoal = (goal: string, summary: string) => {
    const newGoal: Goal = {
      id: Math.random(),
      titile: goal,
      description: summary,
    };

    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  const handleDeleteGoal = (goalId: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== goalId));
  };

  return (
    <main>
      <Header image={{ src: goalsImage, alt: 'A list of goals' }}>
        <h1>Your Course Goals</h1>
      </Header>

      <NewGoal handleAddGoal={handleAddGoal} />

      <CourseGoalList goals={goals} handleDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
