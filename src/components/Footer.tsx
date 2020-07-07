/** @format */

import React, {Suspense} from "react"
import {Link} from "react-router-dom"
import {useTranslation} from "react-i18next"
import "../fonts/iconfont/iconfont.css"
import footerImg from "../images/bg-4.jpg"

function FooterComponent() {
    const {t,i18n} = useTranslation("")
    const copyrightYear = new Date().getFullYear()
    const lanFooter = (languageCode: string) => {
        if (languageCode.includes("ar")) {
            return (
                <>
                    <footer className="footer overlay bg-secondary" style={{backgroundColor: "#0d0746"}}>
                        <div className="py-50 footer-border">
                            <div className="container">
                                <div className="row">
                                    {/* <div className="col-lg-4 col-md-4">
                                        <div className="mb-5 mb-md-0 text-center text-md-left">
                                            <img className="mb-10 w-75" src={footerLogo} alt="logo" />
                                            <p className="text-white">
                                                Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt
                                                labore dolore magna aliqua enim.
                                            </p>

                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <a className="social-icon-outline" href="#">
                                                        <i className="ti-facebook"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon-outline" href="#">
                                                        <i className="ti-twitter-alt"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon-outline" href="#">
                                                        <i className="ti-vimeo-alt"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon-outline" href="#">
                                                        <i className="ti-linkedin"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div> */}

                                    {/* <div className="col-lg-4 col-md-12">
                                        <div className="mt-5 mt-lg-0 text-center text-md-left">
                                            <h4 className="mb-4 text-white">Subscribe Us</h4>
                                            <p className="text-white mb-4">
                                                Lorem ipsum dolor sit amet, consect etur adipisicing. elit sed do eiusmod.{" "}
                                            </p>
                                            <form action="#" className="position-relative">
                                                <input
                                                    type="text"
                                                    className="form-control subscribe"
                                                    name="subscribe"
                                                    id="Subscribe"
                                                    placeholder="Enter Your Email"></input>
                                                <button className="btn-subscribe" type="submit" value="send">
                                                    <i className="ti-arrow-right"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div> */}
                                    <div className="col-lg-12 mt-2 text-right">
                                        <h6 className="h7 text-white">{t("footer.riskWarningAndProductSuitability")}</h6>
                                        <p className="footer-paragraph">
                                            {t("footer.riskWarningAndProductSuitabilityMessage")}
                                        </p>
                                    </div>
                                    <div className="col-lg-12 text-right">
                                        <h6 className="h7 text-white">{t("footer.disclaimer")}</h6>
                                        <p className="footer-paragraph">{t("footer.disclaimerMessage")}</p>
                                        <p className="footer-paragraph text-left" >
                                            Telephone calls and online chat conversations may be recorded and monitored. Apple,
                                            iPad, and iPhone are trademarks of Apple Inc., registered in the U.S. and other
                                            countries. App Store is a service mark of Apple Inc. Android is a trademark of
                                            Google Inc. This website uses cookies to obtain information about your general
                                            internet usage. Removal of cookies may affect the operation of certain parts of this
                                            website. Learn about cookies and how to remove them. Portions of this page are
                                            reproduced from work created and shared by Google and used according to terms
                                            described in the Creative Commons 3.0
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 pb-3 position-relative">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-5">
                                        <p className="text-white text-center text-md-right">
                                            <span className="text-primary">{t("footer.copyrightInfo")}</span> &copy;
                                            {copyrightYear}
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-md-7">
                                        <ul className="list-inline text-center text-md-right">
                                            <li className="list-inline-item mx-lg-3 my-lg-0 mx-2 my-2">
                                                <Link to="/help/documents" className="font-secondary text-white">
                                                    Legal documents
                                                </Link>
                                            </li>
                                            <li className="list-inline-item mx-lg-3 my-lg-0 mx-2 my-2">
                                                <a
                                                    className="font-secondary text-white text-right"
                                                    href="/media/documents/Privacy-Policy.pdf">
                                                    Privacy Policy
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </>
            )
        }else{
            return (
                <>
                    <footer className="footer overlay bg-secondary" style={{backgroundColor: "#0d0746"}}>
                        <div className="py-50 footer-border">
                            <div className="container">
                                <div className="row">
                                    {/* <div className="col-lg-4 col-md-4">
                                        <div className="mb-5 mb-md-0 text-center text-md-left">
                                            <img className="mb-10 w-75" src={footerLogo} alt="logo" />
                                            <p className="text-white">
                                                Lorem ipsum dolor amet consectetur adipisicing elit sed eiusm tempor incididunt
                                                labore dolore magna aliqua enim.
                                            </p>

                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <a className="social-icon-outline" href="#">
                                                        <i className="ti-facebook"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon-outline" href="#">
                                                        <i className="ti-twitter-alt"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon-outline" href="#">
                                                        <i className="ti-vimeo-alt"></i>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a className="social-icon-outline" href="#">
                                                        <i className="ti-linkedin"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div> */}

                                    {/* <div className="col-lg-4 col-md-12">
                                        <div className="mt-5 mt-lg-0 text-center text-md-left">
                                            <h4 className="mb-4 text-white">Subscribe Us</h4>
                                            <p className="text-white mb-4">
                                                Lorem ipsum dolor sit amet, consect etur adipisicing. elit sed do eiusmod.{" "}
                                            </p>
                                            <form action="#" className="position-relative">
                                                <input
                                                    type="text"
                                                    className="form-control subscribe"
                                                    name="subscribe"
                                                    id="Subscribe"
                                                    placeholder="Enter Your Email"></input>
                                                <button className="btn-subscribe" type="submit" value="send">
                                                    <i className="ti-arrow-right"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div> */}
                                    <div className="col-lg-12 mt-2">
                                        <h6 className="h7 text-white">{t("footer.riskWarningAndProductSuitability")}</h6>
                                        <p className="footer-paragraph">
                                            {t("footer.riskWarningAndProductSuitabilityMessage")}
                                        </p>
                                    </div>
                                    <div className="col-lg-12">
                                        <h6 className="h7 text-white">{t("footer.disclaimer")}</h6>
                                        <p className="footer-paragraph">{t("footer.disclaimerMessage")}</p>
                                        <p className="footer-paragraph">
                                            Telephone calls and online chat conversations may be recorded and monitored. Apple,
                                            iPad, and iPhone are trademarks of Apple Inc., registered in the U.S. and other
                                            countries. App Store is a service mark of Apple Inc. Android is a trademark of
                                            Google Inc. This website uses cookies to obtain information about your general
                                            internet usage. Removal of cookies may affect the operation of certain parts of this
                                            website. Learn about cookies and how to remove them. Portions of this page are
                                            reproduced from work created and shared by Google and used according to terms
                                            described in the Creative Commons 3.0
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 pb-3 position-relative">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-5">
                                        <p className="text-white text-center text-md-left">
                                            <span className="text-primary">{t("footer.copyrightInfo")}</span> &copy;
                                            {copyrightYear}
                                        </p>
                                    </div>
                                    <div className="col-lg-6 col-md-7">
                                        <ul className="list-inline text-center text-md-right">
                                            <li className="list-inline-item mx-lg-3 my-lg-0 mx-2 my-2">
                                                <Link to="/help/documents" className="font-secondary text-white">
                                                    Legal documents
                                                </Link>
                                            </li>
                                            <li className="list-inline-item mx-lg-3 my-lg-0 mx-2 my-2">
                                                <a
                                                    className="font-secondary text-white"
                                                    href="/media/documents/Privacy-Policy.pdf">
                                                    Privacy Policy
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </>
            )
        }
    }
    return <>{lanFooter(i18n.language)}</>
}

function Footer() {
    return (
        <Suspense fallback="loading...">
            <FooterComponent></FooterComponent>
        </Suspense>
    )
}

export default Footer
