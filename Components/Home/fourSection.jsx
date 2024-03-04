import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

// Images
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
                        <div className={`${style.col_sm_5} ${style.pt_100}`}>
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
                                                        <img
                                                            src="https://somaxgroup.com/assets/img/Home/world_map.png"
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
                                    {/* <div
                                        className={`${style.ss_slider_cont} ${style.ss_slider_cont_prev}`}
                                        tabIndex={0}
                                        role="button"
                                        aria-label="Previous slide"
                                    >
                                        <i className="fal fa-angle-left" />
                                    </div>
                                    <div
                                        className={`${style.ss_slider_cont} ${style.ss_slider_cont_next}`}
                                        tabIndex={0}
                                        role="button"
                                        aria-label="Next slide"
                                    >
                                        <i className="fal fa-angle-right" />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FourSection