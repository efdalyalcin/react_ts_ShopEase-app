import './OpenCloseButton.scss';
import cn from 'classnames';

type Props = {
  action: () => void;
  state: boolean;
};

const OpenCloseButton = ({ action, state }: Props) => {
  return (
    <>
      <div className="open-close__height" />
      <div className="open-close open-close__container">
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
