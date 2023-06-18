import { useQuery } from 'react-query';
import { getProducts } from 'src/services/getProducts';
import { IProduct } from 'src/types/product.type';
import './ProductCard.scss';

type Props = {
  product: IProduct;
};

const ProductCard = ({ product }: Props) => {
  // const { isLoading, isError, data, error, refetch } = useQuery({
  //   queryKey: ['products'],
  //   queryFn: getProducts,
  // });

  return (
    <div className="card">
      <div className="card__image"></div>
      <p className="card__price">{product.price}</p>
      <p className="card__details">{product.description}</p>
    </div>
  );
};

export default ProductCard;
