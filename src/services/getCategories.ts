import axios from 'axios';
import { BASE_URL } from '../constants/urls';

export const getCategories = () => {
  return new Promise<string[]>((resolve, reject) => {
    axios
      .get(`${BASE_URL}/products/categories`)
      .then((res) => resolve(res.data))
      .catch((error) => reject(error));
  });
};
