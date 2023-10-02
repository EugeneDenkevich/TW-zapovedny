import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

// import { BigBed } from "../../../assets/icons/features/BigBed";
import { Person } from "../../../assets/icons/features/Person";
import { openFormStateAction } from "../../../reduxTools/formForOrderHouse/actions";
import { GetPrice } from "../../../services/getPrice";
import { useRate } from "../../../services/useRate";
import { House } from "../../../types";
import { MainButton } from "../../buttons/mainButton/MainButton";
import Carousel from "../../Carousel";
import Price from "../../Price";

import styles from "./HouseBigCard.module.scss";

const HouseBigCard = (props: House) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const housePhotosSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 900,
    rows: 1,
    dots: true,
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1270,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const {
    id,
    title,
    description_short,
    description_long,
    photos,
    price_weekday,
    price_holiday,
    pers_num,
    bed_count,
    beds_types,
    rooms_types    
  } = props;
  const currency = useRate().currency;
  
    const priceBYN_weekday = price_weekday
    ? currency==="BYN"? Math.round(price_weekday)
      : Math.round(+GetPrice(+price_weekday) / 10)* 10
      : 0;

    const priceBYN_holiday = price_holiday
    ? currency==="BYN"? Math.round(price_holiday)
    : Math.round(+GetPrice(+price_holiday) / 10)* 10
    : price_weekday;

  return (
    <div className={styles.card}>
      <div className={styles["card-left"]}>
        <h2 className={styles.title}>{title}</h2>
        <Carousel settings={housePhotosSettings}>
          {photos.map((el) => {
            return (
              <div key={el}>
                <img className={styles.image} src={el} alt="" />
              </div>
            );
          })}
        </Carousel>
      </div>

      <div className={styles["card-right"]}>
        <div className={styles.iconsContainer}>
          <div className={styles["person-number"]}>
            <div>{pers_num ? pers_num : null}</div>
            <Person />
          </div>
          <div className={styles.iconsBlock}>
            <div className={styles["beds-container"]}>
              {rooms_types &&
                rooms_types.map((el, index) => {
                  for (let i = 0; i < 2; i++) {
                    if (el.type === "Спальня") {
                      return (
                        <p key={index}>
                          {el.count}
                          {el.count === 1
                            ? " спальня"
                            : el.count < 5
                            ? " спальни"
                            : " спален"}
                        </p>
                      );
                    }
                  }
                })}
            </div>
          </div>
        </div>
        <div className={styles.descriptionShort}>{description_short}</div>
        <div className={styles.descriptionLong}>{description_long}</div>
        <div className={styles.infoContainer}>
          <div className={styles.priceInfo}>
            <p className={styles.priceText}>За дом в сутки:</p>
            <div className={styles.priceWrapper}>
              <div className={styles.priceContainer}>
                <Price price={+priceBYN_weekday} type="weekday" />
              </div>
              <div className={styles.priceContainer}>
                <Price price={+priceBYN_holiday} type="weekend" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <MainButton
            value={"Забронировать"}
            handler={() => {
              document.body.style.overflow = "hidden";
              dispatch(openFormStateAction());
              navigate("form");
            }}
          />
          <MainButton
            value={"Подробнее"}
            handler={() => navigate(`/houses/${id}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default HouseBigCard;
