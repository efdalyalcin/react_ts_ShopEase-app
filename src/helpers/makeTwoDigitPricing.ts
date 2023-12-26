export const makeTwoDigitPricing = (
  price: string | number | undefined
): string => {
  if (typeof price === 'undefined') return '0.00';
  const priceStr = typeof price === 'number' ? price.toFixed(2) : String(price);

  if (priceStr.includes('.')) return priceStr;
  return `${priceStr}.00`;
};
