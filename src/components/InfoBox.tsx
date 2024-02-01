import { type ReactNode } from 'react';

interface Hint {
  mode: 'hint';
  children: ReactNode;
}

interface Warning {
  mode: 'warning';
  children: ReactNode;
  severity: 'low' | 'medium' | 'high';
}

type Props = Hint | Warning;

const InfoBox = (props: Props) => {
  const { children, mode } = props;

  if (mode === 'hint') {
    return (
      <aside className='infobox infobox-hint'>
        <p>{children}</p>
      </aside>
    );
  }

  const { severity } = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      {mode === 'warning' ? <h2>Warning</h2> : null}
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;
