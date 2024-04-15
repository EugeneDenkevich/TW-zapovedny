import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";

import { Arrow } from "../../assets/icons/Arrow";
import { closeFormStateAction, openFormStateAction } from "../../reduxTools/formForOrderHouse/actions";
import { AppState } from "../../reduxTools/store";
import { Footer } from "../Footer";
import { FormContainer } from "../form/FormContainer";
import { Header } from "../Header";

import styles from "./Layout.module.scss";
interface Props {
  backendError: boolean
};

export const Layout = ({ backendError }: Props) => {
  // const { data } = useGetObjectsQuery();

  const isFormOpen = useSelector((state: AppState) => state.form.isFormOpen);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const handleClick = () => {
    const element = document.body;
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  useEffect(() => {
    if (pathname.includes("form") && !isFormOpen) {
      dispatch(openFormStateAction());
    }
    if (!pathname.includes("form") && isFormOpen) {
      dispatch(closeFormStateAction());
      window.location.reload()
    }
  }, [dispatch, pathname, isFormOpen]);


  return (
    <div className={styles.layout}>
      <Header visible={visible} />
      <Outlet />
      <Footer backendError={backendError} />
      <div
        onClick={handleClick}
        className={visible ? styles["arrow-top"] : styles.hide}
        id="arrow-top"
      >
        <Arrow />
      </div>
      {!backendError ? (
        <div className={isFormOpen ? styles.container : styles.hide}>
          <FormContainer />
        </div>
      ) : null}
    </div>
  );
};
