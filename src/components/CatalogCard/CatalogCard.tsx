import './CatalogCard.scss';

type Props = {
  title: string;
};

export default function CatalogCard({ title }: Props) {
  return (
    <div className="catalog-card">
      <p className="catalog-card__title">{title}</p>
      <div className="catalog-card__image"></div>
    </div>
  );
}
