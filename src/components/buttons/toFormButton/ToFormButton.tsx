import { useDatas } from "../../../services/useDatas";
import { ClassName } from "../../../types";
import { BookingLink } from "../../BookingModule/BookingLink";

import styles from "./ToFormButton.module.scss";

interface IProps extends ClassName {
  buttonValue?: string;
  value?: string;
}

export const ToFormButton = ({ buttonValue, value = "Заповедный остров", className }: IProps) => {
  const { nameForSearchButton } = useDatas();

  return (
    <div className={className ? `${styles.form} ${className}` : styles.form}>
      <p>{value}</p>
      <BookingLink>{buttonValue ?? nameForSearchButton}</BookingLink>
    </div>
  );
};
