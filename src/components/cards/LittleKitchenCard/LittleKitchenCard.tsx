import { IMeal } from "../../../types";
import { LittleMealTimeCard } from "../LittleMealTimeCard";

import styles from "./LittleKitchenCard.module.scss";

interface IProps {
  data: IMeal[];
  cur_rate: number;
  cur_scale: number;
}

export const LittleKitchenCard = (props: IProps) => {
  const { data, cur_rate, cur_scale } = props;
  return (
    <div className={styles.kitchen}>
      <h2>Кухня</h2>
      {data &&
        data.map((el: IMeal) => {
          return (
            <LittleMealTimeCard
              id={el.id}
              key={el.id}
              title={el.title}
              time={el.time}
              price={el.price}
              cur_rate={cur_rate}
              cur_scale={cur_scale}
            />
          );
        })}
    </div>
  );
};
