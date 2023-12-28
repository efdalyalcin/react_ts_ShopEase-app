import CartCard from 'src/components/CartCard/CartCard';
import './CartPage.scss';
import Header from 'src/components/Header/Header';
import useCart from 'src/store/cartStore';
import CheckoutAndPayment from 'src/components/CheckoutAndPayment/CheckoutAndPayment';

export default function CartPage() {
  const { productsInCart } = useCart();

  return (
    <main className="CartPage">
      <Header />
      {productsInCart.length ? null : <div>There is nothing in your cart!</div>}
      <section className="CartPage__section">
        <div className="CartPage__products">
          {productsInCart.map((product) => (
            <CartCard key={product.productId} cartItem={product} />
          ))}
        </div>
        <CheckoutAndPayment />
      </section>
    </main>
  );
}
