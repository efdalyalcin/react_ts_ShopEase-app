import { IProduct } from 'src/types/product.type';
import './ProductCard.scss';
import ProductImage from '../ProductImage/ProductImage';
import { useEffect, useRef, useState } from 'react';

type Props = {
  product: IProduct;
};

const ProductCard = ({ product }: Props) => {
  const [isFliped, setIsFlipped] = useState(false);
  const [dimensions, setDimensions] = useState({
    frontWidth: 220,
    frontHeight: 0,
  });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      const { width, height } = cardRef.current.getBoundingClientRect();
      setDimensions({ frontWidth: width, frontHeight: height });
    }
  }, []);

  console.log(dimensions);
  return (
    <div
      className="product-card"
      onClick={() => setIsFlipped(true)}
      ref={cardRef}
    >
      {isFliped ? (
        <div>aadda</div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default ProductCard;
