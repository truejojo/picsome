import React from "react";
import { useContext } from "react";
import { PhotoContext } from "../PhotoContext";
import useHover from "../hooks/useHover";

const CartItem = ({ item }) => {
  const { deleteFromCart } = useContext(PhotoContext);
  const {isHovered, ToggleHovered} = useHover();

  return (
    <div className="cart-item">
      <i
        onMouseEnter={ToggleHovered}
        onMouseLeave={ToggleHovered}
        className={`${isHovered() ? "ri-delete-bin-fill" : "ri-delete-bin-line"}`}
        onClick={() => deleteFromCart(item)}
      ></i>
      <img src={item.url} width="130px" alt="" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;
