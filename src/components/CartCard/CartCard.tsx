import { ICartItem } from 'src/types/product.type';
import './CartCard.scss';
import { useProductsData } from 'src/hooks/useProductsData';
import { useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import { makeTwoDigitPricing } from 'src/helpers/makeTwoDigitPricing';
import useCart from 'src/store/cartStore';

type Props = {
  cartItem: ICartItem;
};

const quantityArray = [...Array(21).keys()];

export default function CartCard({ cartItem }: Props) {
  const { productId, quantity } = cartItem;
  const { addOrRemoveProductItem } = useCart();

  // for this point the data is already fetched and cached
  const { data } = useProductsData();
  const productItem = useMemo(
    () => data?.find((product) => product.id === productId),
    [data, productId]
  );

  const digittedPricing = makeTwoDigitPricing(productItem?.price);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    addOrRemoveProductItem(productId, Number(e.target.value));
  };

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
      <div className="CartCard__price-info">
        <p className="CartCard__price">{`€ ${digittedPricing}`}</p>
        <div className="CartCard__quantity">
          <p>Qty: </p>
          <select
            defaultValue={quantity}
            onChange={handleQuantityChange}
            className="CartCard__select"
          >
            {quantityArray.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
