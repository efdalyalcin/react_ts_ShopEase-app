import React from 'react';
import './SearchedCard.scss';
import { IProduct } from 'src/types/product.type';
import ProductImage from '../ProductImage/ProductImage';

type Props = {
  product: IProduct;
};

export default function SearchedCard({ product }: Props) {
  return (
    <div className="SearchedCard">
      <ProductImage
        img={product.image}
        alt={`${product.image} showcase`}
        height="184px"
        width="184px"
      />
      <div className="SearchedCard__details">
        <h4>{product.title}</h4>
        <p>{product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
