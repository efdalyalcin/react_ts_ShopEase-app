import Header from 'src/components/Header/Header';
import Recommended from 'src/components/Recommended/Recommended';
import './Home.scss';
import Catalog from 'src/components/Catalog/Catalog';

export default function Home() {
  return (
    <main className="home-page">
      <Header />
      <Catalog
        title="Consumer Electronics and Gadgets"
        category="electronics"
        imageUrl="src/assets/images/electronics.png"
      />
      <Catalog
        title="Men's Clothing"
        category="men's clothing"
        imageUrl="src/assets/images/mensClothingCategory.png"
      />
      <Recommended />
    </main>
  );
}
