import './Header.scss';
import SearchBar from '../SearchBar/SearchBar';

export default function Header() {
  return (
    <header className="header">
      <div>Brand</div>
      <SearchBar />
      <div className="nav-controls">
        <div className="nav-controls__item">
          <img src="/src/assets/icons/account_circle.svg" alt="Account" />
          <p className="nav-controls__title">Profile</p>
        </div>
        <div className="nav-controls__item">
          <img src="/src/assets/icons/favorite.svg" alt="Orders" />
          <p className="nav-controls__title">Orders</p>
        </div>
        <div className="nav-controls__item">
          <img src="/src/assets/icons/shopping_cart.svg" alt="Cart" />
          <p className="nav-controls__title">My&nbsp;Cart</p>
        </div>
      </div>
    </header>
  );
}
