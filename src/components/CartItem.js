import React from "react";
// import { useContext } from "react";
import { usePhotoContext } from "../PhotoContext";
import useHover from "../hooks/useHover";

const CartItem = ({ item }) => {
  const { deleteFromCart } = usePhotoContext();
  const {isHovered, hoveredRef} = useHover();

  return (
    <div className="cart-item">
      <i
        className={`${isHovered() ? "ri-delete-bin-fill" : "ri-delete-bin-line"}`}
        onClick={() => deleteFromCart(item)}
        ref={hoveredRef}
      ></i>
      <img src={item.url} width="130px" alt="" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;
