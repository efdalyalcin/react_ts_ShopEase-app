import axios from 'axios';
import { BASE_URL } from './urls';

export const getCategories = (category: string) => {
  return new Promise<string[]>((resolve, reject) => {
    axios
      .get(`${BASE_URL}/products/category/${category}`)
      .then((res) => resolve(res.data))
      .catch((error) => reject(error));
  });
};
