import { useCallback, useEffect, useState } from 'react';
import './SearchBar.scss';
import { Link, useSearchParams } from 'react-router-dom';
import { getCategories } from 'src/services/getCategories';
import { useQuery } from 'react-query';
import HorizontalDraggableButtons from '../HorizontalDraggableButtons/HorizontalDraggableButtons';
import useSelectedCategory from 'src/store/selectedCategoryStore';
import useSearchQuery from 'src/store/searchQueryStore';

export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useSearchQuery();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { selectedCategory, setSelectedCategory } = useSelectedCategory();

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

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    // this prevents the white space in the beginning
    const value = e.target.value.replace(/^\s+/, '');
    setSearchQuery(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCategoriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleCategoriesByButtons = (
    e: React.ChangeEvent<HTMLButtonElement>
  ) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearchButton = () => {
    setSearchParams({ query: searchQuery });
  };

  const handleEnterOnSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') setSearchParams({ query: searchQuery });
  };

  //#region error and loading handling
  if (isError) return <div>{`Error on the server: ${error}`}</div>;
  if (isLoading) {
    return (
      <div className="loading">
        <h1 className="loading__text">Loading...</h1>
      </div>
    );
  }
  //#endregion

  return (
    <div className="SearchBar">
      <div className="SearchBar__bar">
        <div className="SearchBar__magnifier" />
        <input
          type="text"
          className="SearchBar__input"
          placeholder="Search"
          value={searchQuery}
          onChange={handleInput}
          onKeyDown={handleEnterOnSearch}
        />
      </div>
      {
        // #region Categories Selection
        windowWidth > 734 ? (
          <select
            onChange={handleCategoriesChange}
            className="SearchBar__select"
            defaultValue={selectedCategory}
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
            handleClick={handleCategoriesByButtons}
            selected={selectedCategory}
          />
        )
        // #endregion
      }
      <Link
        to="/search"
        className="SearchBar__button"
        onClick={handleSearchButton}
      >
        Search
      </Link>
    </div>
  );
}
