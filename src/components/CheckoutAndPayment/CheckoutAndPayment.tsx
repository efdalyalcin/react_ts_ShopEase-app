import { useProductsData } from 'src/hooks/useProductsData';
import './CheckoutAndPayment.scss';
import useCart from 'src/store/cartStore';
import { useEffect, useState } from 'react';

export default function CheckoutAndPayment() {
  const [totalPrice, setTotalPrice] = useState(0);

  const { productsInCart } = useCart();
  const { data } = useProductsData();

  useEffect(() => {
    productsInCart.forEach((cartItem) => {
      const item = data?.find((product) => product.id === cartItem.productId);
      if (item) {
        const itemTotalPrice = Number(item.price) * cartItem.quantity;
        setTotalPrice((prev) => prev + itemTotalPrice);
      }
    });
  }, [productsInCart, data]);

  console.log(totalPrice);

  return <div>CheckoutAndPayment</div>;
}
