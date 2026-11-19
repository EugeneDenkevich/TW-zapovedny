import React from "react";
import { useParams } from "react-router";
import { BeatLoader } from "react-spinners";

import { Container } from "../../components/Container";
import { FaceBlock } from "../../components/FaceBlock";
import { HomeBlockTemplate } from "../../components/HomeBlockTemplate";
import { MyGallery } from "../../components/ImageGalleryCarousel";
import { useGetExcursionCurrentQuery } from "../../reduxTools/requests/apiRequests";
import { useDatas } from "../../services/useDatas";
import { useRate } from "../../services/useRate";
import { ToFormButton } from "../../components/buttons/toFormButton/ToFormButton";

import styles from "../EntertainmentCurrent/EntertainmentCurrent.module.scss";

const ExcursionCurrent = () => {
  const { id } = useParams();
  const { data } = useGetExcursionCurrentQuery(id!);
  const { currency, cur_rate, cur_scale } = useRate();
  const { titleExcursion, excursions_back, title, nameForSearchButton } = useDatas();

  if (!data) {
    return <div className={styles.preload}><BeatLoader color="#583711" /></div>;
  }

  const price = data.prices?.length ? data.prices.map((item, index) => {
    for (const label in item) {
      const value = item[label]
        ? currency === "BYN" ? item[label] : Math.round((+item[label] / cur_scale) * cur_rate)
        : null;
      const display = +item[label] > 0 ? `${value} BYN` : "бесплатно";
      return <React.Fragment key={index}><div>{label}</div><div className={styles.numberPrice}>{display}</div></React.Fragment>;
    }
    return null;
  }) : <div>бесплатно</div>;

  return (
    <>
      <FaceBlock title={titleExcursion} image={excursions_back} />
      <HomeBlockTemplate>
        <Container className={styles.card}>
          <p className={styles.title}>{data.title}</p>
          <div className={styles.sliderContainer}>
            {data.photos ? <MyGallery images={data.photos} thumbnailPosition="right" /> : null}
          </div>
          <div className={styles.info}>
            <p className={styles.descriptionShort}>{data.description_short}</p>
            <p className={styles.descriptionLong}>{data.description_long}</p>
            <div className={styles.price}>Цены </div>
            <div className={styles.line} />
            <div className={styles.grid}>{price}</div>
          </div>
        </Container>
      </HomeBlockTemplate>
      <HomeBlockTemplate>
        <ToFormButton value={title} buttonValue={nameForSearchButton} />
      </HomeBlockTemplate>
    </>
  );
};

export default ExcursionCurrent;
