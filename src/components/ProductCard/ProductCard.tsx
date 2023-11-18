import { IProduct } from 'src/types/product.type';
import './ProductCard.scss';
import ProductImage from '../ProductImage/ProductImage';
import { useCallback, useEffect, useRef, useState } from 'react';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import OpenCloseButton from '../OpenCloseButton/OpenCloseButton';
import useCart from 'src/store/cartStore';
import findProductInCart from 'src/helpers/findProductInCart';

type Props = {
  product: IProduct;
};

const ProductCard = ({ product }: Props) => {
  const { productsInCart, addOrRemoveProductItem } = useCart();
  const [isFlipped, setIsFlipped] = useState(false);
  const [amount, setAmount] = useState<number>(
    findProductInCart(product.id, productsInCart)?.quantity || 0
  );
  const [dimensions, setDimensions] = useState({
    frontWidth: 220,
    frontHeight: 0,
  });
  const cardRef = useRef<HTMLDivElement>(null);

  const flipCard = () => setIsFlipped(() => !isFlipped);

  const decreaseAmount = useCallback(() => {
    if (amount >= 1) {
      setAmount((prevAmount) => {
        const newAmount = prevAmount - 1;
        addOrRemoveProductItem(product.id, newAmount);
        return newAmount;
      });
    }
  }, [amount]);

  const increaseAmount = useCallback(() => {
    if (amount < 20) {
      setAmount((prevAmount) => {
        const newAmount = prevAmount + 1;
        addOrRemoveProductItem(product.id, newAmount);
        return newAmount;
      });
    }
  }, [amount]);

  useEffect(() => {
    if (cardRef.current) {
      const { width, height } = cardRef.current.getBoundingClientRect();
      setDimensions({ frontWidth: width, frontHeight: height });
    }
  }, []);

  return (
    <div className="product-card" ref={cardRef}>
      <div
        className="product-card__inner"
        style={{ transform: isFlipped ? 'rotateY(180deg)' : '' }}
      >
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
            <p className="product-card__price">{`€${product.price}`}</p>
            <p className="product-card__title">{product.title}</p>
          </div>
          <OpenCloseButton action={flipCard} state={isFlipped} />
        </div>
        <div
          className="product-card__back"
          style={{
            width: dimensions.frontWidth,
            // height -2 is for the border of product-card since it is outside. Don't remove!!
            height: dimensions.frontHeight - 2,
          }}
        >
          <div className="product-card__container">
            <p className="product-card__price">{`€${product.price}`}</p>
            <AddToCartButton
              amount={amount}
              decreaseAmount={decreaseAmount}
              increaseAmount={increaseAmount}
            />
            <p className="product-card__details" onClick={flipCard}>
              {product.description}
            </p>
          </div>
          <OpenCloseButton action={flipCard} state={isFlipped} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
