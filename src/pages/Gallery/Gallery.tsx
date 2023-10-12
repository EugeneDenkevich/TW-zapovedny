import React, {useCallback, useEffect, useRef, useState} from "react";
import Slider from "react-slick";
import {BeatLoader} from "react-spinners";

import {ArrowNext} from "../../assets/icons/ArrowNext";
import {ArrowPrev} from "../../assets/icons/ArrowPrev";
import Carousel from "../../components/Carousel";
import {HomeBlockTemplate} from "../../components/HomeBlockTemplate";
import {useGetGalleryQuery} from "../../reduxTools/requests/apiRequests";

import {ToFormButton} from "./../../components/buttons/toFormButton/ToFormButton";

import styles from "./Gallery.module.scss";
import {DimensionsFunc} from "../Home/Home";

export const Gallery = () => {
    const {data} = useGetGalleryQuery();
    const [value, setValue] = useState<string | undefined>("");
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback((index: number) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    let photosData: string[] = []
    if (!value && data && data.length > 0) {
        data[0].photos.map((el) => photosData.push(el))
    } else {
        data && data.map((el) => {

            if (value === el.title) {
                el.photos.map((el) => photosData.push(el))
            }
        })
    }
    ;

    const bigGallerySettings = {
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 1,
        dots: true,
        infinite: false,
        speed: 900,
        slidesPerRow: 4,
        arrows: false,
        initialSlide: 0,
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                    rows: 1,
                    slidesPerRow: 3,
                    initialSlide: 0,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    touchMove: true,
                    // rows: 4,
                    slidesPerRow: 4,
                    initialSlide: 0,
                }
            }
        ]
    };

    const smallGallerySettings = {
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 1,
        dots: true,
        infinite: false,
        speed: 900,
        slidesPerRow: 1,
        arrows: false,
        initialSlide: 0,
        dotsClass: 'custom_paging',
        customPaging: (i: number) => (
            <div>{i + 1}</div>
        ),
        appendDots: (dots: any) => <div className={styles.custom_padding}>
            <ul>{dots}</ul>
        </div>,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                    rows: 1,
                    slidesPerRow: 2,
                    initialSlide: 0,

                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    rows: 4,
                    slidesPerRow: 1,
                    touchMove: false,
                    initialSlide: 0,
                }
            }
        ]
    }

    useEffect(() => {
        if (data && data.length > 0) {
            setValue(data[0].title);
        }
    }, [data]);

    function handleEsc(event: KeyboardEvent) {
        if (event.keyCode === 27) {
            setIsViewerOpen(false);
        }
    }

    let slider = useRef<Slider | null>(null);

    useEffect(() => {
        slider.current?.slickGoTo(0)
    }, [data])


    useEffect(() => {
        window.addEventListener("keydown", handleEsc);
        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, []);
    if (!data || data.length === 0) {
        return (
            <div className={styles.cap}>
                Скоро здесь будут наши фотографии
            </div>
        )
    }

    // const [dimensions, setDimensions] = useState({width: 0, height: 0});

    return (
        <>
            <HomeBlockTemplate title="">
                <div className={styles["tabs-grid"]}>
                    {data && data.length > 0 &&
                        data.map((el) => {
                            return (
                                <div
                                    key={el.id}
                                    className={
                                        value === el.title
                                            ? `${styles["tab-item"]} ${styles.active}`
                                            : styles["tab-item"]
                                    }
                                    onClick={
                                        () => {
                                            setValue(el.title)
                                            slider.current?.slickGoTo(0)
                                        }

                                    }
                                >
                                    {el.title}
                                </div>
                            );
                        })}
                </div>

                <div className={styles["images-grid"]}>
                    {photosData ? (
                        <div>
                            <Carousel
                                settings={
                                    photosData.length > 12
                                        ?
                                        bigGallerySettings
                                        : smallGallerySettings
                                }
                                slider={slider}
                            >
                                {photosData.map((src: string, index: number) => {
                                    // console.log("hello")
                                    const img = new Image();
                                    img.src = src;
                                    // console.log(img)
                                    // (img.width - img.height) >=0 ? (img.style.objectFit = "cover") : (img.style.objectFit = "contain")
                                    return (
                                        <div
                                            key={index.toString()}
                                            onClick={() => openImageViewer(index)}
                                            className={styles.image}
                                        >
                                            <img src={src} alt="photo"
                                                 className={
                                                     (img.width - img.height) >= 0 ? styles.cover : styles.contain
                                                 }
                                            />
                                        </div>
                                    )
                                })}
                            </Carousel>
                        </div>
                    ) : (
                        <div className={styles.preload}>
                            <BeatLoader color="#583711"/>
                        </div>
                    )}
                </div>
            </HomeBlockTemplate>
            <HomeBlockTemplate title="">
                <ToFormButton className={styles.form}/>
            </HomeBlockTemplate>
            {isViewerOpen && (
                <div className={styles["image-viewer"]}>
                    <div className={styles["photo-view"]}>
                        <img src={photosData[currentImage]} alt=""/>
                        <ArrowPrev
                            onClick={() => {
                                if (currentImage > 0) {
                                    setCurrentImage((prev) => --prev);
                                }
                            }}
                            className={styles["arrow-prev"]}
                        />
                        <ArrowNext
                            onClick={() => {
                                if (currentImage < photosData.length - 1) {
                                    setCurrentImage((prev) => ++prev);
                                }
                            }}
                            className={styles["arrow-next"]}
                        />
                        <div
                            onClick={() => setIsViewerOpen(false)}
                            className={styles["close"]}
                        >
                            &#10006;
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
