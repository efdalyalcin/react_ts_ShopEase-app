import { ICartItem } from 'src/types/product.type';
import { create } from 'zustand';

interface ICart {
  productsInCart: ICartItem[];
  addProductToCart: (productId: number, quantity: number) => void;
  deleteProductFromCart: (productId: number) => void;
}

const useCart = create<ICart>()((set) => ({
  productsInCart: [],

  addProductToCart: (productId, quantity) =>
    set((state) => {
      // if product exists
      if (state.productsInCart.find((item) => item.productId === productId)) {
        const newState = state.productsInCart.map((item) => {
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

  deleteProductFromCart: (productId) =>
    set((state) => ({
      ...state,
      productsInCart: state.productsInCart.filter(
        (item) => item.productId !== productId
      ),
    })),
}));

export default useCart;
