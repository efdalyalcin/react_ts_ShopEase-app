import { useCallback, useEffect, useState } from 'react';
import './SearchBar.scss';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { getCategories } from 'src/services/getCategories';
import { useQuery } from '@tanstack/react-query';
import HorizontalDraggableButtons from 'src/components/HorizontalDraggableButtons/HorizontalDraggableButtons';
import useSelectedCategory from 'src/store/selectedCategoryStore';
import useSearchQuery from 'src/store/searchQueryStore';
import throttle from 'src/helpers/throttle';
import {
  initialCategoryKey,
  initialCategoryValue,
} from 'src/constants/categories';
import ErrorPage from 'src/components/ErrorPage/ErrorPage';
import Loading from 'src/components/Loading/Loading';

export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useSearchQuery();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

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

    const throttledHandler = throttle(handleWidthResize, 300);
    window.addEventListener('resize', throttledHandler);

    return () => {
      window.removeEventListener('resize', throttledHandler);
    };
  }, []);
  // #endregion

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // this prevents the white space in the beginning
      const value = e.target.value.replace(/^\s+/, '');
      setSearchQuery(value);
    },
    [setSearchQuery]
  );

  const handleCategoriesChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLButtonElement>
  ) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearchButton = () => {
    setSearchParams({ query: searchQuery });
  };

  const handleEnterOnSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchQuery
        ? navigate(`/search?query=${searchQuery}`)
        : navigate('/search');
    }
  };

  //#region error and loading handling
  if (isError) return <ErrorPage error={error} />;
  if (isLoading) return <Loading />;
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
            <option key={initialCategoryKey} value={initialCategoryValue}>
              {initialCategoryValue.toUpperCase()}
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
            additionalFirstButton={initialCategoryValue}
            gridArea="2 / 1 / 2 / -1"
            handleClick={handleCategoriesChange}
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
