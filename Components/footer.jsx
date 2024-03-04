import React from 'react'
import Link from 'next/link'

// Styles
import style from '@/styles/About.module.scss'

function Footer() {
    return (
        <>

            <section id="footer0" className={style.testimonials}>
                <div className={style.container} data-aos="zoom-in" />
            </section>


            <footer id={style["footer_home"]}>
                <div className={style.footer_top}>
                    <div className={style.container}>
                        <div className={style.row}>
                            <div
                                className={`${style.col_lg_3} ${style.col_md_6} ${style.footer_links} ${style.aos_init} ${style.aos_animate}`}
                            >
                                <h4>Mails</h4>
                                <ul>
                                    <li>
                                        <a href="mailto:ceo@somaxgroup.com" target="_blank">
                                            ceo@somaxgroup.com
                                        </a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <a href="mailto:commercial@somaxgroup.com" target="_blank">
                                            commercial@somaxgroup.com
                                        </a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <a href="mailto:technical@somaxgroup.com" target="_blank">
                                            technical@somaxgroup.com
                                        </a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <a href="mailto:administration@somaxgroup.com" target="_blank">
                                            administration@somaxgroup.com
                                        </a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <a href="mailto:chartering@somaxgroup.com" target="_blank">
                                            chartering@somaxgroup.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className={`${style.col_lg_3} ${style.col_md_6} ${style.footer_links} ${style.aos_init} ${style.aos_animate}`}
                            >
                                <h4>Interesting Links</h4>
                                <ul>
                                    <li>
                                        <Link href="https://www.imo.org" target="_blank">
                                            www.imo.org
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.ilo.org/" target="_blank">
                                            www.ilo.org
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.bimco.org" target="_blank">
                                            www.bimco.org
                                        </Link>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <Link href="https://www.intertanko.com" target="_blank">
                                            www.intertanko.com
                                        </Link>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <Link href="https://www.marinetraffic.com" target="_blank">
                                            www.marinetraffic.com
                                        </Link>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <Link href="https://www.spglobal.com/en/" target="_blank">
                                            www.spglobal.com
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className={`${style.col_lg_3} ${style.col_md_6} ${style.footer_links} ${style.aos_init} ${style.aos_animate}`}
                            >
                                <h4>Products &amp; Services</h4>
                                <ul>
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <Link href="services/chartering-and-sales-shipbrokers">
                                            Chartering &amp; Sales Shipbrokers
                                        </Link>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <Link href="services/chem-oil-and-commodities-trading">
                                            Chem-Oil &amp; Commodities Trading
                                        </Link>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <Link href="services/marine-and-technical-consultants">
                                            Marine &amp; Technical Consultants
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer