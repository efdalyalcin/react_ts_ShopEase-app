import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { IProduct } from 'src/types/product.type';

export const getProductById = (id: number) => {
  return new Promise<IProduct>((resolve, reject) => {
    axios
      .get(`${BASE_URL}/products/${id}`)
      .then((res) => resolve(res.data))
      .catch((error) => reject(error));
  });
};
