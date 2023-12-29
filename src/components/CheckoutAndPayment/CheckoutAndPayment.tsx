import { useProductsData } from 'src/hooks/useProductsData';
import './CheckoutAndPayment.scss';
import useCart from 'src/store/cartStore';
import { useEffect, useState } from 'react';
import { CURRENCY, TAX_PERCENT } from 'src/constants/pricing';
import { makeTwoDigitPricing } from 'src/helpers/makeTwoDigitPricing';

// logos
import AmexLogo from 'src/assets/images/Amex_Logo.png';
import MasterCardLogo from 'src/assets/images/Mastercard_Logo.png';
import PaypalLogo from 'src/assets/images/Paypal_Logo.png';
import VisaLogo from 'src/assets/images/Visa_Logo.png';
import ApplePayLogo from 'src/assets/images/ApplePay_Logo.png';
import { createPortal } from 'react-dom';
import CheckoutModal from '../CheckoutModal/CheckoutModal';

export default function CheckoutAndPayment() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [subTotal, setSubTotal] = useState('0.00');
  const [tax, setTax] = useState('0.00');
  const [isModalShown, setIsModalShown] = useState(true);

  const { productsInCart } = useCart();
  const { data } = useProductsData();

  useEffect(() => {
    let totalPriceCalc = 0;
    productsInCart.forEach((cartItem) => {
      const item = data?.find((product) => product.id === cartItem.productId);
      if (item) {
        const itemTotalPrice = Number(item.price) * cartItem.quantity;
        totalPriceCalc += itemTotalPrice;
      }
    });
    setTotalPrice(totalPriceCalc);

    // these also should be coming from backend however the fakeapi doesn't support this
    const subTotalCalc = totalPriceCalc * (1 - TAX_PERCENT);
    const twoDigitSubTotal = makeTwoDigitPricing(subTotalCalc);
    setSubTotal(twoDigitSubTotal);

    const totalTax = totalPriceCalc - Number(twoDigitSubTotal);
    const twoDigitTotalTax = makeTwoDigitPricing(totalTax);
    setTax(twoDigitTotalTax);
  }, [productsInCart, data]);

  return (
    <div className="CheckoutAndPayment">
      <div className="CheckoutAndPayment__price-info">
        <div className="CheckoutAndPayment__pricing">
          <p>Subtotal:</p>
          <p>{`${CURRENCY} ${subTotal}`}</p>
        </div>
        <div className="CheckoutAndPayment__pricing">
          <p>Tax:</p>
          <p>{`${CURRENCY} ${tax}`}</p>
        </div>
      </div>
      <div className="CheckoutAndPayment__total-price">
        <p>Total:</p>
        <p>{`${CURRENCY} ${totalPrice}`}</p>
      </div>
      <div>
        <button type="button" className="CheckoutAndPayment__button">
          CHECKOUT
        </button>
        {isModalShown
          ? createPortal(
              <CheckoutModal
              // onPostpone={postponeWarning}
              // closeModalWithAction={closeModalWithAction}
              />,
              document.getElementById('modal')!
            )
          : null}
      </div>
      <div className="CheckoutAndPayment__logo-container">
        <img src={AmexLogo} alt="Amex" className="CheckoutAndPayment__logo" />
        <img
          src={MasterCardLogo}
          alt="Mastercard"
          className="CheckoutAndPayment__logo"
        />
        <img
          src={PaypalLogo}
          alt="Paypal"
          className="CheckoutAndPayment__logo"
        />
        <img src={VisaLogo} alt="Visa" className="CheckoutAndPayment__logo" />
        <img
          src={ApplePayLogo}
          alt="Apple Pay"
          className="CheckoutAndPayment__logo"
        />
      </div>
    </div>
  );
}
