import {FaceBlock} from "../../components/FaceBlock";
import {ToFormButton} from './../../components/buttons/toFormButton/ToFormButton';
import {HomeBlockTemplate} from "../../components/HomeBlockTemplate";
import {useDatas} from "../../services/useDatas";
import {useRate} from "../../services/useRate";
import {KitchenCard} from "../../components/cards/KitchenCard";
import styles from "./Kitchen.module.scss";
import {MealTimeCard} from "../../components/cards/MealTimeCard";
import {BeatLoader} from "react-spinners";
import {useGetDishesQuery, useGetFeedingInfoQuery} from "../../reduxTools/requests/apiRequests";
import {IMeal} from "../../types";
import {LittleKitchenCard} from "../../components/cards/LittleKitchenCard";
import Carousel from "../../components/Carousel";
import {ArrowNextPaginatop} from "../../assets/icons/ArrowNextPagination";
import React, {useEffect, useRef} from "react";
import Slider from "react-slick";

export const Kitchen = () => {
    const {data: meal} = useGetFeedingInfoQuery();
    const {data: dishes} = useGetDishesQuery();
    const datas = useDatas();
    const rate = useRate();
    const {title, titleKitchen, kitchen_back, nameForSearchButton} = datas;
    const {cur_rate, cur_scale} = rate;

    const kitchenCardsSettings = {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        touchMove: false,
        speed: 900,
        rows: 1,
        dots: true,
        dotsClass: 'custom_paging',
        customPaging: (i: number) => (
            <div>{i + 1}</div>
        ),
        appendDots: (dots: any) => <div className={styles.custom_padding}><ul>{dots}</ul></div>,
        infinite: true,
        slidesPerRow: 6,
        responsive: [
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    row: 1,
                    slidesPerRow: 8,
                }
            }
        ]
    };

    let slider = useRef<Slider | null>(null);

    const windowWidth = window.innerWidth;

    return (
        <>
            <FaceBlock title={titleKitchen} image={kitchen_back}/>
            <HomeBlockTemplate title="">
                <div className={styles["kitchen-container"]}>
                    {windowWidth > 360 ?
                        <div className={styles["meal-time-block"]}>
                            <div className={styles["meal-time-title"]}>Расписание</div>
                            <div className={styles["meal-time"]}>
                                {meal && meal.map((el: IMeal) => {
                                    return (
                                        <MealTimeCard
                                            key={el.id}
                                            id={el.id}
                                            time={el.time}
                                            title={el.title}
                                            price={el.price}
                                            cur_rate={cur_rate}
                                            cur_scale={cur_scale}
                                        />
                                    );
                                })
                                }
                            </div>
                        </div>
                        : <div className={styles["meal-time-block"]}>
                            {meal &&
                                <LittleKitchenCard data={meal}
                                                   cur_rate={rate.cur_rate}
                                                   cur_scale={rate.cur_scale}
                                />}

                        </div>
                    }
                    <div className={styles["meal-slider-block"]}>
                        <div className={styles["meal-slider-title"]}>У нас можно попробовать</div>
                        <div className={styles["meal-slider"]}>
                            {dishes ? (
                                <div>
                                    <Carousel settings={kitchenCardsSettings} slider={slider}>
                                        {dishes.map((el) => (
                                            <KitchenCard
                                                key={el.id}
                                                id={el.id}
                                                photo={el.photo}
                                                title={el.title}
                                                description={el.description}
                                            />
                                        ))}
                                    </Carousel>
                                </div>
                            ) : (
                                <div className={styles.preload}>
                                    <BeatLoader color="#583711"/>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </HomeBlockTemplate>
            <HomeBlockTemplate>
                <ToFormButton value={title} buttonValue={nameForSearchButton}/>
            </HomeBlockTemplate>
        </>
    );
};