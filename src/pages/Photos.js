import { useContext } from "react";
import { PhotoContext } from "../PhotoContext";
import Image from "../components/Image";
import { getClass } from "../utils/helper";

const Photos = () => {
  const { isLoading, isError, getPhotos } = useContext(PhotoContext);

  return (
    <main className="photos">
      {isLoading() && <p>Is loading...</p>}
      {!isLoading() && getPhotos().map((photo, index) => (
        <Image key={photo.id} img={photo} className={getClass(index)} />
      ))}
      {isError() && <p>"Something went wrong, try again..."</p>}
    </main>
  );
};

export default Photos;
