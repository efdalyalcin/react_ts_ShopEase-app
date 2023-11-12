import './Header.scss';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img
            className="header__logo-image"
            src="src/assets/icons/brand_name.png"
            alt="shopEase brand logo"
          />
        </Link>
      </div>
      <div className="header__bar">
        <SearchBar />
      </div>
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
