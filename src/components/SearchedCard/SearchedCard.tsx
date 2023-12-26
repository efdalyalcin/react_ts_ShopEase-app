import './SearchedCard.scss';
import { IProduct } from 'src/types/product.type';
import ProductImage from '../ProductImage/ProductImage';
import { useState } from 'react';
import findProductInCart from 'src/helpers/findProductInCart';
import useItemAmount from 'src/hooks/useItemAmount';
import useCart from 'src/store/cartStore';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import { makeTwoDigitPricing } from 'src/helpers/makeTwoDigitPricing';

type Props = {
  product: IProduct;
};

export default function SearchedCard({ product }: Props) {
  const { productsInCart } = useCart();
  const [amount, setAmount] = useState<number>(
    findProductInCart(product.id, productsInCart)?.quantity || 0
  );

  // decrease & increase from custom hook
  const decreaseAmount = useItemAmount({
    product,
    amount,
    setAmount,
    type: 'dec',
  });
  const increaseAmount = useItemAmount({
    product,
    amount,
    setAmount,
    type: 'inc',
  });
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
        <AddToCartButton
          amount={amount}
          decreaseAmount={decreaseAmount}
          increaseAmount={increaseAmount}
        />
      </div>
    </div>
  );
}
