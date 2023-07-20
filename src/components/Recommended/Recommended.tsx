import { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { getProducts } from 'src/services/getProducts';
import { IProduct } from 'src/types/product.type';
import ProductCard from '../ProductCard/ProductCard';
import ScrollContainer from 'react-indiana-drag-scroll';
import './Recommended.scss';

export default function Recommended() {
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  if (isError) return <div>{`Error on the server: ${error}`}</div>;
  if (isLoading)
    return (
      <div className="loading">
        <h1 className="loading__text">Loading...</h1>
      </div>
    );

  return (
    <section className="recommended">
      <h2 className="recommended__text">Recommended items</h2>
      <ScrollContainer horizontal={false} className="recommended__container">
        {data?.map((product: IProduct) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </ScrollContainer>
    </section>
  );
}
