import { useParams } from "react-router";
import { BeatLoader } from "react-spinners";

import { BigBed } from "../../assets/icons/features/BigBed";
import { Person } from "../../assets/icons/features/Person";
import { ToFormButton } from "../../components/buttons/toFormButton";
import { LittleKitchenCard } from "../../components/cards/LittleKitchenCard";
import { FaceBlock } from "../../components/FaceBlock/FaceBlock";
import { FlagItem } from "../../components/FlagItem";
import { HomeBlockTemplate } from "../../components/HomeBlockTemplate";
import { MyGallery } from "../../components/ImageGalleryCarousel";
import {
  useGetFeedingInfoQuery,
  useGetObjectCurrentQuery,
} from "../../reduxTools/requests/apiRequests";
import { getFeaturesIcon, getFeaturesText } from "../../services/getFeatures";
import { useDatas } from "../../services/useDatas";
import { useRate } from "../../services/useRate";

import styles from "./HouseItem.module.scss";

export const HouseItem = () => {
  const { id } = useParams();
  const { data } = useGetObjectCurrentQuery(id!);
  const { data: meal } = useGetFeedingInfoQuery();
  const datas = useDatas();
  const { title, nameForSearchButton } = datas;
  const rate = useRate();
  const price_weekday = data?.price_weekday
    ? `от ${
        Math.round(
          ((Number(data.price_weekday) / rate.cur_scale) * rate.cur_rate) / 10,
        ) * 10
      } BYN будние дни`
    : "цену уточняйте";
  const price_holiday = data?.price_holiday
    ? `от ${
        Math.round(
          ((Number(data.price_holiday) / rate.cur_scale) * rate.cur_rate) / 10,
        ) * 10
      } BYN выходные дни`
    : price_weekday;

  if (!data)
    return (
      <div className={styles.preload}>
        <BeatLoader color="#583711" />
      </div>
    );
  
  return (
    <>
      {JSON.stringify(data) !== "{}" ? (
        <>
          <FaceBlock title={data.title} image={data.photos[0]} />
          <HomeBlockTemplate>
            <div className={styles.container}>
              <div className={styles["house-info"]}>
                <h1>{data.title}</h1>
                <div className={styles["block-commonInfo"]}>
                  <div>
                    <span>{data.pers_num}</span>
                    <Person />
                  </div>
                  <div className={styles["beds-container"]}>
                    {data.rooms_types &&
                      data.rooms_types.map((el, index) => {
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
              <div className={styles["left-column"]}>
                <MyGallery images={data.photos} />
                <p className={styles["description-short"]}>
                  {data.description_short}
                </p>
                <p className={styles["description-long"]}>
                  {data.description_long}
                </p>
              </div>
              <div className={styles["right-column"]}>
                <ToFormButton
                  value={title}
                  buttonValue={nameForSearchButton}
                  className={styles.form}                  
                />
                <div className={styles.features}>
                  <h2>Удобства в домике</h2>
                  <div className={styles.line}></div>
                  <div className={styles.grid}>
                    {data.bed_count && data.bed_count > 0 ? (
                      <div className={styles["grid-item"]}>
                        <BigBed littleIcon={true} /> {data.bed_count}{" "}
                        {data.bed_count === 1 ? "кровать" : "кровати(ей)"}
                      </div>
                    ) : null}
                    {data.features?.map((elem, index) => {
                      return (
                        <div className={styles["grid-item"]} key={index}>
                          {getFeaturesIcon(elem.id, true)}
                          {getFeaturesText(elem.id)}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className={styles.prices}>
                  <FlagItem value="За дом в сутки" className={styles.flag} />
                  <div className={styles.row}>{price_weekday}</div>
                  <div className={styles.row}>{price_holiday}</div>
                </div>
                {meal && (
                  <LittleKitchenCard
                    data={meal}
                    cur_rate={rate.cur_rate}
                    cur_scale={rate.cur_scale}
                  />
                )}
              </div>
            </div>
          </HomeBlockTemplate>
        </>
      ) : (
        <div className={styles.preload}>
          <BeatLoader color="#583711" />
        </div>
      )}
    </>
  );
};
