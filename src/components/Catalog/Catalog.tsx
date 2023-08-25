import CatalogCard from '../CatalogCard/CatalogCard';
import './Catalog.scss';

type Props = {
  title: string;
  category: string;
  imageUrl: string;
};

export default function Catalog({ title, category, imageUrl }: Props) {
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
          <CatalogCard />
        </div>
      </div>
    </section>
  );
}
