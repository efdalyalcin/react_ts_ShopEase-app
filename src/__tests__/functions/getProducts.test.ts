import axios from 'axios';
import { getProducts } from 'src/services/getProducts';
import { describe, expect, it, vi } from 'vitest';

describe('getProducts', () => {
  it('should return a promise that resolves to an array of products when successful', () => {
    // Mock axios.get to return a resolved promise with mock data
    vi.spyOn(axios, 'get').mockResolvedValue({
      data: [
        {
          id: 1,
          title: 'Product 1',
          price: '10',
          category: 'Category 1',
          description: 'Description 1',
          image: 'image1.jpg',
        },
      ],
    });

    // Call the getProducts function and see the result is a promise
    const result = getProducts();
    expect(result).toBeInstanceOf(Promise);

    // Assert that the promise resolves to an array of products
    return expect(result).resolves.toEqual([
      {
        id: 1,
        title: 'Product 1',
        price: '10',
        category: 'Category 1',
        description: 'Description 1',
        image: 'image1.jpg',
      },
    ]);
  });
});
