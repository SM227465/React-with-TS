import { type Timer as Props } from '../store/timers-context.tsx';
import Container from './UI/Container.tsx';

export default function Timer(props: Props) {
  const { duration, name } = props;

  return (
    <Container as='article'>
      <h2>{name}</h2>
      <p>{duration}</p>
    </Container>
  );
}
