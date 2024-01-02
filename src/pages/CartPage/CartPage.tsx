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
      {!productsInCart.length ? (
        <div style={{ textAlign: 'center' }}>
          There is nothing in your cart!
        </div>
      ) : (
        <section className="CartPage__section">
          <div className="CartPage__products">
            {productsInCart.map((cartItem) => (
              <CartCard key={cartItem.productId} cartItem={cartItem} />
            ))}
          </div>
          <CheckoutAndPayment />
        </section>
      )}
    </main>
  );
}
