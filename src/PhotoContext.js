import { createContext, useState, useEffect } from "react";

const PhotoContext = createContext();

const PhotoContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

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

  return (
    <PhotoContext.Provider value={{ photos }}>{children}</PhotoContext.Provider>
  );
};

export { PhotoContextProvider, PhotoContext };
