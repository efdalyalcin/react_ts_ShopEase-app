import { useCallback, useEffect, useState } from 'react';
import './SearchBar.scss';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { getCategories } from 'src/services/getCategories';
import { useQuery } from 'react-query';
import HorizontalDraggableButtons from '../HorizontalDraggableButtons/HorizontalDraggableButtons';

export default function SearchBar() {
  const [isSearchable, setIsSearchable] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all categories');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['category'],
    queryFn: getCategories,
  });

  // #region window width
  useEffect(() => {
    const handleWidthResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWidthResize);

    return () => {
      window.removeEventListener('resize', handleWidthResize);
    };
  }, []);
  // #endregion

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

  const handleCategoriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearchButton = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      if (!isSearchable) {
        e.preventDefault();
      }
    },
    [isSearchable]
  );

  // if (isError) return <div>{`Error on the server: ${error}`}</div>;
  // if (isLoading)
  //   return (
  //     <div className="loading">
  //       <h1 className="loading__text">Loading...</h1>
  //     </div>
  //   );

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
      {
        // #region Categories Selection
        windowWidth > 734 ? (
          <select
            onChange={(e) => handleCategoriesChange(e)}
            className="SearchBar__select"
          >
            <option key={'allCategories'} value={'all categories'}>
              ALL CATEGORIES
            </option>
            {data?.map((category, i) => {
              return (
                <option key={`${i}.${category}`} value={category}>
                  {category.toUpperCase()}
                </option>
              );
            })}
          </select>
        ) : (
          <HorizontalDraggableButtons
            data={data}
            additionalFirstButton="all categories"
            additionalLastButton=""
            gridArea="2 / 1 / 2 / -1"
          />
        )
        // #endregion
      }
      <Link
        to="/search"
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
