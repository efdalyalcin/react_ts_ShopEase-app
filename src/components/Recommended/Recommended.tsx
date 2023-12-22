import { useQuery } from 'react-query';
import { getProducts } from 'src/services/getProducts';
import { IProduct } from 'src/types/product.type';
import ProductCard from '../ProductCard/ProductCard';
import ScrollContainer from 'react-indiana-drag-scroll';
import './Recommended.scss';
import ErrorPage from 'src/components/ErrorPage/ErrorPage';
import Loading from 'src/components/Loading/Loading';

export default function Recommended() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  if (isError) return <ErrorPage error={error} />;
  if (isLoading) return <Loading />;

  return (
    <section className="recommended">
      <h2 className="recommended__text">Recommended items</h2>
      <ScrollContainer horizontal={false} className="recommended__container">
        {data?.map((product: IProduct) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </ScrollContainer>
    </section>
  );
}
