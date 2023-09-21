import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

// Styles
import style from '@/styles/About.module.scss'

// Components
import Navbar from '@/Components/navbar'
import Footer from '@/Components/footer'

import servicesData from "./service.json";

export async function getStaticPaths() {
    const paths = servicesData.map((service) => ({
        params: { id: service.id.toString() },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    // Obtiene los datos del producto correspondiente al ID
    const service = servicesData.find((service) => service.id === params.id);

    return {
        props: {
            service,
        },
    };
}


function ProductPage({ service }) {

    return (
        <>

            <Head>
                <title>{service.title}</title>
                <meta name="description" content={service.short_description} />
            </Head>


            <main className={`${style.main}`}>

                <div className={`${style.hero_container} ${style.fl_wrap} ${style.full_height}`}>

                    <Navbar />

                    <div id={style["wrapper"]}>
                        <div className={style.content}>

                            {/* === */}
                            <div className={style.page_scroll_nav}>
                                <nav className={`${style.scroll_init} ${style.page_scroll_nav_wrap}`}>
                                    <ul className={`${style.no_list_style} ${style.init_hidden_filter}`}>
                                        <li>
                                            <a className={`${style.scroll_link} ${style.fbgs}`} href="#sec1">
                                                <span>Overview</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className={`${style.scroll_link} ${style.fbgs} ${style.act_sec}`} href="#sec2">
                                                <span>Request Rates</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className={`${style.psn_button} ${style.act_filter}`}>
                                        <i className="fal fa-sort" /> More{" "}
                                    </div>
                                    <div className={`${style.psn_button} ${style.lighthouse_filter}`}>
                                        <a href="https://cssgroupsite.com/lighthouse/" target="_blank">
                                            Lighthouse
                                        </a>
                                    </div>
                                </nav>
                            </div>
                            {/* === */}

                            {/* === */}
                            <div className={`${style.hero_section_dec} ${style.color_bg}`}>
                                <div className={style.progress_indicator}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
                                        <circle
                                            cx={16}
                                            cy={16}
                                            r="15.9155"
                                            className={style.progress_bar__background}
                                        />
                                        <circle
                                            cx={16}
                                            cy={16}
                                            r="15.9155"
                                            className={`${style.progress_bar__progress} 
                              js-progress-bar`}
                                            style={{ strokeDashoffset: 100 }}
                                        />
                                    </svg>
                                </div>
                            </div>
                            {/* === */}

                            {/* === */}
                            <div className={`${style.container} ${style.content_container}`}>
                                <div className={`${style.row} ${style.rowRight}`}>
                                    <div className={`${style.content_right} ${style.rowRight}`}>
                                        <div className={style.fixed_column_wrap}>
                                            <div className={style.pr_bg} />
                                            {/*fixed-column-wrap-content*/}
                                            <div className={style.fixed_column_wrap_content}>
                                                {/*slideshow-container*/}
                                                <div className={style.slideshow_container}>
                                                    <div className={`${style.slideshow_container_wrap} ${style.fl_wrap} ${style.full_height}`}>
                                                        <div className={`${style.swiper_container} ${style.swiper_container_fade} ${style.swiper_container_horizontal}`}>
                                                            <div
                                                                className={style.swiper_wrapper}
                                                                style={{ transitionDuration: "0ms" }}
                                                            >
                                                                <div
                                                                    className={`${style.swiper_slide} ${style.swiper_slide_duplicate} ${style.swiper_slide_duplicate_active}`}
                                                                    data-swiper-slide-index={1}
                                                                    style={{
                                                                        width: 776,
                                                                        transitionDuration: "0ms",
                                                                        opacity: 1,
                                                                        transform: "translate3d(0px, 0px, 0px)"
                                                                    }}
                                                                >
                                                                    <div
                                                                        className={`${style.ms_item_fs} ${style.fl_wrap}`}
                                                                        style={{ height: 1218 }}
                                                                    >
                                                                        <div
                                                                            className={`${style.bg} ${style.par_elem}`}
                                                                            data-bg="https://www.cssgroupsite.com/images/services/gff-2.jpg"
                                                                            style={{
                                                                                backgroundImage:
                                                                                    'url("https://www.cssgroupsite.com/images/services/gff-2.jpg")'
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                {/*ms_item*/}
                                                                <div
                                                                    className={`${style.swiper_slide} ${style.swiper_slide_prev} ${style.swiper_slide_duplicate_next}`}
                                                                    data-swiper-slide-index={0}
                                                                    style={{
                                                                        width: 776,
                                                                        transitionDuration: "0ms",
                                                                        opacity: 1,
                                                                        transform: "translate3d(-776px, 0px, 0px)"
                                                                    }}
                                                                >
                                                                    <div
                                                                        className={`${style.ms_item_fs} ${style.fl_wrap}`}
                                                                        style={{ height: 1218 }}
                                                                    >
                                                                        <div
                                                                            className={`${style.bg} ${style.par_elem}`}
                                                                            data-bg="https://www.cssgroupsite.com/images/services/gff-1.jpg"
                                                                            style={{
                                                                                backgroundImage:
                                                                                    'url("https://www.cssgroupsite.com/images/services/gff-1.jpg")'
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                {/*ms_item end*/}
                                                                {/*ms_item*/}
                                                                <div
                                                                    className={`${style.swiper_slide} ${style.swiper_slide_active}`}
                                                                    data-swiper-slide-index={1}
                                                                    style={{
                                                                        width: 776,
                                                                        transitionDuration: "0ms",
                                                                        opacity: 1,
                                                                        transform: "translate3d(-1552px, 0px, 0px)"
                                                                    }}
                                                                >
                                                                    <div
                                                                        className={`${style.ms_item_fs} ${style.fl_wrap}`}
                                                                        style={{ height: 1218 }}
                                                                    >
                                                                        <div
                                                                            className={`${style.bg} ${style.par_elem}`}
                                                                            data-bg="https://www.cssgroupsite.com/images/services/gff-2.jpg"
                                                                            style={{
                                                                                backgroundImage:
                                                                                    'url("https://www.cssgroupsite.com/images/services/gff-2.jpg")'
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                {/*ms_item end*/}
                                                                <div
                                                                    className={`${style.swiper_slide} ${style.swiper_slide_duplicate} ${style.swiper_slide_next} ${style.swiper_slide_duplicate_prev}`}
                                                                    data-swiper-slide-index={0}
                                                                    style={{
                                                                        // width: 776,
                                                                        transitionDuration: "0ms",
                                                                        opacity: 0,
                                                                        transform: "translate3d(-2328px, 0px, 0px)"
                                                                    }}
                                                                >
                                                                    <div
                                                                        className={`${style.ms_item_fs} ${style.fl_wrap}`}
                                                                    // style={{ height: 1218 }}
                                                                    >
                                                                        <div
                                                                            className={`${style.bg} ${style.par_elem}`}
                                                                            data-bg="https://www.cssgroupsite.com/images/services/gff-1.jpg"
                                                                            style={{
                                                                                backgroundImage:
                                                                                    'url("https://www.cssgroupsite.com/images/services/gff-1.jpg")'
                                                                            }}
                                                                        />
                                                                    </div>
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
                                                {/*slideshow-container end*/}
                                                <div className={style.overlay} />
                                                <div className={`${style.progress_bar_wrap} ${style.bot_element}`}>
                                                    <div className={style.progress_bar} />
                                                </div>
                                                {/*fixed-column-wrap_title*/}
                                                <div className={`${style.fixed_column_wrap_title} ${style.first_tile_load}`}>
                                                    <h2>Global Freight Forwarding</h2>
                                                </div>
                                                {/*fixed-column-wrap_title end*/}
                                                <div className={style.fixed_column_dec} />
                                                <div className={style.scroll_notifer}>Scroll Down</div>
                                                {/* <div class="section-counter">
                                      <div class="sc_current"><span>01</span></div>
                                      <div class="sc_total"></div>
                                  </div> */}
                                                <div className={`${style.fcwc_pagination} ${style.fcwc_wrap} ${style.swiper_pagination_clickable} ${style.swiper_pagination_bullets}`}>
                                                    <span
                                                        className={style.swiper_pagination_bullet}
                                                        tabIndex={0}
                                                        role="button"
                                                        aria-label="Go to slide 1"
                                                    />
                                                    <span
                                                        className={`${style.swiper_pagination_bullet} ${style.swiper_pagination_bullet_active}`}
                                                        tabIndex={0}
                                                        role="button"
                                                        aria-label="Go to slide 2"
                                                    />
                                                </div>
                                            </div>
                                            {/*fixed-column-wrap-content end*/}
                                        </div>
                                    </div>



                                    <div className={`${style.content_left} ${style.rowLeft}`}>
                                        <div className={style.column_wrap_}>
                                            {/*column-wrap-container */}
                                            <div className={`${style.column_wrap_container_} ${style.fl_wrap}`}>
                                                <div className={style.col_wc_dec} />
                                                <section className={style.scroll_sec} id={style["sec1"]}>
                                                    <div className={style.container}>
                                                        <div className={style.section_title}>
                                                            <h3>{service.title}</h3>

                                                            {Array.isArray(service.content) ? (
                                                                <>
                                                                    {service.content.map((desc, index) => (
                                                                        <p key={index}>
                                                                            {desc}
                                                                        </p>
                                                                    ))}
                                                                </>
                                                            ) : (
                                                                <p>{service.content}</p>
                                                            )}



                                                            {service.products ? (
                                                                <>
                                                                    <h4 className={style.list_title}>{service.product_title}</h4>
                                                                    <ul className={style.lists}>
                                                                        {Array.isArray(service.products) ? (
                                                                            <>
                                                                                {service.products.map((desc, index) => (
                                                                                    <li key={index}>
                                                                                        {desc}
                                                                                    </li>
                                                                                ))}
                                                                            </>
                                                                        ) : (
                                                                            <p>{service.products}</p>
                                                                        )}
                                                                    </ul>

                                                                </>
                                                            ) : (
                                                                <></>
                                                            )}



                                                            {service.characters ? (
                                                                <>
                                                                    {Array.isArray(service.characters) ? (
                                                                        <>
                                                                            {service.characters.map((character, index) => (
                                                                                <React.Fragment key={index}>
                                                                                    <h4 className={style.list_title}>{character.characters_title}</h4>
                                                                                    <ul className={style.lists}>
                                                                                        {Array.isArray(character.characters_content) ? (
                                                                                            <>
                                                                                                {character.characters_content.map((content, contentIndex) => (
                                                                                                    <li key={contentIndex}>{content}</li>
                                                                                                ))}
                                                                                            </>
                                                                                        ) : (
                                                                                            <li>{character.characters_content}</li>
                                                                                        )}
                                                                                    </ul>
                                                                                </React.Fragment>
                                                                            ))}
                                                                        </>
                                                                    ) : (
                                                                        <p>{service.characters}</p>
                                                                    )}
                                                                </>
                                                            ) : (
                                                                <></>
                                                            )}

                                                            <img
                                                                src="https://www.cssgroupsite.com/images/services/gff-3.jpg"
                                                                alt="Global Freight Forwarding"
                                                                style={{ width: "100%" }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={style.section_number}>
                                                        {" "}
                                                        <span>0</span>1.{" "}
                                                    </div>
                                                </section>
                                                {/* section end*/}
                                                <div className={`${style.section_separator} ${style.fl_wrap}`}>
                                                    <span />
                                                </div>
                                            </div>
                                            {/*column-wrap-container end */}

                                            {/* FOOTER */}
                                            <section className={`${style.scroll_sec} ${style.pt_0}`} id={style["sec3"]}>
                                                <div className={style.footer_div1}>
                                                    <div className={`${style.footer_div1_2} ${style.w_100}`}>
                                                        <h3>Quick Links</h3>{" "}
                                                        <ul>
                                                            {" "}
                                                            <li>
                                                                {" "}
                                                                <a href="https://www.cssgroupsite.com">Home</a>{" "}
                                                            </li>{" "}
                                                            <li>
                                                                {" "}
                                                                <a href="https://www.cssgroupsite.com/about">About</a>{" "}
                                                            </li>{" "}
                                                            <li>
                                                                {" "}
                                                                <a href="https://www.cssgroupsite.com/about?#sec2">Services</a>{" "}
                                                            </li>{" "}
                                                            <li>
                                                                {" "}
                                                                <a
                                                                    href="https://www.cssgroupsite.com/lighthouse/news-media/"
                                                                    target="_blank"
                                                                >
                                                                    News Media
                                                                </a>{" "}
                                                            </li>{" "}
                                                            <li>
                                                                {" "}
                                                                <a href="https://www.cssgroupsite.com/careers">Careers</a>{" "}
                                                            </li>{" "}
                                                            <li>
                                                                {" "}
                                                                <a href="https://www.cssgroupsite.com/contact-us">Contact Us</a>{" "}
                                                            </li>{" "}
                                                            <li>
                                                                {" "}
                                                                <a
                                                                    href="https://www.cssgroupsite.com/downloads/css-brochure.pdf"
                                                                    target="_blank"
                                                                >
                                                                    Corporate Brochure
                                                                </a>{" "}
                                                            </li>{" "}
                                                            <li>
                                                                {" "}
                                                                <a
                                                                    href="https://cdn.teztri.com/css/CSSGroupPresentation_2023_FINAL1.pptm"
                                                                    target="_blank"
                                                                >
                                                                    CSS Corporate PPT
                                                                </a>{" "}
                                                            </li>{" "}
                                                            <li>
                                                                {" "}
                                                                <a href="https://cssgroupsite.com/lighthouse/" target="_blank">
                                                                    Lighthouse
                                                                </a>{" "}
                                                            </li>
                                                            <li>
                                                                <a href="https://www.cssgroupsite.com/privacy-policy">
                                                                    Privacy Policy
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="https://www.cssgroupsite.com/cookie-policy">Cookie Policy</a>
                                                            </li>
                                                            <li>
                                                                <a href="https://www.cssgroupsite.com/disclaimer">Disclaimer</a>
                                                            </li>
                                                        </ul>
                                                        <h3>Locations</h3>{" "}
                                                        <ul>
                                                            {" "}
                                                            <li>
                                                                {" "}
                                                                <a href="https://www.cssgroupsite.com/location/css-dubai">
                                                                    Dubai
                                                                </a>{" "}
                                                            </li>{" "}
                                                            <li>
                                                                {" "}
                                                                <a href="https://www.cssgroupsite.com/location/css-abudhabi">
                                                                    Abu Dhabi
                                                                </a>{" "}
                                                            </li>{" "}
                                                            <li>
                                                                {" "}
                                                                <a href="https://www.cssgroupsite.com/location/css-sharjah">
                                                                    Sharjah
                                                                </a>{" "}
                                                            </li>{" "}
                                                            <li>
                                                                {" "}
                                                                <a href="https://www.cssgroupsite.com/location/css-ras-al-khaimah">
                                                                    Ras Al Khaimah
                                                                </a>{" "}
                                                            </li>{" "}
                                                            <li>
                                                                {" "}
                                                                <a href="https://www.cssgroupsite.com/location/css-bahrain">
                                                                    Bahrain
                                                                </a>{" "}
                                                            </li>{" "}
                                                            <li>
                                                                {" "}
                                                                <a href="https://www.cssgroupsite.com/location/css-oman">Oman</a>{" "}
                                                            </li>{" "}
                                                            <li>
                                                                {" "}
                                                                <a href="https://www.cssgroupsite.com/location/css-qatar">
                                                                    Qatar
                                                                </a>{" "}
                                                            </li>{" "}
                                                            <li>
                                                                {" "}
                                                                <a href="https://www.cssgroupsite.com/location/css-saudiarabia">
                                                                    Saudi Arabia
                                                                </a>{" "}
                                                            </li>{" "}
                                                            <li>
                                                                {" "}
                                                                <a href="https://www.cssgroupsite.com/location/css-kuwait">
                                                                    Kuwait
                                                                </a>{" "}
                                                            </li>{" "}
                                                            <li>
                                                                {" "}
                                                                <a href="https://www.cssgroupsite.com/location/css-iraq">Iraq</a>{" "}
                                                            </li>{" "}
                                                            <li>
                                                                {" "}
                                                                <a href="https://www.cssgroupsite.com/location/css-kenya">
                                                                    Kenya
                                                                </a>{" "}
                                                            </li>{" "}
                                                            <li>
                                                                {" "}
                                                                <a href="https://www.cssgroupsite.com/location/css-turkey">
                                                                    Turkey
                                                                </a>{" "}
                                                            </li>{" "}
                                                            <li>
                                                                {" "}
                                                                <a href="https://www.cssgroupsite.com/location/css-india">
                                                                    India
                                                                </a>{" "}
                                                            </li>{" "}
                                                            <li>
                                                                {" "}
                                                                <a href="https://www.cssgroupsite.com/location/css-srilanka">
                                                                    Sri Lanka
                                                                </a>{" "}
                                                            </li>{" "}
                                                        </ul>
                                                        <h3>Subscribe to our bi-monthly newsletter, Lighthouse</h3>
                                                        <a href="https://www.cssgroupsite.com/subscribe-now">
                                                            <button>Subscribe Now</button>
                                                        </a>
                                                        <div className={style.footer_copy}>
                                                            <div className={style.footer_copy1}>
                                                                {" "}
                                                                <span>Follow Us</span>{" "}
                                                                <ul>
                                                                    {" "}
                                                                    <li>
                                                                        <a href="https://www.facebook.com/cssgroupsite" target="_blank">
                                                                            <img
                                                                                src="https://www.cssgroupsite.com/images/facbk.webp"
                                                                                alt="CSS Group"
                                                                            />
                                                                        </a>
                                                                    </li>{" "}
                                                                    <li>
                                                                        <a
                                                                            href="https://www.instagram.com/consolidated_shipping_group/"
                                                                            target="_blank"
                                                                        >
                                                                            <img
                                                                                src="https://www.cssgroupsite.com/images/insta.webp"
                                                                                alt="CSS Group"
                                                                            />
                                                                        </a>
                                                                    </li>{" "}
                                                                    <li>
                                                                        <a href="https://twitter.com/CSSGroups" target="_blank">
                                                                            <img
                                                                                src="https://www.cssgroupsite.com/images/twitt.webp"
                                                                                alt="CSS Group"
                                                                            />
                                                                        </a>
                                                                    </li>{" "}
                                                                    <li>
                                                                        <a
                                                                            href="https://www.linkedin.com/company/consolidated-shipping-services/"
                                                                            target="_blank"
                                                                        >
                                                                            <img
                                                                                src="https://www.cssgroupsite.com/images/linkd.webp"
                                                                                alt="CSS Group"
                                                                            />
                                                                        </a>
                                                                    </li>{" "}
                                                                    <li>
                                                                        <a
                                                                            href="https://www.youtube.com/user/ConsolidatedShipping"
                                                                            target="_blank"
                                                                        >
                                                                            <img
                                                                                src="https://www.cssgroupsite.com/images/yutbe.webp"
                                                                                alt="CSS Group"
                                                                            />
                                                                        </a>
                                                                    </li>{" "}
                                                                </ul>{" "}
                                                            </div>
                                                            <div className={style.footer_copy2}>
                                                                <p>© 2023 CSS Group. All Rights Reserved.</p>
                                                                <p>
                                                                    Crafted With <i className="fal fa-heart" /> By{" "}
                                                                    <a href="https://netventure.in/" target="_blank">
                                                                        NetVenture
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* === */}



                            <div className="to-top-btn to-top" style={{ display: "none" }}>
                                <i className="fal fa-long-arrow-up" />
                            </div>
                        </div>


                    </div>


                    <div className={style.element}>
                        <div
                            className={style.element_item}
                            style={{ transform: "translate(-50%, -50%) matrix(1, 0, 0, 1, 819, 49)" }}
                        />
                    </div>




                </div>

            </main>



        </>

    );
}

export default ProductPage;