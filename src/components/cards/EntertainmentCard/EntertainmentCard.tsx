import { NavLink } from "react-router-dom";

import { IEntertainmentCard } from "../../../types";
import { FlagItem } from "../../FlagItem";

import styles from "./EntertainmentCard.module.scss";

export const EntertainmentCard = (props: IEntertainmentCard) => {
  const { id, photos, title } = props;

  return (
    <div className={styles.card}>
      <NavLink to={`entertainments/${id}`}>
        <img src={photos && photos[0]} alt="view" />
        <FlagItem value={title} className={styles.flag} />
      </NavLink>
    </div>
  );
};
