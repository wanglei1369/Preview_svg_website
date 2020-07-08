/** @format */

import React, {CSSProperties} from "react"
import {useTranslation} from "react-i18next"
import "../styles/ourAdvantages.css"
import bannerDemoImg from "../images/banner-demo.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel"
import Modal from "./Modal"
import cnBannerImg from "../images/banner/cn-banner.jpg"
import cnBannerIBImg from "../images/banner/cn-ibbanner.jpg"
import msBannerImg from "../images/banner/ms-banner.jpg"
import msBannerImg2 from "../images/banner/ms-banner2.jpg"
import {Link} from "react-router-dom"
import "../styles/banner.css"

export default function Banner() {
    const {t, i18n} = useTranslation("")
    const bannerOneStyle: CSSProperties = {
        background: `linear-gradient(to bottom, rgba(43, 43, 43, 0.9), rgba(0, 1, 40, 0.3)), url(${bannerDemoImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
        maxHeight: "100vh",
    }
    const cnBannerImgStyle: CSSProperties = {
        background: `url(${cnBannerImg})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
        maxHeight: "100vh",
    }
    const cnBannerIbImgStyle: CSSProperties = {
        background: `url(${cnBannerIBImg})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
        maxHeight: "100vh",
    }
    const msBannerImgStyle: CSSProperties = {
        background: `url(${msBannerImg})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
        maxHeight: "100vh",
    }
    const msBannerImgTStyle: CSSProperties = {
        background: `url(${msBannerImg2})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
        maxHeight: "100vh",
    }
    const carouselTextStyle: CSSProperties = {
        zIndex: 2000,
    }
    const cnBanner = (languageCode: string) => {
        if (languageCode.includes("zh")) {
            return (
                <>
                    <Carousel
                        infiniteLoop
                        useKeyboardArrows
                        autoPlay
                        showStatus={false}
                        showThumbs={false}
                        interval={6000}>
                        <section className="section blur-bgimage" style={cnBannerImgStyle}>
                            <div className="container" style={carouselTextStyle}>
                                <div className="row banner">
                                    <div className="col-lg-12 text-left">
                                        <h2 className="text-white" style={{fontWeight: "bold"}}>
                                        全年赠金
                                        </h2>
                                        {/* <h4 className="text-cream mb-20">2020年3月1日-2020年6月1日</h4> */}
                                        <h4 className="text-white mb-20">
                                            安全稳健的交易平台
                                            <br />
                                            赠金力度高达50%  
                                        </h4>
                                    </div>
                                    <div className="col-lg-12 col-md-12 text-left">
                                        <Link to="/promotion-cn" className="btn-outlinebn">
                                            了解活动细则
                                        </Link>
                                        <p className="text-white">本活动仅限中国大陆客户参与</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section blur-bgimage" style={cnBannerIbImgStyle}>
                            <div className="container" style={carouselTextStyle}>
                                <div className="row banner">
                                    <div className="col-lg-12 text-left">
                                        <h2 className="text-white" style={{fontWeight: "bold"}}>
                                        智享商机
                                        <br/>
                                        财富共赢
                                        </h2>
                                        {/* <h4 className="text-cream mb-20">2020年3月1日-2020年6月1日</h4> */}
                                        <h4 className="text-white mb-20">
                                            代理扶持计划
                                            {/* <br />
                                            赠金力度高达50%   */}
                                        </h4>
                                    </div>
                                    <div className="col-lg-12 col-md-12 text-left">
                                        <Link to="/promotionib-cn" className="btn-outlinebn">
                                            了解活动细则
                                        </Link>
                                        <p className="text-white">本活动限所有CJC Markets 代理参与</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section blur-bgimage" style={bannerOneStyle}>
                            <div className="container" style={carouselTextStyle}>
                                <div className="row banner">
                                    <div className="col-lg-12">
                                        <h2 className="text-white text-left" style={{fontWeight: "bold"}}>
                                            {t("hero.heroSubtitle1")}
                                            <br />
                                            {t("hero.heroSubtitle1PreCN")}
                                            {t("hero.heroSubtitle1CN")}
                                            {t("hero.heroSubtitle2")}
                                        </h2>
                                        <h5 className="section-title text-white banner-title text-left">
                                            {t("hero.heroMessage")}
                                        </h5>
                                    </div>
                                    <div className="col-lg-6 col-md-12 text-left">
                                        <Link to="/external-sign-up" className="btn-grey-inverse">
                                            {t("hero.createLiveAccount")}
                                        </Link>
                                        <Link to="/external-mock-up" className="btn-solid">
                                            {t("hero.createDemoAccount")}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Carousel>
                </>
            )
        } else if (languageCode.includes("ar")){
            return (
                <>
                    <Carousel
                        infiniteLoop
                        useKeyboardArrows
                        autoPlay
                        showStatus={false}
                        showThumbs={false}
                        interval={6000}>
                        <section className="section blur-bgimage" style={bannerOneStyle}>
                            <div className="container" style={carouselTextStyle}>
                                <div className="row banner">
                                    <div className="col-lg-12">
                                        <h1 className="text-white text-right" style={{fontWeight: "bold"}} dir="RTL">
                                            {t("hero.heroSubtitle1")}
                                            <br />
                                            {t("hero.heroSubtitle1PreCN")}
                                            {t("hero.heroSubtitle1CN")}
                                            {t("hero.heroSubtitle2")}
                                        </h1>
                                        <h4 className="section-title text-white banner-title text-right" dir="RTL">
                                            {t("hero.heroMessage")}
                                            {t("hero.heroMessage1")}
                                            {t("hero.heroMessage2")}
                                        </h4>
                                    </div>
                                    <div className="col-lg-12 col-md-12 text-right">
                                        <Link to="/external-sign-up" className="btn-grey-inverse" dir="RTL">
                                            {t("hero.createLiveAccount")}
                                        </Link>
                                        <Link to="/external-mock-up" className="btn-solid" dir="RTL">
                                            {t("hero.createDemoAccount")}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Carousel>
                </>
            )
        }else if (languageCode.includes("vi")){
            return (
                <>
                    <Modal />
                    <Carousel
                        infiniteLoop
                        useKeyboardArrows
                        autoPlay
                        showStatus={false}
                        showThumbs={false}
                        interval={6000}>
                        <section className="section blur-bgimage" style={bannerOneStyle}>
                            <div className="container" style={carouselTextStyle}>
                                <div className="row banner">
                                    <div className="col-lg-12">
                                        <h2 className="text-white text-left" style={{fontWeight: "bold"}}>
                                            {t("hero.heroSubtitle1")}
                                            <br />
                                            {t("hero.heroSubtitle1PreCN")}
                                            {t("hero.heroSubtitle1CN")}
                                            {t("hero.heroSubtitle2")}
                                        </h2>
                                        <h5 className="section-title text-white banner-title text-left">
                                            {t("hero.heroMessage")}
                                        </h5>
                                    </div>
                                    <div className="col-lg-6 col-md-12 text-left">
                                        <Link to="/external-sign-up" className="btn-grey-inverse">
                                            {t("hero.createLiveAccount")}
                                        </Link>
                                        <Link to="/external-mock-up" className="btn-solid">
                                            {t("hero.createDemoAccount")}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Carousel>
                </>
            )
        }else if (languageCode.includes("ms")) {
            return (
                <>
                    <Carousel
                        infiniteLoop
                        useKeyboardArrows
                        autoPlay
                        showStatus={false}
                        showThumbs={false}
                        interval={6000}>
                        <section className="section blur-bgimage" style={msBannerImgStyle}>
                            <div className="container" style={carouselTextStyle}>
                                <div className="row banner">
                                    <div className="col-lg-12 text-left">
                                        <h2 className="text-white" style={{fontWeight: "bold"}}>                                            
                                            <br/>
                                        </h2>                                        
                                        <h4 className="text-white mb-20">
                                            
                                            <br />
                                        
                                        </h4>
                                    </div>
                                    <div className="col-lg-12 col-md-12 text-left">
                                        
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section blur-bgimage" style={msBannerImgTStyle}>
                            <div className="container" style={carouselTextStyle}>
                                <div className="row banner">
                                    <div className="col-lg-12 text-left">
                                        <h2 className="text-white" style={{fontWeight: "bold"}}>
                                            
                                        </h2>                                        
                                        <h4 className="text-white mb-20">
                                         
                                        </h4>
                                    </div>
                                    <div className="col-lg-12 col-md-12 text-left">
                                        
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section blur-bgimage" style={bannerOneStyle}>
                            <div className="container" style={carouselTextStyle}>
                                <div className="row banner">
                                    <div className="col-lg-12">
                                        <h2 className="text-white text-left" style={{fontWeight: "bold"}}>
                                            {t("hero.heroSubtitle1")}
                                            <br />
                                            {t("hero.heroSubtitle1PreCN")}
                                            {t("hero.heroSubtitle1CN")}
                                            {t("hero.heroSubtitle2")}
                                        </h2>
                                        <h5 className="section-title text-white banner-title text-left">
                                            {t("hero.heroMessage")}
                                        </h5>
                                    </div>
                                    <div className="col-lg-6 col-md-12 text-left">
                                        <Link to="/external-sign-up" className="btn-grey-inverse">
                                            {t("hero.createLiveAccount")}
                                        </Link>
                                        <Link to="/external-mock-up" className="btn-solid">
                                            {t("hero.createDemoAccount")}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Carousel>
                </>
            )
        }else {
            return (
                <>
                    <Carousel
                        infiniteLoop
                        useKeyboardArrows
                        autoPlay
                        showStatus={false}
                        showThumbs={false}
                        interval={6000}>
                        <section className="section blur-bgimage" style={bannerOneStyle}>
                            <div className="container" style={carouselTextStyle}>
                                <div className="row banner">
                                    <div className="col-lg-12">
                                        <h2 className="text-white text-left" style={{fontWeight: "bold"}}>
                                            {t("hero.heroSubtitle1")}
                                            <br />
                                            {t("hero.heroSubtitle1PreCN")}
                                            {t("hero.heroSubtitle1CN")}
                                            {t("hero.heroSubtitle2")}
                                        </h2>
                                        <h5 className="section-title text-white banner-title text-left">
                                            {t("hero.heroMessage")}
                                        </h5>
                                    </div>
                                    <div className="col-lg-6 col-md-12 text-left">
                                        <Link to="/external-sign-up" className="btn-grey-inverse">
                                            {t("hero.createLiveAccount")}
                                        </Link>
                                        <Link to="/external-mock-up" className="btn-solid">
                                            {t("hero.createDemoAccount")}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Carousel>
                </>
            )
        }
    }

    return <>{cnBanner(i18n.language)}</>
}
