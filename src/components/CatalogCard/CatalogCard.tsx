import React from 'react';
import './CatalogCard.scss';
import { Link } from 'react-router-dom';

const makeTwoWordsTitle = (title: string): string => {
  const wordsArr = title.split(' ');
  if (wordsArr.length === 1) return wordsArr[0];
  if (wordsArr[1].length < 3)
    return `${wordsArr[0]} ${wordsArr[1]} ${wordsArr[2]}`;
  return `${wordsArr[0]} ${wordsArr[1]}`;
};

type Props = {
  title: string;
  img: string;
  price: string;
};

const CatalogCard: React.FC<Props> = React.memo(
  ({ title, img, price }: Props) => {
    return (
      <Link to="/search" className="catalog-card">
        <div className="catalog-card__info">
          <p className="catalog-card__title">{makeTwoWordsTitle(title)}</p>
          <p className="catalog-card__price">
            From <br />
            {`${price} EURO`}
          </p>
        </div>
        <div className="catalog-card__image-wrapper">
          <img src={img} alt={`${title}`} className="catalog-card__image" />
        </div>
      </Link>
    );
  }
);

export default CatalogCard;
