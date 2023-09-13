import { useQuery } from 'react-query';
import CatalogCard from '../CatalogCard/CatalogCard';
import './Catalog.scss';
import { getSingleCategory } from 'src/services/getSingleCategory';

type Props = {
  title: string;
  category: string;
  imageUrl: string;
};

export default function Catalog({ title, category, imageUrl }: Props) {
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: [`${category}-products`],
    queryFn: () => getSingleCategory(category),
  });

  if (isError) return <div>{`Error on the server: ${error}`}</div>;
  if (isLoading) {
    return (
      <div className="loading">
        <h1 className="loading__text">Loading...</h1>
      </div>
    );
  }

  return (
    <section className="section catalog-section">
      <div className="catalog">
        <div className="catalog__banner">
          <img
            src={imageUrl}
            alt={`${title} related image`}
            className="catalog__banner-image"
          />
          <h3 className="catalog__banner-title">{title}</h3>
        </div>
        <div className="catalog__cards">
          {data?.map((product) => (
            <CatalogCard key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
