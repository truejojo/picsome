import { useState, useContext } from "react";
import { PhotoContext } from "../PhotoContext";
import CartItem from "../components/CartItem";

const Cart = () => {
  const [isOrderd, setIsOrderd] = useState(false);
  const { cartItems, setCartItemsToStart } = useContext(PhotoContext);
  const totalPrice = (cartItems.length * 5.99).toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
  });

  const handleClick = () => {
    setIsOrderd((prevIsOrderd) => !prevIsOrderd);

    setTimeout(() => {
      console.log("Order placed!");
      setIsOrderd((prevIsOrderd) => !prevIsOrderd);
      setCartItemsToStart();
    }, 3000);
  };

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <p className="total-cost">Total: {totalPrice}</p>
      {cartItems.length > 0 ? (
        <div className="order-button">
          <button onClick={handleClick}>
            {`${isOrderd ? "Ordering..." : "Place Order"}`}
          </button>
        </div>
      ) : (<p>You have no items in your cart!</p>)}
    </main>
  );
};

export default Cart;
