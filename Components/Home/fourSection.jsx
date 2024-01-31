import React from 'react'

// Styles
import style from '@/styles/Home.module.scss'

function FourSection() {
    return (
        <>
            <section className={`${style.scroll_sec} ${style.bgclra} ${style.pb_80}`} id={style["sec1"]}>
                <img
                    src="https://www.cssgroupsite.com/images/deskdot.webp"
                    alt="deskdot"
                    className={style.deskdot}
                />
                <div className={`${style.container} ${style.homepage_container} ${style.pl_50}`}>
                    <div className={style.row}>
                        <div className={`${style.col_sm_7} ${style.pt_80}`}>
                            <div className={`${style.main_about} ${style.main_global} ${style.fl_wrap} ${style.pl_30}`}>
                                <h2 className={`${style.clra} ${style.p_0}`}>Somax Group</h2>
                                <h2>Around the World</h2>
                                <p className={style.ptt}>
                                    Somax Group has alliances and commercial partners in some countries,
                                    throughout 4 continents, which allows us to offer a global service of quality,
                                    efficiency and reliability, 24/7.
                                </p>
                                <p className={style.branches}>
                                    <a href="https://www.cssgroupsite.com/location/css-dubai">Panama</a>{" "}
                                    |{" "}
                                    <a href="https://www.cssgroupsite.com/location/css-abudhabi">
                                        Colombia
                                    </a>{" "}
                                    |{" "}
                                    <a href="https://www.cssgroupsite.com/location/css-sharjah">
                                        Brasil
                                    </a>{" "}
                                    |{" "}
                                    <a href="https://www.cssgroupsite.com/location/css-ras-al-khaimah">
                                        USA
                                    </a>{" "}
                                    |{" "}
                                    <a href="https://www.cssgroupsite.com/location/css-bahrain">
                                        Nigeria
                                    </a>{" "}
                                    | <a href="https://www.cssgroupsite.com/location/css-oman">Greece</a>{" "}
                                    |{" "}
                                    <a href="https://www.cssgroupsite.com/location/css-qatar">Turkey</a>{" "}
                                    |{" "}
                                    <a href="https://www.cssgroupsite.com/location/css-saudiarabia">
                                        Italy
                                    </a>{" "}
                                    |{" "}
                                    <a href="https://www.cssgroupsite.com/location/css-kuwait">
                                        Egypt
                                    </a>{" "}
                                    | <a href="https://www.cssgroupsite.com/location/css-iraq">Thailand</a>{" "}
                                    |<a href="https://www.cssgroupsite.com/location/css-kenya">United Kingdom</a>{" "}
                                    |
                                    <a href="https://www.cssgroupsite.com/location/css-turkey">
                                    South Korea
                                    </a>{" "}
                                    |{" "}
                                    <a href="https://www.cssgroupsite.com/location/css-india">Spain</a>{" "}
                                    |{" "}
                                    <a href="https://www.cssgroupsite.com/location/css-srilanka">
                                        Venezuela
                                    </a>
                                    |{" "}
                                    <a href="https://www.cssgroupsite.com/location/css-srilanka">
                                        China
                                    </a>
                                </p>
                                <p>
                                    Our associates are internationally certificated in ship brokerage, audits,
                                    inspections, supervision and certification of cargo, trading on different
                                    commodities.
                                </p>
                                <a href="https://www.cssgroupsite.com/contact-us" className="abt-cnt">
                                    <button className={style.learn_more22}>
                                        <span className={style.circlee22} aria-hidden="true" />
                                        <span className={style.button_text2}>Contact Us</span>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className={`${style.col_sm_5} ${style.pt_100}`}>
                            <div className={`${style.blog_media} ${style.fl_wrap} ${style.pttlr}`}>
                                <div className={style.single_slider_wrap}>
                                    <div className={`${style.single_slider} ${style.fl_wrap}`}>
                                        <div
                                            className={`${style.swiper_container} ${style.swiper_container_horizontal} ${style.swiper_container_autoheight}`}
                                            style={{ cursor: "grab" }}
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
                                                >
                                                    <a href="#" />
                                                    <a href="#">
                                                        <img
                                                            src="https://somaxgroup.com/assets/img/Home/world_map.png"
                                                            alt="location"
                                                            width="591px"
                                                            height="591px"
                                                        />
                                                    </a>
                                                </div>

                                                {/* <div
                                                    className="swiper-slide hov_zoom swiper-slide-active"
                                                    data-swiper-slide-index={0}
                                                    style={{ width: 587 }}
                                                >
                                                    <a href="https://www.cssgroupsite.com/location/css-dubai" />
                                                    <a href="https://www.cssgroupsite.com/location/css-dubai">
                                                        <img
                                                            src="https://www.cssgroupsite.com/images/dubai.webp"
                                                            alt="location"
                                                            width="591px"
                                                            height="591px"
                                                        />
                                                    </a>
                                                </div>
                                                <div
                                                    className="swiper-slide hov_zoom swiper-slide-next"
                                                    data-swiper-slide-index={1}
                                                    style={{ width: 587 }}
                                                >
                                                    <a href="https://www.cssgroupsite.com/location/css-abudhabi" />
                                                    <a href="https://www.cssgroupsite.com/location/css-dubai">
                                                        <img
                                                            src="https://www.cssgroupsite.com/images/abudhabi.webp"
                                                            alt="location"
                                                            width="591px"
                                                            height="591px"
                                                        />
                                                    </a>
                                                </div>
                                                <div
                                                    className="swiper-slide hov_zoom"
                                                    data-swiper-slide-index={2}
                                                    style={{ width: 587 }}
                                                >
                                                    <a href="https://www.cssgroupsite.com/location/css-sharjah" />
                                                    <a href="https://www.cssgroupsite.com/location/css-dubai">
                                                        <img
                                                            src="https://www.cssgroupsite.com/images/Sharjah.webp"
                                                            alt="location"
                                                            width="591px"
                                                            height="591px"
                                                        />
                                                    </a>
                                                </div>
                                                <div
                                                    className="swiper-slide hov_zoom"
                                                    data-swiper-slide-index={3}
                                                    style={{ width: 587 }}
                                                >
                                                    <a href="https://www.cssgroupsite.com/location/css-ras-al-khaimah" />
                                                    <a href="https://www.cssgroupsite.com/location/css-dubai">
                                                        <img
                                                            src="https://www.cssgroupsite.com/images/rak.webp"
                                                            alt="location"
                                                            width="591px"
                                                            height="591px"
                                                        />
                                                    </a>
                                                </div>
                                                <div
                                                    className="swiper-slide hov_zoom"
                                                    data-swiper-slide-index={4}
                                                    style={{ width: 587 }}
                                                >
                                                    <a href="https://www.cssgroupsite.com/location/css-bahrain" />
                                                    <a href="https://www.cssgroupsite.com/location/css-dubai">
                                                        <img
                                                            src="https://www.cssgroupsite.com/images/Bahrain.webp"
                                                            alt="location"
                                                            width="591px"
                                                            height="591px"
                                                        />
                                                    </a>
                                                </div>
                                                <div
                                                    className="swiper-slide hov_zoom"
                                                    data-swiper-slide-index={5}
                                                    style={{ width: 587 }}
                                                >
                                                    <a href="https://www.cssgroupsite.com/location/css-oman" />
                                                    <a href="https://www.cssgroupsite.com/location/css-dubai">
                                                        <img
                                                            src="https://www.cssgroupsite.com/images/oman.webp"
                                                            alt="location"
                                                            width="591px"
                                                            height="591px"
                                                        />
                                                    </a>
                                                </div>
                                                <div
                                                    className="swiper-slide hov_zoom"
                                                    data-swiper-slide-index={6}
                                                    style={{ width: 587 }}
                                                >
                                                    <a href="https://www.cssgroupsite.com/location/css-qatar" />
                                                    <a href="https://www.cssgroupsite.com/location/css-dubai">
                                                        <img
                                                            src="https://www.cssgroupsite.com/images/Qatar.webp"
                                                            alt="location"
                                                            width="591px"
                                                            height="591px"
                                                        />
                                                    </a>
                                                </div>
                                                <div
                                                    className="swiper-slide hov_zoom"
                                                    data-swiper-slide-index={7}
                                                    style={{ width: 587 }}
                                                >
                                                    <a href="https://www.cssgroupsite.com/location/css-saudiarabia" />
                                                    <a href="https://www.cssgroupsite.com/location/css-dubai">
                                                        <img
                                                            src="https://www.cssgroupsite.com/images/saudi-arabia.webp"
                                                            alt="location"
                                                            width="591px"
                                                            height="591px"
                                                        />
                                                    </a>
                                                </div>
                                                <div
                                                    className="swiper-slide hov_zoom"
                                                    data-swiper-slide-index={8}
                                                    style={{ width: 587 }}
                                                >
                                                    <a href="https://www.cssgroupsite.com/location/css-kuwait" />
                                                    <a href="https://www.cssgroupsite.com/location/css-dubai">
                                                        <img
                                                            src="https://www.cssgroupsite.com/images/Kuwait.webp"
                                                            alt="location"
                                                            width="591px"
                                                            height="591px"
                                                        />
                                                    </a>
                                                </div>
                                                <div
                                                    className="swiper-slide hov_zoom"
                                                    data-swiper-slide-index={9}
                                                    style={{ width: 587 }}
                                                >
                                                    <a href="https://www.cssgroupsite.com/location/css-india" />
                                                    <a href="https://www.cssgroupsite.com/location/css-dubai">
                                                        <img
                                                            src="https://www.cssgroupsite.com/images/india.webp"
                                                            alt="location"
                                                            width="591px"
                                                            height="591px"
                                                        />
                                                    </a>
                                                </div>
                                                <div
                                                    className="swiper-slide hov_zoom swiper-slide-duplicate-prev"
                                                    data-swiper-slide-index={10}
                                                    style={{ width: 587 }}
                                                >
                                                    <a href="https://www.cssgroupsite.com/location/css-srilanka" />
                                                    <a href="https://www.cssgroupsite.com/location/css-dubai">
                                                        <img
                                                            src="https://www.cssgroupsite.com/images/sri-lanka.webp"
                                                            alt="location"
                                                            width="591px"
                                                            height="591px"
                                                        />
                                                    </a>
                                                </div>
                                                <div
                                                    className="swiper-slide hov_zoom swiper-slide-duplicate swiper-slide-duplicate-active"
                                                    data-swiper-slide-index={0}
                                                    style={{ width: 587 }}
                                                >
                                                    <a href="https://www.cssgroupsite.com/location/css-dubai" />
                                                    <a href="https://www.cssgroupsite.com/location/css-dubai">
                                                        <img
                                                            src="https://www.cssgroupsite.com/images/dubai.webp"
                                                            alt="location"
                                                            width="591px"
                                                            height="591px"
                                                        />
                                                    </a>
                                                </div> */}
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