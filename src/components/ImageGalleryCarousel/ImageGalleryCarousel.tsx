import ImageGallery from "react-image-gallery";

import { ImagesGallery } from "../../types";

import "./ImageGalleryCarousel.scss";

interface IProps {
  images: string[];
  thumbnailPosition?: string;
}

export const MyGallery = (props: IProps) => {
  const images: ImagesGallery[] = props.images.map((el) => {
    const img = new Image();
    img.src = el;

    // @ts-ignore
    (img.width - img.height) >=0 ? (img.style.objectFit = "cover") : (img.style.objectFit = "contain")

    return {
      original: el,
      thumbnail: el,
    };
  });
  return (
    <ImageGallery
      items={images}
      showPlayButton={false}
      thumbnailPosition={props.thumbnailPosition ? "right" : "bottom"}
    />
  );
};
