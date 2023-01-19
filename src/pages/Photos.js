import { useContext } from "react";
import { PhotoContext } from "../PhotoContext";
import Image from "../components/Image";
import { getClass } from "../utils/helper";

const Photos = () => {
  const { photos } = useContext(PhotoContext);

  return (
    <main className="photos">
      {photos.map((photo, index) => (
        <Image key={photo.id} img={photo} className={getClass(index)} />
      ))}
    </main>
  );
};

export default Photos;
