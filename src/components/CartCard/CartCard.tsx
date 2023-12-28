import './CartCard.scss';
import { useQuery } from '@tanstack/react-query';
import { ICartItem } from 'src/types/product.type';
import ProductImage from '../ProductImage/ProductImage';
import { makeTwoDigitPricing } from 'src/helpers/makeTwoDigitPricing';
import useCart from 'src/store/cartStore';
import { getProductById } from 'src/services/getProductById';
import ErrorPage from '../ErrorPage/ErrorPage';
import Loading from '../Loading/Loading';

type Props = {
  cartItem: ICartItem;
};

const quantityArray = [...Array(21).keys()];

export default function CartCard({ cartItem }: Props) {
  const { productId, quantity } = cartItem;
  const { addOrRemoveProductItem } = useCart();

  const { isError, isLoading, error, data } = useQuery({
    queryKey: [`product-${productId}`],
    queryFn: () => getProductById(productId),
  });

  if (isError) return <ErrorPage error={error} />;
  if (isLoading) return <Loading />;

  const digittedPricing = makeTwoDigitPricing(data?.price);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    addOrRemoveProductItem(productId, Number(e.target.value));
  };

  if (!data) return null;

  return (
    <div className="CartCard">
      <ProductImage
        img={data.image}
        alt={data.title}
        height="80px"
        width="80px"
      />
      <div className="CartCard__info">
        <p className="CartCard__title">{data.title}</p>
        <p className="CartCard__description">{data.description}</p>
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
