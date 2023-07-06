import { IProduct } from 'src/types/product.type';
import './ProductCard.scss';
import ProductImage from '../ProductImage/ProductImage';

type Props = {
  product: IProduct;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="product-card">
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
  );
};

export default ProductCard;
