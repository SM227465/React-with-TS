import { useRef } from 'react';
import Button from './components/Button';
import Container from './components/Container';
import Input from './components/Input';
import Form, { type FormHandle } from './components/Form';

export default function App() {
  const customForm = useRef<FormHandle>(null);
  const input = useRef<HTMLInputElement>(null);

  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; age: string };

    console.log(extractedData);
    customForm.current?.clear();
  };

  return (
    <main>
      <Input id='name' label='Your name' type='text' />
      <Input id='age' label='Your age' type='number' />

      <p>
        <Button>A Button</Button>
      </p>

      <p>
        <Button href='https://google.com'>A link</Button>
      </p>

      <Container as={Button} onClick={() => {}}>
        Click me
      </Container>

      <Input label='Test' id='test' ref={input} />

      <Form onSave={handleSave} ref={customForm}>
        <Input type='text' label='Name' id='name' />
        <Input type='number' label='Age' id='age' />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}
