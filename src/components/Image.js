import { useContext } from "react";
import useHover from "../hooks/useHover";
import { PhotoContext } from "../PhotoContext";

const Image = ({ className, img }) => {
  const {isHovered, hoveredRef} = useHover();
  const { isToggleFavorite, addToCart, deleteFromCart, getCartItems } =
    useContext(PhotoContext);

  const heartIcon = (
    <i
      className={`${
        img.isFavorite ? "ri-heart-fill" : isHovered() ? "ri-heart-line" : ""
      } favorite`}
      onClick={() => isToggleFavorite(img.id)}
    ></i>
  );

  const cartIcon = getCartItems().some((item) => item.id === img.id) ? (
    <i
      className="ri-shopping-cart-fill cart"
      onClick={() => deleteFromCart(img)}
    ></i>
  ) : isHovered() ? (
    <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
  ) : (
    ""
  );

  return (
    <div
      className={`${className} image-container`}
      ref={hoveredRef}
    >
      <img className="image-grid" src={img.url} alt="" />
      {heartIcon}
      {cartIcon}
    </div>
  );
};

export default Image;
