import { useQuery } from 'react-query';
import { getProducts } from 'src/services/getProducts';
import { IProduct } from 'src/types/product.type';
import ProductCard from '../ProductCard/ProductCard';

export default function Recommended() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  if (isError) return <div>{`Error on the server: ${error}`}</div>;
  if (isLoading) return <div>Loading...</div>;

  console.log(data);
  return (
    <>
      {data ? (
        data?.map((product: IProduct) => {
          return <ProductCard product={product} key={product.id} />;
        })
      ) : (
        <div>"There is no data"</div>
      )}
    </>
  );
}
