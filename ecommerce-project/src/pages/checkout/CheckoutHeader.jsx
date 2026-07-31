import "./CheckoutHeader.css";
import { Link } from "react-router";
import Logo from "../../assets/images/logo.png";
import MobileLogo from "../../assets/images/mobile-logo.png";
import CheckoutLockICon from "../../assets/images/icons/checkout-lock-icon.png";
function CheckoutHeader() {
  return (
    <div class="checkout-header">
      <div class="header-content">
        <div class="checkout-header-left-section">
          <Link to="/">
            <img class="logo" src={Logo} />
            <img class="mobile-logo" src={MobileLogo} />
          </Link>
        </div>

        <div class="checkout-header-middle-section">
          Checkout (
          <Link class="return-to-home-link" to="/">
            3 items
          </Link>
          )
        </div>

        <div class="checkout-header-right-section">
          <img src={CheckoutLockICon} />
        </div>
      </div>
    </div>
  );
}

export default CheckoutHeader;
