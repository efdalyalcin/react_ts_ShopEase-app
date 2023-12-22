import './Header.scss';
import SearchBar from '../SearchBar/SearchBar';
import { Link, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import useSearchQuery from 'src/store/searchQueryStore';
import useSelectedCategory from 'src/store/selectedCategoryStore';
import useCart from 'src/store/cartStore';

export default function Header() {
  const { searchQuery, clearSearchQuery } = useSearchQuery();
  const [searchParams, setSearchParams] = useSearchParams();
  const { selectedCategory, setSelectedCategory } = useSelectedCategory();
  const { productsInCart } = useCart();

  // searchParams url change when query changes
  useEffect(() => {
    if (searchQuery) setSearchParams({ query: searchQuery });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get('query')]);

  const handleHomeIconClick = () => {
    clearSearchQuery();
    if (selectedCategory !== 'allCategories') {
      setSelectedCategory('allCategories');
    }
  };

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/" onClick={handleHomeIconClick}>
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
        <Link to="/coming-soon" className="nav-controls__item">
          <img src="/src/assets/icons/account_circle.svg" alt="Account" />
          <p className="nav-controls__title">Profile</p>
        </Link>
        <Link to="/coming-soon" className="nav-controls__item">
          <img src="/src/assets/icons/favorite.svg" alt="Orders" />
          <p className="nav-controls__title">Orders</p>
        </Link>
        <Link to="/coming-soon" className="nav-controls__item">
          {productsInCart.length ? (
            <img src="/src/assets/icons/shopping_cart_full.svg" alt="Cart" />
          ) : (
            <img src="/src/assets/icons/shopping_cart.svg" alt="Cart" />
          )}

          <p className="nav-controls__title">My&nbsp;Cart</p>
        </Link>
      </div>
    </header>
  );
}
