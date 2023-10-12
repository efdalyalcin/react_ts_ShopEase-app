import './CatalogCard.scss';

type Props = {
  title: string;
};

const makeTwoWordsTitle = (title: string): string => {
  const wordsArr = title.split(' ');
  return `${wordsArr[0]} ${wordsArr[1]}`;
};

export default function CatalogCard({ title }: Props) {
  return (
    <div className="catalog-card">
      <p className="catalog-card__title">{makeTwoWordsTitle(title)}</p>
      <div className="catalog-card__image"></div>
    </div>
  );
}
