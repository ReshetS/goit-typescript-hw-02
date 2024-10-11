import { FC } from "react";
import { Image } from "../types";
import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: Image[];
  onClick: (image: Image) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, onClick }) => {
  return (
    <ul className={style.gallery}>
      {images.map((image) => {
        return (
          <li className={style.galleryItem} key={image.id}>
            <ImageCard image={image} onClick={onClick} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
