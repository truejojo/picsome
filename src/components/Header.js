import { NavLink } from "react-router-dom";
import { usePhotoContext } from "../PhotoContext";

const Header = () => {
  const { getCartItems } = usePhotoContext();

  return (
    <header className="page-header">
      <nav className="container">
        <NavLink to="/">
          <h2>Pic Some</h2>
        </NavLink>
        <NavLink to="cart">
          <i
            className={`${
              getCartItems().length > 0
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
