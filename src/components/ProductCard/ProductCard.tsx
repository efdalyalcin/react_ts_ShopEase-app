import { IProduct } from 'src/types/product.type';
import './ProductCard.scss';
import ProductImage from '../ProductImage/ProductImage';

type Props = {
  product: IProduct;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="card">
      <div className="card__image">
        <ProductImage
          img={product.image}
          alt={product.title}
          height="200px"
          width="200px"
        />
      </div>
      <p className="card__price">{product.price}</p>
      <p className="card__details">{product.description}</p>
    </div>
  );
};

export default ProductCard;
