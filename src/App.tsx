import { useState } from 'react';

import goalsImage from './assets/goals.jpg';
import Header from './components/Header';
import CourseGoalList from './components/CourseGoalList';
import NewGoal from './components/NewGoal';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer, toast } from 'react-toastify';

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
    toast('Goal deleted!');
  };

  return (
    <>
      <main>
        <Header image={{ src: goalsImage, alt: 'A list of goals' }}>
          <h1>Your Course Goals</h1>
        </Header>

        <NewGoal handleAddGoal={handleAddGoal} />

        <CourseGoalList goals={goals} handleDeleteGoal={handleDeleteGoal} />
      </main>

      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Bounce}
      />
    </>
  );
}
