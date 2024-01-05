import Header from 'src/components/Header/Header';
import RecommendedSection from 'src/components/RecommendedSection/RecommendedSection';
import './Home.scss';
import CatalogSection from 'src/components/CatalogSection/CatalogSection';
import Footer from 'src/components/Footer/Footer';

export default function Home() {
  return (
    <main className="Home">
      <Header />
      <CatalogSection
        title="Consumer Electronics and Gadgets"
        category="electronics"
        imageUrl="src/assets/images/electronics.png"
      />
      <CatalogSection
        title="Men's Clothing"
        category="men's clothing"
        imageUrl="src/assets/images/mensClothingCategory.png"
      />
      <RecommendedSection />
      <Footer />
    </main>
  );
}
