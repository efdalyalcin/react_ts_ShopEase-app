import { IProduct } from 'src/types/product.type';
import './ProductCard.scss';
import ProductImage from '../ProductImage/ProductImage';
import { useEffect, useRef, useState } from 'react';

type Props = {
  product: IProduct;
};

const ProductCard = ({ product }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [amount, setAmount] = useState(0);
  const [dimensions, setDimensions] = useState({
    frontWidth: 220,
    frontHeight: 0,
  });
  const cardRef = useRef<HTMLDivElement>(null);

  const flipCard = () => setIsFlipped(() => !isFlipped);
  const decreaseAmount = () => {
    if (amount >= 1) setAmount(() => amount - 1);
  };
  const increaseAmount = () => {
    if (amount < 20) setAmount(() => amount + 1);
  };

  useEffect(() => {
    if (cardRef.current) {
      const { width, height } = cardRef.current.getBoundingClientRect();
      setDimensions({ frontWidth: width, frontHeight: height });
    }
  }, []);

  return (
    <div className="product-card" ref={cardRef}>
      {isFlipped ? (
        <div
          className="product-card__back"
          style={{
            width: dimensions.frontWidth,
            // height -2 is for the border of product-card since it is outside. Don't remove!!
            height: dimensions.frontHeight - 2,
          }}
          // onClick={flipCard}
        >
          <div className="product-card__container">
            <p className="product-card__price">{`$${product.price}`}</p>
            <div>
              <button onClick={decreaseAmount} type="button">
                -
              </button>
              <input type="text" />
              <button onClick={increaseAmount} type="button">
                +
              </button>
            </div>
            <p className="product-card__details">{product.description}</p>
          </div>
        </div>
      ) : (
        <div className="product-card__front" onClick={flipCard}>
          <div className="product-card__image">
            <ProductImage
              img={product.image}
              alt={product.title}
              height="200px"
              width="200px"
            />
          </div>
          <div className="product-card__container">
            <p className="product-card__price">{`$${product.price}`}</p>
            <p className="product-card__details">{product.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
