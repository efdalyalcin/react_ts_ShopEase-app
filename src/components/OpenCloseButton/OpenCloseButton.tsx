import { useEffect, useState } from 'react';
import './OpenCloseButton.scss';
import cn from 'classnames';

type Props = {
  action: () => void;
  state: boolean;
};

const OpenCloseButton = ({ action, state }: Props) => {
  const [opacity, setOpacity] = useState(0);

  // this useEffect is used to negate the jumping effect from back to front of the card
  useEffect(() => {
    setOpacity(0);
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }, [state]);
  return (
    <>
      <div
        className={cn('open-close open-close__container', {
          'open-close--close-state': state,
        })}
        style={{ opacity: opacity }}
      >
        <button type="button" className="open-close__button" onClick={action}>
          <div
            className={cn('open-close__icon', {
              'open-close__icon--vertical': !state,
              'open-close__icon--diagonal': state,
            })}
          />
          <div
            className={cn('open-close__icon', {
              'open-close__icon--horizontal': !state,
              'open-close__icon--diagonal-opposite': state,
            })}
          />
        </button>
      </div>
    </>
  );
};

export default OpenCloseButton;
