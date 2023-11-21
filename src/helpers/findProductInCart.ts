import { ICartItem } from 'src/types/product.type';

export default function findProductInCart(
  productId: number,
  cart: ICartItem[]
): ICartItem | undefined {
  const item = cart.find((product) => product.productId === productId);

  return item;
}
