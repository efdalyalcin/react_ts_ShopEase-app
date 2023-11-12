import Header from 'src/components/Header/Header';
import './SearchPage.scss';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useSearchQuery from 'src/store/searchQueryStore';

export default function SearchPage() {
  const { searchQuery, clearSearchQuery } = useSearchQuery();
  const [searchParams, setSearchParams] = useSearchParams({
    query: searchQuery,
  });

  // searchParams initial render query
  useEffect(() => {
    setSearchParams({ query: searchQuery });
    // clear the search bar
    clearSearchQuery();
  }, []);

  return (
    <main className="search-page">
      <Header />
    </main>
  );
}
