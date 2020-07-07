/** @format */

import React from "react"
import fmaImg from "../images/fma/fma.png"
import {useTranslation} from "react-i18next"
import {Link} from "react-router-dom"
export default function FMA() {
    const {t, i18n} = useTranslation("")
    const fmaImgStyle = {
        background: `url(${fmaImg})`,
        backgroundCover: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: "480px",
    }
    const fmaStyle = {
        width: "70%",
        paddingTop: "15px",
        paddingRight: "0px",
        paddingLeft: "10px",
        marginRight: "0",
        marginLeft: "auto",
    }
    const lanFMA = (languageCode: string) => {
        if (languageCode.includes("ar")) {
            return (
                <>
                    <section className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 text-right">
                                    <div dir="RTL">
                                        {t("aboutUs.licence")
                                            .split("\n")
                                            .map((i, key) => {
                                                return (
                                                    <p key={key}>
                                                        <span>{i}</span>
                                                    </p>
                                                )
                                            })}
                                        <div className="text-center" dir="RTL">
                                            <Link to="/to-fma" className="btn-outline">
                                                {t("aboutUs.checkLicence")}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12" style={fmaImgStyle}>
                                    {" "}
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )
        }else{
            return (
                <>
                    <section className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div>
                                        {t("aboutUs.licence")
                                            .split("\n")
                                            .map((i, key) => {
                                                return (
                                                    <p key={key}>
                                                        <span>{i}</span>
                                                    </p>
                                                )
                                            })}
                                        <div className="text-center">
                                            <Link to="/to-fma" className="btn-outline">
                                                {t("aboutUs.checkLicence")}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12" style={fmaImgStyle}>
                                    {" "}
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )
        }
    }
    return <>{lanFMA(i18n.language)}</>
}
