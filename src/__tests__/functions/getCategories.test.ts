import axios from 'axios';
import { getCategories } from 'src/services/getCategories';
import { BASE_URL } from 'src/constants/urls';
import { describe, expect, it, vi } from 'vitest';

describe('getCategories', () => {
  it('should return a promise that resolves to an array of strings', () => {
    return getCategories().then((categories) => {
      expect(Array.isArray(categories)).toBe(true);
      expect(categories.every((category) => typeof category === 'string')).toBe(
        true
      );
    });
  });

  it('should make a GET request to the correct endpoint', () => {
    const axiosGetSpy = vi.spyOn(axios, 'get');
    getCategories();
    expect(axiosGetSpy).toHaveBeenCalledWith(`${BASE_URL}/products/categories`);
    axiosGetSpy.mockRestore();
  });
});
