import {
  type FormEvent,
  type ComponentPropsWithRef,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';

export type FormHandle = {
  clear: () => void;
};

type Props = ComponentPropsWithRef<'form'> & {
  onSave: (value: unknown) => void;
};

const Form = forwardRef<FormHandle, Props>(function Form(props, ref) {
  const { onSave, children, ...othersProps } = props;

  const form = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log('Clearing...');

        form.current?.reset();
      },
    };
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);

    onSave(data);
    form.current?.reset();
  };

  return (
    <form onSubmit={handleSubmit} {...othersProps} ref={form}>
      {children}
    </form>
  );
});

export default Form;
