import { useEffect, useRef } from "react";

import { IDishCard } from "../../../types";

import styles from "./DishDescriptionDialog.module.scss";

interface IProps {
  dish: IDishCard | null;
  onClose: () => void;
}

export const DishDescriptionDialog = ({ dish, onClose }: IProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (dish && !dialog.open) {
      dialog.showModal();
    } else if (!dish && dialog.open) {
      dialog.close();
    }
  }, [dish]);

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby="dish-description-title"
      aria-describedby="dish-description-text"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {dish && (
        <>
          <div className={styles.header}>
            <h2 id="dish-description-title">{dish.title}</h2>
            <button
              className={styles.close}
              type="button"
              aria-label="Закрыть описание"
              onClick={onClose}
              autoFocus
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            </button>
          </div>
          {dish.photo && (
            <div className={styles.imageContainer}>
              <img src={dish.photo} alt={dish.title} />
            </div>
          )}
          <p id="dish-description-text" className={styles.description}>
            {dish.description}
          </p>
        </>
      )}
    </dialog>
  );
};
