import CartCard from 'src/components/CartCard/CartCard';
import './CartPage.scss';
import Header from 'src/components/Header/Header';
import useCart from 'src/store/cartStore';

export default function CartPage() {
  const { productsInCart } = useCart();

  return (
    <main>
      <Header />
      <div>
        {productsInCart.map((product) => (
          <CartCard key={product.productId} cartItem={product} />
        ))}
      </div>
    </main>
  );
}
