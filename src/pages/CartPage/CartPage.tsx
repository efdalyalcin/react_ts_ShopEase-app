import CartCard from 'src/components/CartCard/CartCard';
import './CartPage.scss';
import Header from 'src/components/Header/Header';
import useCart from 'src/store/cartStore';

export default function CartPage() {
  const { productsInCart } = useCart();

  return (
    <main className="CartPage">
      <Header />
      {productsInCart.length ? null : <div>There is nothing in your cart!</div>}
      <div className="CartPage__products">
        {productsInCart.map((product) => (
          <CartCard key={product.productId} cartItem={product} />
        ))}
      </div>
    </main>
  );
}
