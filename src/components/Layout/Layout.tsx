import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { BeatLoader } from "react-spinners";

import { Arrow } from "../../assets/icons/Arrow";
import { closeFormStateAction, openFormStateAction } from "../../reduxTools/formForOrderHouse/actions";
import { AppState } from "../../reduxTools/store";
import { BookingModule } from "../BookingModule/BookingModule";
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
  const hasPendingApiQueries = useSelector((state: AppState) => {
    const applicationRequests = Object.values(state.api.queries);
    const currencyRequests = Object.values(state.apiRate.queries);
    return [...applicationRequests, ...currencyRequests].some(
      (query) => query?.status === "pending",
    );
  });
  const [visible, setVisible] = useState(false);
  const [initialPageReady, setInitialPageReady] = useState(false);
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
    if (initialPageReady || hasPendingApiQueries) return;

    let cancelled = false;
    const timer = window.setTimeout(async () => {
      await new Promise<void>((resolve) => {
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => resolve());
        });
      });

      if (cancelled) return;

      const imagesReady = Promise.all(
        Array.from(document.images).map((image) => {
          if (image.complete) return Promise.resolve();
          return new Promise<void>((resolve) => {
            const finish = () => resolve();
            image.addEventListener("load", finish, { once: true });
            image.addEventListener("error", finish, { once: true });
          });
        }),
      );

      const bookingModuleReady = new Promise<void>((resolve) => {
        const container = document.querySelector<HTMLElement>(
          "[data-vitaem-module-integration]",
        );
        if (!container || container.childNodes.length > 0) {
          resolve();
          return;
        }

        const observer = new MutationObserver(() => {
          if (container.childNodes.length > 0) {
            observer.disconnect();
            window.clearTimeout(timeout);
            resolve();
          }
        });
        observer.observe(container, { childList: true, subtree: true });
        const timeout = window.setTimeout(() => {
          observer.disconnect();
          resolve();
        }, 5000);
      });

      await Promise.all([
        imagesReady,
        bookingModuleReady,
        document.fonts?.ready ?? Promise.resolve(),
      ]);

      if (!cancelled) setInitialPageReady(true);
    }, 120);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [hasPendingApiQueries, initialPageReady]);

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
    <div className={styles.layout} aria-busy={!initialPageReady}>
      <Header visible={visible} />
      {!backendError && /^(info|rule|galleries|nearests)$/.test(pathname.split("/")[1]) && <BookingModule />}
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
      {!initialPageReady && (
        <div className={styles["initial-loader"]} role="status" aria-live="polite">
          <BeatLoader color="#583711" />
          <span>Загружаем страницу...</span>
        </div>
      )}
    </div>
  );
};
