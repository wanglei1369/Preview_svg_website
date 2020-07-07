/** @format */

import React from "react"
import {useTranslation} from "react-i18next"
import {Helmet} from "react-helmet"
import LayoutSecondary from "../layouts/layoutSecondary"
import bannerImg from "../images/aboutus/banner.jpg"

export default function AboutUs() {
    
    const {t, i18n} = useTranslation("")
    const lanAboutUS = (languageCode: string) => {
        if (languageCode.includes("ar")) {
            return (
                <>
                <Helmet>
                    <title dir="RTL">{t("seo.aboutus.Title")}</title>
                    <meta name="description" dir="RTL" content={t("seo.aboutus.Description")} />
                    <meta name="keywords" dir="RTL" content={t("seo.aboutus.Keywords")} />
                </Helmet>
                    <LayoutSecondary bannerImg={bannerImg} pageTitle={t("aboutUs.brandHistory")}>
                        <section className="mission section">
                            <div className="container">
                                <div className="row justify-content-center mb-50">
                                    <div className="col-lg-10 text-right" dir="RTL">
                                        {t("aboutUs.brandHistoryStory")
                                            .split("\n")
                                            .map((i, key) => {
                                                return (
                                                    <p key={key}>
                                                        <span>{i}</span>
                                                    </p>
                                                )
                                            })}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </LayoutSecondary>
                </>
            )
        }else{
            return (
                <>
                <Helmet>
                    <title>{t("seo.aboutus.Title")}</title>
                    <meta name="description" content={t("seo.aboutus.Description")} />
                    <meta name="keywords" content={t("seo.aboutus.Keywords")} />
                </Helmet>
                    <LayoutSecondary bannerImg={bannerImg} pageTitle={t("aboutUs.brandHistory")}>
                        <section className="mission section">
                            <div className="container">
                                <div className="row justify-content-center mb-50">
                                    <div className="col-lg-10 text-left">
                                        {t("aboutUs.brandHistoryStory")
                                            .split("\n")
                                            .map((i, key) => {
                                                return (
                                                    <p key={key}>
                                                        <span>{i}</span>
                                                    </p>
                                                )
                                            })}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </LayoutSecondary>
                </>
            ) 
        }
    }
    return <>{lanAboutUS(i18n.language)}</>
}
