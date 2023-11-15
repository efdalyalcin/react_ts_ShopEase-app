import './Header.scss';
import SearchBar from '../SearchBar/SearchBar';
import { Link, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import useSearchQuery from 'src/store/searchQueryStore';

export default function Header() {
  const { searchQuery, clearSearchQuery } = useSearchQuery();
  const [_searchParams, setSearchParams] = useSearchParams({
    query: searchQuery,
  });

  // searchParams initial render query
  useEffect(() => {
    if (searchQuery) setSearchParams({ query: searchQuery });
  }, []);

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/" onClick={clearSearchQuery}>
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
