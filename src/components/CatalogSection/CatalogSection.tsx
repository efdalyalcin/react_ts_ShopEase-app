import { useQuery } from '@tanstack/react-query';
import CatalogCard from 'src/components/CatalogCard/CatalogCard';
import './CatalogSection.scss';
import { getSingleCategory } from 'src/services/getSingleCategory';
import Loading from 'src/components/Loading/Loading';
import ErrorPage from 'src/components/ErrorPage/ErrorPage';

type Props = {
  title: string;
  category: string;
  imageUrl: string;
};

export default function CatalogSection({ title, category, imageUrl }: Props) {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: [`${category}-products`],
    queryFn: () => getSingleCategory(category),
  });

  if (isError) return <ErrorPage error={error} />;
  if (isLoading) return <Loading />;

  return (
    <section className="section Catalog-section">
      <div className="Catalog">
        <div className="Catalog__banner">
          <img
            src={imageUrl}
            alt={`${title} related image`}
            className="Catalog__banner-image"
          />
          <h3 className="Catalog__banner-title">{title}</h3>
        </div>
        <div className="Catalog__cards">
          {data?.map((product) => (
            <CatalogCard
              key={product.id}
              title={product.title}
              img={product.image}
              price={product.price}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
