import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { getSingleCategory } from 'src/services/getSingleCategory';
import useSelectedCategory from 'src/store/selectedCategoryStore';
import { IProduct } from 'src/types/product.type';
import SearchedCard from '../SearchedCard/SearchedCard';

export default function SearchedProducts() {
  const { selectedCategory } = useSelectedCategory();
  const [searchParams] = useSearchParams();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: [`${selectedCategory}-products`],
    queryFn: () => getSingleCategory(selectedCategory),
  });

  const [filteredProducts, setFilteredProducts] = useState<
    IProduct[] | undefined
  >(data);

  useEffect(() => {
    const paramQuery = searchParams.get('query');
    if (paramQuery && data) {
      const filteredProducts = data.filter((product) =>
        product.title.toLowerCase().includes(paramQuery.toLowerCase())
      );
      setFilteredProducts([...filteredProducts]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get('query'), selectedCategory, data]);

  //#region error and loading handling
  if (isError) return <div>{`Error on the server: ${error}`}</div>;
  if (isLoading) {
    return (
      <div className="loading">
        <h1 className="loading__text">Loading...</h1>
      </div>
    );
  }
  //#endregion

  return (
    <div>
      {filteredProducts?.map((product) => (
        <SearchedCard key={product.id} product={product} />
      ))}
    </div>
  );
}
