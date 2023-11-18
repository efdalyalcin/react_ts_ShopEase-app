import './SearchedCard.scss';
import { IProduct } from 'src/types/product.type';
import ProductImage from '../ProductImage/ProductImage';

type Props = {
  product: IProduct;
};

const makeTwoDigitPricing = (price: string | number): string => {
  const priceStr = typeof price === 'number' ? price.toFixed(2) : String(price);

  if (priceStr.includes('.')) return priceStr;
  return `${priceStr}.00`;
};

export default function SearchedCard({ product }: Props) {
  const digitedPricing = makeTwoDigitPricing(product.price);

  return (
    <div className="SearchedCard">
      <div className="SearchedCard__image">
        <ProductImage
          img={product.image}
          alt={`${product.image} showcase`}
          height="184px"
          width="184px"
        />
      </div>
      <div className="SearchedCard__details">
        <h4 className="SearchedCard__title">{product.title}</h4>
        <p className="SearchedCard__price">{`€ ${digitedPricing}`}</p>
        <p className="SearchedCard__desc">{product.description}</p>
      </div>
    </div>
  );
}
