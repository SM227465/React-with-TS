import { type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  image: {
    src: string;
    alt: string;
  };
}

const Header = (props: Props) => {
  const { children, image } = props;

  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
};

export default Header;
