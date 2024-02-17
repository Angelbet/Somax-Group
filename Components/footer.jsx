import React from 'react'
import Link from 'next/link'

// Styles
import style from '@/styles/About.module.scss'

function Footer() {
    return (
        <>

            <section className={style.testimonials}>
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
                                        <Link href="www.imo.org" target="_blank">
                                            www.imo.org
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="www.ilo.org" target="_blank">
                                            www.ilo.org
                                        </a>
                                    </li>
                                    <li>
                                        <a href="www.bimco.org" target="_blank">
                                            www.bimco.org
                                        </a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <a href="www.intertanko.com" target="_blank">
                                            www.intertanko.com
                                        </a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <a href="www.marinetraffic.com" target="_blank">
                                            www.marinetraffic.com
                                        </a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <a href="www.spglobal.com" target="_blank">
                                            www.spglobal.com
                                        </a>
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
                                        <a href="Chartering-&-Sales-Shipbrokers.html">
                                            Chartering &amp; Sales Shipbrokers
                                        </a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <a href="Chem-Oil-&-Commodities-Trading.html">
                                            Chem-Oil &amp; Commodities Trading
                                        </a>
                                    </li>
                                    <li>
                                        <i className="bx bx-chevron-right" />{" "}
                                        <a href="Marine-&-Technical-Consultants.html">
                                            Marine &amp; Technical Consultants
                                        </a>
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