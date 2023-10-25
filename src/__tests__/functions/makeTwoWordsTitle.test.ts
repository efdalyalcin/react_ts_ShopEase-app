import { makeTwoWordsTitle } from 'src/components/CatalogCard/CatalogCard';
import { describe, it, expect } from 'vitest';

describe('mateTwoWordsTitle', () => {
  it('should return a string with the first two words separated by a space', () => {
    const title = 'Three word title';
    const result = makeTwoWordsTitle(title);
    expect(result).toBe('Three word');
  });

  it('should return an empty string when the input is an empty string', () => {
    const title = '';
    const result = makeTwoWordsTitle(title);
    expect(result).toBe('');
  });
});
