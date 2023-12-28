import { useQueries } from '@tanstack/react-query';
import { useState } from 'react';
import useCart from 'src/store/cartStore';

export default function useCartPriceCalculation() {
  const [totalPrice, setTotalPrice] = useState(0);
  const { productsInCart } = useCart();

  // const {} = useQueries({})
}
