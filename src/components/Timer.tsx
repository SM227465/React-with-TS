import { useEffect, useRef, useState } from 'react';
import { useTimersContext, type Timer as Props } from '../store/timers-context.tsx';
import Container from './UI/Container.tsx';

export default function Timer(props: Props) {
  const { duration, name } = props;
  const interval = useRef<number | null>(null);
  const { isRunning } = useTimersContext();

  const [remainingTime, setRemainingTime] = useState(duration * 1000);

  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    let intervalInstance: number;

    if (isRunning) {
      intervalInstance = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 50);
      }, 50);

      interval.current = intervalInstance;
    } else if (interval.current) {
      clearInterval(interval.current);
    }

    return () => clearInterval(intervalInstance);
  }, [isRunning]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as='article'>
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
