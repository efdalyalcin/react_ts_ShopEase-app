import './CatalogCard.scss';

type Props = {
  title: string;
  img: string;
};

const makeTwoWordsTitle = (title: string): string => {
  const wordsArr = title.split(' ');
  return `${wordsArr[0]} ${wordsArr[1]}`;
};

export default function CatalogCard({ title, img }: Props) {
  return (
    <div className="catalog-card">
      <div className="catalog-card__info">
        <p className="catalog-card__title">{makeTwoWordsTitle(title)}</p>
        <p className="catalog-card__price">{}</p>
      </div>
      <div className="catalog-card__image-wrapper">
        <img src={img} alt={`${title}`} className="catalog-card__image" />
      </div>
    </div>
  );
}
