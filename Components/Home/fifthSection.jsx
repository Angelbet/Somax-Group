import Link from 'next/link'

// Styles
import style from '@/styles/Home.module.scss'

function FifthSection() {
    return (
        <section className={`${style.scroll_sec} ${style.accodionlist}`} id="sec0">
            <div className={`${style.container} ${style.homepage_container}`}>
                <div className={style.pr_subtitle}>Services</div>
                <div className={`${style.process_wrap} ${style.fl_wrap}`}>
                    <div className={style.row}>
                        <div className={`${style.col_md_4} ${style.col_sm_6} ${style.col_xs_12}`}>
                            <div className={style.process_details}>
                                <h4>
                                    <Link href="services/chartering-and-sales-shipbrokers">
                                        Chartering &amp; Sales <br />
                                        <span>Shipbrokers</span>
                                    </Link>
                                </h4>
                                <div className={style.clearfix} />{" "}
                                {/* <span className={style.process_numder}>1</span> */}
                                <div className={style.show_phdc}>
                                    <Link
                                        style={{ color: "#b1b1b1" }}
                                        href="services/chartering-and-sales-shipbrokers"
                                    >
                                        {" "}
                                        <i className="fal fa-plus" />
                                        <span>Details</span>
                                    </Link>
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
                                    <Link href="services/chem-oil-and-commodities-trading">
                                        Chem-Oil &amp; Commodities <br />
                                        <span>Trading</span>
                                    </Link>
                                </h4>
                                <div className={style.clearfix} />{" "}
                                {/* <span className={`${style.process_numder}`}>2</span> */}
                                <div className={style.show_phdc}>
                                    <Link
                                        style={{ color: "#b1b1b1" }}
                                        href="services/chem-oil-and-commodities-trading"
                                    >
                                        {" "}
                                        <i className="fal fa-plus" />
                                        <span>Details</span>
                                    </Link>
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
                                    <Link href="services/marine-and-technical-consultants">
                                        Marine &amp; Technical <br />
                                        <span>Consultants</span>
                                    </Link>
                                </h4>
                                <div className={style.clearfix} />{" "}
                                <div className={style.show_phdc}>
                                    <Link
                                        style={{ color: "#b1b1b1" }}
                                        href="services/marine-and-technical-consultants"
                                    >
                                        {" "}
                                        <i className="fal fa-plus" />
                                        <span>Details</span>
                                    </Link>
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
    )
}

export default FifthSection