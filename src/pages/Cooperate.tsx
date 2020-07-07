/** @format */

import React from "react"
import {Helmet} from "react-helmet"
import {useTranslation} from "react-i18next"
import {Link} from "react-router-dom"
import "../components/i18n"
import LayoutSecondary from "../layouts/layoutSecondary"
import bannerImg from "../images/cooperate/banner.jpg"
import mamImage from "../images/services/MAM.png"
import mamIcon from "../images/services/mam-icon.png"
import ibIcon from "../images/services/ib-icon.png"
import hedgeIcon from "../images/services/hedge-icon.png"

export default function Cooperate() {
    const contactFormStyle = {
        backgroundImage: `url(${mamImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
    const iconStyle = {
        width: "6%",
    }
    const {t, i18n} = useTranslation("");
    const lanCooperate = (languageCode: string) => {
        if (languageCode.includes("ar")) {
            return (
                <>
                <Helmet>
                    <title>{t("seo.cooperate.Title")}</title>
                    <meta name="description" content={t("seo.cooperate.Description")} />
                    <meta name="keywords" content={t("seo.cooperate.Keywords")} />
                </Helmet>
                    <LayoutSecondary bannerImg={bannerImg} pageTitle={t("header.partner")}>
                        <section className="section">
                            <div className="container">
                                <div className="row mb-100 justify-content-center" id="hedge">
                                    <div className="col-lg-10 text-center">
                                        <img className="img-fluid mb-3" style={iconStyle} src={hedgeIcon} alt="hedge Icon" />
                                        <h5 dir="RTL">{t("productsAndServices.hedge")}</h5>
                                        <div className="outline-0 text-center">
                                            <p dir="RTL">{t("productsAndServices.hedgeMessage")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-100 justify-content-center" id="introducing-brokers">
                                    <div className="col-lg-10 text-center">
                                        <img className="img-fluid mb-3" style={iconStyle} src={ibIcon} alt="ib Icon" />
                                        <h5 dir="RTL">{t("productsAndServices.introducingBrokers")}</h5>
                                        <div className="outline-0 text-center">
                                            <p dir="RTL">{t("productsAndServices.introducingBrokersMessage")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-5" id="multi-account-manager-solution">
                                    <div className="col-lg-10 text-center">
                                        <div className="row justify-content-center mb-20">
                                            <div className="col-lg-12 text-center">
                                                <img
                                                    className="img-fluid mb-3"
                                                    style={iconStyle}
                                                    src={mamIcon}
                                                    alt="mam Icon"
                                                />
                                                <h5 dir="RTL">{t("productsAndServices.multiAccountManagerSolution")}</h5>
                                                <p dir="RTL">
                                                    <span className="text-highlight">MAM: </span>
                                                    {t("productsAndServices.multiAccountManagerSolutionMessage")}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center mb-20">
                                            <div className="col-lg-12 text-center">
                                                <p dir="RTL">
                                                    <span className="text-highlight">PAMM: </span>
                                                    {t("productsAndServices.pammMessgae")}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center mb-20">
                                            <div className="col-lg-12 text-center">
                                                <p dir="RTL">
                                                    <span className="text-highlight">
                                                        {t("productsAndServices.copyTrading")}{" "}
                                                    </span>
                                                    {t("productsAndServices.copyTradingMessage")}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-lg-12 text-center">
                                                <p dir="RTL">
                                                    <Link to="/products-and-services/multi-account-manager-solution/copytrading">
                                                        <span className="text-highlight">
                                                            {t("productsAndServices.accessCopytrading")}
                                                        </span>
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-10">
                                        <section className="section contact-blue mb-100">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="p-5 box-shadow contact-form" style={contactFormStyle}>
                                                            <form
                                                                method="POST"
                                                                action="https://formspree.io/support.vn@cjcmarkets-svg.com"
                                                                className="row">
                                                                <div className="col-lg-12">
                                                                    <h5 className="section-title mb-2 text-right" dir="RTL" >
                                                                        {t("contactForm.contactForm")}
                                                                    </h5>
                                                                    <h6 className="text-dark mb-40 text-right" dir="RTL">
                                                                        {t("contactForm.contactGreeting")}
                                                                    </h6>
                                                                </div>
                                                                <div className="col-lg-6 text-right" dir="RTL">
                                                                    <input
                                                                        type="text"
                                                                        name="name"
                                                                        id="name"
                                                                        className="form-control"
                                                                        placeholder={t("contactForm.contactName")}
                                                                        required
                                                                    />
                                                                </div>
                                                                <div className="col-lg-6 text-right" dir="RTL">
                                                                    <input
                                                                        type="email"
                                                                        className="form-control"
                                                                        name="email"
                                                                        id="email"
                                                                        placeholder={t("contactForm.contactEmail")}
                                                                        required
                                                                    />
                                                                </div>
                                                                <div className="col-lg-6 text-right" dir="RTL">
                                                                    <input
                                                                        type="text"
                                                                        name="account"
                                                                        id="account"
                                                                        className="form-control"
                                                                        placeholder={t("contactForm.tradingAccount")}
                                                                        required
                                                                    />
                                                                </div>
                                                                <div className="col-lg-6 text-right"  dir="RTL">
                                                                    <div className="cntr text-right" dir="RTL">
                                                                        {t("contactForm.accountType")}
                                                                        {": "}
                                                                        <select name="accountType">
                                                                            <option value="copyTrading text-right"  dir="RTL">
                                                                                {t("contactForm.copyTrading")}
                                                                            </option>
                                                                            <option value="masterTrading text-right" dir="RTL">
                                                                                {t("contactForm.masterTrading")}
                                                                            </option>
                                                                            <option value="PAMM">PAMM</option>
                                                                            <option value="MAMM">MAMM</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <button
                                                                        className="btn btn-outline btn-sm" dir="RTL"
                                                                        type="submit"
                                                                        value="send">
                                                                        {t("contactForm.contactSubmit")}
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </LayoutSecondary>
                </>
            )
        }
        else{
            return (
                <>
                <Helmet>
                    <title>{t("seo.cooperate.Title")}</title>
                    <meta name="description" content={t("seo.cooperate.Description")} />
                    <meta name="keywords" content={t("seo.cooperate.Keywords")} />
                </Helmet>
                    <LayoutSecondary bannerImg={bannerImg} pageTitle={t("header.partner")}>
                        <section className="section">
                            <div className="container">
                                <div className="row mb-100 justify-content-center" id="hedge">
                                    <div className="col-lg-10 text-center">
                                        <img className="img-fluid mb-3" style={iconStyle} src={hedgeIcon} alt="hedge Icon" />
                                        <h5>{t("productsAndServices.hedge")}</h5>
                                        <div className="outline-0 text-center">
                                            <p>{t("productsAndServices.hedgeMessage")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-100 justify-content-center" id="introducing-brokers">
                                    <div className="col-lg-10 text-center">
                                        <img className="img-fluid mb-3" style={iconStyle} src={ibIcon} alt="ib Icon" />
                                        <h5>{t("productsAndServices.introducingBrokers")}</h5>
                                        <div className="outline-0 text-center">
                                            <p>{t("productsAndServices.introducingBrokersMessage")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-5" id="multi-account-manager-solution">
                                    <div className="col-lg-10 text-center">
                                        <div className="row justify-content-center mb-20">
                                            <div className="col-lg-12 text-center">
                                                <img
                                                    className="img-fluid mb-3"
                                                    style={iconStyle}
                                                    src={mamIcon}
                                                    alt="mam Icon"
                                                />
                                                <h5>{t("productsAndServices.multiAccountManagerSolution")}</h5>
                                                <p>
                                                    <span className="text-highlight">MAM: </span>
                                                    {t("productsAndServices.multiAccountManagerSolutionMessage")}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center mb-20">
                                            <div className="col-lg-12 text-center">
                                                <p>
                                                    <span className="text-highlight">PAMM: </span>
                                                    {t("productsAndServices.pammMessgae")}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center mb-20">
                                            <div className="col-lg-12 text-center">
                                                <p>
                                                    <span className="text-highlight">
                                                        {t("productsAndServices.copyTrading")}{" "}
                                                    </span>
                                                    {t("productsAndServices.copyTradingMessage")}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-lg-12 text-center">
                                                <p>
                                                    <Link to="/products-and-services/multi-account-manager-solution/copytrading">
                                                        <span className="text-highlight">
                                                            {t("productsAndServices.accessCopytrading")}
                                                        </span>
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-10">
                                        <section className="section contact-blue mb-100">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="p-5 box-shadow contact-form" style={contactFormStyle}>
                                                            <form
                                                                method="POST"
                                                                action="https://formspree.io/support.vn@cjcmarkets-svg.com"
                                                                className="row">
                                                                <div className="col-lg-12">
                                                                    <h5 className="section-title mb-2">
                                                                        {t("contactForm.contactForm")}
                                                                    </h5>
                                                                    <h6 className="text-dark mb-40">
                                                                        {t("contactForm.contactGreeting")}
                                                                    </h6>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <input
                                                                        type="text"
                                                                        name="name"
                                                                        id="name"
                                                                        className="form-control"
                                                                        placeholder={t("contactForm.contactName")}
                                                                        required
                                                                    />
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <input
                                                                        type="email"
                                                                        className="form-control"
                                                                        name="email"
                                                                        id="email"
                                                                        placeholder={t("contactForm.contactEmail")}
                                                                        required
                                                                    />
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <input
                                                                        type="text"
                                                                        name="account"
                                                                        id="account"
                                                                        className="form-control"
                                                                        placeholder={t("contactForm.tradingAccount")}
                                                                        required
                                                                    />
                                                                </div>
                                                                <div className="col-lg-6 text-left">
                                                                    <div className="cntr">
                                                                        {t("contactForm.accountType")}
                                                                        {": "}
                                                                        <select name="accountType">
                                                                            <option value="copyTrading">
                                                                                {t("contactForm.copyTrading")}
                                                                            </option>
                                                                            <option value="masterTrading">
                                                                                {t("contactForm.masterTrading")}
                                                                            </option>
                                                                            <option value="PAMM">PAMM</option>
                                                                            <option value="MAMM">MAMM</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <button
                                                                        className="btn btn-outline btn-sm"
                                                                        type="submit"
                                                                        value="send">
                                                                        {t("contactForm.contactSubmit")}
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </LayoutSecondary>
                </>
            )
        }
    }
    return <>{lanCooperate(i18n.language)}</>
}
