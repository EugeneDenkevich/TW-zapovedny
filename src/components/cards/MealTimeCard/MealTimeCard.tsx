import { TimeIcon } from "../../../assets/icons/Time";
import { GetPrice } from "../../../services/getPrice";
import { IMeal } from "../../../types";
import { FlagItem } from "../../FlagItem";

import styles from "./MealTimeCard.module.scss";

export const MealTimeCard = (props: IMeal) => {
  const { time, title, price } = props;
  const priceBYN = price
    ? `${GetPrice(price)} BYN`
    : "цену уточняйте";
  return (
    <div className={styles.card}>
      <FlagItem value={title} className={styles.flag} />
      <div className={styles.row}>
        <div className={styles.time}>
          <div>
            <TimeIcon />
          </div>
          <p>{time}</p>
        </div>
        <div className={styles.price}>
          <span>{priceBYN}</span>
        </div>
      </div>
    </div>
  );
};
