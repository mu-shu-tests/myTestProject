import "../pages/Header.css";
//import { Link } from "react-router";
import { NavLink } from "react-router";
import LogoWhite from "../assets/images/logo-white.png";
import MobileLoge from "../assets/images/mobile-logo-white.png";
import SearchIcon from "../assets/images/icons/search-icon.png";
import CartIcon from "../assets/images/icons/cart-icon.png";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router";
function Header({ cart }) {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const [searchBarText, setSearchBarText] = useState(search);
  const navigate = useNavigate();

  /**
  if (search) {
    setSearchParams(search);
  } */

  const getSearchBarText = (event) => {
    setSearchBarText(event.target.value);
    navigate(`/?search=${searchBarText}`);
  };
  /*  const keyboardEvent = (event) => {
    if (event.key === "Enter") {
      setSearchBarText(event.target.value);
    } else if (event.key === "Escape") {
      setSearchBarText("");
    }
  }; */

  let totalQuantity = 0;

  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });

  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo" src={LogoWhite} />
          <img className="mobile-logo" src={MobileLoge} />
        </NavLink>
      </div>

      <div className="middle-section">
        <input
          className="search-bar"
          type="text"
          placeholder="Search"
          onChange={getSearchBarText}
        />

        <button className="search-button" onClick={console.log(searchBarText)}>
          <img className="search-icon" src={SearchIcon} />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders">
          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src={CartIcon} />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
