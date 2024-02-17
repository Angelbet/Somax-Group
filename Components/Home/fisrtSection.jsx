// Styles
import style from '@/styles/Home.module.scss'


import { gsap } from "gsap";
import { useEffect } from 'react';

import second from '../../public/log0.png'



function FisrtSection() {

    useEffect(() => {
        const images = ["#image1", "#image2", "#image3"];
        const texts = ["#text1", "#text2", "#text3"];

        const tl = gsap.timeline({ repeat: -1 });

        for (let i = 0; i < images.length; i++) {
            tl.set([images[i], texts[i]], { display: "block" })
                .to([images[i], texts[i]], { duration: 1, opacity: 1 })
                .to([images[i], texts[i]], { duration: 1, opacity: 0, display: "none" }, "+=2");
        }
    }, []);











    return (
        <>
            <div id={style["wrapper"]}>
                {/* MENU */}
                <div className={style.nav_holder}>
                    <div className="nav-holder-wrap but-hol">
                        <div className="nav-container fl-wrap">
                            <nav
                                className="nav-inner sliding-menu"
                                id="menu"
                                style={{ height: 396 }}
                            >
                                <div className="sliding-menu-wrapper" style={{ width: 2000 }}>
                                    <ul
                                        id="menu-panel-67tm8"
                                        className="menu-panel-root"
                                        style={{ width: 400 }}
                                    >
                                        <li>
                                            <a href="https://www.cssgroupsite.com" className=" act-link ">
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.cssgroupsite.com/about" className="">
                                                About
                                            </a>
                                        </li>
                                        <li className="submen-dec">
                                            <a href="#menu-panel-ctkt0" className="nav">
                                                Services
                                            </a>
                                        </li>
                                        <li className="submen-dec">
                                            {" "}
                                            <a href="#menu-panel-ggxti" className="nav">
                                                Locations
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.cssgroupsite.com/careers" className="">
                                                Careers
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="http://portal.cssdubai.net/TrackandTraceCSS/TrackandTrace.aspx"
                                                target="_blank"
                                            >
                                                Track &amp; Trace
                                            </a>
                                        </li>
                                        <li className="submen-dec">
                                            {" "}
                                            <a href="#menu-panel-1rf3c" className="nav">
                                                Login
                                            </a>
                                        </li>
                                        <li className="submen-dec">
                                            {" "}
                                            <a href="#menu-panel-kpuyy" className="nav">
                                                More+
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.cssgroupsite.com/contact-us" className="">
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                    <ul
                                        id="menu-panel-ctkt0"
                                        className="menu-panel"
                                        style={{ width: 400 }}
                                    >
                                        <a className="back" href="#menu-panel-back" />
                                        <li>
                                            <a
                                                href="https://www.cssgroupsite.com/our-services/global-freight-forwarding"
                                                className=""
                                            >
                                                Global Freight forwarding
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.cssgroupsite.com/our-services/ocean-freight-management"
                                                className=""
                                            >
                                                Ocean Freight Management
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.cssgroupsite.com/our-services/supply-chain-management"
                                                className=""
                                            >
                                                Supply Chain Management
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.cssgroupsite.com/our-services/land-transportation-management"
                                                className=""
                                            >
                                                Land Transportation Management
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.cssgroupsite.com/our-services/industrial-packing-crating-lashing"
                                                className=""
                                            >
                                                Industrial Packing, Crating &amp; Lashing
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.cssgroupsite.com/our-services/air-freight-management"
                                                className=""
                                            >
                                                Air Freight Management
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.cssgroupsite.com/our-services/projects-oil-energy"
                                                className=""
                                            >
                                                Projects Oil &amp; Energy
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.cssgroupsite.com/our-services/automobile-logistics"
                                                className=""
                                            >
                                                Automobile Logistics
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.cssgroupsite.com/our-services/non-vessel-operating-common-carrier"
                                                className=""
                                            >
                                                Non Vessel Operating Common Carrier (NVOCC)
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.cssgroupsite.com/our-services/multi-modal-operations"
                                                className=""
                                            >
                                                Multi-modal Operations
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.cssgroupsite.com/our-services/container-freight-station-cfs"
                                                className=""
                                            >
                                                Container Freight Station (CFS)
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.cssgroupsite.com/our-services/yacht-marine-logistics"
                                                className=""
                                            >
                                                Yacht &amp; Marine Logistics
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.cssgroupsite.com/our-services/e-commerce-fulfillment"
                                                className=""
                                            >
                                                E-commerce Fulfillment
                                            </a>
                                        </li>
                                    </ul>
                                    <ul
                                        id="menu-panel-ggxti"
                                        className="menu-panel"
                                        style={{ width: 400 }}
                                    >
                                        <a className="back" href="#menu-panel-back" />
                                        <li>
                                            <a
                                                href="https://www.cssgroupsite.com/location/css-dubai"
                                                className=""
                                            >
                                                Dubai
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.cssgroupsite.com/location/css-abudhabi"
                                                className=""
                                            >
                                                Abu Dhabi
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.cssgroupsite.com/location/css-sharjah"
                                                className=""
                                            >
                                                Sharjah
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.cssgroupsite.com/location/css-ras-al-khaimah"
                                                className=""
                                            >
                                                Ras Al Khaimah
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.cssgroupsite.com/location/css-bahrain"
                                                className=""
                                            >
                                                Bahrain
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.cssgroupsite.com/location/css-oman"
                                                className=""
                                            >
                                                Oman
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.cssgroupsite.com/location/css-qatar"
                                                className=""
                                            >
                                                Qatar
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.cssgroupsite.com/location/css-saudiarabia"
                                                className=""
                                            >
                                                Saudi Arabia
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.cssgroupsite.com/location/css-kuwait"
                                                className=""
                                            >
                                                Kuwait
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.cssgroupsite.com/location/css-india"
                                                className=""
                                            >
                                                India
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.cssgroupsite.com/location/css-iraq"
                                                className=""
                                            >
                                                Iraq
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.cssgroupsite.com/location/css-kenya"
                                                className=""
                                            >
                                                Kenya
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.cssgroupsite.com/location/css-turkey"
                                                className=""
                                            >
                                                Turkey
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.cssgroupsite.com/location/css-srilanka"
                                                className=""
                                            >
                                                Sri Lanka
                                            </a>
                                        </li>
                                    </ul>
                                    <ul
                                        id="menu-panel-1rf3c"
                                        className="menu-panel"
                                        style={{ width: 400 }}
                                    >
                                        <a className="back" href="#menu-panel-back" />
                                        <li>
                                            <a
                                                href="http://portal.cssdubai.net/CustomerLogin/Customer_Login.aspx"
                                                target="_blank"
                                            >
                                                Customer / Agent
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="http://portal.cssdubai.net/EmployeeLogin/Emplogin.aspx"
                                                target="_blank"
                                            >
                                                Employee – Portal
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="http://portal.cssdubai.net/daashboard/Login.aspx"
                                                target="_blank"
                                            >
                                                Employee – Dashboard
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="http://portal.cssdubai.net/CSSIndia/india_login.aspx"
                                                target="_blank"
                                            >
                                                CSS India Login
                                            </a>
                                        </li>
                                    </ul>
                                    <ul
                                        id="menu-panel-kpuyy"
                                        className="menu-panel"
                                        style={{ width: 400 }}
                                    >
                                        <a className="back" href="#menu-panel-back" />
                                        <li>
                                            <a href="https://cssgroupsite.com/lighthouse/" target="_blank">
                                                Lighthouse
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.cssgroupsite.com/downloads/sailing-schedule.pdf"
                                                target="_blank"
                                            >
                                                Sailing Schedule
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.cssgroupsite.com/lighthouse/news-media/"
                                                target="_blank"
                                            >
                                                News Hub
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.cssgroupsite.com/customer-feedback"
                                                className=""
                                            >
                                                Feedback
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="nav-holder-wrap_line" />
                        <div className="nav-holder-wrap_dec" />
                    </div>
                </div>
                <div className={style.nav_overlay} />


                <div className={`${style.content} ${style.full_height}`} data-pagetitle="CSS Group">
                    <div className={style.page_scroll_nav}>
                        <nav className={`${style.scroll_init} ${style.page_scroll_nav_wrap}`}>
                            <div className={`${style.psn_button} ${style.lighthouse_filter}`}>
                                <a href="https://cssgroupsite.com/lighthouse/" target="_blank">
                                    Lighthouse
                                </a>
                            </div>
                        </nav>
                    </div>
                    <div className={`${style.fl_wrap} ${style.full_height} ${style.hero_conatiner}`}>
                        <div className={`${style.hero_wrapper} ${style.fl_wrap} ${style.full_height} ${style.hidden_item}`}>

                            <span className={`${style.hc_dec}`} />


                            <div className={`${style.hero_slider_wrap} ${style.home_half_slider} ${style.fl_wrap} ${style.full_height}`}>

                                <div className={`${style.hero_slider} ${style.fs_gallery_wrap} ${style.fl_wrap} ${style.full_height}`}>

                                    <div
                                        className={`${style.swiper_container} ${style.swiper_container_horizontal}`}
                                        style={{ cursor: "grabbing" }}
                                    >

                                        <div className={style.swiper_wrapper}>

                                            {/* ======== SERV1 ======== */}
                                            <div
                                                className={`${style.swiper_slide} ${style.swiper_slide_duplicate} ${style.swiper_slide_duplicate_active}`}
                                                data-swiper-slide-index={4}
                                                style={{ width: 1272 }}
                                                id='text1'
                                            >

                                                <div className={style.half_hero_wrap}>
                                                    <div className={style.hhw_header}>Welcome to Somax Group</div>
                                                    <h2>
                                                        Chartering &amp; Sales <br />
                                                        <span>Shipbrokers</span>
                                                    </h2>
                                                    <h4>
                                                        A solid & respected brokerage team in both Tanker & Bulker
                                                        field, with strong & reliable skills to cover all details.
                                                        from single voyage charters to contracts of affreightment
                                                        and longer-term time charter hire.
                                                    </h4>
                                                    <div className={style.clearfix} />
                                                    <a href="services/chartering-and-sales-shipbrokers">
                                                        <button className={style.learn_more22}>
                                                            {" "}
                                                            <span className={style.circlee22} aria-hidden="true" />
                                                            <span className={style.button_text2}>View Detail</span>
                                                        </button>
                                                    </a>
                                                </div>

                                            </div>

                                            {/* ======== SERV2 ======== */}
                                            <div
                                                className={`${style.swiper_slide} ${style.swiper_slide_duplicate} ${style.swiper_slide_duplicate_active}`}
                                                data-swiper-slide-index={4}
                                                style={{ width: 1272 }}
                                                id='text2'

                                            >

                                                <div className={style.half_hero_wrap}>
                                                    <div className={style.hhw_header}>Welcome to Somax Group</div>
                                                    <h2>
                                                        Chem-Oil &amp; Commodities <br />
                                                        <span>Trading</span>
                                                    </h2>
                                                    <h4>
                                                        The Somax Group is your best option on the trading of Chem & Oil
                                                        products worldwide, majored in the well-known NCSA commodities,
                                                        with current expansion plans to Black Sea and West Africa.
                                                    </h4>
                                                    <div className={style.clearfix} />
                                                    <a href="services/chem-oil-and-commodities-trading">
                                                        <button className={style.learn_more22}>
                                                            {" "}
                                                            <span className={style.circlee22} aria-hidden="true" />
                                                            <span className={style.button_text2}>View Detail</span>
                                                        </button>
                                                    </a>
                                                </div>

                                            </div>

                                            {/* ======== SERV3 ======== */}
                                            <div
                                                className={`${style.swiper_slide} ${style.swiper_slide_duplicate} ${style.swiper_slide_duplicate_active}`}
                                                data-swiper-slide-index={4}
                                                style={{ width: 1272 }}
                                                id='text3'
                                            >

                                                <div className={style.half_hero_wrap}>
                                                    <div className={style.hhw_header}>Welcome to Somax Group</div>
                                                    <h2>
                                                        Marine &amp; Technical <br />
                                                        <span>Consultants</span>
                                                    </h2>
                                                    <h4>
                                                        Strongly focused and ready to provide general conditions
                                                        surveys & compliance verifications of IMO requirements by
                                                        vessels & Companies.
                                                    </h4>
                                                    <div className={style.clearfix} />
                                                    <a href="services/marine-and-technical-consultants">
                                                        <button className={style.learn_more22}>
                                                            {" "}
                                                            <span className={style.circlee22} aria-hidden="true" />
                                                            <span className={style.button_text2}>View Detail</span>
                                                        </button>
                                                    </a>
                                                    <a href="#sec3">
                                                        <button className={style.learn_more222}>
                                                            {" "}
                                                            <span className={style.circlee222} aria-hidden="true" />
                                                            <span className={style.button_text2}>Request a quote</span>
                                                        </button>
                                                    </a>
                                                </div>

                                            </div>


                                        </div>

                                        <span className={style.swiper_notification} />
                                    </div>



                                </div>
                            </div>

                            <div className={`${style.hero_slider_img} ${style.hero_slider_wrap_halftwo} ${style.hidden_item}`}>
                                <div className={`${style.swiper_container} ${style.swiper_container_horizontal}`}>
                                    <div className={style.swiper_wrapper}>

                                        <div
                                            className={`${style.swiper_slide} ${style.swiper_slide_duplicate} ${style.swiper_slide_duplicate_active}`}
                                            data-swiper-slide-index={4}
                                            style={{ width: 941 }}
                                            id='image1'
                                        >
                                            <div
                                                className={style.bg}
                                                style={{
                                                    backgroundImage: 'url("../services/chartering-and-sales-shipbrokers.jpg")',
                                                    transitionDuration: "0ms",
                                                    transform: "translate3d(0%, 0px, 0px)"
                                                }}
                                            />
                                            <div className={style.overlay} />
                                        </div>

                                        <div
                                            className={`${style.swiper_slide} ${style.swiper_slide_duplicate} ${style.swiper_slide_duplicate_active}`}
                                            data-swiper-slide-index={4}
                                            style={{ width: 941 }}
                                            id='image2'
                                        >
                                            <div
                                                className={style.bg}
                                                style={{
                                                    backgroundImage: 'url("../services/chem-oil-and-commodities-trading.jpeg")',
                                                    transitionDuration: "0ms",
                                                    transform: "translate3d(0%, 0px, 0px)"
                                                }}
                                            />
                                            <div className={style.overlay} />
                                        </div>

                                        <div
                                            className={`${style.swiper_slide} ${style.swiper_slide_duplicate} ${style.swiper_slide_duplicate_active}`}
                                            data-swiper-slide-index={4}
                                            style={{ width: 941 }}
                                            id='image3'
                                        >
                                            <div
                                                className={style.bg}
                                                style={{
                                                    backgroundImage: 'url("../services/marine-and-technical-consultants.jpg")',
                                                    transitionDuration: "0ms",
                                                    transform: "translate3d(0%, 0px, 0px)"
                                                }}
                                            />
                                            <div className={style.overlay} />
                                        </div>


                                    </div>
                                    <span
                                        className={style.swiper_notification}
                                        aria-live="assertive"
                                        aria-atomic="true"
                                    />
                                </div>
                                <div className={`${style.hero_corner_dec}`} />
                                <div className={style.hero_corner_dec2} />
                            </div>

                            <div className={`${style.slider_progress_bar} ${style.act_slider}`}>
                                {" "}
                                <span>
                                    <svg className={style.circ} width={50} height={50}>
                                        <circle
                                            className={style.circ2}
                                            cx={25}
                                            cy={25}
                                            r={23}
                                            stroke="rgba(255,255,255,0.4)"
                                            strokeWidth={1}
                                            fill="none"
                                        />
                                        <circle
                                            className={style.circ1}
                                            cx={25}
                                            cy={25}
                                            r={23}
                                            stroke="#fff"
                                            strokeWidth={2}
                                            fill="none"
                                        />
                                    </svg>
                                </span>
                            </div>
                            <div className={`${style.hero_slider_control_wrap}`}>
                                <div
                                    className={`${style.hsc} ${style.hsc_prev}`}
                                    tabIndex={0}
                                    role="button"
                                    aria-label="Previous slide"
                                >
                                    <span>
                                        <i className="fal fa-angle-left" />
                                    </span>
                                </div>
                                <div
                                    className={`${style.hsc} ${style.hsc_next}`}
                                    tabIndex={0}
                                    role="button"
                                    aria-label="Next slide"
                                >
                                    <span>
                                        <i className="fal fa-angle-right" />
                                    </span>
                                </div>
                            </div>
                            <a id="sec22btn" href="#About_footer_home__12CsD" className={style.start_btn}>
                                <span>
                                    {" "}
                                    Contact Us
                                    <i className="fal fa-long-arrow-right" />
                                </span>
                            </a>
                            <div className={`${style.play_pause_slider} ${style.hsc_pp} ${style.auto_actslider}`}>
                                <i className="fas fa-play" />
                            </div>
                        </div>
                        <div className={`${style.hero_slider_wrap_pagination} ${style.swiper_pagination_clickable} ${style.swiper_pagination_bullets}`}>
                            <span
                                className={style.swiper_pagination_bullet}
                                tabIndex={0}
                                role="button"
                                aria-label="Go to slide 1"
                            />
                            <span
                                className={style.swiper_pagination_bullet}
                                tabIndex={0}
                                role="button"
                                aria-label="Go to slide 2"
                            />
                            <span
                                className={style.swiper_pagination_bullet}
                                tabIndex={0}
                                role="button"
                                aria-label="Go to slide 3"
                            />
                            <span
                                className={style.swiper_pagination_bullet}
                                tabIndex={0}
                                role="button"
                                aria-label="Go to slide 4"
                            />
                            <span
                                className={`${style.swiper_pagination_bullet} ${style.swiper_pagination_bullet_active}`}
                                tabIndex={0}
                                role="button"
                                aria-label="Go to slide 5"
                            />
                        </div>
                        <div className={style.hero_scroll_down_notifer}>
                            <div className={style.scroll_down_wrap}>
                                <div className={style.mousey}>
                                    <div className={style.scroller} />
                                </div>
                            </div>{" "}
                            <i className="far fa-angle-down" />
                        </div>
                    </div>
                </div>
                <div className={style.share_wrapper}>
                    <div className={style.close_share_btn}>
                        <i className="fal fa-long-arrow-left" />
                    </div>
                    <div className={`${style.share_container} ${style.fl_wrap} ${style.isShare}`}>
                        <a
                            href="http://www.facebook.com/share.php?u=https%3A%2F%2Fwww.cssgroupsite.com%2F"
                            className={`"pop ${style.share_icon} share_icon_facebook`}
                        />
                        <a
                            href="http://pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.cssgroupsite.com%2F&media=&description=Looking for reliable international logistics, freight forwarding, and project cargo services? Contact us for our top-notch solutions that cater to your needs."
                            className="pop share-icon share-icon-pinterest"
                        />
                        <a
                            href="https://twitter.com/share?via=in1.com&text=International Logistics,Freight Forwarding & Shipping ServicesUAE"
                            className="pop share-icon share-icon-twitter"
                        />
                        <a
                            href="http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.cssgroupsite.com%2F&title=International Logistics,Freight Forwarding & Shipping ServicesUAE&summary=Looking for reliable international logistics, freight forwarding, and project cargo services? Contact us for our top-notch solutions that cater to your needs.&source=in1.com"
                            className="pop share-icon share-icon-linkedin"
                        />
                        <a
                            href="http://www.tumblr.com/share?v=3&u=https%3A%2F%2Fwww.cssgroupsite.com%2F"
                            className="pop share-icon share-icon-tumblr"
                        />
                    </div>
                </div>
            </div >

        </>
    )
}

export default FisrtSection