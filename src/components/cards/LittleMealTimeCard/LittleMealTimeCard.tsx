import { PriceIcon } from "../../../assets/icons/Price";
import { TimeIcon } from "../../../assets/icons/Time";
import { IMeal } from "../../../types";

import styles from "./LittleMealTimeCard.module.scss";

interface IProps extends IMeal {
  cur_scale: number;
  cur_rate: number;
}

export const LittleMealTimeCard = (props: IProps) => {
  const { time, title, price, cur_rate, cur_scale } = props;
  const priceBYN = price
    ? `${Math.round((Number(price) / cur_scale) * cur_rate)} BYN`
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
