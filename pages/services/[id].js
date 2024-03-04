import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

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
                                                                            style={{
                                                                                backgroundImage: `url(../services/${service.image_bg})`
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                {/*ms_item*/}
                                                                {/* <div
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
                                                                </div> */}
                                                                {/*ms_item end*/}
                                                                {/*ms_item*/}
                                                                {/* <div
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
                                                                </div> */}
                                                                {/*ms_item end*/}
                                                                {/* <div
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
                                                                </div> */}
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
                                                    {/* <h2>Global Freight Forwarding</h2> */}
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
                                                                src={`../services/${service.image}`}
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
                                                        <h3>Mails</h3>{" "}
                                                        <ul>
                                                            {" "}
                                                            <li>
                                                                {" "}
                                                                <a href="mailto:ceo@somaxgroup.com" target="_blank">
                                                                    ceo@somaxgroup.com
                                                                </a>{" "}
                                                            </li>{" "}
                                                            <li>
                                                                {" "}
                                                                <a href="mailto:commercial@somaxgroup.com" target="_blank">
                                                                    commercial@somaxgroup.com
                                                                </a>{" "}
                                                            </li>{" "}
                                                            <li>
                                                                {" "}
                                                                <a href="mailto:technical@somaxgroup.com" target="_blank">
                                                                    technical@somaxgroup.com
                                                                </a>
                                                                {" "}
                                                            </li>{" "}
                                                            <li>
                                                                {" "}
                                                                <a href="mailto:administration@somaxgroup.com" target="_blank">
                                                                    administration@somaxgroup.com
                                                                </a>
                                                                {" "}
                                                            </li>{" "}
                                                            <li>
                                                                {" "}
                                                                <a href="mailto:chartering@somaxgroup.com" target="_blank">
                                                                    chartering@somaxgroup.com
                                                                </a>
                                                                {" "}
                                                            </li>{" "}

                                                        </ul>
                                                        <h3>Interesting Links</h3>{" "}
                                                        <ul>
                                                            {" "}
                                                            <li>
                                                                {" "}
                                                                <Link href="https://www.imo.org" target="_blank">
                                                                    www.imo.org
                                                                </Link>
                                                                {" "}
                                                            </li>{" "}
                                                            <li>
                                                                {" "}
                                                                <Link href="https://www.ilo.org/" target="_blank">
                                                                    www.ilo.org
                                                                </Link>
                                                                {" "}
                                                            </li>{" "}
                                                            <li>
                                                                {" "}
                                                                <Link href="https://www.bimco.org" target="_blank">
                                                                    www.bimco.org
                                                                </Link>
                                                            </li>
                                                            {" "}
                                                            <li>
                                                                {" "}
                                                                <Link href="https://www.intertanko.com" target="_blank">
                                                                    www.intertanko.com
                                                                </Link>{" "}
                                                            </li>{" "}
                                                            <li>
                                                                {" "}
                                                                <Link href="https://www.marinetraffic.com" target="_blank">
                                                                    www.marinetraffic.com
                                                                </Link>{" "}
                                                            </li>{" "}
                                                            <li>
                                                                {" "}
                                                                <Link href="https://www.spglobal.com/en/" target="_blank">
                                                                    www.spglobal.com
                                                                </Link>{" "}
                                                            </li>{" "}
                                                        </ul>

                                                        <h3>Products & Services</h3>{" "}
                                                        <ul>
                                                            {" "}
                                                            <li>
                                                                {" "}
                                                                <Link href="./chartering-and-sales-shipbrokers">
                                                                    Chartering &amp; Sales Shipbrokers
                                                                </Link>
                                                                {" "}
                                                            </li>{" "}
                                                            <li>
                                                                {" "}
                                                                <Link href="./chem-oil-and-commodities-trading">
                                                                    Chem-Oil &amp; Commodities Trading
                                                                </Link>

                                                                {" "}
                                                            </li>{" "}
                                                            <li>
                                                                {" "}
                                                                <a href="./marine-and-technical-consultants">
                                                                    Marine &amp; Technical
                                                                    Consultants</a>{" "}
                                                            </li>{" "}
                                                        </ul>

                                                        <div className={style.footer_copy}>
                                                            <div className={style.footer_copy1}>
                                                                {" "}
                                                                <span>Follow Us</span>{" "}
                                                            </div>
                                                            <div className={style.footer_copy2}>
                                                                <p>© {new Date().getFullYear()} Somax Group. All Rights Reserved.</p>
                                                                <p>
                                                                    By{" "}
                                                                    <a href="https://angelbev.vercel.app" target="_blank">
                                                                        Angeldev
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