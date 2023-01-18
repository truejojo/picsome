import { NavLink } from "react-router-dom"
const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <NavLink to="/">
            <h2>Pic Some</h2>
          </NavLink>
          <NavLink to="cart"><i className="ri-shopping-cart-line ri-fw ri-2x"></i></NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header