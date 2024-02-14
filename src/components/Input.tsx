import { forwardRef, type ComponentPropsWithoutRef } from 'react';

type Props = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  const { id, label, ...others } = props;

  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...others} ref={ref} />
    </p>
  );
});

export default Input;
