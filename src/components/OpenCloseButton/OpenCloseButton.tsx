import './OpenCloseButton.scss';

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
          &nbsp;
        </button>
      </div>
    </>
  );
};

export default OpenCloseButton;
