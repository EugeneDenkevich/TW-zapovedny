import { BeatLoader } from "react-spinners";

import { INearest } from "../../../types";
import Carousel from "../../Carousel";

import styles from "./NearestCard.module.scss";

interface IProps {
  element: INearest;
}

const NearestCard = (props: IProps) => {
  const {
    element: { photos, title, description, location },
  } = props;

  const nearestPhotosSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    dots: true,
    infinite: true,
    arrows: true,
    currentSlide: 0,
    responsive: [
      {
        breakpoint: 1270,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className={styles.card}>
      <div className={styles["card-left"]}>
        {photos ? (
          <Carousel settings={nearestPhotosSettings}>
            {photos.map((el, index) => {
              return (
                <div key={index}>
                  <img className={styles.image} src={el} alt="" />
                </div>
              );
            })}
          </Carousel>
        ) : (
          <div className={styles.preload}>
            <BeatLoader color="#583711" />
          </div>
        )}
      </div>

      <div className={styles["card-right"]}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.location}>{location}</div>
      </div>
    </div>
  );
};

export default NearestCard;
