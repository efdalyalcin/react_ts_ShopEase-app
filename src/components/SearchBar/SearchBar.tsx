import { useCallback, useEffect, useState } from 'react';
import './SearchBar.scss';
import { Link } from 'react-router-dom';
import cn from 'classnames';

export default function SearchBar() {
  const [isSearchable, setIsSearchable] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  // this is a custom hook from the context
  // const { searchInput, setSearchInput } = useSearchHandler();

  useEffect(() => {
    if (searchInput.length > 2) {
      setIsSearchable(true);
    } else {
      setIsSearchable(false);
    }
  }, [searchInput]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // this prevents the white space in the beginning
    const value = e.target.value.replace(/^\s+/, '');
    setSearchInput(value);
  };

  const handleSearchButton = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (!isSearchable) {
        e.preventDefault();
      }
    },
    [isSearchable]
  );

  return (
    <div className="SearchBar">
      <div className="SearchBar__bar">
        <div className="SearchBar__magnifier" />
        <input
          type="text"
          className="SearchBar__input"
          placeholder="Search"
          value={searchInput}
          onChange={handleInput}
        />
      </div>
      <select>
        <option>sdja</option>
        <option>sdjasdds</option>
      </select>
      <Link
        to="/react_ts-search-user-app/search"
        className={cn('SearchBar__button', {
          'SearchBar__button--disabled': !isSearchable,
        })}
        onClick={handleSearchButton}
      >
        Search
      </Link>
    </div>
  );
}
