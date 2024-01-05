import './Footer.scss';
import ShopEaseLogo from 'src/assets/icons/brand_name.png';

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer__buffer" />
      <div className="Footer__info">
        <div className="Footer__info-brand">
          <img
            src={ShopEaseLogo}
            alt="ShopEase company logo"
            className="Footer__logo"
          />
          <p>ShopEase is the best dummy ecommerce website created!</p>
        </div>
        <div>contact info</div>
        <div>iframe</div>
      </div>
      <div className="Footer__copyright">© 2024 ShopEase</div>
    </footer>
  );
}
