import React from 'react'

// Styles
import style from '@/styles/Home.module.scss'

function FifthSection() {
    return (
        <>
            <section className={`${style.scroll_sec} ${style.accodionlist}`} id="sec1">
                <div className={`${style.container} ${style.homepage_container}`}>
                    <div className={style.pr_subtitle}>Services</div>
                    <div className={`${style.process_wrap} ${style.fl_wrap}`}>
                        <div className={style.row}>
                            <div className={`${style.col_md_4} ${style.col_sm_6} ${style.col_xs_12}`}>
                                <div className={style.process_details}>
                                    <h4>
                                        <a href="https://www.cssgroupsite.com/our-services/global-freight-forwarding">
                                            Global Freight <br />
                                            Forwarding
                                        </a>
                                    </h4>
                                    <div className={style.clearfix} />{" "}
                                    <span className={style.process_numder}>1</span>
                                    <div className={style.show_phdc}>
                                        <a
                                            style={{ color: "#b1b1b1" }}
                                            href="https://www.cssgroupsite.com/our-services/global-freight-forwarding"
                                        >
                                            {" "}
                                            <i className="fal fa-plus" />
                                            <span>Details</span>
                                        </a>
                                    </div>
                                    <div className={style.bg}>
                                        <div className={style.area}>
                                            <ul className={style.circles}>
                                                <li />
                                                <li />
                                                <li />
                                                <li />
                                                <li />
                                                <li />
                                                <li />
                                                <li />
                                                <li />
                                                <li />
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${style.col_md_4} ${style.col_sm_6} ${style.col_xs_12}`}>
                                <div className={style.process_details}>
                                    <h4>
                                        <a href="https://www.cssgroupsite.com/our-services/ocean-freight-management">
                                            Ocean Freight <br />
                                            Management
                                        </a>
                                    </h4>
                                    <div className={style.clearfix} />{" "}
                                    <span className={`${style.process_numder}`}>2</span>
                                    <div className={style.show_phdc}>
                                        <a
                                            style={{ color: "#b1b1b1" }}
                                            href="https://www.cssgroupsite.com/our-services/ocean-freight-management"
                                        >
                                            {" "}
                                            <i className="fal fa-plus" />
                                            <span>Details</span>
                                        </a>
                                    </div>
                                    <div className={style.bg}>
                                        <div className={style.area}>
                                            <ul className={style.circles}>
                                                <li />
                                                <li />
                                                <li />
                                                <li />
                                                <li />
                                                <li />
                                                <li />
                                                <li />
                                                <li />
                                                <li />
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${style.col_md_4} ${style.col_sm_6} ${style.col_xs_12}`}>
                                <div className={style.process_details}>
                                    <h4>
                                        <a href="https://www.cssgroupsite.com/our-services/supply-chain-management">
                                            Supply Chain <br />
                                            Management
                                        </a>
                                    </h4>
                                    <div className={style.clearfix} />{" "}
                                    <span className={style.process_numder}>3</span>
                                    <div className={style.show_phdc}>
                                        <a
                                            style={{ color: "#b1b1b1" }}
                                            href="https://www.cssgroupsite.com/our-services/supply-chain-management"
                                        >
                                            {" "}
                                            <i className="fal fa-plus" />
                                            <span>Details</span>
                                        </a>
                                    </div>
                                    <div className={style.bg}>
                                        <div className={style.area}>
                                            <ul className={style.circles}>
                                                <li />
                                                <li />
                                                <li />
                                                <li />
                                                <li />
                                                <li />
                                                <li />
                                                <li />
                                                <li />
                                                <li />
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default FifthSection