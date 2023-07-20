import { useQuery } from 'react-query';
import { getProducts } from 'src/services/getProducts';
import { IProduct } from 'src/types/product.type';
import ProductCard from '../ProductCard/ProductCard';
import './Recommended.scss';

export default function Recommended() {
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  if (isError) return <div>{`Error on the server: ${error}`}</div>;
  if (isLoading)
    return (
      <div className="loading">
        <h1 className="loading__text">Loading...</h1>
      </div>
    );

  return (
    <section>
      {data ? (
        <div className="recommended-container">
          {data?.map((product: IProduct) => {
            return <ProductCard product={product} key={product.id} />;
          })}
        </div>
      ) : (
        <div>"There is no data"</div>
      )}
    </section>
  );
}
