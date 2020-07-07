/** @format */

import React, {Suspense, useState, useRef, useEffect} from "react"
import {Link} from "react-router-dom"
import logoNavDark from "../images/logoNavDark.png"
import logoNavLight from "../images/logoNavLight.png"
import "../styles/header.css"
import {useTranslation} from "react-i18next"

function HeaderComponent() {
    const {t, i18n} = useTranslation("")
    const [collapseStatus, setCollapseStatus] = useState("collapse navbar-collapse")
    const [dropdownServicesStatus, setDropdownServicesStatus] = useState("dropdown-menu")
    const [dropdownProductsStatus, setDropdownProductsStatus] = useState("dropdown-menu")
    const [dropdownPlatformsStatus, setDropdownPlatformsStatus] = useState("dropdown-menu")
    const [dropdownLoginStatus, setDropdownLoginStatus] = useState("dropdown-menu")
    const [dropdownI18nStatus, setDropdownI18nStatus] = useState("dropdown-menu")
    const [searchFormStatus, setSearchFormStatus] = useState("search-form")
    const [ariaExpanded, setAriaExpanded] = useState(false)
    const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef(navBackground)
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50
            if (navRef.current !== show) {
                setNavBackground(show)
            }
        }
        document.addEventListener("scroll", handleScroll)
        return () => {
            document.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const handleNavCollapse = () => {
        if (collapseStatus.includes("show")) {
            setCollapseStatus("collapse navbar-collapse")
            setAriaExpanded(false)
        } else {
            setCollapseStatus("collapse navbar-collapse show")
            setAriaExpanded(true)
        }
    }

    const handleServicesCollapse = () => {
        if (dropdownServicesStatus.includes("show")) {
            setDropdownServicesStatus("dropdown-menu")
            setAriaExpanded(false)
        } else {
            setAriaExpanded(true)
            setDropdownServicesStatus("dropdown-menu show")
            setDropdownPlatformsStatus("dropdown-menu")
            setDropdownProductsStatus("dropdown-menu")
            setDropdownLoginStatus("dropdown-menu")
            setDropdownI18nStatus("dropdown-menu")
        }
    }
    const handlePlatformsCollapse = () => {
        if (dropdownPlatformsStatus.includes("show")) {
            setDropdownPlatformsStatus("dropdown-menu")
            setAriaExpanded(false)
        } else {
            setDropdownPlatformsStatus("dropdown-menu show")
            setAriaExpanded(true)
            setDropdownServicesStatus("dropdown-menu")
            setDropdownProductsStatus("dropdown-menu")
            setDropdownLoginStatus("dropdown-menu")
            setDropdownI18nStatus("dropdown-menu")
        }
    }
    const handleProductsCollapse = () => {
        if (dropdownProductsStatus.includes("show")) {
            setDropdownProductsStatus("dropdown-menu")
            setAriaExpanded(false)
        } else {
            setDropdownProductsStatus("dropdown-menu show")
            setAriaExpanded(true)
            setDropdownServicesStatus("dropdown-menu")
            setDropdownPlatformsStatus("dropdown-menu")
            setDropdownLoginStatus("dropdown-menu")
            setDropdownI18nStatus("dropdown-menu")
        }
    }
    const handleLoginCollapse = () => {
        if (dropdownLoginStatus.includes("show")) {
            setDropdownLoginStatus("dropdown-menu")
            setAriaExpanded(false)
        } else {
            setDropdownLoginStatus("dropdown-menu show")
            setAriaExpanded(true)
            setDropdownServicesStatus("dropdown-menu")
            setDropdownPlatformsStatus("dropdown-menu")
            setDropdownProductsStatus("dropdown-menu")
            setDropdownI18nStatus("dropdown-menu")
        }
    }

    const handleI18nCollapse = () => {
        if (dropdownI18nStatus.includes("show")) {
            setDropdownI18nStatus("dropdown-menu")
            setAriaExpanded(false)
        } else {
            setDropdownI18nStatus("dropdown-menu show")
            setAriaExpanded(true)
            setDropdownServicesStatus("dropdown-menu")
            setDropdownPlatformsStatus("dropdown-menu")
            setDropdownProductsStatus("dropdown-menu")
            setDropdownLoginStatus("dropdown-menu")
        }
    }
    const handleSearchForm = () => {
        searchFormStatus.includes("open") ? setSearchFormStatus("search-form") : setSearchFormStatus("search-form open")
    }

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
        handleSearchForm()
    }
    const headers = (languageCode: string) => {
    if (languageCode.includes("ko")||languageCode.includes("th")) {
            return (
                <>
                    <header className={`nav-fixed-top ${navBackground ? "nav-dark box-shadow" : "nav-light"}`}>
                        <div className="navigation">
                            <div className="container-lg">
                                <nav className="navbar navbar-expand-lg nav-flex">
                                    <Link className="nav-item nav-logo-mobile" to="/">
                                        {/* <img src={logoImage} alt="logo" height="60px" /> */}
                                        <img
                                            className={`${navBackground ? "nav-logo-dark" : "nav-logo-light"} py-2`}
                                            src={logoNavDark}
                                            height="50px"
                                            alt="logo of CJC"
                                        />
                                        <img
                                            className={`${navBackground ? "nav-logo-light" : "nav-logo-dark"} py-2`}
                                            src={logoNavLight}
                                            height="50px"
                                            alt="logo of CJC"
                                        />
                                    </Link>
                                    <div className="nav-flex">
                                        <button
                                            className="navbar-toggler nav-item nav-toggler-mobile"
                                            type="button"
                                            aria-expanded={ariaExpanded}>
                                            <span onClick={handleNavCollapse}>
                                                <svg viewBox="0 0 100 80" width="40" height="32">
                                                    <rect width="80" height="6" fill="#0D0746"></rect>
                                                    <rect y="30" width="80" height="6" fill="#0D0746"></rect>
                                                    <rect y="60" width="80" height="6" fill="#0D0746"></rect>
                                                </svg>
                                            </span>
                                        </button>

                                        <span
                                            className="navbar-toggler nav-item nav-toggler-mobile"
                                            onClick={handleSearchForm}
                                            style={{fontSize: "1.6rem"}}>
                                            &#127759;
                                        </span>
                                    </div>
                                    <div className={collapseStatus} id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item">
                                                <Link to="/about-us" className="nav-link">
                                                    {t("header.aboutUs")}
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/why-choose-cjc" className="nav-link">
                                                    {t("header.why")}
                                                </Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <span
                                                    className="nav-link dropdown-toggle"
                                                    role="button"
                                                    onClick={handleProductsCollapse}>
                                                    {t("header.products")}
                                                </span>
                                                <div className={dropdownProductsStatus}>
                                                    <Link to="/products-and-services/forex" className="dropdown-item">
                                                        {t("productsAndServices.foreignExchange")}
                                                    </Link>
                                                    <Link to="/products-and-services/oil" className="dropdown-item">
                                                        {t("productsAndServices.crudeOil")}
                                                    </Link>
                                                    <Link to="/products-and-services/metal" className="dropdown-item">
                                                        {t("productsAndServices.preciousMetals")}
                                                    </Link>
                                                    <Link to="/products-and-services/indices" className="dropdown-item">
                                                        {t("productsAndServices.stockIndex")}
                                                    </Link>
                                                    <Link to="/products-and-services/usshares" className="dropdown-item">
                                                        {t("productsAndServices.usshares")}
                                                    </Link>
                                                    <Link to="/products-and-services/asiashares" className="dropdown-item">
                                                        {t("productsAndServices.asiashares")}
                                                    </Link>
                                                    <Link to="/products-and-services/eurshares" className="dropdown-item">
                                                        {t("productsAndServices.eurshares")}
                                                    </Link>
                                                    <Link to="/products-and-services/cryptoforex" className="dropdown-item">
                                                        {t("productsAndServices.cryptoccycfd")}
                                                    </Link>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <span
                                                    className="nav-link dropdown-toggle"
                                                    role="button"
                                                    onClick={handleServicesCollapse}>
                                                    {t("header.partner")}
                                                </span>
                                                <div className={dropdownServicesStatus}>
                                                    <Link to="/cooperate#hedge" className="dropdown-item">
                                                        {t("header.hedge")}
                                                    </Link>
                                                    <Link to="/cooperate#introducing-brokers" className="dropdown-item">
                                                        {t("header.ib")}
                                                    </Link>
                                                    <Link
                                                        to="/cooperate#multi-account-manager-solution"
                                                        className="dropdown-item">
                                                        {t("header.mam")}
                                                    </Link>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <span
                                                    className="nav-link dropdown-toggle"
                                                    role="button"
                                                    onClick={handlePlatformsCollapse}>
                                                    {t("header.platform")}
                                                </span>
                                                <div className={dropdownPlatformsStatus}>
                                                    <Link to="/platform/iphone" className="dropdown-item">
                                                        {t("header.iphone")}
                                                    </Link>
                                                    <Link to="/platform/android" className="dropdown-item">
                                                        {t("header.android")}
                                                    </Link>
                                                    <Link to="/platform/ipad" className="dropdown-item">
                                                        {t("header.ipad")}
                                                    </Link>
                                                    <Link to="/platform/windows" className="dropdown-item">
                                                        {t("header.windows")}
                                                    </Link>
                                                    <Link to="/platform/mac" className="dropdown-item">
                                                        {t("header.mac")}
                                                    </Link>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/help/qna" className="nav-link">
                                                    {t("header.help")}
                                                </Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <span
                                                    className="nav-link dropdown-toggle"
                                                    role="button"
                                                    onClick={handleLoginCollapse}>
                                                    {t("header.login")}
                                                </span>
                                                <div className={dropdownLoginStatus}>
                                                    <Link to="/login/broker" className="dropdown-item">
                                                        {t("login.loginBroker")}
                                                    </Link>
                                                    <Link to="/login/trader" className="dropdown-item">
                                                        {t("login.loginTrader")}
                                                    </Link>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown nav-mobile-i18n">
                                                <span
                                                    className="nav-link dropdown-toggle"
                                                    role="button"
                                                    onClick={handleI18nCollapse}>
                                                    &#127759;
                                                </span>
                                                <div className={dropdownI18nStatus}>
                                                    <a href="" className="dropdown-item" onClick={() => changeLanguage("zh")}>
                                                        简体中文
                                                    </a>
                                                    <a href="" className="dropdown-item" onClick={() => changeLanguage("tw")}>
                                                        繁體中文
                                                    </a>
                                                    <a href="" className="dropdown-item" onClick={() => changeLanguage("en")}>
                                                        English
                                                    </a>
                                                    <a href="" className="dropdown-item" onClick={() => changeLanguage("vi")}>
                                                        Tiếng Việt
                                                    </a>
                                                    <a href="" className="dropdown-item" onClick={() => changeLanguage("ko")}>
                                                        한국어
                                                    </a>
                                                    <a href="" className="dropdown-item" onClick={() => changeLanguage("th")}>
                                                        ภาษาไทย
                                                    </a>
                                                    <a href="" className="dropdown-item" onClick={() => changeLanguage("ms")}>
                                                        Bahasa Melayu
                                                    </a>
                                                    <a href="" className="dropdown-item" onClick={() => changeLanguage("ar")}>
                                                        عربى    
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/external-sign-up" className="nav-link">
                                                    <span>{t("header.register")}</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </header>

                    <div className={searchFormStatus}>
                        <span className="close" id="searchClose" style={{cursor: "pointer"}} onClick={() => handleSearchForm()}>
                            &#10761;
                        </span>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                    <h6 className="text-red">{t("header.chooseLanguage")}</h6>
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <h6 style={{cursor: "pointer"}} onClick={() => changeLanguage("zh")}>
                                                简体中文
                                            </h6>
                                        </div>
                                        <div className="col-lg-2">
                                            <h6 style={{cursor: "pointer"}} onClick={() => changeLanguage("tw")}>
                                                繁體中文
                                            </h6>
                                        </div>
                                        <div className="col-lg-2">
                                            <h6 style={{cursor: "pointer"}} onClick={() => changeLanguage("en")}>
                                                English
                                            </h6>
                                        </div>
                                        <div className="col-lg-2">
                                            <h6 style={{cursor: "pointer"}} onClick={() => changeLanguage("vi")}>
                                                Tiếng Việt
                                            </h6>
                                        </div>
                                        <div className="col-lg-2">
                                            <h6 style={{cursor: "pointer"}} onClick={() => changeLanguage("ko")}>
                                                한국어
                                            </h6>
                                        </div>
                                        <div className="col-lg-2">
                                            <h6 style={{cursor: "pointer"}} onClick={() => changeLanguage("th")}>
                                                ภาษาไทย
                                            </h6>
                                        </div>
                                        <div className="col-lg-2">
                                            <h6 style={{cursor: "pointer"}} onClick={() => changeLanguage("ms")}>
                                                Bahasa Melayu
                                            </h6>
                                        </div>
                                        <div className="col-lg-2">
                                            <h6 style={{cursor: "pointer"}} onClick={() => changeLanguage("ar")}>
                                                عربى    
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }else if(languageCode.includes("ar")){
            return (
                <>
                    <header className={`nav-fixed-top ${navBackground ? "nav-dark box-shadow" : "nav-light"}`}>
                        <div className="navigation">
                            <div className="container-lg">
                                <nav className="navbar navbar-expand-lg nav-flex">                                    
                                    <div className={collapseStatus} id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto">                                   
                                            <li className="nav-item">
                                                <Link to="/external-sign-up" className="nav-link">
                                                    <span dir="RTL">{t("header.register")}</span>
                                                </Link>
                                            </li>
                                            <li className="nav-item dropdown nav-mobile-i18n">
                                                <span
                                                    className="nav-link dropdown-toggle"
                                                    role="button"
                                                    onClick={handleI18nCollapse}>
                                                    &#127759;
                                                </span>
                                                <div className={dropdownI18nStatus}>
                                                    <a href="" className="dropdown-item" onClick={() => changeLanguage("zh")}>
                                                        简体中文
                                                    </a>
                                                    <a href="" className="dropdown-item" onClick={() => changeLanguage("tw")}>
                                                        繁體中文
                                                    </a>
                                                    <a href="" className="dropdown-item" onClick={() => changeLanguage("en")}>
                                                        English
                                                    </a>
                                                    <a href="" className="dropdown-item" onClick={() => changeLanguage("vi")}>
                                                        Tiếng Việt
                                                    </a>
                                                    <a href="" className="dropdown-item" onClick={() => changeLanguage("ko")}>
                                                        한국어
                                                    </a>
                                                    <a href="" className="dropdown-item" onClick={() => changeLanguage("th")}>
                                                        ภาษาไทย
                                                    </a>
                                                    <a href="" className="dropdown-item" onClick={() => changeLanguage("ms")}>
                                                        Bahasa Melayu
                                                    </a>
                                                    <a href="" className="dropdown-item text-right" onClick={() => changeLanguage("ar")} dir="RTL">
                                                        عربى    
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <span
                                                    className="nav-link dropdown-toggle"
                                                    role="button"
                                                    dir="RTL"
                                                    onClick={handleLoginCollapse}>
                                                    {t("header.login")}
                                                </span>
                                                <div className={dropdownLoginStatus}>
                                                    <Link to="/login/broker" className="dropdown-item text-right" dir="RTL">
                                                        {t("login.loginBroker")}
                                                    </Link>
                                                    <Link to="/login/trader" className="dropdown-item text-right" dir="RTL">
                                                        {t("login.loginTrader")}
                                                    </Link>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/help/qna" className="nav-link" dir="RTL">
                                                    {t("header.help")}
                                                </Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <span
                                                    className="nav-link dropdown-toggle"
                                                    role="button"
                                                    onClick={handlePlatformsCollapse} dir="RTL">
                                                    {t("header.platform")}
                                                </span>
                                                <div className={dropdownPlatformsStatus}>
                                                    <Link to="/platform/iphone" className="dropdown-item text-right" dir="RTL">
                                                        {t("header.iphone")}
                                                    </Link>
                                                    <Link to="/platform/android" className="dropdown-item text-right" dir="RTL">
                                                        {t("header.android")}
                                                    </Link>
                                                    <Link to="/platform/ipad" className="dropdown-item text-right" dir="RTL">
                                                        {t("header.ipad")}
                                                    </Link>
                                                    <Link to="/platform/windows" className="dropdown-item text-right" dir="RTL">
                                                        {t("header.windows")}
                                                    </Link>
                                                    <Link to="/platform/mac" className="dropdown-item text-right" dir="RTL">
                                                        {t("header.mac")}
                                                    </Link>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <span
                                                    className="nav-link dropdown-toggle"
                                                    role="button"
                                                    dir="RTL"
                                                    onClick={handleServicesCollapse}>
                                                    {t("header.partner")}
                                                </span>
                                                <div className={dropdownServicesStatus}>
                                                    <Link to="/cooperate#hedge" className="dropdown-item text-right" dir="RTL">
                                                        {t("header.hedge")}
                                                    </Link>
                                                    <Link to="/cooperate#introducing-brokers" className="dropdown-item text-right" dir="RTL">
                                                        {t("header.ib")}
                                                    </Link>
                                                    <Link
                                                        to="/cooperate#multi-account-manager-solution"
                                                        dir="RTL"
                                                        className="dropdown-item text-right">
                                                        {t("header.mam")}
                                                    </Link>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <span
                                                    className="nav-link dropdown-toggle"
                                                    role="button"
                                                    dir="RTL"
                                                    onClick={handleProductsCollapse}>
                                                    {t("header.products")}
                                                </span>
                                                <div className={dropdownProductsStatus}>
                                                    <Link to="/products-and-services/forex" className="dropdown-item text-right" dir="RTL">
                                                        {t("productsAndServices.foreignExchange")}
                                                    </Link>
                                                    <Link to="/products-and-services/oil" className="dropdown-item text-right" dir="RTL">
                                                        {t("productsAndServices.crudeOil")}
                                                    </Link>
                                                    <Link to="/products-and-services/metal" className="dropdown-item text-right" dir="RTL">
                                                        {t("productsAndServices.preciousMetals")}
                                                    </Link>
                                                    <Link to="/products-and-services/indices" className="dropdown-item text-right" dir="RTL">
                                                        {t("productsAndServices.stockIndex")}
                                                    </Link>
                                                    <Link to="/products-and-services/usshares" className="dropdown-item text-right" dir="RTL">
                                                        {t("productsAndServices.usshares")}
                                                    </Link>
                                                    <Link to="/products-and-services/asiashares" className="dropdown-item text-right" dir="RTL">
                                                        {t("productsAndServices.asiashares")}
                                                    </Link>
                                                    <Link to="/products-and-services/eurshares" className="dropdown-item text-right" dir="RTL">
                                                        {t("productsAndServices.eurshares")}
                                                    </Link>
                                                    <Link to="/products-and-services/cryptoforex" className="dropdown-item text-right" dir="RTL">
                                                        {t("productsAndServices.cryptoccycfd")}
                                                    </Link>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/why-choose-cjc" className="nav-link" dir="RTL">
                                                    {t("header.why")}
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/about-us" className="nav-link" dir="RTL">
                                                    {t("header.aboutUs")}
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <Link className="nav-item nav-logo-mobile" to="/">
                                        {/* <img src={logoImage} alt="logo" height="60px" /> */}
                                        <img
                                            className={`${navBackground ? "nav-logo-dark" : "nav-logo-light"} py-2`}
                                            src={logoNavDark}
                                            height="50px"
                                            alt="logo of CJC"
                                        />
                                        <img
                                            className={`${navBackground ? "nav-logo-light" : "nav-logo-dark"} py-2`}
                                            src={logoNavLight}
                                            height="50px"
                                            alt="logo of CJC"
                                        />
                                    </Link>
                                    <div className="nav-flex">
                                        <button
                                            className="navbar-toggler nav-item nav-toggler-mobile"
                                            type="button"
                                            aria-expanded={ariaExpanded}>
                                            <span onClick={handleNavCollapse}>
                                                <svg viewBox="0 0 100 80" width="40" height="32">
                                                    <rect width="80" height="6" fill="#0D0746"></rect>
                                                    <rect y="30" width="80" height="6" fill="#0D0746"></rect>
                                                    <rect y="60" width="80" height="6" fill="#0D0746"></rect>
                                                </svg>
                                            </span>
                                        </button>

                                        <span
                                            className="navbar-toggler nav-item nav-toggler-mobile"
                                            onClick={handleSearchForm}
                                            style={{fontSize: "1.6rem"}}>
                                            &#127759;
                                        </span>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </header>

                    <div className={searchFormStatus}>
                        <span className="close" id="searchClose" style={{cursor: "pointer"}} onClick={() => handleSearchForm()}>
                            &#10761;
                        </span>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                    <h6 className="text-red">{t("header.chooseLanguage")}</h6>
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <h6 style={{cursor: "pointer"}} onClick={() => changeLanguage("zh")}>
                                                简体中文
                                            </h6>
                                        </div>
                                        <div className="col-lg-2">
                                            <h6 style={{cursor: "pointer"}} onClick={() => changeLanguage("tw")}>
                                                繁體中文
                                            </h6>
                                        </div>
                                        <div className="col-lg-2">
                                            <h6 style={{cursor: "pointer"}} onClick={() => changeLanguage("en")}>
                                                English
                                            </h6>
                                        </div>
                                        <div className="col-lg-2">
                                            <h6 style={{cursor: "pointer"}} onClick={() => changeLanguage("vi")}>
                                                Tiếng Việt
                                            </h6>
                                        </div>
                                        <div className="col-lg-2">
                                            <h6 style={{cursor: "pointer"}} onClick={() => changeLanguage("ko")}>
                                                한국어
                                            </h6>
                                        </div>
                                        <div className="col-lg-2">
                                            <h6 style={{cursor: "pointer"}} onClick={() => changeLanguage("th")}>
                                                ภาษาไทย
                                            </h6>
                                        </div>
                                        <div className="col-lg-2">
                                            <h6 style={{cursor: "pointer"}} onClick={() => changeLanguage("ms")}>
                                                Bahasa Melayu
                                            </h6>
                                        </div>
                                        <div className="col-lg-2">
                                            <h6 style={{cursor: "pointer"}} onClick={() => changeLanguage("ar")}>
                                                عربى    
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }else{
            return (
                <>
                    <header className={`nav-fixed-top ${navBackground ? "nav-dark box-shadow" : "nav-light"}`}>
                        <div className="navigation">
                            <div className="container-lg">
                                <nav className="navbar navbar-expand-lg nav-flex">
                                    <Link className="nav-item nav-logo-mobile" to="/">
                                        {/* <img src={logoImage} alt="logo" height="60px" /> */}
                                        <img
                                            className={`${navBackground ? "nav-logo-dark" : "nav-logo-light"} py-2`}
                                            src={logoNavDark}
                                            height="50px"
                                            alt="logo of CJC"
                                        />
                                        <img
                                            className={`${navBackground ? "nav-logo-light" : "nav-logo-dark"} py-2`}
                                            src={logoNavLight}
                                            height="50px"
                                            alt="logo of CJC"
                                        />
                                    </Link>
                                    <div className="nav-flex">
                                        <button
                                            className="navbar-toggler nav-item nav-toggler-mobile"
                                            type="button"
                                            aria-expanded={ariaExpanded}>
                                            <span onClick={handleNavCollapse}>
                                                <svg viewBox="0 0 100 80" width="40" height="32">
                                                    <rect width="80" height="6" fill="#0D0746"></rect>
                                                    <rect y="30" width="80" height="6" fill="#0D0746"></rect>
                                                    <rect y="60" width="80" height="6" fill="#0D0746"></rect>
                                                </svg>
                                            </span>
                                        </button>

                                        <span
                                            className="navbar-toggler nav-item nav-toggler-mobile"
                                            onClick={handleSearchForm}
                                            style={{fontSize: "1.6rem"}}>
                                            &#127759;
                                        </span>
                                    </div>
                                    <div className={collapseStatus} id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item">
                                                <Link to="/about-us" className="nav-link">
                                                    {t("header.aboutUs")}
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/why-choose-cjc" className="nav-link">
                                                    {t("header.why")}
                                                </Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <span
                                                    className="nav-link dropdown-toggle"
                                                    role="button"
                                                    onClick={handleProductsCollapse}>
                                                    {t("header.products")}
                                                </span>
                                                <div className={dropdownProductsStatus}>
                                                    <Link to="/products-and-services/forex" className="dropdown-item">
                                                        {t("productsAndServices.foreignExchange")}
                                                    </Link>
                                                    <Link to="/products-and-services/oil" className="dropdown-item">
                                                        {t("productsAndServices.crudeOil")}
                                                    </Link>
                                                    <Link to="/products-and-services/metal" className="dropdown-item">
                                                        {t("productsAndServices.preciousMetals")}
                                                    </Link>
                                                    <Link to="/products-and-services/indices" className="dropdown-item">
                                                        {t("productsAndServices.stockIndex")}
                                                    </Link>
                                                    <Link to="/products-and-services/usshares" className="dropdown-item">
                                                        {t("productsAndServices.usshares")}
                                                    </Link>
                                                    <Link to="/products-and-services/asiashares" className="dropdown-item">
                                                        {t("productsAndServices.asiashares")}
                                                    </Link>
                                                    <Link to="/products-and-services/eurshares" className="dropdown-item">
                                                        {t("productsAndServices.eurshares")}
                                                    </Link>
                                                    <Link to="/products-and-services/cryptoforex" className="dropdown-item">
                                                        {t("productsAndServices.cryptoccycfd")}
                                                    </Link>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <span
                                                    className="nav-link dropdown-toggle"
                                                    role="button"
                                                    onClick={handleServicesCollapse}>
                                                    {t("header.partner")}
                                                </span>
                                                <div className={dropdownServicesStatus}>
                                                    <Link to="/cooperate#hedge" className="dropdown-item">
                                                        {t("header.hedge")}
                                                    </Link>
                                                    <Link to="/cooperate#introducing-brokers" className="dropdown-item">
                                                        {t("header.ib")}
                                                    </Link>
                                                    <Link
                                                        to="/cooperate#multi-account-manager-solution"
                                                        className="dropdown-item">
                                                        {t("header.mam")}
                                                    </Link>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <span
                                                    className="nav-link dropdown-toggle"
                                                    role="button"
                                                    onClick={handlePlatformsCollapse}>
                                                    {t("header.platform")}
                                                </span>
                                                <div className={dropdownPlatformsStatus}>
                                                    <Link to="/platform/iphone" className="dropdown-item">
                                                        {t("header.iphone")}
                                                    </Link>
                                                    <Link to="/platform/android" className="dropdown-item">
                                                        {t("header.android")}
                                                    </Link>
                                                    <Link to="/platform/ipad" className="dropdown-item">
                                                        {t("header.ipad")}
                                                    </Link>
                                                    <Link to="/platform/windows" className="dropdown-item">
                                                        {t("header.windows")}
                                                    </Link>
                                                    <Link to="/platform/mac" className="dropdown-item">
                                                        {t("header.mac")}
                                                    </Link>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/help/qna" className="nav-link">
                                                    {t("header.help")}
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/News" className="nav-link">
                                                    {t("header.news")}
                                                </Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <span
                                                    className="nav-link dropdown-toggle"
                                                    role="button"
                                                    onClick={handleLoginCollapse}>
                                                    {t("header.login")}
                                                </span>
                                                <div className={dropdownLoginStatus}>
                                                    <Link to="/login/broker" className="dropdown-item">
                                                        {t("login.loginBroker")}
                                                    </Link>
                                                    <Link to="/login/trader" className="dropdown-item">
                                                        {t("login.loginTrader")}
                                                    </Link>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown nav-mobile-i18n">
                                                <span
                                                    className="nav-link dropdown-toggle"
                                                    role="button"
                                                    onClick={handleI18nCollapse}>
                                                    &#127759;
                                                </span>
                                                <div className={dropdownI18nStatus}>
                                                    <a href="" className="dropdown-item" onClick={() => changeLanguage("zh")}>
                                                        简体中文
                                                    </a>
                                                    <a href="" className="dropdown-item" onClick={() => changeLanguage("tw")}>
                                                        繁體中文
                                                    </a>
                                                    <a href="" className="dropdown-item" onClick={() => changeLanguage("en")}>
                                                        English
                                                    </a>
                                                    <a href="" className="dropdown-item" onClick={() => changeLanguage("vi")}>
                                                        Tiếng Việt
                                                    </a>
                                                    <a href="" className="dropdown-item" onClick={() => changeLanguage("ko")}>
                                                        한국어
                                                    </a>
                                                    <a href="" className="dropdown-item" onClick={() => changeLanguage("th")}>
                                                        ภาษาไทย
                                                    </a>
                                                    <a href="" className="dropdown-item" onClick={() => changeLanguage("ms")}>
                                                        Bahasa Melayu
                                                    </a>
                                                    <a href="" className="dropdown-item" onClick={() => changeLanguage("ar")}>
                                                        عربى 
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="/external-sign-up" className="nav-link">
                                                    <span>{t("header.register")}</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </header>

                    <div className={searchFormStatus}>
                        <span className="close" id="searchClose" style={{cursor: "pointer"}} onClick={() => handleSearchForm()}>
                            &#10761;
                        </span>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                    <h6 className="text-red">{t("header.chooseLanguage")}</h6>
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <h6 style={{cursor: "pointer"}} onClick={() => changeLanguage("zh")}>
                                                简体中文
                                            </h6>
                                        </div>
                                        <div className="col-lg-2">
                                            <h6 style={{cursor: "pointer"}} onClick={() => changeLanguage("tw")}>
                                                繁體中文
                                            </h6>
                                        </div>
                                        <div className="col-lg-2">
                                            <h6 style={{cursor: "pointer"}} onClick={() => changeLanguage("en")}>
                                                English
                                            </h6>
                                        </div>
                                        <div className="col-lg-2">
                                            <h6 style={{cursor: "pointer"}} onClick={() => changeLanguage("vi")}>
                                                Tiếng Việt
                                            </h6>
                                        </div>
                                        <div className="col-lg-2">
                                            <h6 style={{cursor: "pointer"}} onClick={() => changeLanguage("ko")}>
                                                한국어
                                            </h6>
                                        </div>
                                        <div className="col-lg-2">
                                            <h6 style={{cursor: "pointer"}} onClick={() => changeLanguage("th")}>
                                                ภาษาไทย
                                            </h6>
                                        </div>
                                        <div className="col-lg-2">
                                            <h6 style={{cursor: "pointer"}} onClick={() => changeLanguage("ms")}>
                                                Bahasa Melayu
                                            </h6>
                                        </div>
                                        <div className="col-lg-2">
                                            <h6 style={{cursor: "pointer"}} onClick={() => changeLanguage("ar")}>
                                                عربى  
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }
return <>{headers(i18n.language)}</>
    }

function Header() {
    return (
        <Suspense fallback="loading">
            <HeaderComponent />
        </Suspense>
    )
}

export default Header
    