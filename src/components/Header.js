import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { PhotoContext } from "../PhotoContext";

const Header = () => {
  const { cartItems } = useContext(PhotoContext);

  return (
    <header className="page-header">
      <nav className="container">
        <NavLink to="/">
          <h2>Pic Some</h2>
        </NavLink>
        <NavLink to="cart">
          <i
            className={`${
              cartItems.length > 0
                ? "ri-shopping-cart-fill"
                : "ri-shopping-cart-line"
            } ri-fw ri-2x`}
          ></i>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
