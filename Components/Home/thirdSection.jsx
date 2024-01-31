import React from 'react'

// Styles
import style from '@/styles/Home.module.scss'

function ThirdSection() {
    return (
        <>
            <section
                className={style.scroll_sec}
                id={style["vmcv"]}
                style={{
                    background: "url(https://www.cssgroupsite.com/images/head-office.jpg) no-repeat center center",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed"
                }}
            >
                <div className={`${style.container} ${style.homepage_container} ${style.pl_30}`}>
                    <div className={style.row}>
                        <div className={`${style.col_sm_12} ${style.col_md_5}`}>
                            <h2>
                                <span>OUR</span> VISION
                            </h2>
                            <p>
                                The best & most reliable option in the Maritime Consultancy
                                field, as well as in the Trading of Oil & soft Commodities,
                                always willing to innovate and adapt to new technologies.
                            </p>
                            <h2>
                                <span>OUR</span> MISSION
                            </h2>
                            <p>
                                We were born to provide solid and reliable solutions to our
                                clients in their Maritime Transportation and commoditie´s
                                trading businesses.
                            </p>
                        </div>
                        <div className={`${style.col_sm_12} ${style.col_md_7}`}>
                            <h2>
                                CORE <b style={{ color: "#fff", fontWeight: "bold" }}>VALUES</b>
                            </h2>
                            <ul>
                                <li>
                                    <span>Honesty</span>
                                    We strive to remain committed towards our goals, objectives and
                                    targets
                                </li>
                                <li>
                                    <span>Reliability</span>
                                    We commit ourselves in being honest and ethical in all our actions
                                    carried out
                                </li>
                                <li>
                                    <span>Love for what we do</span>
                                    We support each other’s work and strongly collaborate as a team
                                </li>
                                <li>
                                    <span>Commitment</span>
                                    We encourage creative and disruptive ideas for providing effective
                                    integrated logistic solutions to our customers
                                </li>
                                <li>
                                    <span>Teamwork</span>
                                    We foster long standing relationship with our employees, vendors,
                                    service providers and customers
                                </li>
                                <li>
                                    <span>Strive wholeheartedly for excellence</span>
                                    We foster long standing relationship with our employees, vendors,
                                    service providers and customers
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ThirdSection