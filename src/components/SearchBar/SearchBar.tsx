import { useCallback, useEffect, useState } from 'react';
import './SearchBar.scss';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { useQuery } from 'react-query';
import { getCategories } from 'src/services/getCategories';
import { nanoid } from 'nanoid';

export default function SearchBar() {
  const [isSearchable, setIsSearchable] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  // put all categories in the begining of data, find a way
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

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

  if (isError) return <div>{`Error on the server: ${error}`}</div>;
  if (isLoading)
    return (
      <div className="loading">
        <h1 className="loading__text">Loading...</h1>
      </div>
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
        {data?.map((category) => {
          return <option key={nanoid()}>{category}</option>;
        })}
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
