import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { openFormStateAction } from "../../../reduxTools/formForOrderHouse/actions";
import { useDatas } from "../../../services/useDatas";
import { ClassName } from "../../../types";
import { MainButton } from "../mainButton/MainButton";

import styles from "./ToFormButton.module.scss";

interface IProps extends ClassName {
  buttonValue?: string;
  value?: string;  
}

export const ToFormButton = (props: IProps) => {
  const datas = useDatas();
  const {nameForSearchButton} = datas;
  const {
    buttonValue = nameForSearchButton,
    value = "Заповедный остров",
    className    
  } = props;
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  return (
    <div className={className ? `${styles.form} ${className}` : styles.form}>
      <p>{value}</p>
      <a href="https://client.vitaem.app/ab42fa60-fb63-4b6f-a40f-8f8c86ab17dd" target="blank" rel="noopener noreferrer">
        <MainButton
          value={buttonValue}
          // handler={() => {
          //   document.body.style.overflow = "hidden";
          //   dispatch(openFormStateAction());
          //   navigate("form");
          // }}
        />
      </a>
    </div>
  );
};
