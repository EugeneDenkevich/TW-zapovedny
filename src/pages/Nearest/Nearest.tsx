import {ToFormButton} from "./../../components/buttons/toFormButton/ToFormButton";
import {HomeBlockTemplate} from "../../components/HomeBlockTemplate";
import {NearestCard} from "../../components/cards/NearestCard";
import {useGetNearestsQuery} from "../../reduxTools/requests/apiRequests";
import styles from "./Nearest.module.scss";
import {BeatLoader} from "react-spinners";
import Carousel from "../../components/Carousel";
import React, {createRef, useEffect, useRef} from "react";
import Slider from "react-slick";
import {log} from "util";

const Nearest = () => {
    const {data} = useGetNearestsQuery();

    const nearestCardsSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 900,
        slidesPerRow: 3,
        arrows: false,
        touchMove: false,
        dotsClass: 'custom_paging',
        customPaging: (i: number) => (
            <div>{i + 1}</div>
        ),
        appendDots: (dots: any) => <div className={styles.custom_padding}>
            <ul>{dots}</ul>
        </div>,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    rows: 1,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    rows: 3,
                    slidesPerRow: 1,
                }
            }
        ]
    };
    let slider = React.useRef<Slider | null>(null);
    // console.log(slider)

    // useEffect(() => {
    //     console.log(slider.current)
    // }, [slider])
    console.log (data)
    return (
        <>
            <HomeBlockTemplate title="">
                <div className={styles.container}>
                    {data ? (
                            <Carousel settings={nearestCardsSettings} slider={slider}>
                                {data.map((nearestCard) => (
                                    <NearestCard key={nearestCard.id} element={nearestCard}/>
                                ))}
                            </Carousel>
                        ) : (
                        <div className={styles.preload}>
                            <BeatLoader color="#583711"/>
                        </div>
                    )}
                </div>
            </HomeBlockTemplate>{" "}
            <HomeBlockTemplate>
                <ToFormButton value="Заповедный остров" buttonValue="Найти домик"/>
            </HomeBlockTemplate>
        </>
    );
};

export default Nearest;