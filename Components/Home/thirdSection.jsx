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
                                We will innovate and adopt the latest trends to be the leading
                                integrated logistics service provider in the regions we operate
                            </p>
                            <h2>
                                <span>OUR</span> MISSION
                            </h2>
                            <p>
                                Providing competitive logistics solutions through efficient
                                technology, to gain the highest level of customer satisfaction, while
                                nurturing sustainable business relationships
                            </p>
                        </div>
                        <div className={`${style.col_sm_12} ${style.col_md_7}`}>
                            <h2>
                                CORE <b style={{ color: "#fff", fontWeight: "bold" }}>VALUES</b>
                            </h2>
                            <ul>
                                <li>
                                    <span>COMMITMENT</span>
                                    We strive to remain committed towards our goals, objectives and
                                    targets
                                </li>
                                <li>
                                    <span>INTEGRITY</span>
                                    We commit ourselves in being honest and ethical in all our actions
                                    carried out
                                </li>
                                <li>
                                    <span>TEAMWORK</span>
                                    We support each other’s work and strongly collaborate as a team
                                </li>
                                <li>
                                    <span>INNOVATION</span>
                                    We encourage creative and disruptive ideas for providing effective
                                    integrated logistic solutions to our customers
                                </li>
                                <li>
                                    <span>NURTURING RELATIONSHIPS</span>
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