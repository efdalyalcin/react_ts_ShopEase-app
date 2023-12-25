import { IProduct } from 'src/types/product.type';
import ProductCard from '../ProductCard/ProductCard';
import ScrollContainer from 'react-indiana-drag-scroll';
import './RecommendedSection.scss';
import ErrorPage from 'src/components/ErrorPage/ErrorPage';
import Loading from 'src/components/Loading/Loading';
import { useProductsData } from 'src/hooks/useProductsData';

export default function RecommendedSection() {
  const { isLoading, isError, data, error } = useProductsData();

  if (isError) return <ErrorPage error={error} />;
  if (isLoading) return <Loading />;

  return (
    <section className="Recommended">
      <h2 className="Recommended__text">Recommended items</h2>
      <ScrollContainer horizontal={false} className="Recommended__container">
        {data?.map((product: IProduct) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </ScrollContainer>
    </section>
  );
}
