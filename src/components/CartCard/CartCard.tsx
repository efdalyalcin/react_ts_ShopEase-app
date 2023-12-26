import { ICartItem } from 'src/types/product.type';
import './CartCard.scss';
import { useProductsData } from 'src/hooks/useProductsData';
import { useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import { makeTwoDigitPricing } from 'src/helpers/makeTwoDigitPricing';

type Props = {
  cartItem: ICartItem;
};

export default function CartCard({ cartItem }: Props) {
  const { productId, quantity } = cartItem;

  // for this point the data is already fetched and cached
  const { data } = useProductsData();
  const productItem = useMemo(
    () => data?.find((product) => product.id === productId),
    [data, productId]
  );

  const digittedPricing = makeTwoDigitPricing(productItem?.price);

  if (!productItem) return null;

  return (
    <div className="CartCard">
      <ProductImage
        img={productItem.image}
        alt={productItem.title}
        height="80px"
        width="80px"
      />
      <div className="CartCard__info">
        <p className="CartCard__title">{productItem.title}</p>
        <p className="CartCard__description">{productItem.description}</p>
      </div>
      <div>
        <p>{`€ ${digittedPricing}`}</p>
      </div>
    </div>
  );
}
