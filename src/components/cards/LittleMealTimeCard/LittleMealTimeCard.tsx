import { PriceIcon } from "../../../assets/icons/Price";
import { TimeIcon } from "../../../assets/icons/Time";
import { GetPrice } from "../../../services/getPrice";
import { IMeal } from "../../../types";

import styles from "./LittleMealTimeCard.module.scss";

export const LittleMealTimeCard = (props: IMeal) => {
  const { time, title, price } = props;
  const priceBYN = price
    ? `${GetPrice(Number(price))} BYN`
    : "цену уточняйте";
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <div className={styles["time-price-block"]}>
        <div className={styles.time}>
          <div>
            <TimeIcon />
          </div>
          <p>{time}</p>
        </div>
        <div className={styles.price}>
          <div>
            <PriceIcon />
          </div>
          <p>
            <span>{priceBYN}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
