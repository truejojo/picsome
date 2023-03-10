import { createContext, useState, useEffect } from "react";

const PhotoContext = createContext();
const url =
  "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

const PhotoContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (img) =>
    setCartItems((prevCartItems) => [...prevCartItems, img]);

  const deleteFromCart = (img) =>
    setCartItems((prevCartItems) =>
      prevCartItems.filter((current) => current.id !== img.id)
    );

  const setCartItemsToStart = () => setCartItems([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchPhotos();
  }, []);

  const isToggleFavorite = (id) => {
    setPhotos((updatePhotos) =>
      updatePhotos.map((photo) =>
        photo.id === id ? { ...photo, isFavorite: !photo.isFavorite } : photo
      )
    );
  };

  return (
    <PhotoContext.Provider
      value={{
        photos,
        isToggleFavorite,
        cartItems,
        addToCart,
        deleteFromCart,
        setCartItemsToStart,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export { PhotoContextProvider, PhotoContext };
