import React from 'react'

// Styles
// import style from '@/styles/Navbar.module.scss'
import style from '@/styles/About.module.scss'

function Navbar() {
    return (
        <>
            <header className={style.main_header}>
                <a href="/" className={style.logo_holder}>
                    SOMAX GROUP
                </a>
                <div className={`${style.nav_button} ${style.but_hol}`}>
                    {" "}
                    <span className={style.ncs} />
                    <span className={style.nos} />
                    <span className={style.nbs} />
                    <div className={style.menu_button_text}>Menu</div>
                </div>
                <div className={style.header_contacts}>
                    <ul>
                        {/* <li>
                            <span>Call</span>{" "}
                            <a href="callNumber('+971 4 883 1303')">+971 4 883 1303</a>
                        </li> */}
                        <li>
                            <span>Mail</span>{" "}
                            <a href="mailto:info@cssdubai.com">info@somaxgroup.com</a>
                        </li>
                    </ul>{" "}
                    <a href="" className={`${style.ajax} ${style.contacts_btn}`}>
                        Get in touch
                    </a>
                </div>
            </header>

            <aside className={style.left_header}>
                {" "}
                <span className={`${style.lh_dec} ${style.color_bg}`} />
                <div className={`${style.left_header_social}`}>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/cssgroupsite" target="_blank">
                                <i className="fab fa-facebook-f" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/CSSGroups" target="_blank">
                                <i className="fab fa-twitter" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/company/consolidated-shipping-services/"
                                target="_blank"
                                alt="linkdin"
                            >
                                <i className="fab fa-linkedin" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/consolidated_shipping_group/"
                                target="_blank"
                            >
                                <i className="fab fa-instagram" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/user/ConsolidatedShipping"
                                target="_blank"
                            >
                                <i className="fab fa-youtube" />
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>

            <div className={`${style.share_btn} ${style.showshare} ${style.color_bg}`}>
                <span>
                    Share <i className="fal fa-plus" />
                </span>
            </div>

            <div className={`${style.hc_dec_color}`}>
                <div className={style.page_subtitle}>
                    <ul className={style.ul_page_subtitle}>
                        <li>
                            <div id={style["nav"]}>
                                <a className={style.dropdown_toggle}>
                                    Login
                                </a>
                                <ul className={style.dropdown} style={{}}>
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
                            </div>
                        </li>
                        <li>
                            <a
                                href="http://portal.cssdubai.net/TrackandTraceCSS/TrackandTrace.aspx"
                                target="_blank"
                            >
                                TRACK &amp; TRACE
                            </a>
                        </li>
                        <li>
                            <a href="https://cssgroupsite.com/lighthouse/" target="_blank">
                                LIGHTHOUSE
                            </a>
                        </li>
                    </ul>
                </div>
            </div>


        </>
    )
}

export default Navbar