import { useState, useContext } from "react";
import { PhotoContext } from "../PhotoContext";

const Image = ({ className, img }) => {
  const [hovered, setHovered] = useState(false);
  const { isToggleFavorite, addToCart } = useContext(PhotoContext);

  const heartIcon = (
    <i
      className={`${
        img.isFavorite ? "ri-heart-fill" : hovered ? "ri-heart-line" : ""
      } favorite`}
      onClick={() => isToggleFavorite(img.id)}
    ></i>
  );
  const cartIcon = hovered && (
    <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
  );

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img className="image-grid" src={img.url} alt="" />
      {heartIcon}
      {cartIcon}
    </div>
  );
};

export default Image;
