import axios from 'axios';
import { BASE_URL } from './urls';
import { IProduct } from 'src/types/product.type';
import { getProducts } from './getProducts';

export const getSingleCategory = (category: string) => {
  if (category === 'all categories') {
    return getProducts();
  }

  return new Promise<IProduct[]>((resolve, reject) => {
    axios
      .get(`${BASE_URL}/products/category/${category}`)
      .then((res) => resolve(res.data))
      .catch((error) => reject(error));
  });
};
