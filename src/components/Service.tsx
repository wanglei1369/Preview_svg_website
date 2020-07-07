/** @format */

import React, {Suspense} from "react"
import {useTranslation} from "react-i18next"
import "../styles/ourAdvantages.css"
import bannerDemoImg from "../images/banner-demo.jpg"
import bannerImgLine from "../images/banner-line.jpg"
import advantage1Image from "../images/whyCJC/advantage1.png"
import advantage2Image from "../images/whyCJC/advantage2.png"
import advantage3Image from "../images/whyCJC/advantage3.png"
import advantage4Image from "../images/whyCJC/advantage4.png"
import advantage5Image from "../images/whyCJC/advantage5.png"
import advantage6Image from "../images/whyCJC/advantage6.png"
import {Link} from "react-router-dom"

function ServiceComponent() {
    const {t} = useTranslation("")
    const bannerOneStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(43, 43, 43, 0.9), rgba(0, 1, 40, 0.3)), url(${bannerImgLine})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }

    return (
        <>
            {/* <h3 className="text-center mt-5">title</h3>
            <div className="advantage-desktop">
                <div className="advantage-picker">
                    <div className="div5 overlay-blue" style={eastAsiaBgImg}>
                        <span className="advantage-name text-white">{t("whyCJC.advantage.superiorExecution")}</span>
                    </div>
                    <div className="div1" style={southPacificBgImg}>
                        <span className="advantage-name text-blue">{t("whyCJC.advantage.aWideRangeOfProducts")}</span>
                    </div>
                    <div className="div6" style={taiwanBgImg}>
                        <span className="advantage-name text-white">
                            {t("whyCJC.advantage.latestTechnologyPlatform")}
                        </span>
                    </div>
                    <div className="div2" style={southEastAsiaBgImg}>
                        <span className="advantage-name text-blue">{t("whyCJC.advantage.NDDTrading")}</span>
                    </div>
                    <div className="div3" style={northAmericaBgImg}>
                        <span className="advantage-name text-white">
                            {t("whyCJC.advantage.competitiveSpreadsAndLowTransactionCosts")}
                        </span>
                    </div>
                    <div className="div4" style={mainlandchinaBgImg}>
                        <span className="advantage-name text-blue">{t("whyCJC.advantage.eminentCustomerService")}</span>
                    </div>
                </div>
            </div> */}
            <div className="our-advantages-flex">
                <div className="flex-container" style={{height: "100%", width: "100%"}}>
                    <div>
                        <ul className="flex-list">
                            <li className="text-center flex-title">
                                <img className="img-fluid w-25" src={advantage1Image} alt="advantage1Image" />
                            </li>
                            <li className="text-center">
                                <h5>{t("whyCJC.advantage.superiorExecution")}</h5>
                                {/* <p className="flex-content">{t("whyCJC.advantage.superiorExecutionMessage")}</p> */}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex-list">
                            <li className="text-center flex-title">
                                <img className="img-fluid w-25" src={advantage2Image} alt="advantage2Image" />
                            </li>
                            <li>
                                <h5 className="text-center">{t("whyCJC.advantage.aWideRangeOfProducts")}</h5>
                                {/* <p>{t("whyCJC.advantage.aWideRangeOfProductsMessage")}</p> */}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex-list">
                            <li className="text-center flex-title">
                                <img className="img-fluid w-25" src={advantage3Image} alt="advantage3Image" />
                            </li>
                            <li>
                                <h5 className="text-center">{t("whyCJC.advantage.latestTechnologyPlatform")}</h5>
                                {/* <p>{t("whyCJC.advantage.latestTechnologyPlatformMessage")}</p> */}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex-list">
                            <li className="text-center flex-title">
                                <img className="img-fluid w-25" src={advantage4Image} alt="advantage4Image" />
                            </li>
                            <li>
                                <h5 className="text-center">{t("whyCJC.advantage.NDDTrading")}</h5>
                                {/* <p>{t("whyCJC.advantage.NDDTradingMessage")}</p> */}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex-list">
                            <li className="text-center flex-title">
                                <img className="img-fluid w-25" src={advantage5Image} alt="advantage5Image" />
                            </li>
                            <li>
                                <h5 className="text-center">
                                    {t("whyCJC.advantage.competitiveSpreadsAndLowTransactionCosts")}
                                </h5>
                                {/* <p>{t("whyCJC.advantage.competitiveSpreadsAndLowTransactionCostsMessage")}</p> */}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex-list">
                            <li className="text-center flex-title">
                                <img className="img-fluid w-25" src={advantage6Image} alt="advantage6Image" />
                            </li>
                            <li>
                                <h5 className="text-center">{t("whyCJC.advantage.eminentCustomerService")}</h5>
                                {/* <p>{t("whyCJC.advantage.eminentCustomerServiceMessage")}</p> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mb-30">
                <div className="container">
                    <div className="col-lg-12 text-center">
                        <Link to="/why-choose-cjc" className="btn-outline">
                            {t("hero.findOutMore")}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

function Service() {
    return (
        <Suspense fallback="loading">
            <ServiceComponent />
        </Suspense>
    )
}

export default Service
