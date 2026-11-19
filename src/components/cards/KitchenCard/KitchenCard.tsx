import { IDishCard } from "../../../types";

import styles from "./KitchenCard.module.scss";

interface IProps extends IDishCard {
  onOpenDetails: (dish: IDishCard) => void;
}

export const KitchenCard = ({ onOpenDetails, ...dish }: IProps) => {
  const { photo, title, description } = dish;

  return (
    <div className={styles.card}>
      <div className={styles["card__image-container"]}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles["card__info"]}>
        <div className={styles["card__info-wrapper"]}>
          <h3 className={styles["card__title"]}>{title}</h3>
          {description && (
            <>
              <p className={styles["card__description"]}>{description}</p>
              <button
                className={styles["card__more"]}
                type="button"
                onClick={() => onOpenDetails(dish)}
              >
                Подробнее
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
