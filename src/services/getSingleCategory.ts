import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { IProduct } from 'src/types/product.type';
import { getProducts } from './getProducts';
import { initialCategoryKey } from 'src/constants/categories';

export const getSingleCategory = (category: string) => {
  if (category === initialCategoryKey) {
    return getProducts();
  }

  return new Promise<IProduct[]>((resolve, reject) => {
    axios
      .get(`${BASE_URL}/products/category/${category}`)
      .then((res) => resolve(res.data))
      .catch((error) => reject(error));
  });
};
