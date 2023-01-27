import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";

const PhotoContext = createContext();

const usePhotoContext = () => {
  const photoContextValue = useContext(PhotoContext);

  if (!photoContextValue) {
    throw new Error(
      "usePhotoContext must be called from within an PhotoContextProvider"
    );
  }

  return photoContextValue;
};

const url =
  "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

const initialState = {
  loading: true,
  error: false,
  photos: [],
  cartItems: [],
};

const reducer = (state, action) => {
  const {type, data, id, img} = action;

  switch (type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        photos: data,
      };

    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };

    case "TOGGLE_FAVORITE":
      return {
        ...state,
        photos: state.photos.map((photo) =>
          photo.id === id
            ? { ...photo, isFavorite: !photo.isFavorite }
            : photo
        ),
      };

    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, img],
      };

    case "DELETE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (currentImg) => currentImg.id !== img.id
        ),
      };

    case "SET_CART_ITEMS_TO_NULL":
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

const PhotoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading, error, photos, cartItems } = state;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", data: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  const isToggleFavorite = (id) =>
    dispatch({ type: "TOGGLE_FAVORITE", id });

  const addToCart = (img) => dispatch({ type: "ADD_TO_CART", img });

  const deleteFromCart = (img) =>
    dispatch({ type: "DELETE_FROM_CART", img });

  const setCartItemsToStart = () =>
    dispatch({ type: "SET_CART_ITEMS_TO_NULL" });

  const isLoading = () => loading;

  const isError = () => error;

  const getPhotos = () => photos;

  const getCartItems = () => cartItems;

  return (
    <PhotoContext.Provider
      value={{
        isLoading,
        isError,
        getPhotos,
        isToggleFavorite,
        getCartItems,
        addToCart,
        deleteFromCart,
        setCartItemsToStart,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export { PhotoContextProvider, usePhotoContext };
