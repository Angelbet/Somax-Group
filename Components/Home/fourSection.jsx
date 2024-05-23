import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

// Images
import map from '@/public/map.jpeg'
import deskdot from '@/public/deskdot.png'
import map_1 from '@/public/world/1__panama.png'
import map_2 from '@/public/world/2__colombia.png'
import map_3 from '@/public/world/3__brasil.png'
import map_4 from '@/public/world/4__usa.png'
import map_5 from '@/public/world/5__nigeria.png'
import map_6 from '@/public/world/6__grecia.png'
import map_7 from '@/public/world/7__turquia.png'
import map_8 from '@/public/world/8__italia.png'
import map_9 from '@/public/world/9__egypt.png'
import map_10 from '@/public/world/10__thailandia.png'
import map_11 from '@/public/world/11__runido.png'
import map_12 from '@/public/world/12__korea.png'
import map_13 from '@/public/world/13__españa.png'
import map_14 from '@/public/world/14__venezuela.png'
import map_15 from '@/public/world/15__china.png'

// Styles
import style from '@/styles/Home.module.scss'

// Gsap
import { gsap } from 'gsap'

function FourSection() {

    const baseImageRef = useRef(null);
    const imageRef = useRef(null);
    const secondImageRef = useRef(null);

    const thirdImageRef = useRef(null);
    const fourthImageRef = useRef(null);
    const fifthImageRef = useRef(null);
    const sixImageRef = useRef(null);
    const sevenImageRef = useRef(null);
    const eightImageRef = useRef(null);
    const nineImageRef = useRef(null);
    const tenImageRef = useRef(null);
    const elevenImageRef = useRef(null);
    const twelveImageRef = useRef(null);
    const thirdeImageRef = useRef(null);
    const fourteenmageRef = useRef(null);
    const fiveImageRef = useRef(null);



    const textRef = useRef(null);

    useEffect(() => {
        gsap.set(imageRef.current, { autoAlpha: 0 });
        gsap.set(secondImageRef.current, { autoAlpha: 0 });
        gsap.set(thirdImageRef.current, { autoAlpha: 0 });
        gsap.set(fourthImageRef.current, { autoAlpha: 0 });
        gsap.set(fifthImageRef.current, { autoAlpha: 0 });

        gsap.set(sixImageRef.current, { autoAlpha: 0 });
        gsap.set(sevenImageRef.current, { autoAlpha: 0 });
        gsap.set(eightImageRef.current, { autoAlpha: 0 });
        gsap.set(nineImageRef.current, { autoAlpha: 0 });
        gsap.set(tenImageRef.current, { autoAlpha: 0 });
        gsap.set(elevenImageRef.current, { autoAlpha: 0 });
        gsap.set(twelveImageRef.current, { autoAlpha: 0 });
        gsap.set(thirdeImageRef.current, { autoAlpha: 0 });
        gsap.set(fourteenmageRef.current, { autoAlpha: 0 });
        gsap.set(fiveImageRef.current, { autoAlpha: 0 });



        gsap.set(textRef.current, { duration: 0.4, color: "black" });
        gsap.set(baseImageRef.current, { autoAlpha: 1 }); // Asegura de que la imagen base se muestre
    }, []);

    const handleMouseEnter = (location) => {
        gsap.killTweensOf(textRef.current);
        switch (location) {
            case 'Panama':
                gsap.to(imageRef.current, { display: "block", duration: 1, autoAlpha: 1, zIndex: 1 });
                break;
            case 'Colombia':
                gsap.to(secondImageRef.current, { display: "block", duration: 1, autoAlpha: 1, zIndex: 1 });
                break;
            case 'Brasil':
                gsap.to(thirdImageRef.current, { display: "block", duration: 1, autoAlpha: 1, zIndex: 1 });
                break;
            case 'USA':
                gsap.to(fourthImageRef.current, { display: "block", duration: 1, autoAlpha: 1, zIndex: 1 });
                break;
            case 'Nigeria':
                gsap.to(fifthImageRef.current, { display: "block", duration: 1, autoAlpha: 1, zIndex: 1 });
                break;
            case 'Greece':
                gsap.to(sixImageRef.current, { display: "block", duration: 1, autoAlpha: 1, zIndex: 1 });
                break;
            case 'Turkey':
                gsap.to(sevenImageRef.current, { display: "block", duration: 1, autoAlpha: 1, zIndex: 1 });
                break;
            case 'Italy':
                gsap.to(eightImageRef.current, { display: "block", duration: 1, autoAlpha: 1, zIndex: 1 });
                break;
            case 'Egypt':
                gsap.to(nineImageRef.current, { display: "block", duration: 1, autoAlpha: 1, zIndex: 1 });
                break;
            case 'Thailand':
                gsap.to(tenImageRef.current, { display: "block", duration: 1, autoAlpha: 1, zIndex: 1 });
                break;
            case 'Kingdom':
                gsap.to(elevenImageRef.current, { display: "block", duration: 1, autoAlpha: 1, zIndex: 1 });
                break;
            case 'Korea':
                gsap.to(twelveImageRef.current, { display: "block", duration: 1, autoAlpha: 1, zIndex: 1 });
                break;
            case 'Spain':
                gsap.to(thirdeImageRef.current, { display: "block", duration: 1, autoAlpha: 1, zIndex: 1 });
                break;
            case 'Venezuela':
                gsap.to(fourteenmageRef.current, { display: "block", duration: 1, autoAlpha: 1, zIndex: 1 });
                break;
            case 'China':
                gsap.to(fiveImageRef.current, { display: "block", duration: 1, autoAlpha: 1, zIndex: 1 });
                break;
            default:
                // Caso por defecto si la ubicación no coincide con ninguna de las anteriores
                break;
        }
        gsap.to(baseImageRef.current, { display: "none", duration: 1, autoAlpha: 0 });
        gsap.to(textRef.current, { duration: 0.4, color: "white" });
    };

    const handleMouseLeave = () => {
        gsap.killTweensOf(textRef.current);
        gsap.to(imageRef.current, { display: "none", duration: 1, autoAlpha: 0, zIndex: 1 });
        gsap.to(secondImageRef.current, { display: "none", duration: 1, autoAlpha: 0, zIndex: 1 });
        gsap.to(thirdImageRef.current, { display: "none", duration: 1, autoAlpha: 0, zIndex: 1 });
        gsap.to(fourthImageRef.current, { display: "none", duration: 1, autoAlpha: 0, zIndex: 1 });
        gsap.to(fifthImageRef.current, { display: "none", duration: 1, autoAlpha: 0, zIndex: 1 });
        gsap.to(sixImageRef.current, { display: "none", duration: 1, autoAlpha: 0, zIndex: 1 });
        gsap.to(sevenImageRef.current, { display: "none", duration: 1, autoAlpha: 0, zIndex: 1 });
        gsap.to(eightImageRef.current, { display: "none", duration: 1, autoAlpha: 0, zIndex: 1 });
        gsap.to(nineImageRef.current, { display: "none", duration: 1, autoAlpha: 0, zIndex: 1 });
        gsap.to(tenImageRef.current, { display: "none", duration: 1, autoAlpha: 0, zIndex: 1 });
        gsap.to(elevenImageRef.current, { display: "none", duration: 1, autoAlpha: 0, zIndex: 1 });
        gsap.to(twelveImageRef.current, { display: "none", duration: 1, autoAlpha: 0, zIndex: 1 });
        gsap.to(thirdeImageRef.current, { display: "none", duration: 1, autoAlpha: 0, zIndex: 1 });
        gsap.to(fourteenmageRef.current, { display: "none", duration: 1, autoAlpha: 0, zIndex: 1 });
        gsap.to(fiveImageRef.current, { display: "none", duration: 1, autoAlpha: 0, zIndex: 1 });

        gsap.set(textRef.current, { duration: 0.4, color: "black" });
        gsap.to(baseImageRef.current, { display: "block", duration: 1, autoAlpha: 1 }); // Muestra la imagen base
    };


    const targetRef = useRef(null);
    const targetRef_2 = useRef(null);
    const targetRef_3 = useRef(null);
    const targetRef_4 = useRef(null);
    const targetRef_5 = useRef(null);
    const targetRef_6 = useRef(null);
    const targetRef_7 = useRef(null);
    const targetRef_8 = useRef(null);
    const targetRef_9 = useRef(null);
    const targetRef_10 = useRef(null);
    const targetRef_11 = useRef(null);
    const targetRef_12 = useRef(null);
    const targetRef_13 = useRef(null);
    const targetRef_14 = useRef(null);
    const targetRef_15 = useRef(null);
    const targetRef_16 = useRef(null);

    const [showTooltip, setShowTooltip] = useState(false);
    const [showTooltip_2, setShowTooltip_2] = useState(false);
    const [showTooltip_3, setShowTooltip_3] = useState(false);
    const [showTooltip_4, setShowTooltip_4] = useState(false);
    const [showTooltip_5, setShowTooltip_5] = useState(false);
    const [showTooltip_6, setShowTooltip_6] = useState(false);
    const [showTooltip_7, setShowTooltip_7] = useState(false);
    const [showTooltip_8, setShowTooltip_8] = useState(false);
    const [showTooltip_9, setShowTooltip_9] = useState(false);
    const [showTooltip_10, setShowTooltip_10] = useState(false);
    const [showTooltip_11, setShowTooltip_11] = useState(false);
    const [showTooltip_12, setShowTooltip_12] = useState(false);
    const [showTooltip_13, setShowTooltip_13] = useState(false);
    const [showTooltip_14, setShowTooltip_14] = useState(false);
    const [showTooltip_15, setShowTooltip_15] = useState(false);
    const [showTooltip_16, setShowTooltip_16] = useState(false);


    const handleMouseEnterTooltip = () => {
        gsap.to(targetRef.current, { scale: 1.2, duration: 0.2, ease: "power1.out" });
        setShowTooltip(true);
    };
    const handleMouseLeaveTooltip = () => {
        gsap.to(targetRef.current, { scale: 1, duration: 0.2, ease: "power1.in" });
        setShowTooltip(false);
    };
    const handleMouseEnterTooltip_2 = () => {
        gsap.to(targetRef_2.current, { scale: 1.2, duration: 0.2, ease: "power1.out" });
        setShowTooltip_2(true);
    };
    const handleMouseLeaveTooltip_2 = () => {
        gsap.to(targetRef_2.current, { scale: 1, duration: 0.2, ease: "power1.in" });
        setShowTooltip_2(false);
    };
    const handleMouseEnterTooltip_3 = () => {
        gsap.to(targetRef_3.current, { scale: 1.2, duration: 0.2, ease: "power1.out" });
        setShowTooltip_3(true);
    };
    const handleMouseLeaveTooltip_3 = () => {
        gsap.to(targetRef_3.current, { scale: 1, duration: 0.2, ease: "power1.in" });
        setShowTooltip_3(false);
    };
    const handleMouseEnterTooltip_4 = () => {
        gsap.to(targetRef_4.current, { scale: 1.2, duration: 0.2, ease: "power1.out" });
        setShowTooltip_4(true);
    };
    const handleMouseLeaveTooltip_4 = () => {
        gsap.to(targetRef_4.current, { scale: 1, duration: 0.2, ease: "power1.in" });
        setShowTooltip_4(false);
    };
    const handleMouseEnterTooltip_5 = () => {
        gsap.to(targetRef_5.current, { scale: 1.2, duration: 0.2, ease: "power1.out" });
        setShowTooltip_5(true);
    };
    const handleMouseLeaveTooltip_5 = () => {
        gsap.to(targetRef_5.current, { scale: 1, duration: 0.2, ease: "power1.in" });
        setShowTooltip_5(false);
    };
    const handleMouseEnterTooltip_6 = () => {
        gsap.to(targetRef_6.current, { scale: 1.2, duration: 0.2, ease: "power1.out" });
        setShowTooltip_6(true);
    };
    const handleMouseLeaveTooltip_6 = () => {
        gsap.to(targetRef_6.current, { scale: 1, duration: 0.2, ease: "power1.in" });
        setShowTooltip_6(false);
    };
    const handleMouseEnterTooltip_7 = () => {
        gsap.to(targetRef_7.current, { scale: 1.2, duration: 0.2, ease: "power1.out" });
        setShowTooltip_7(true);
    };
    const handleMouseLeaveTooltip_7 = () => {
        gsap.to(targetRef_7.current, { scale: 1, duration: 0.2, ease: "power1.in" });
        setShowTooltip_7(false);
    };
    const handleMouseEnterTooltip_8 = () => {
        gsap.to(targetRef_8.current, { scale: 1.2, duration: 0.2, ease: "power1.out" });
        setShowTooltip_8(true);
    };
    const handleMouseLeaveTooltip_8 = () => {
        gsap.to(targetRef_8.current, { scale: 1, duration: 0.2, ease: "power1.in" });
        setShowTooltip_8(false);
    };
    const handleMouseEnterTooltip_9 = () => {
        gsap.to(targetRef_9.current, { scale: 1.2, duration: 0.2, ease: "power1.out" });
        setShowTooltip_9(true);
    };
    const handleMouseLeaveTooltip_9 = () => {
        gsap.to(targetRef_9.current, { scale: 1, duration: 0.2, ease: "power1.in" });
        setShowTooltip_9(false);
    };
    const handleMouseEnterTooltip_10 = () => {
        gsap.to(targetRef_10.current, { scale: 1.2, duration: 0.2, ease: "power1.out" });
        setShowTooltip_10(true);
    };
    const handleMouseLeaveTooltip_10 = () => {
        gsap.to(targetRef_10.current, { scale: 1, duration: 0.2, ease: "power1.in" });
        setShowTooltip_10(false);
    };
    const handleMouseEnterTooltip_11 = () => {
        gsap.to(targetRef_11.current, { scale: 1.2, duration: 0.2, ease: "power1.out" });
        setShowTooltip_11(true);
    };
    const handleMouseLeaveTooltip_11 = () => {
        gsap.to(targetRef_11.current, { scale: 1, duration: 0.2, ease: "power1.in" });
        setShowTooltip_11(false);
    };
    const handleMouseEnterTooltip_12 = () => {
        gsap.to(targetRef_12.current, { scale: 1.2, duration: 0.2, ease: "power1.out" });
        setShowTooltip_12(true);
    };
    const handleMouseLeaveTooltip_12 = () => {
        gsap.to(targetRef_12.current, { scale: 1, duration: 0.2, ease: "power1.in" });
        setShowTooltip_12(false);
    };
    const handleMouseEnterTooltip_13 = () => {
        gsap.to(targetRef_13.current, { scale: 1.2, duration: 0.2, ease: "power1.out" });
        setShowTooltip_13(true);
    };
    const handleMouseLeaveTooltip_13 = () => {
        gsap.to(targetRef_13.current, { scale: 1, duration: 0.2, ease: "power1.in" });
        setShowTooltip_13(false);
    };
    const handleMouseEnterTooltip_14 = () => {
        gsap.to(targetRef_14.current, { scale: 1.2, duration: 0.2, ease: "power1.out" });
        setShowTooltip_14(true);
    };
    const handleMouseLeaveTooltip_14 = () => {
        gsap.to(targetRef_14.current, { scale: 1, duration: 0.2, ease: "power1.in" });
        setShowTooltip_14(false);
    };
    const handleMouseEnterTooltip_15 = () => {
        gsap.to(targetRef_15.current, { scale: 1.2, duration: 0.2, ease: "power1.out" });
        setShowTooltip_15(true);
    };
    const handleMouseLeaveTooltip_15 = () => {
        gsap.to(targetRef_15.current, { scale: 1, duration: 0.2, ease: "power1.in" });
        setShowTooltip_15(false);
    };
    const handleMouseEnterTooltip_16 = () => {
        gsap.to(targetRef_16.current, { scale: 1.2, duration: 0.2, ease: "power1.out" });
        setShowTooltip_16(true);
    };
    const handleMouseLeaveTooltip_16 = () => {
        gsap.to(targetRef_16.current, { scale: 1, duration: 0.2, ease: "power1.in" });
        setShowTooltip_16(false);
    };


    return (
        <>
            <section className={`${style.scroll_sec} ${style.bgclra} ${style.pb_80}`} id={style["sec1"]}>
                <Image
                    src={deskdot}
                    alt="deskdot"
                    className={style.deskdot}
                />
                <div className={`${style.container} ${style.homepage_container} ${style.pl_50}`}>
                    <div className={style.row}>
                        <div className={`${style.col_sm_7} ${style.pt_80}`}>
                            <div className={`${style.main_about} ${style.main_global} ${style.fl_wrap} ${style.pl_30}`}>
                                <h2 className={`${style.clra} ${style.p_0}`}>SOMAX GROUP</h2>
                                <h2>AROUND THE WORLD</h2>
                                <p className={style.ptt}>
                                    Somax Group has alliances and commercial partners in some countries,
                                    throughout 4 continents, which allows us to offer a global service of quality,
                                    efficiency and reliability, 24/7.
                                </p>
                                <p className={style.branches}>
                                    <a
                                        href="#"
                                        onMouseEnter={() => handleMouseEnter('Panama')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        Panama
                                    </a>{" "}

                                    |{" "}
                                    <a
                                        href="#"
                                        onMouseEnter={() => handleMouseEnter('Colombia')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        Colombia
                                    </a>{" "}
                                    |{" "}
                                    <a
                                        href="#"
                                        onMouseEnter={() => handleMouseEnter('Brasil')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        Brasil
                                    </a>{" "}
                                    |{" "}
                                    <a
                                        href="#"
                                        onMouseEnter={() => handleMouseEnter('USA')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        USA
                                    </a>{" "}
                                    |{" "}
                                    <a
                                        href="#"
                                        onMouseEnter={() => handleMouseEnter('Nigeria')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        Nigeria
                                    </a>{" "}
                                    | <a
                                        href="#"
                                        onMouseEnter={() => handleMouseEnter('Greece')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        Greece
                                    </a>{" "}
                                    |{" "}
                                    <a
                                        href="#"
                                        onMouseEnter={() => handleMouseEnter('Turkey')}
                                        onMouseLeave={handleMouseLeave}
                                    >Turkey
                                    </a>{" "}
                                    |{" "}
                                    <a
                                        href="#"
                                        onMouseEnter={() => handleMouseEnter('Italy')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        Italy
                                    </a>{" "}
                                    |{" "}
                                    <a
                                        href="#"
                                        onMouseEnter={() => handleMouseEnter('Egypt')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        Egypt
                                    </a>{" "}
                                    | <a
                                        href="#"
                                        onMouseEnter={() => handleMouseEnter('Thailand')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        Thailand
                                    </a>{" "}
                                    |<a
                                        href="#"
                                        onMouseEnter={() => handleMouseEnter('Kingdom')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        United Kingdom
                                    </a>{" "}
                                    |
                                    <a
                                        href="#"
                                        onMouseEnter={() => handleMouseEnter('Korea')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        South Korea
                                    </a>{" "}
                                    |{" "}
                                    <a
                                        href="#"
                                        onMouseEnter={() => handleMouseEnter('Spain')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        Spain
                                    </a>{" "}
                                    |{" "}
                                    <a
                                        href="#"
                                        onMouseEnter={() => handleMouseEnter('Venezuela')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        Venezuela
                                    </a>
                                    |{" "}
                                    <a
                                        href="#"
                                        onMouseEnter={() => handleMouseEnter('China')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        China
                                    </a>
                                    |{" "}
                                    <a
                                        href="#"
                                        onMouseEnter={() => handleMouseEnter('Portugal')}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        Portugal
                                    </a>
                                </p>
                                <p>
                                    Our associates are internationally certificated in ship brokerage, audits,
                                    inspections, supervision and certification of cargo, trading on different
                                    commodities.
                                </p>
                                {/* <a
                                    href="https://www.cssgroupsite.com/contact-us" className="abt-cnt">
                                    <button className={style.learn_more22}>
                                        <span className={style.circlee22} aria-hidden="true" />
                                        <span className={style.button_text2}>Contact Us</span>
                                    </button>
                                </a> */}
                            </div>
                        </div>
                        {/* <div className={`${style.col_sm_5} ${style.pt_100}`}>
                            <div className={`${style.blog_media} ${style.fl_wrap} ${style.pttlr}`}>
                                <div className={style.single_slider_wrap}>
                                    <div className={`${style.single_slider} ${style.fl_wrap}`}>
                                        <div
                                            className={`${style.swiper_container} ${style.swiper_container_horizontal} ${style.swiper_container_autoheight}`}
                                        >
                                            <div
                                                className={`${style.swiper_wrapper} ${style.lightgallery}`}
                                                style={{
                                                    transitionDuration: "0ms",
                                                    transform: "translate3d(0px, 0px, 0px)",
                                                    // height: 587
                                                    height: 386
                                                }}
                                            >
                                                <div
                                                    className={`${style.swiper_slide} ${style.hov_zoom} ${style.swiper_slide_duplicate} ${style.swiper_slide_prev}`}
                                                    // style={{ width: 387 }}
                                                    ref={baseImageRef}
                                                >
                                                    <a href="#">
                                                        <Image
                                                            src={map}
                                                            alt="location"
                                                            width="591px"
                                                            height="591px"
                                                        />
                                                    </a>
                                                </div>

                                                <div
                                                    className={`${style.swiper_slide} ${style.hov_zoom} ${style.swiper_slide_duplicate} ${style.swiper_slide_prev}`}
                                                    ref={imageRef}
                                                >
                                                    <a href="#">
                                                        <Image
                                                            src={map_1}
                                                            alt="location"
                                                            width={591}
                                                            height={591}
                                                        />
                                                    </a>
                                                </div>

                                                <div
                                                    className={`${style.swiper_slide} ${style.hov_zoom} ${style.swiper_slide_duplicate} ${style.swiper_slide_prev}`}
                                                    ref={secondImageRef}
                                                >
                                                    <a href="#">
                                                        <Image
                                                            src={map_2}
                                                            alt="location"
                                                            width={591}
                                                            height={591}
                                                        />
                                                    </a>
                                                </div>

                                                <div
                                                    className={`${style.swiper_slide} ${style.hov_zoom} ${style.swiper_slide_duplicate} ${style.swiper_slide_prev}`}
                                                    ref={thirdImageRef}
                                                >
                                                    <a href="#">
                                                        <Image
                                                            src={map_3}
                                                            alt="location"
                                                            width={591}
                                                            height={591}
                                                        />
                                                    </a>
                                                </div>

                                                <div
                                                    className={`${style.swiper_slide} ${style.hov_zoom} ${style.swiper_slide_duplicate} ${style.swiper_slide_prev}`}
                                                    ref={fourthImageRef}
                                                >
                                                    <a href="#">
                                                        <Image
                                                            src={map_4}
                                                            alt="location"
                                                            width={591}
                                                            height={591}
                                                        />
                                                    </a>
                                                </div>

                                                <div
                                                    className={`${style.swiper_slide} ${style.hov_zoom} ${style.swiper_slide_duplicate} ${style.swiper_slide_prev}`}
                                                    ref={fifthImageRef}
                                                >
                                                    <a href="#">
                                                        <Image
                                                            src={map_5}
                                                            alt="location"
                                                            width={591}
                                                            height={591}
                                                        />
                                                    </a>
                                                </div>

                                                <div
                                                    className={`${style.swiper_slide} ${style.hov_zoom} ${style.swiper_slide_duplicate} ${style.swiper_slide_prev}`}
                                                    ref={sixImageRef}
                                                >
                                                    <a href="#">
                                                        <Image
                                                            src={map_6}
                                                            alt="location"
                                                            width={591}
                                                            height={591}
                                                        />
                                                    </a>
                                                </div>

                                                <div
                                                    className={`${style.swiper_slide} ${style.hov_zoom} ${style.swiper_slide_duplicate} ${style.swiper_slide_prev}`}
                                                    ref={sevenImageRef}
                                                >
                                                    <a href="#">
                                                        <Image
                                                            src={map_7}
                                                            alt="location"
                                                            width={591}
                                                            height={591}
                                                        />
                                                    </a>
                                                </div>

                                                <div
                                                    className={`${style.swiper_slide} ${style.hov_zoom} ${style.swiper_slide_duplicate} ${style.swiper_slide_prev}`}
                                                    ref={eightImageRef}
                                                >
                                                    <a href="#">
                                                        <Image
                                                            src={map_8}
                                                            alt="location"
                                                            width={591}
                                                            height={591}
                                                        />
                                                    </a>
                                                </div>

                                                <div
                                                    className={`${style.swiper_slide} ${style.hov_zoom} ${style.swiper_slide_duplicate} ${style.swiper_slide_prev}`}
                                                    ref={nineImageRef}
                                                >
                                                    <a href="#">
                                                        <Image
                                                            src={map_9}
                                                            alt="location"
                                                            width={591}
                                                            height={591}
                                                        />
                                                    </a>
                                                </div>

                                                <div
                                                    className={`${style.swiper_slide} ${style.hov_zoom} ${style.swiper_slide_duplicate} ${style.swiper_slide_prev}`}
                                                    ref={tenImageRef}
                                                >
                                                    <a href="#">
                                                        <Image
                                                            src={map_10}
                                                            alt="location"
                                                            width={591}
                                                            height={591}
                                                        />
                                                    </a>
                                                </div>

                                                <div
                                                    className={`${style.swiper_slide} ${style.hov_zoom} ${style.swiper_slide_duplicate} ${style.swiper_slide_prev}`}
                                                    ref={elevenImageRef}
                                                >
                                                    <a href="#">
                                                        <Image
                                                            src={map_11}
                                                            alt="location"
                                                            width={591}
                                                            height={591}
                                                        />
                                                    </a>
                                                </div>

                                                <div
                                                    className={`${style.swiper_slide} ${style.hov_zoom} ${style.swiper_slide_duplicate} ${style.swiper_slide_prev}`}
                                                    ref={twelveImageRef}
                                                >
                                                    <a href="#">
                                                        <Image
                                                            src={map_12}
                                                            alt="location"
                                                            width={591}
                                                            height={591}
                                                        />
                                                    </a>
                                                </div>

                                                <div
                                                    className={`${style.swiper_slide} ${style.hov_zoom} ${style.swiper_slide_duplicate} ${style.swiper_slide_prev}`}
                                                    ref={thirdeImageRef}
                                                >
                                                    <a href="#">
                                                        <Image
                                                            src={map_13}
                                                            alt="location"
                                                            width={591}
                                                            height={591}
                                                        />
                                                    </a>
                                                </div>

                                                <div
                                                    className={`${style.swiper_slide} ${style.hov_zoom} ${style.swiper_slide_duplicate} ${style.swiper_slide_prev}`}
                                                    ref={fourteenmageRef}
                                                >
                                                    <a href="#">
                                                        <Image
                                                            src={map_14}
                                                            alt="location"
                                                            width={591}
                                                            height={591}
                                                        />
                                                    </a>
                                                </div>

                                                <div
                                                    className={`${style.swiper_slide} ${style.hov_zoom} ${style.swiper_slide_duplicate} ${style.swiper_slide_prev}`}
                                                    ref={fiveImageRef}
                                                >
                                                    <a href="#">
                                                        <Image
                                                            src={map_15}
                                                            alt="location"
                                                            width={591}
                                                            height={591}
                                                        />
                                                    </a>
                                                </div>

                                            </div>
                                            <span
                                                className={style.swiper_notification}
                                                aria-live="assertive"
                                                aria-atomic="true"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    <div className={style.row}>
                        <div className={style.distribution_map} style={{ overflow: "hidden", position: "relative" }}>
                            <Image
                                src={map}
                                alt="Map World"
                                style={{ objectFit: "cover", position: "abosolute", width: "100%", height: "100%", left: 0, top: 0 }}
                            />

                            <div
                                className={`${style.target} ${style.target_1}`}
                                ref={targetRef}
                                onMouseEnter={handleMouseEnterTooltip}
                                onMouseLeave={handleMouseLeaveTooltip}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="#9b9b9b"
                                    className="bi bi-geo-alt-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10m0-7a3 3 0 110-6 3 3 0 010 6" />
                                </svg>
                            </div>
                            <div
                                className={`${style.target} ${style.target_2}`}
                                ref={targetRef_2}
                                onMouseEnter={handleMouseEnterTooltip_2}
                                onMouseLeave={handleMouseLeaveTooltip_2}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="#f89d13"
                                    className="bi bi-geo-alt-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10m0-7a3 3 0 110-6 3 3 0 010 6" />
                                </svg>
                            </div>
                            <div
                                className={`${style.target} ${style.target_3}`}
                                ref={targetRef_3}
                                onMouseEnter={handleMouseEnterTooltip_3}
                                onMouseLeave={handleMouseLeaveTooltip_3}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="#f89d13"
                                    className="bi bi-geo-alt-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10m0-7a3 3 0 110-6 3 3 0 010 6" />
                                </svg>
                            </div>
                            <div
                                className={`${style.target} ${style.target_4}`}
                                ref={targetRef_4}
                                onMouseEnter={handleMouseEnterTooltip_4}
                                onMouseLeave={handleMouseLeaveTooltip_4}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="#f89d13"
                                    className="bi bi-geo-alt-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10m0-7a3 3 0 110-6 3 3 0 010 6" />
                                </svg>
                            </div>
                            <div
                                className={`${style.target} ${style.target_5}`}
                                ref={targetRef_5}
                                onMouseEnter={handleMouseEnterTooltip_5}
                                onMouseLeave={handleMouseLeaveTooltip_5}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="#f89d13"
                                    className="bi bi-geo-alt-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10m0-7a3 3 0 110-6 3 3 0 010 6" />
                                </svg>
                            </div>
                            <div
                                className={`${style.target} ${style.target_6}`}
                                ref={targetRef_6}
                                onMouseEnter={handleMouseEnterTooltip_6}
                                onMouseLeave={handleMouseLeaveTooltip_6}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="#f89d13"
                                    className="bi bi-geo-alt-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10m0-7a3 3 0 110-6 3 3 0 010 6" />
                                </svg>
                            </div>
                            <div
                                className={`${style.target} ${style.target_7}`}
                                ref={targetRef_7}
                                onMouseEnter={handleMouseEnterTooltip_7}
                                onMouseLeave={handleMouseLeaveTooltip_7}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="#f89d13"
                                    className="bi bi-geo-alt-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10m0-7a3 3 0 110-6 3 3 0 010 6" />
                                </svg>
                            </div>
                            <div
                                className={`${style.target} ${style.target_8}`}
                                ref={targetRef_8}
                                onMouseEnter={handleMouseEnterTooltip_8}
                                onMouseLeave={handleMouseLeaveTooltip_8}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="#f89d13"
                                    className="bi bi-geo-alt-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10m0-7a3 3 0 110-6 3 3 0 010 6" />
                                </svg>
                            </div>
                            <div
                                className={`${style.target} ${style.target_9}`}
                                ref={targetRef_9}
                                onMouseEnter={handleMouseEnterTooltip_9}
                                onMouseLeave={handleMouseLeaveTooltip_9}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="#f89d13"
                                    className="bi bi-geo-alt-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10m0-7a3 3 0 110-6 3 3 0 010 6" />
                                </svg>
                            </div>
                            <div
                                className={`${style.target} ${style.target_10}`}
                                ref={targetRef_10}
                                onMouseEnter={handleMouseEnterTooltip_10}
                                onMouseLeave={handleMouseLeaveTooltip_10}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="#f89d13"
                                    className="bi bi-geo-alt-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10m0-7a3 3 0 110-6 3 3 0 010 6" />
                                </svg>
                            </div>
                            <div
                                className={`${style.target} ${style.target_11}`}
                                ref={targetRef_11}
                                onMouseEnter={handleMouseEnterTooltip_11}
                                onMouseLeave={handleMouseLeaveTooltip_11}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="#f89d13"
                                    className="bi bi-geo-alt-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10m0-7a3 3 0 110-6 3 3 0 010 6" />
                                </svg>
                            </div>
                            <div
                                className={`${style.target} ${style.target_12}`}
                                ref={targetRef_12}
                                onMouseEnter={handleMouseEnterTooltip_12}
                                onMouseLeave={handleMouseLeaveTooltip_12}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="#f89d13"
                                    className="bi bi-geo-alt-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10m0-7a3 3 0 110-6 3 3 0 010 6" />
                                </svg>
                            </div>
                            <div
                                className={`${style.target} ${style.target_13}`}
                                ref={targetRef_13}
                                onMouseEnter={handleMouseEnterTooltip_13}
                                onMouseLeave={handleMouseLeaveTooltip_13}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="#9b9b9b"
                                    className="bi bi-geo-alt-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10m0-7a3 3 0 110-6 3 3 0 010 6" />
                                </svg>
                            </div>
                            <div
                                className={`${style.target} ${style.target_14}`}
                                ref={targetRef_14}
                                onMouseEnter={handleMouseEnterTooltip_14}
                                onMouseLeave={handleMouseLeaveTooltip_14}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="#f89d13"
                                    className="bi bi-geo-alt-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10m0-7a3 3 0 110-6 3 3 0 010 6" />
                                </svg>
                            </div>
                            <div
                                className={`${style.target} ${style.target_15}`}
                                ref={targetRef_15}
                                onMouseEnter={handleMouseEnterTooltip_15}
                                onMouseLeave={handleMouseLeaveTooltip_15}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="#f89d13"
                                    className="bi bi-geo-alt-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10m0-7a3 3 0 110-6 3 3 0 010 6" />
                                </svg>
                            </div>
                            <div
                                className={`${style.target} ${style.target_16}`}
                                ref={targetRef_16}
                                onMouseEnter={handleMouseEnterTooltip_16}
                                onMouseLeave={handleMouseLeaveTooltip_16}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="#9b9b9b"
                                    className="bi bi-geo-alt-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10m0-7a3 3 0 110-6 3 3 0 010 6" />
                                </svg>
                            </div>


                            {showTooltip && (
                                <div className={`${style.imp_tooltip} ${style.imp_tooltip_1}`}>
                                    <div
                                        style={{ borderTopColor: "#f89d13" }}
                                    />
                                    <div className={style.imp_tooltip_plain_text} style={{ color: "#ffffff" }}>
                                        Panama
                                    </div>
                                </div>
                            )}
                            {showTooltip_2 && (
                                <div className={`${style.imp_tooltip} ${style.imp_tooltip_2}`}>
                                    <div
                                        style={{ borderTopColor: "#f89d13" }}
                                    />
                                    <div className={style.imp_tooltip_plain_text} style={{ color: "#ffffff" }}>
                                        Colombia
                                    </div>
                                </div>
                            )}
                            {showTooltip_3 && (
                                <div className={`${style.imp_tooltip} ${style.imp_tooltip_3}`}>
                                    <div
                                        style={{ borderTopColor: "#f89d13" }}
                                    />
                                    <div className={style.imp_tooltip_plain_text} style={{ color: "#ffffff" }}>
                                        Brasil
                                    </div>
                                </div>
                            )}
                            {showTooltip_4 && (
                                <div className={`${style.imp_tooltip} ${style.imp_tooltip_4}`}>
                                    <div
                                        style={{ borderTopColor: "#f89d13" }}
                                    />
                                    <div className={style.imp_tooltip_plain_text} style={{ color: "#ffffff" }}>
                                        USA
                                    </div>
                                </div>
                            )}
                            {showTooltip_5 && (
                                <div className={`${style.imp_tooltip} ${style.imp_tooltip_5}`}>
                                    <div
                                        style={{ borderTopColor: "#f89d13" }}
                                    />
                                    <div className={style.imp_tooltip_plain_text} style={{ color: "#ffffff" }}>
                                        Nigeria
                                    </div>
                                </div>
                            )}
                            {showTooltip_6 && (
                                <div className={`${style.imp_tooltip} ${style.imp_tooltip_6}`}>
                                    <div
                                        style={{ borderTopColor: "#f89d13" }}
                                    />
                                    <div className={style.imp_tooltip_plain_text} style={{ color: "#ffffff" }}>
                                        Greece
                                    </div>
                                </div>
                            )}
                            {showTooltip_7 && (
                                <div className={`${style.imp_tooltip} ${style.imp_tooltip_7}`}>
                                    <div
                                        style={{ borderTopColor: "#f89d13" }}
                                    />
                                    <div className={style.imp_tooltip_plain_text} style={{ color: "#ffffff" }}>
                                        Turkey
                                    </div>
                                </div>
                            )}
                            {showTooltip_8 && (
                                <div className={`${style.imp_tooltip} ${style.imp_tooltip_8}`}>
                                    <div
                                        style={{ borderTopColor: "#f89d13" }}
                                    />
                                    <div className={style.imp_tooltip_plain_text} style={{ color: "#ffffff" }}>
                                        Italy
                                    </div>
                                </div>
                            )}
                            {showTooltip_9 && (
                                <div className={`${style.imp_tooltip} ${style.imp_tooltip_9}`}>
                                    <div
                                        style={{ borderTopColor: "#f89d13" }}
                                    />
                                    <div className={style.imp_tooltip_plain_text} style={{ color: "#ffffff" }}>
                                        Thailand
                                    </div>
                                </div>
                            )}
                            {showTooltip_10 && (
                                <div className={`${style.imp_tooltip} ${style.imp_tooltip_10}`}>
                                    <div
                                        style={{ borderTopColor: "#f89d13" }}
                                    />
                                    <div className={style.imp_tooltip_plain_text} style={{ color: "#ffffff" }}>
                                        United Kingdom
                                    </div>
                                </div>
                            )}
                            {showTooltip_11 && (
                                <div className={`${style.imp_tooltip} ${style.imp_tooltip_11}`}>
                                    <div
                                        style={{ borderTopColor: "#f89d13" }}
                                    />
                                    <div className={style.imp_tooltip_plain_text} style={{ color: "#ffffff" }}>
                                        South Korea
                                    </div>
                                </div>
                            )}
                            {showTooltip_12 && (
                                <div className={`${style.imp_tooltip} ${style.imp_tooltip_12}`}>
                                    <div
                                        style={{ borderTopColor: "#f89d13" }}
                                    />
                                    <div className={style.imp_tooltip_plain_text} style={{ color: "#ffffff" }}>
                                        Spain
                                    </div>
                                </div>
                            )}
                            {showTooltip_13 && (
                                <div className={`${style.imp_tooltip} ${style.imp_tooltip_13}`}>
                                    <div
                                        style={{ borderTopColor: "#f89d13" }}
                                    />
                                    <div className={style.imp_tooltip_plain_text} style={{ color: "#ffffff" }}>
                                        Venezuela
                                    </div>
                                </div>
                            )}
                            {showTooltip_14 && (
                                <div className={`${style.imp_tooltip} ${style.imp_tooltip_14}`}>
                                    <div
                                        style={{ borderTopColor: "#f89d13" }}
                                    />
                                    <div className={style.imp_tooltip_plain_text} style={{ color: "#ffffff" }}>
                                        China
                                    </div>
                                </div>
                            )}
                            {showTooltip_15 && (
                                <div className={`${style.imp_tooltip} ${style.imp_tooltip_15}`}>
                                    <div
                                        style={{ borderTopColor: "#f89d13" }}
                                    />
                                    <div className={style.imp_tooltip_plain_text} style={{ color: "#ffffff" }}>
                                        Egypt
                                    </div>
                                </div>
                            )}
                            {showTooltip_16 && (
                                <div className={`${style.imp_tooltip} ${style.imp_tooltip_16}`}>
                                    <div
                                        style={{ borderTopColor: "#f89d13" }}
                                    />
                                    <div className={style.imp_tooltip_plain_text} style={{ color: "#ffffff" }}>
                                        Portugal
                                    </div>
                                </div>
                            )}

                        </div>


                    </div>

                </div>
            </section>
        </>
    )
}

export default FourSection