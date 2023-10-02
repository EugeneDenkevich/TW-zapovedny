import { TimeIcon } from "../../../assets/icons/Time";
import { IMeal } from "../../../types";
import { FlagItem } from "../../FlagItem";

import styles from "./MealTimeCard.module.scss";

interface IProps extends IMeal {
  cur_scale: number;
  cur_rate: number;
}

export const MealTimeCard = (props: IProps) => {
  const { time, title, price, cur_rate, cur_scale } = props;
  const priceBYN = price
    ? `${((+price / cur_scale) * cur_rate).toFixed(0)} BYN`
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
