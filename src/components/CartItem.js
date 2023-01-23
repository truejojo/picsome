import React from "react";
import { useContext, useState } from "react";
import { PhotoContext } from "../PhotoContext";
import useHover from "../hooks/useHover";

const CartItem = ({ item }) => {
  // const [hovered, setHovered] = useState(false);
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
  // return (
  //   <div className="cart-item">
  //     <i
  //       onMouseEnter={() => setHovered(true)}
  //       onMouseLeave={() => setHovered(false)}
  //       className={`${hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"}`}
  //       onClick={() => deleteFromCart(item)}
  //     ></i>
  //     <img src={item.url} width="130px" alt="" />
  //     <p>$5.99</p>
  //   </div>
  // );
};

export default CartItem;
