import axios from 'axios';
import { BASE_URL } from './urls';
import { IProduct } from 'src/types/product.type';

export const getSingleCategory = (category: string) => {
  return new Promise<IProduct[]>((resolve, reject) => {
    axios
      .get(`${BASE_URL}/products/category/${category}`)
      .then((res) => resolve(res.data))
      .catch((error) => reject(error));
  });
};
