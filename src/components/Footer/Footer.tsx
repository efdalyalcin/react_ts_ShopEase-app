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
        <div className="Footer__info-contact">
          <p>
            <span className="Footer__bold">Address: </span>Allianz Arena <br />
            Werner-Heisenberg-Allee 25, 80939 München
          </p>
          <p>
            <span className="Footer__bold">email: </span>
            <a href="mailto:yalcinefdal@gmail.com">yalcinefdal@gmail.com</a>
          </p>
        </div>
        <div className="Footer__info-iframe">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1521.5525181277883!2d11.623246985025137!3d48.21869823709584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e7385128a251f%3A0xed4d60428e32c423!2sAllianz%20Arena!5e0!3m2!1sen!2sde!4v1704487077092!5m2!1sen!2sde"
            width="100%"
            height="100%"
            // style="border:0;"
            // webkitallowfullscreen
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="Footer__copyright">© 2024 ShopEase</div>
    </footer>
  );
}
