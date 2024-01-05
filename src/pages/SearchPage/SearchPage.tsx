import Footer from 'src/components/Footer/Footer';
import Header from 'src/components/Header/Header';
import SearchedProducts from 'src/components/SearchedProducts/SearchedProducts';
import './SearchPage.scss';

export default function SearchPage() {
  return (
    <main className="SearchPage">
      <Header />
      <SearchedProducts />
      <Footer />
    </main>
  );
}
