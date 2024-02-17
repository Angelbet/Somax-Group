import Image from 'next/image'
import Link from 'next/link'

// Styles
import style from '@/styles/Home.module.scss'

// Images
import about_home from '@/public/about-home.jpg'

function SecondSection() {
    return (
        <section className={`${style.scroll_sec} ${style.p_0}`} id="sec1">
            <div className={`${style.container} ${style.homepage_container} ${style.pl_50}`}>
                <div className={style.row}>
                    <div className={`${style.col_sm_5} ${style.pt_80}`}>
                        <div className={`${style.main_about} ${style.fl_wrap} ${style.pl_30}`}>
                            <h2>ABOUT</h2>
                            <h1 className={style.clra}>SOMAX GROUP</h1>
                            <p>
                                A privately held group of companies, founded as a necessary
                                response to the demand of Shipowners, Marine & Trading Companies,
                                in its quest to find a dynamic, reliable & proactive Company, ready
                                to advise and support them in the Ship brokerage, Maritime Management
                                & trading of commodities worldwide, aiming to ensuring excellence in
                                its businesses.
                            </p>
                            <div className={style.main_abouttdiv}>
                                <Link href="/about">
                                    <button className={style.learn_more22}>
                                        {" "}
                                        <span className={style.circlee22} aria-hidden="true" />
                                        <span className={style.button_text2}>Discover More</span>
                                    </button>
                                </Link>
                            </div>
                            <div className={`${style.col_sm_4} ${style.points_divv}`}>
                                <img
                                    src="https://www.cssgroupsite.com/images/ic1.webp"
                                    className={style.respimga}
                                    alt="+30 Years Experience"
                                />
                                <p>+30 Years of Experience.</p>
                            </div>
                            <div className={`${style.col_sm_4} ${style.points_divv}`}>
                                <img
                                    src="https://www.cssgroupsite.com/images/ic2.webp"
                                    className={style.respimga}
                                    alt="4 International Offices"
                                />
                                <p>4 International Offices.</p>
                            </div>
                            <div className={`${style.col_sm_4} ${style.points_divv}`}>
                                <img
                                    src="https://www.cssgroupsite.com/images/ic3.webp"
                                    className={style.respimga}
                                    alt="+15 Professionals"
                                />
                                <p>+15 Partners.</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.col_sm_7}>
                        <div className={`${style.dec_img} ${style.fl_wrap}`}>
                            <Image
                                src={about_home}
                                className={style.respimg}
                                alt="about-home"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default SecondSection