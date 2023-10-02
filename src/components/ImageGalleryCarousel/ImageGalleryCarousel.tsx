import ImageGallery from "react-image-gallery";

import { ImagesGallery } from "../../types";

import "./ImageGalleryCarousel.scss";

interface IProps {
  images: string[];
  thumbnailPosition?: string;
}

export const MyGallery = (props: IProps) => {
  const images: ImagesGallery[] = props.images.map((el) => {
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
