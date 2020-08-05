/** @format */

import React, { useState } from "react"
import "../components/i18n"
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"
import LayoutSecondary from "../layouts/layoutSecondary"
import bannerImg from "../images/platform/banner.jpg"
import { Link } from "react-router-dom"
import ReactPlayer from "react-player"
import QRCode from "qrcode.react"
import svgApk from "../images/platform/apk.svg"
import badgeIOSEn from "../images/badges/Apple_en.svg"
import badgeIOSZh from "../images/badges/Apple_zh.svg"
import badgeIOSVi from "../images/badges/Apple_vn.svg"
import badgeIOSKo from "../images/badges/Apple_kr.svg"
import badgeAndroidZh from "../images/badges/Google_zh.png"
import badgeAndroidEn from "../images/badges/Google_en.png"
import badgeAndroidKo from "../images/badges/Google_kr.png"
import badgeAndroidVi from "../images/badges/Google_vn.png"
import badgeWinEn from "../images/badges/Microsoft_en.svg"
import badgeWinZh from "../images/badges/Microsoft_zh.svg"
import badgeWinKo from "../images/badges/Microsoft_kr.svg"
import badgeWinVi from "../images/badges/Microsoft_vn.svg"
import badgeMac from "../images/badges/Mac-logo.svg"
interface Props {
    highlightString: number
}

const VideoComponent = (languageCode: string) => {
    if (languageCode.includes("zh")) {
        return (
            <>
                <div className="text-center" style={{ textAlign: "center" }}>
                    <ReactPlayer
                        url="/media/videos/svg-android-cn.mp4"
                        playing={false}
                        controls={true}
                        width={500}
                        style={{ textAlign: "center" }}
                    />
                </div>
            </>
        )
    }
}

const DownloadBadgeiOS = (languageCode: string) => {
    console.log(languageCode)
    if (languageCode.includes("vi")) {
        return (
            <>
                <img src={badgeIOSVi} alt="logo of MT4 iOS" className="img-fluid w-100 text-left align-bottom" />
            </>
        )
    }
    if (languageCode.includes("ko")) {
        return (
            <>
                <img src={badgeIOSKo} alt="logo of MT4 iOS" className="img-fluid w-100 text-left align-bottom" />
            </>
        )
    }
    if (languageCode.includes("ar")) {
        return (
            <>
                <img src={badgeIOSEn} alt="logo of MT4 iOS" className="img-fluid w-100 text-right align-bottom" />
            </>
        )
    }
    if (languageCode.includes("zh")) {
        return (
            <>
                <img src={badgeIOSZh} alt="logo of MT4 iOS" className="img-fluid w-100 text-left align-bottom" />
            </>
        )
    } else {
        return (
            <>
                <img src={badgeIOSEn} alt="logo of MT4 iOS" className="img-fluid w-100 text-left align-bottom" />
            </>
        )
    }
}
const DownloadBadgeAndroid = (languageCode: string) => {
    console.log(languageCode)
    if (languageCode.includes("vi")) {
        return (
            <>
                <img src={badgeAndroidVi} alt="logo of MT4 Android" className="img-fluid w-100 text-center" />
            </>
        )
    }
    if (languageCode.includes("ko")) {
        return (
            <>
                <img src={badgeAndroidKo} alt="logo of MT4 Android" className="img-fluid w-100 text-center" />
            </>
        )
    }
    if (languageCode.includes("ar")) {
        return (
            <>
                <img src={badgeAndroidEn} alt="logo of MT4 Android" className="img-fluid w-100 text-right" />
            </>
        )
    }
    if (languageCode.includes("zh")) {
        return (
            <>
                <img src={badgeAndroidZh} alt="logo of MT4 Android" className="img-fluid w-100 text-center" />
            </>
        )
    } else {
        return (
            <>
                <img src={badgeAndroidEn} alt="logo of MT4 Android" className="img-fluid w-100 text-center" />
            </>
        )
    }
}
const DownloadBadgeWindows = (languageCode: string) => {
    if (languageCode.includes("vi")) {
        return (
            <>
                <Link to="/platform-download/goto/windows-vi">
                    <img
                        src={badgeWinVi}
                        alt="logo of MT4 Windows Viet"
                        className="img-fluid w-100 text-left align-bottom"
                    />
                </Link>
            </>
        )
    }
    if (languageCode.includes("ko")) {
        return (
            <>
                <Link to="/platform-download/goto/windows">
                    <img
                        src={badgeWinKo}
                        alt="logo of MT4 Windows"
                        className="img-fluid w-100 text-left align-bottom"
                    />
                </Link>
            </>
        )
    }
    if (languageCode.includes("zh")) {
        return (
            <>
                <Link to="/platform-download/goto/windows-zh">
                    <img
                        src={badgeWinZh}
                        alt="logo of MT4 Windows"
                        className="img-fluid w-100 text-left align-bottom"
                    />
                </Link>
            </>
        )
    }
    if (languageCode.includes("ar")) {
        return (
            <>
                <Link to="/platform-download/goto/windows">
                    <img
                        src={badgeWinEn}
                        alt="logo of MT4 Windows"
                        className="img-fluid w-100 text-right align-bottom"
                    />
                </Link>
            </>
        )
    }
    else {
        return (
            <>
                <Link to="/platform-download/goto/windows">
                    <img
                        src={badgeWinEn}
                        alt="logo of MT4 Windows"
                        className="img-fluid w-100 text-left align-bottom"
                    />
                </Link>
            </>
        )
    }
}
const DownloadBadgeMac = (languageCode: string) => {
    if (languageCode.includes("vi")) {
        return (
            <>
                <Link to="/platform-download/goto/mac">
                    <img
                        src={badgeMac}
                        alt="logo of MT4 Mac"
                        className="img-fluid w-100 text-left align-bottom"
                    />
                </Link>
            </>
        )
    }
    if (languageCode.includes("ar")) {
        return (
            <>
                <Link to="/platform-download/goto/mac">
                    <img
                        src={badgeMac}
                        alt="logo of MT4 Mac"
                        className="img-fluid w-100 text-left align-bottom"
                    />
                </Link>
            </>
        )
    } else {
        return (
            <>
                <Link to="/platform-download/goto/mac">
                    <img
                        src={badgeMac}
                        alt="logo of MT4 Mac"
                        className="img-fluid w-100 text-left align-bottom"
                    />
                </Link>
            </>
        )
    }
}

