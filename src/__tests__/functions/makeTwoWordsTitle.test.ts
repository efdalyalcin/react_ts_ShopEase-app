import { makeTwoWordsTitle } from 'src/components/CatalogCard/CatalogCard';
import { expect, test } from 'vitest';

test('should return a string with the first two words separated by a space', () => {
  const title = 'Three word title';
  const result = makeTwoWordsTitle(title);
  expect(result).toBe('Three word');
});

test('should return an empty string when the input is an empty string', () => {
  const title = '';
  const result = makeTwoWordsTitle(title);
  expect(result).toBe('');
});
