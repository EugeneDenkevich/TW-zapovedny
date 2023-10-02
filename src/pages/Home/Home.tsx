import styles from "./Home.module.scss";
import {Container} from "../../components/Container/Container";
import {KitchenCard} from "../../components/cards/KitchenCard";
import {MainButton} from "../../components/buttons/mainButton/MainButton";
import BackgroundBlockImage from "../../components/BackgroundBlockImage";
import {ToFormButton} from './../../components/buttons/toFormButton';
import {HomeBlockTemplate} from "../../components/HomeBlockTemplate/HomeBlockTemplate";
import {HouseLittleCard} from "../../components/cards/HouseLittleCard";
import {Carousel} from "../../components/Carousel/Carousel";
import {EntertainmentCard} from "../../components/cards/EntertainmentCard/EntertainmentCard";
import {useState} from "react";
import {Settings} from "react-slick";
import {
  useGetDishesQuery, useGetEntertainmentsQuery, useGetObjectsQuery,
  useGetMainPageQuery
} from "../../reduxTools/requests/apiRequests";
import {useNavigate} from "react-router-dom";
import {useDatas} from "../../services/useDatas"
import {useRate} from "../../services/useRate";
import {BeatLoader} from "react-spinners";

export const Home = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const {data: houses, isLoading: houseLoad} = useGetObjectsQuery();
  const {data: dishes, isLoading: dishLoad} = useGetDishesQuery();
  const {data: entertainments, isLoading: entLoad} = useGetEntertainmentsQuery();
  const {data: mainPage, isLoading: pageLoad} = useGetMainPageQuery();
  const navigate = useNavigate();
  const datas = useDatas();
  const rate = useRate();

  const {title, titleHouse, titleKitchen, titleEntertainment, main_back, nameForSearchButton} = datas;
  const {cur_rate, cur_scale} = rate;

  const sliderFaceBlockSettings: Settings = {
    slidesToShow: 1,
    centerPadding: "137px",
    infinite: true,
    speed: 300,
    arrows: false,
    centerMode: true,
    dots: true,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
          speed: 300,
          centerMode: true,
          variableWidth: true
        }
      }
    ]
  };

  const housesSliderSettings = {
    arrows: true,
    dots: true,
    speed: 900,
    slidesToShow: 3,
    centerPadding: "0px",
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    responsive: [
      {
        breakpoint: 1270,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesPerRow: 3,
          dots: true,
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesPerRow: 4,
        }
      },
    ]
  };

  const kitchenSliderSettings = {
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    currentSlide: 0,
    rows: 2,
    speed: 900,
    dots: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1270,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 550,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          rows: 2,
          slidesPerRow: 2,
        }
      }
    ]
  };

  return (
      <>
        <div className={styles["face-block"]}>
          <BackgroundBlockImage image={main_back}/>
          <Container>
            <div className={styles["content-container"]}>
              <div className={styles["left-side"]}>
                <div className={styles.title}>{title}</div>
                <p className={styles.descriptionTitle}>{mainPage && mainPage[0].description}</p>
              </div>
              <div className={styles["right-side"]}>
                <Carousel settings={sliderFaceBlockSettings}>
                  {mainPage && mainPage[0].photos.map((el, index) => {
                    return <img key={index.toString()} src={el} alt="image"/>;
                  })}
                </Carousel>
              </div>
            </div>
            <ToFormButton
                value={title}
                buttonValue={nameForSearchButton}
                className={styles.form}
            />
          </Container>
        </div>
        <HomeBlockTemplate title={titleHouse} className={styles.houses}>
          <div className={styles.blockDescription}>{mainPage && mainPage[0].house_description}</div>
          <div className={styles["houses-carousel"]}>
            {houses ? (
                <Carousel settings={housesSliderSettings}>
                  {houses.map((el) => (
                      <HouseLittleCard
                          key={el.id}
                          id={el.id}
                          pers_num={el.pers_num}
                          title={el.title}
                          description_short={el.description_short}
                          photos={el.photos}
                          price_weekday={el.price_weekday}
                          beds_types={el.beds_types}
                          rooms_types={el.rooms_types}
                          cur_scale={cur_scale}
                          cur_rate={cur_rate}
                      />
                  ))}
                </Carousel>) : (
                <div className={styles.preload}>
                  <BeatLoader color="#583711"/>
                </div>)
            }
          </div>
          <MainButton value="Подробнее" handler={() => navigate("/houses")}/>
        </HomeBlockTemplate>

        <HomeBlockTemplate title={titleKitchen} className={styles.kitchen}>
          <div className={styles.blockDescription}>{mainPage && mainPage[0].kitchen_description}</div>
          <div className={styles["carousel-container"]}>
            {dishes ? (
                <Carousel settings={kitchenSliderSettings}>
                  {dishes.map((el) => (
                      <KitchenCard
                          key={el.id}
                          id={el.id}
                          photo={el.photo}
                          title={el.title}
                          description={el.description}
                      />
                  ))
                  }
                </Carousel>) : (
                <div className={styles.preload}>
                  <BeatLoader color="#583711"/>
                </div>)
            }
          </div>
        </HomeBlockTemplate>
        <HomeBlockTemplate title={titleEntertainment}>
          <div className={styles.blockDescription}> {mainPage && mainPage[0].entertainment_description} </div>
          <div className={styles["entertainment-container"]}>
            {entertainments ? entertainments.slice(0, 6).map((el, index) => {
              return (
                  <EntertainmentCard
                      title={el.title}
                      photos={el.photos}
                      key={el.id}
                      id={el.id}
                  />
              );
            }) : (
                <div className={styles.preload}>
                  <BeatLoader color="#583711"/>
                </div>
            )}
          </div>
        <div className={styles.blockBtn}>
          <MainButton
              value="Подробнее"
              className={styles["entertainment-button"]}
              handler={() => navigate("/entertainments")}
          />
        </div>
        </HomeBlockTemplate>
        <HomeBlockTemplate>
          <ToFormButton value={title} buttonValue={nameForSearchButton}/>
        </HomeBlockTemplate>
      </>
  );
};