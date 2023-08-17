import Header from 'src/components/Header/Header';
import Recommended from 'src/components/Recommended/Recommended';
import './Home.scss';

export default function Home() {
  return (
    <section className="home-page">
      <Header />
      <Recommended />
    </section>
  );
}
