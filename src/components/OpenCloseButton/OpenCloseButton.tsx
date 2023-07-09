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
            className={cn('add-cross', {
              'add-cross--vertical': !state,
              'add-cross--diagonal': state,
            })}
          />
          <div
            className={cn('add-cross', {
              'add-cross--horizontal': !state,
              'add-cross--diagonal-opposite': state,
            })}
          />
        </button>
      </div>
    </>
  );
};

export default OpenCloseButton;
