import { ICartItem } from 'src/types/product.type';
import './CartCard.scss';
import { useProductsData } from 'src/hooks/useProductsData';
import findProductInCart from 'src/helpers/findProductInCart';
import { useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';

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

  if (!productItem) return null;

  return (
    <div className="CartCard">
      <ProductImage
        img={productItem.image}
        alt={productItem.title}
        height="40px"
        width="40px"
      />
    </div>
  );
}
