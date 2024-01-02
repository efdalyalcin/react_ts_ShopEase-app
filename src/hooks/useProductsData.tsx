import { useQuery } from '@tanstack/react-query';
import { getProducts } from 'src/services/getProducts';

export const useProductsData = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
};
