import { type ReactNode, type ElementType, type ComponentPropsWithoutRef } from 'react';

type Props<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

function Container<C extends ElementType>(props: Props<C>) {
  const { as, children, ...others } = props;
  const Component = as || 'div';

  return <Component {...others}>{children}</Component>;
}

export default Container;
