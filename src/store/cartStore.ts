import { ICartItem } from 'src/types/product.type';
import { create } from 'zustand';

interface ICart {
  productsInCart: ICartItem[];
  addOrRemoveProductItem: (productId: number, quantity: number) => void;
  clearProductFromCart: (productId: number) => void;
}

const useCart = create<ICart>()((set) => ({
  productsInCart: [],

  addOrRemoveProductItem: (productId, quantity) =>
    set((state) => {
      // this is if we remove the product completely
      if (quantity === 0) {
        const newState = state.productsInCart.filter(
          (item) => item.productId !== productId
        );
        return { ...state, productsInCart: [...newState] };
      }

      // if product exists and the quantity is not 0, this modifies the quantity
      if (state.productsInCart.find((item) => item.productId === productId)) {
        const newState = state.productsInCart.map((item) => {
          // this only changes the product with desired id
          if (item.productId === productId) {
            return { ...item, quantity };
          }
          return item;
        });

        return { ...state, productsInCart: [...newState] };
      }

      // doesn't exist in the cart
      return {
        ...state,
        productsInCart: [...state.productsInCart, { productId, quantity }],
      };
    }),

  clearProductFromCart: (productId) =>
    set((state) => ({
      ...state,
      productsInCart: state.productsInCart.filter(
        (item) => item.productId !== productId
      ),
    })),
}));

export default useCart;
