import CatalogCard from '../CatalogCard/CatalogCard';
import './Catalog.scss';

type Props = {
  title: string;
  category: string;
  imageUrl: string;
};

export default function Catalog({ title, category, imageUrl }: Props) {
  return (
    <section className="catalog">
      <div className="catalog__banner">
        <img src={imageUrl} alt={`${title} related image`} />
        <h3>{title}</h3>
      </div>
      <div className="catalog__cards">
        <CatalogCard />
      </div>
    </section>
  );
}
