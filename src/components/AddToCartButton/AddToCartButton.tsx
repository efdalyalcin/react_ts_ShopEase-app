import './AddToCartButton.scss';

type Props = {
  amount: number;
  decreaseAmount: () => void;
  increaseAmount: () => void;
};

const AddToCartButton = ({ amount, decreaseAmount, increaseAmount }: Props) => {
  return (
    <div className="controls">
      {amount > 0 ? (
        <>
          <button
            onClick={decreaseAmount}
            type="button"
            className="controls__button"
          >
            -
          </button>
          <div className="controls__value">{amount}</div>
          <button
            onClick={increaseAmount}
            type="button"
            className="controls__button"
          >
            +
          </button>
        </>
      ) : (
        <button
          type="button"
          className="controls__add-to-cart"
          onClick={increaseAmount}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default AddToCartButton;
