import { useQuery } from 'react-query';
import { getProducts } from 'src/services/getProducts';

export default function ProductCard() {
  const { isLoading, isError, data, error, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  console.log('data', data);
  return <div>ProductCard</div>;
}
