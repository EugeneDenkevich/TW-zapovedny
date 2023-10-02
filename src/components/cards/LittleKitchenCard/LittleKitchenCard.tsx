import { IMeal } from "../../../types";
import { LittleMealTimeCard } from "../LittleMealTimeCard";

import styles from "./LittleKitchenCard.module.scss";

interface IProps {
  data: IMeal[]; 
}

export const LittleKitchenCard = (props: IProps) => {
  const { data} = props;
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
            />
          );
        })}
    </div>
  );
};
