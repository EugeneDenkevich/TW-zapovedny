import { useEffect } from "react";

import { Container } from "../Container";

import styles from "./BookingModule.module.scss";

const SCRIPT_ID = "vitaem-module-integration-script";

export const BookingModule = ({ onPhoto = false }: { onPhoto?: boolean }) => {
  useEffect(() => {
    if (window.location.hash !== "#booking-module") return;
    const frame = window.requestAnimationFrame(() => {
      document.getElementById("booking-module")?.scrollIntoView({ block: "start", behavior: "auto" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    // Vitaem observes new containers, including those mounted by React Router.
    // Keep its script and global listeners alive for the lifetime of the app.
    if (document.getElementById(SCRIPT_ID)) return;
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = "https://client.vitaem.app/assets/module-integration.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <section
      id="booking-module"
      aria-label="Бронирование проживания"
      className={`${styles.module} ${onPhoto ? styles.onPhoto : ""}`}
    >
      <Container>
        <div data-vitaem-module-integration="497af9e4-ce34-4c8a-b623-356ba113d7bc" />
      </Container>
    </section>
  );
};
