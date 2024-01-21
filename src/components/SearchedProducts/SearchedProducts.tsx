import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSingleCategory } from 'src/services/getSingleCategory';
import useSelectedCategory from 'src/store/selectedCategoryStore';
import { IProduct } from 'src/types/product.type';
import SearchedCard from '../SearchedCard/SearchedCard';
import { useQuery } from '@tanstack/react-query';

import './SearchedProducts.scss';
import ErrorPage from 'src/components/ErrorPage/ErrorPage';
import Loading from 'src/components/Loading/Loading';

export default function SearchedProducts() {
  const { selectedCategory } = useSelectedCategory();
  const [searchParams] = useSearchParams();

  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: [`${selectedCategory}-products`],
    queryFn: () => getSingleCategory(selectedCategory),
  });

  const [filteredProducts, setFilteredProducts] = useState<
    IProduct[] | undefined
  >(data);

  useEffect(() => {
    // try this one
    // const paramQuery = new URLSearchParams(searchParams.get('query'));
    const paramQuery = searchParams.get('query');

    if (paramQuery && data) {
      const filteredData = data.filter((product) =>
        product.title.toLowerCase().includes(paramQuery.toLowerCase())
      );
      setFilteredProducts([...filteredData]);
    }

    if (!paramQuery && data) {
      setFilteredProducts([...data]);
    }

    if (!paramQuery && !data?.length) {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get('query'), selectedCategory, data]);

  //#region error and loading handling
  if (isError) return <ErrorPage error={error} />;
  if (isLoading) return <Loading />;
  //#endregion

  return (
    <div className="SearchedProducts">
      {filteredProducts?.map((product) => (
        <SearchedCard key={product.id} product={product} />
      ))}
    </div>
  );
}
