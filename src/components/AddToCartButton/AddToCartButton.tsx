import './AddToCartButton.scss';

type Props = {
  amount: number;
  decreaseAmount: () => void;
  increaseAmount: () => void;
};

const AddToCartButton = ({ amount, decreaseAmount, increaseAmount }: Props) => {
  return (
    <div className="control-buttons">
      {amount > 0 ? (
        <>
          <button
            onClick={decreaseAmount}
            type="button"
            className="control-buttons__button"
          >
            -
          </button>
          <div className="control-buttons__value">{amount}</div>
          <button
            onClick={increaseAmount}
            type="button"
            className="control-buttons__button"
          >
            +
          </button>
        </>
      ) : (
        <button
          type="button"
          className="control-buttons__add-to-cart"
          onClick={increaseAmount}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default AddToCartButton;