const iPhone = (t: any, currentLang: string) => {
    if (currentLang.includes("ar")) {
        return (
            <>
                <h4 className="mb-30" dir="RTL">
                    <b>{t("platform.iphoneTitle")}</b>
                </h4>

                <div className="bg-gray p-5 mb-60">
                    <div className="row justify-content-center mb-10">
                        <div className="col-lg-4 text-right align-bottom mb-20">
                            <Link to="/platform-download/goto/iphone" className="align-bottom">
                                {DownloadBadgeiOS("ar")}
                            </Link>
                        </div>
                        <div className="col-lg-8 text-center" dir="RTL">
                            <>
                                {t("platform.iphoneMessage")
                                    .split("\n")
                                    .map((i: React.ReactNode, key: string | number | undefined) => {
                                        return (
                                            <div key={key}>
                                                <p className="text-dark text-right" dir="RTL">{i}</p>
                                                <br />
                                            </div>
                                        )
                                    })}
                            </>
                        </div>

                        <div className="col-lg-12 text-left">
                            <h5 className="text-highlight text-right" dir="RTL">{t("platform.iphoneQuoteTitle")}</h5>
                            <>
                                {t("platform.iphoneQuoteMessage")
                                    .split("\n")
                                    .map((i: React.ReactNode, key: string | number | undefined) => {
                                        return (
                                            <div key={key}>
                                                <p className="text-dark text-right">{i}</p>
                                                <br />
                                            </div>
                                        )
                                    })}
                            </>
                        </div>
                    </div>
                    <div className="row justify-content-center mb-10">
                        <div className="col-lg-12 text-left">
                            <h5 className="text-highlight text-right" dir="RTL">{t("platform.iphoneChartingTitle")}</h5>
                            <>
                                {t("platform.iphoneChartingMessage")
                                    .split("\n")
                                    .map((i: React.ReactNode, key: string | number | undefined) => {
                                        return (
                                            <div key={key}>
                                                <p className="text-dark text-right">{i}</p>
                                                <br />
                                            </div>
                                        )
                                    })}
                            </>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <h4 className="mb-30">
                    <b>{t("platform.iphoneTitle")}</b>
                </h4>

                <div className="bg-gray p-5 mb-60">
                    <div className="row justify-content-center mb-10">
                        <div className="col-lg-4 text-left align-bottom mb-20">
                            <Link to="/platform-download/goto/iphone" className="align-bottom">
                                {DownloadBadgeiOS(currentLang)}
                            </Link>
                        </div>
                        <div className="col-lg-8 text-center">
                            <>
                                {t("platform.iphoneMessage")
                                    .split("\n")
                                    .map((i: React.ReactNode, key: string | number | undefined) => {
                                        return (
                                            <div key={key}>
                                                <p className="text-dark text-left">{i}</p>
                                                <br />
                                            </div>
                                        )
                                    })}
                            </>
                        </div>

                        <div className="col-lg-12 text-left">
                            <h5 className="text-highlight">{t("platform.iphoneQuoteTitle")}</h5>
                            <>
                                {t("platform.iphoneQuoteMessage")
                                    .split("\n")
                                    .map((i: React.ReactNode, key: string | number | undefined) => {
                                        return (
                                            <div key={key}>
                                                <p className="text-dark text-left">{i}</p>
                                                <br />
                                            </div>
                                        )
                                    })}
                            </>
                        </div>
                    </div>
                    <div className="row justify-content-center mb-10">
                        <div className="col-lg-12 text-left">
                            <h5 className="text-highlight">{t("platform.iphoneChartingTitle")}</h5>
                            <>
                                {t("platform.iphoneChartingMessage")
                                    .split("\n")
                                    .map((i: React.ReactNode, key: string | number | undefined) => {
                                        return (
                                            <div key={key}>
                                                <p className="text-dark text-left">{i}</p>
                                                <br />
                                            </div>
                                        )
                                    })}
                            </>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


const iPad = (t: any, currentLang: string) => {
    if (currentLang.includes("ar")) {
        return (
            <>
                <h4 className="mb-30">
                    <b>{t("platform.ipadTitle")}</b>
                </h4>

                <div className="bg-gray p-5 mb-60">
                    <div className="row justify-content-center mb-10">
                        <div className="col-lg-4 text-right align-bottom mb-20">
                            <Link to="/platform-download/goto/ipad" className="align-bottom">
                                {DownloadBadgeiOS("ar")}
                            </Link>
                        </div>
                        <div className="col-lg-8 text-center">
                            <>
                                {t("platform.ipadMessage")
                                    .split("\n")
                                    .map((i: React.ReactNode, key: string | number | undefined) => {
                                        return (
                                            <div key={key}>
                                                <p className="text-dark text-right">{i}</p>
                                                <br />
                                            </div>
                                        )
                                    })}
                            </>
                        </div>

                        <div className="col-lg-12 text-right">
                            <h5 className="text-highlight text-right">{t("platform.ipadQuoteTitle")}</h5>
                            <>
                                {t("platform.ipadQuoteMessage")
                                    .split("\n")
                                    .map((i: React.ReactNode, key: string | number | undefined) => {
                                        return (
                                            <div key={key}>
                                                <p className="text-dark text-right">{i}</p>
                                                <br />
                                            </div>
                                        )
                                    })}
                            </>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <h4 className="mb-30">
                    <b>{t("platform.ipadTitle")}</b>
                </h4>

                <div className="bg-gray p-5 mb-60">
                    <div className="row justify-content-center mb-10">
                        <div className="col-lg-4 text-left align-bottom mb-20">
                            <Link to="/platform-download/goto/ipad" className="align-bottom">
                                {DownloadBadgeiOS(currentLang)}
                            </Link>
                        </div>
                        <div className="col-lg-8 text-center">
                            <>
                                {t("platform.ipadMessage")
                                    .split("\n")
                                    .map((i: React.ReactNode, key: string | number | undefined) => {
                                        return (
                                            <div key={key}>
                                                <p className="text-dark text-left">{i}</p>
                                                <br />
                                            </div>
                                        )
                                    })}
                            </>
                        </div>

                        <div className="col-lg-12 text-left">
                            <h5 className="text-highlight">{t("platform.ipadQuoteTitle")}</h5>
                            <>
                                {t("platform.ipadQuoteMessage")
                                    .split("\n")
                                    .map((i: React.ReactNode, key: string | number | undefined) => {
                                        return (
                                            <div key={key}>
                                                <p className="text-dark text-left">{i}</p>
                                                <br />
                                            </div>
                                        )
                                    })}
                            </>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const android = (t: any, currentLang: string) => {
    if (currentLang.includes("ar")) {
        return (
            <>
                <h4 className="mb-30">
                    <b>{t("platform.androidTitle")}</b>
                </h4>

                <div className="bg-gray p-5 mb-60">
                    <div className="col-lg-6 text-center mb-30">{VideoComponent(currentLang)}</div>
                    <div className="row justify-content-center mb-10">
                        <div className="col-lg-4 text-right align-bottom mb-20">
                            <Link to="/platform-download/goto/android" className="align-bottom">
                                {DownloadBadgeAndroid("ar")}
                            </Link>
                        </div>
                        <div className="col-lg-3 text-right">
                            <a href="/media/installer/metatrader4.apk">
                                <img
                                    src={svgApk}
                                    alt="logo of Android APK"
                                    className="img-fluid w-100"
                                    style={{ color: "#007bff" }}
                                />
                                <p className="text-dark text-right">{t("platform.apkDownload")}</p>
                            </a>
                        </div>
                        <div className="col-lg-3 text-center">
                            <QRCode
                                //value="https://www.cjcmarkets-svg.com/Promotionta-CN"
                                value="https://cjcmarkets-global.com/media/installer/metatrader4.apk"
                                renderAs="svg"
                                fgColor="#0D0746"
                            />
                        </div>
                        <div className="col-lg-8 text-center">
                            <>
                                {t("platform.androidMessage")
                                    .split("\n")
                                    .map((i: React.ReactNode, key: string | number | undefined) => {
                                        return (
                                            <div key={key}>
                                                <p className="text-dark text-right">{i}</p>
                                                <br />
                                            </div>
                                        )
                                    })}
                            </>
                        </div>

                        <div className="col-lg-12 text-right">
                            <h5 className="text-highlight text-right">{t("platform.androidQuoteTitle")}</h5>
                            <>
                                {t("platform.androidQuoteMessage")
                                    .split("\n")
                                    .map((i: React.ReactNode, key: string | number | undefined) => {
                                        return (
                                            <div key={key}>
                                                <p className="text-dark text-right">{i}</p>
                                                <br />
                                            </div>
                                        )
                                    })}
                            </>
                        </div>
                    </div>
                </div>
            </>
        )
    } else if(currentLang.includes("zh")){
        return (
            <>
                <h4 className="mb-30">
                    <b>{t("platform.androidTitle")}</b>
                </h4>

                <div className="bg-gray p-5 mb-60">
                    <div className="col-lg-6 text-center mb-30">{VideoComponent(currentLang)}</div>
                    <div className="row justify-content-center mb-10">
                        <div className="col-lg-4 text-left align-bottom mb-20">
                            <Link to="/platform-download/goto/android" className="align-bottom">
                                {DownloadBadgeAndroid(currentLang)}
                            </Link>
                        </div>
                        <div className="col-lg-3 text-left">
                            <a href="/media/installer/metatrader4.apk">
                                <img
                                    src={svgApk}
                                    alt="logo of Android APK"
                                    className="img-fluid w-100"
                                    style={{ color: "#007bff" }}
                                />
                                <p className="text-dark">{t("platform.apkDownload")}</p>
                            </a>
                        </div>
                        <div className="col-lg-3 text-center">
                            <QRCode                                
                                value="https://download.cjcmarkets-global.com/metatrader4.apk"
                                renderAs="svg"
                                fgColor="#0D0746"
                            />
                        </div>
                        <div className="col-lg-8 text-center">
                            <>
                                {t("platform.androidMessage")
                                    .split("\n")
                                    .map((i: React.ReactNode, key: string | number | undefined) => {
                                        return (
                                            <div key={key}>
                                                <p className="text-dark text-left">{i}</p>
                                                <br />
                                            </div>
                                        )
                                    })}
                            </>
                        </div>

                        <div className="col-lg-12 text-left">
                            <h5 className="text-highlight">{t("platform.androidQuoteTitle")}</h5>
                            <>
                                {t("platform.androidQuoteMessage")
                                    .split("\n")
                                    .map((i: React.ReactNode, key: string | number | undefined) => {
                                        return (
                                            <div key={key}>
                                                <p className="text-dark text-left">{i}</p>
                                                <br />
                                            </div>
                                        )
                                    })}
                            </>
                        </div>
                    </div>
                </div>
            </>
        )
    }else {
        return (
            <>
                <h4 className="mb-30">
                    <b>{t("platform.androidTitle")}</b>
                </h4>

                <div className="bg-gray p-5 mb-60">
                    <div className="col-lg-6 text-center mb-30">{VideoComponent(currentLang)}</div>
                    <div className="row justify-content-center mb-10">
                        <div className="col-lg-4 text-left align-bottom mb-20">
                            <Link to="/platform-download/goto/android" className="align-bottom">
                                {DownloadBadgeAndroid(currentLang)}
                            </Link>
                        </div>
                        <div className="col-lg-3 text-left">
                            <a href="/media/installer/metatrader4.apk">
                                <img
                                    src={svgApk}
                                    alt="logo of Android APK"
                                    className="img-fluid w-100"
                                    style={{ color: "#007bff" }}
                                />
                                <p className="text-dark">{t("platform.apkDownload")}</p>
                            </a>
                        </div>
                        <div className="col-lg-3 text-center">
                            <QRCode
                                //value="https://www.cjcmarkets-svg.com/PromotionIB-CN"
                                value="https://cjcmarkets-svg.com/media/installer/metatrader4.apk"
                                renderAs="svg"
                                fgColor="#0D0746"
                            />
                        </div>
                        <div className="col-lg-8 text-center">
                            <>
                                {t("platform.androidMessage")
                                    .split("\n")
                                    .map((i: React.ReactNode, key: string | number | undefined) => {
                                        return (
                                            <div key={key}>
                                                <p className="text-dark text-left">{i}</p>
                                                <br />
                                            </div>
                                        )
                                    })}
                            </>
                        </div>

                        <div className="col-lg-12 text-left">
                            <h5 className="text-highlight">{t("platform.androidQuoteTitle")}</h5>
                            <>
                                {t("platform.androidQuoteMessage")
                                    .split("\n")
                                    .map((i: React.ReactNode, key: string | number | undefined) => {
                                        return (
                                            <div key={key}>
                                                <p className="text-dark text-left">{i}</p>
                                                <br />
                                            </div>
                                        )
                                    })}
                            </>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
const mac = (t: any, currentLang: string) => {
    if (currentLang.includes("ar")) {
        return (
            <>
                <h4 className="mb-30">
                    <b>{t("platform.macTitle")}</b>
                </h4>

                <div className="bg-gray p-5 mb-60">
                    <div className="row justify-content-center mb-10">
                        <div className="col-lg-4 text-right align-bottom mb-20">
                            <Link to="/platform-download/goto/mac" className="align-bottom">
                                {DownloadBadgeMac("ar")}
                            </Link>
                        </div>
                        <div className="col-lg-8 text-center">
                            <>
                                {t("platform.macMessage")
                                    .split("\n")
                                    .map((i: React.ReactNode, key: string | number | undefined) => {
                                        return (
                                            <div key={key}>
                                                <p className="text-dark text-right">{i}</p>
                                                <br />
                                            </div>
                                        )
                                    })}
                            </>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <h4 className="mb-30">
                    <b>{t("platform.macTitle")}</b>
                </h4>

                <div className="bg-gray p-5 mb-60">
                    <div className="row justify-content-center mb-10">
                        <div className="col-lg-4 text-left align-bottom mb-20">
                            <Link to="/platform-download/goto/mac" className="align-bottom">
                                {DownloadBadgeMac(currentLang)}
                            </Link>
                        </div>
                        <div className="col-lg-8 text-center">
                            <>
                                {t("platform.macMessage")
                                    .split("\n")
                                    .map((i: React.ReactNode, key: string | number | undefined) => {
                                        return (
                                            <div key={key}>
                                                <p className="text-dark text-left">{i}</p>
                                                <br />
                                            </div>
                                        )
                                    })}
                            </>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
const windows = (t: any, currentLang: string) => {
    if (currentLang.includes("ar")) {
        return (
            <>
                <h4 className="mb-30">
                    <b>{t("platform.windowsTitle")}</b>
                </h4>

                <div className="bg-gray p-5 mb-60">
                    <div className="row justify-content-center mb-10">
                        <div className="col-lg-4 text-right align-bottom mb-20">
                            <Link to="/platform-download/goto/windows" className="align-bottom">
                                {DownloadBadgeWindows("ar")}
                            </Link>
                        </div>
                        <div className="col-lg-8 text-center">
                            <>
                                {t("platform.windowsMessage")
                                    .split("\n")
                                    .map((i: React.ReactNode, key: string | number | undefined) => {
                                        return (
                                            <div key={key}>
                                                <p className="text-dark text-right">{i}</p>
                                                <br />
                                            </div>
                                        )
                                    })}
                            </>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <h4 className="mb-30">
                    <b>{t("platform.windowsTitle")}</b>
                </h4>

                <div className="bg-gray p-5 mb-60">
                    <div className="row justify-content-center mb-10">
                        <div className="col-lg-4 text-left align-bottom mb-20">
                            <Link to="/platform-download/goto/windows" className="align-bottom">
                                {DownloadBadgeWindows(currentLang)}
                            </Link>
                        </div>
                        <div className="col-lg-8 text-center">
                            <>
                                {t("platform.windowsMessage")
                                    .split("\n")
                                    .map((i: React.ReactNode, key: string | number | undefined) => {
                                        return (
                                            <div key={key}>
                                                <p className="text-dark text-left">{i}</p>
                                                <br />
                                            </div>
                                        )
                                    })}
                            </>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

function platformContent(id: number, t: any, currentLang: string) {
    if (id == 0) {
        return <>{iPhone(t, currentLang)}</>
    }
    if (id == 1) {
        return <>{iPad(t, currentLang)}</>
    }
    if (id == 2) {
        return <>{android(t, currentLang)}</>
    }
    if (id == 3) {
        return <>{windows(t, currentLang)}</>
    }
    if (id == 4) {
        return <>{mac(t, currentLang)}</>
    }
    if (id == 5) {
        return <>{mac(t, currentLang)}</>
    }
}

function sideBar(id: number, t: any) {
    const fundsDict = [
        { id: 0, router: "iphone", content: t("platform.iphoneTitle"), style: "border-bottom" },
        { id: 1, router: "ipad", content: t("platform.ipadTitle"), style: "border-bottom" },
        { id: 2, router: "android", content: t("platform.androidTitle"), style: "border-bottom" },
        { id: 3, router: "windows", content: t("platform.windowsTitle"), style: "border-bottom" },
        { id: 4, router: "mac", content: t("platform.macTitle"), style: "border-bottom" },
    ]
    fundsDict[id].style = "active border-bottom"
    const listSidebar = fundsDict.map(fundsDictItem => (
        <li key={fundsDictItem.id} className={fundsDictItem.style}>
            <Link to={`/platform/${fundsDictItem.router}`} className="d-block font-primary text-dark p-4">
                {fundsDictItem.content}
            </Link>
        </li>
    ))
    return <>{listSidebar}</>
}

export default function Platform({ highlightString }: Props) {
    const { t, i18n } = useTranslation("")
    const currentLang = i18n.language
    const lanPlatform = (languageCode: string) => {
        if (languageCode.includes("ar")) {
            return (
                <>
                    <Helmet>
                        <title>{t("seo.paltform.Title")}</title>
                        <meta name="description" content={t("seo.paltform.Description")} />
                        <meta name="keywords" content={t("seo.paltform.Keywords")} />
                    </Helmet>
                    <LayoutSecondary bannerImg={bannerImg} pageTitle={t("platform.platformTitle")}>
                        <section className="section">
                            <div className="container">
                                <div className="row">
                                    <aside className="col-lg-4 order-lg-1 order-2 text-right">
                                        <ul className="service-menu pl-0 border mb-50 text-right">{sideBar(highlightString, t)}</ul>
                                    </aside>
                                    <div className="col-lg-8 order-lg-2 order-1 text-right">
                                        <p>{platformContent(highlightString, t, currentLang)}</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </LayoutSecondary>
                </>
            )
        } else {
            return (
                <>
                    <Helmet>
                        <title>{t("seo.paltform.Title")}</title>
                        <meta name="description" content={t("seo.paltform.Description")} />
                        <meta name="keywords" content={t("seo.paltform.Keywords")} />
                    </Helmet>
                    <LayoutSecondary bannerImg={bannerImg} pageTitle={t("platform.platformTitle")}>
                        <section className="section">
                            <div className="container">
                                <div className="row">
                                    <aside className="col-lg-4 order-lg-1 order-2">
                                        <ul className="service-menu pl-0 border mb-50">{sideBar(highlightString, t)}</ul>
                                    </aside>
                                    <div className="col-lg-8 order-lg-2 order-1">
                                        <p>{platformContent(highlightString, t, currentLang)}</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </LayoutSecondary>
                </>
            )
        }
    }
    return <>{lanPlatform(i18n.language)}</>
}