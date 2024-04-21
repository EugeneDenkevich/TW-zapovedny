import ImageGallery from "react-image-gallery";

import { ImagesGallery } from "../../types";

import "./ImageGalleryCarousel.scss";
import { useRef } from "react";

interface IProps {
  images: string[];
  thumbnailPosition?: string;
}

export const MyGallery = (props: IProps) => {

  const galleryRef = useRef<ImageGallery>(null);

  const openFullscreen = () => {
    const galleryElement = galleryRef.current;
    if (galleryElement && galleryElement.fullScreen) {
      galleryElement.fullScreen();
    }
  };

  const getImgSize = (url: string): number => {
    const img = new Image();
    img.src = url;
    return img.width / img.height;
  };

  const images: ImagesGallery[] = props.images.map((el) => {
    let dif = getImgSize(el);

    return {
      original: el,
      thumbnail: el,
      originalClass: dif >= 1 ? "coverOrigin" : "containOrigin",
      thumbnailClass: dif >= 1 ? "coverThumbnail" : "containThumbnail",
    };
  });
  return (
    <ImageGallery
      items={images}
      showPlayButton={false}
      onClick={openFullscreen}
      ref={galleryRef}
      thumbnailPosition={props.thumbnailPosition ? "right" : "bottom"}
    />
  );
};
