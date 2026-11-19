import { AnchorHTMLAttributes, MouseEvent } from "react";

import styles from "../buttons/mainButton/MainButton.module.scss";

export const BookingLink = ({
  className = "",
  children = "Забронировать",
  ...props
}: Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick" | "target">) => {
  const scrollToModule = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const module = document.getElementById("booking-module");
    if (!module) return;
    event.preventDefault();
    // replaceState avoids creating a history entry for every booking click.
    window.history.replaceState(window.history.state, "", "#booking-module");
    module.scrollIntoView({
      block: "start",
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  return (
    <a {...props} href="#booking-module" onClick={scrollToModule} className={`${styles.button} ${className}`}>
      {children}
    </a>
  );
};
