import Header from 'src/components/Header/Header';
import './SearchPage.scss';
import SearchedProducts from 'src/components/SearchedProducts/SearchedProducts';

export default function SearchPage() {
  return (
    <main className="search-page">
      <Header />
      <SearchedProducts />
    </main>
  );
}
