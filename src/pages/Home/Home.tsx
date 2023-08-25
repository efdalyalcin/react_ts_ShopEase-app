import Header from 'src/components/Header/Header';
import Recommended from 'src/components/Recommended/Recommended';
import './Home.scss';
import Catalog from 'src/components/Catalog/Catalog';

export default function Home() {
  return (
    <section className="home-page">
      <Header />
      <Catalog
        title={'Consumer Electronics and Gadgets'}
        category={'electronics'}
        imageUrl="src/assets/images/electronics.png"
      />
      <Recommended />
    </section>
  );
}
