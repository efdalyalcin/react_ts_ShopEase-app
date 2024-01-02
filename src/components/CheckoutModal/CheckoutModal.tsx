import OpenCloseButton from '../OpenCloseButton/OpenCloseButton';
import './CheckoutModal.scss';

type Props = {
  closeModal: () => void;
};

export default function CheckoutModal({ closeModal }: Props) {
  return (
    <div className="CheckoutModal__wrapper">
      <div className="CheckoutModal">
        <div className="CheckoutModal__close">
          <OpenCloseButton action={closeModal} state={true} />
        </div>
        <p className="CheckoutModal__text">
          This is a training project created with a dummy API. <br />
          Thank you for trying out!!!
        </p>
        <div className="CheckoutModal__buttons">
          <button
            type="button"
            className="CheckoutModal__button CheckoutModal__action-button"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
