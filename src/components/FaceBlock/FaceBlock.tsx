import { ClassName } from "../../types";
import { BackgroundBlockImage } from "../BackgroundBlockImage/BackgroundBlockImage";
import { BookingModule } from "../BookingModule/BookingModule";
import { Container } from "../Container";

import styles from "./FaceBlock.module.scss";

interface IProps extends ClassName {
  image?: string;
  title: string;
}

export const FaceBlock = ({ image, title }: IProps) => {
  if (!image) {
    return (
      <>
        <BookingModule />
        <Container><h1 className={styles.plainTitle}>{title}</h1></Container>
      </>
    );
  }

  return (
    <>
      <div className={styles["face-block"]}>
        <BackgroundBlockImage image={image} />
        <Container>
          <div className={styles["content-container"]}>
            <div className={styles.title}>{title}</div>
          </div>
        </Container>
      </div>
      <BookingModule onPhoto />
    </>
  );
};
