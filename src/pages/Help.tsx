/** @format */

import React from "react"
import {Helmet} from "react-helmet"
import {useTranslation} from "react-i18next"
import {Link} from "react-router-dom"
import "../components/i18n"
import LayoutSecondary from "../layouts/layoutSecondary"
import bannerImg from "../images/help/banner.jpg"
import pdfSVG from "../images/help/pdf.svg"
import "../styles/help.css"

interface Props {
    highlightString: number
}

function helpContent(id: number, t: any, language: string) {
    if (id === 0) {

        return (
            <>
            <Helmet>
                <title>{t("seo.help.Title")}</title>
                <meta name="description" content={t("seo.help.Description")} />
                <meta name="keywords" content={t("seo.help.Keywords")} />
            </Helmet>
                <div className="support wrapper">
                    <div className="wrap-1">
                        <input type="radio" id="tab-1" name="tabs" />
                        <label htmlFor="tab-1">
                            <div>{t("qna.fund")}</div>
                            <div className="cross"></div>
                        </label>
                        <div className="questions">
                            <div className="question-wrap">
                                <input type="radio" id="question-1" name="question" />
                                <label htmlFor="question-1">
                                    <div>{t("qna.deposit")}</div>
                                    <div className="cross"></div>
                                </label>
                                <div className="content">{t("qna.depositAns")}</div>
                            </div>
                            <div className="question-wrap">
                                <input type="radio" id="question-2" name="question" />
                                <label htmlFor="question-2">
                                    <div>{t("qna.withdraw")}</div>
                                    <div className="cross"></div>
                                </label>
                                <div className="content">
                                    <p>{t("qna.withdrawAns")}</p>
                                </div>
                            </div>
                            <div className="question-wrap">
                                <input type="radio" id="question-3" name="question" />
                                <label htmlFor="question-3">
                                    <div>{t("qna.fundsSafe")}</div>
                                    <div className="cross"></div>
                                </label>
                                <div className="content">
                                    <p>{t("qna.fundsSafeAns")}</p>
                                </div>
                            </div>
                            <div className="question-wrap">
                                <input type="radio" id="question-4" name="question" />
                                <label htmlFor="question-4">
                                    <div>{t("qna.acceptNonSelf")}</div>
                                    <div className="cross"></div>
                                </label>
                                <div className="content">
                                    <p>{t("qna.acceptNonSelfAns")}</p>
                                </div>
                            </div>
                            <div className="question-wrap">
                                <input type="radio" id="question-5" name="question" />
                                <label htmlFor="question-5">
                                    <div>{t("qna.processingFee")}</div>
                                    <div className="cross"></div>
                                </label>
                                <div className="content">
                                    <p>{t("qna.processingFeeAns")}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="wrap-2">
                        <input type="radio" id="tab-2" name="tabs" />
                        <label htmlFor="tab-2">
                            <div>{t("qna.trading")}</div>
                            <div className="cross"></div>
                        </label>
                        <div className="questions">
                            <div className="question-wrap">
                                <input type="radio" id="question-6" name="question" />
                                <label htmlFor="question-6">
                                    <div>{t("qna.liquidation")}</div>
                                    <div className="cross"></div>
                                </label>
                                <div className="content">
                                    <p>{t("qna.liquidationAns")}</p>
                                </div>
                            </div>
                            <div className="question-wrap">
                                <input type="radio" id="question-7" name="question" />
                                <label htmlFor="question-7">
                                    <div>{t("qna.blowUp")}</div>
                                    <div className="cross"></div>
                                </label>
                                <div className="content">
                                    <p>{t("qna.blowUpAns")}</p>
                                </div>
                            </div>
                            <div className="question-wrap">
                                <input type="radio" id="question-8" name="question" />
                                <label htmlFor="question-8">
                                    <div>{t("qna.blowUpRisk")}</div>
                                    <div className="cross"></div>
                                </label>
                                <div className="content">
                                    <p>{t("qna.blowUpRiskAns")}</p>
                                </div>
                            </div>
                            <div className="question-wrap">
                                <input type="radio" id="question-9" name="question" />
                                <label htmlFor="question-9">
                                    <div>{t("qna.interest")}</div>
                                    <div className="cross"></div>
                                </label>
                                <div className="content">
                                    <p>{t("qna.interestAns")}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="wrap-3">
                        <input type="radio" id="tab-3" name="tabs" />
                        <label htmlFor="tab-3">
                            <div>{t("qna.account")}</div>
                            <div className="cross"></div>
                        </label>
                        <div className="questions">
                            <div className="question-wrap">
                                <input type="radio" id="question-10" name="question" />
                                <label htmlFor="question-10">
                                    <div>{t("qna.createLive")}</div>
                                    <div className="cross"></div>
                                </label>
                                <div className="content">
                                    <p>{t("qna.createLiveAns")}</p>
                                </div>
                            </div>
                            <div className="question-wrap">
                                <input type="radio" id="question-11" name="question" />
                                <label htmlFor="question-11">
                                    <div>{t("qna.createDemo")}</div>
                                    <div className="cross"></div>
                                </label>
                                <div className="content">
                                    <p>{t("qna.createDemoAns")}</p>
                                </div>
                            </div>
                            <div className="question-wrap">
                                <input type="radio" id="question-12" name="question" />
                                <label htmlFor="question-12">
                                    <div>{t("qna.activateAccount")}</div>
                                    <div className="cross"></div>
                                </label>
                                <div className="content">
                                    <p>{t("qna.activateAccountAns")}</p>
                                </div>
                            </div>
                            <div className="question-wrap">
                                <input type="radio" id="question-13" name="question" />
                                <label htmlFor="question-13">
                                    <div>{t("qna.resetPassword")}</div>
                                    <div className="cross"></div>
                                </label>
                                <div className="content">
                                    <p>{t("qna.resetPasswordAns")}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="wrap-4">
                        <input type="radio" id="tab-4" name="tabs" />
                        <label htmlFor="tab-4">
                            <div>{t("qna.platform")}</div>
                            <div className="cross"></div>
                        </label>
                        <div className="questions">
                            <div className="question-wrap">
                                <input type="radio" id="question-14" name="question" />
                                <label htmlFor="question-14">
                                    <div>{t("qna.whatIsMt4")}</div>
                                    <div className="cross"></div>
                                </label>
                                <div className="content">
                                    <>
                                        {t("qna.whatIsMt4Ans")
                                            .split("\n")
                                            .map((i: React.ReactNode, key: string | number | undefined) => {
                                                return (
                                                    <div key={key}>
                                                        <p>{i}</p>
                                                        <br />
                                                    </div>
                                                )
                                            })}
                                    </>
                                </div>
                            </div>
                            <div className="question-wrap">
                                <input type="radio" id="question-15" name="question" />
                                <label htmlFor="question-15">
                                    <div>{t("qna.whyMt4")}</div>
                                    <div className="cross"></div>
                                </label>
                                <div className="content">
                                    <>
                                        {t("qna.whyMt4Ans")
                                            .split("\n")
                                            .map((i: React.ReactNode, key: string | number | undefined) => {
                                                return (
                                                    <div key={key}>
                                                        <p>{i}</p>
                                                        <br />
                                                    </div>
                                                )
                                            })}
                                    </>
                                </div>
                            </div>
                            <div className="question-wrap">
                                <input type="radio" id="question-16" name="question" />
                                <label htmlFor="question-16">
                                    <div>{t("qna.mt4SupportMobile")}</div>
                                    <div className="cross"></div>
                                </label>
                                <div className="content">
                                    <>
                                        {t("qna.mt4SupportMobileAns")
                                            .split("\n")
                                            .map((i: React.ReactNode, key: string | number | undefined) => {
                                                return (
                                                    <div key={key}>
                                                        <p>{i}</p>
                                                        <br />
                                                    </div>
                                                )
                                            })}
                                    </>
                                </div>
                            </div>
                            <div className="question-wrap">
                                <input type="radio" id="question-17" name="question" />
                                <label htmlFor="question-17">
                                    <div>{t("qna.checkPassword")}</div>
                                    <div className="cross"></div>
                                </label>
                                <div className="content">
                                    <>
                                        {t("qna.checkPasswordAns")
                                            .split("\n")
                                            .map((i: React.ReactNode, key: string | number | undefined) => {
                                                return (
                                                    <div key={key}>
                                                        <p>{i}</p>
                                                        <br />
                                                    </div>
                                                )
                                            })}
                                    </>
                                </div>
                            </div>
                            <div className="question-wrap">
                                <input type="radio" id="question-18" name="question" />
                                <label htmlFor="question-18">
                                    <div>{t("qna.forgetPassword")}</div>
                                    <div className="cross"></div>
                                </label>
                                <div className="content">
                                    <>
                                        {t("qna.forgetPasswordAns")
                                            .split("\n")
                                            .map((i: React.ReactNode, key: string | number | undefined) => {
                                                return (
                                                    <div key={key}>
                                                        <p>{i}</p>
                                                        <br />
                                                    </div>
                                                )
                                            })}
                                    </>
                                </div>
                            </div>
                            <div className="question-wrap">
                                <input type="radio" id="question-19" name="question" />
                                <label htmlFor="question-19">
                                    <div>{t("qna.invalidAccount")}</div>
                                    <div className="cross"></div>
                                </label>
                                <div className="content">
                                    <>
                                        {t("qna.invalidAccountAns")
                                            .split("\n")
                                            .map((i: React.ReactNode, key: string | number | undefined) => {
                                                return (
                                                    <div key={key}>
                                                        <p>{i}</p>
                                                        <br />
                                                    </div>
                                                )
                                            })}
                                    </>
                                </div>
                            </div>
                            <div className="question-wrap">
                                <input type="radio" id="question-20" name="question" />
                                <label htmlFor="question-20">
                                    <div>{t("qna.accountNotFound")}</div>
                                    <div className="cross"></div>
                                </label>
                                <div className="content">
                                    <>
                                        {t("qna.accountNotFoundAns")
                                            .split("\n")
                                            .map((i: React.ReactNode, key: string | number | undefined) => {
                                                return (
                                                    <div key={key}>
                                                        <p>{i}</p>
                                                        <br />
                                                    </div>
                                                )
                                            })}
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    if (id === 1) {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-30">
                            <li className="list-inline-item mx-lg-4 my-lg-0 mx-2 my-2">
                                <a style={{color: "#000000"}} href="/media/documents/Product-Disclosure-Statement.pdf">
                                    <div className="pdf-download">
                                        <img
                                            src={pdfSVG}
                                            className="img-fluid w-25"
                                            alt="CJC Product Disclosure Statement"
                                        />
                                        <h5 className="pl-3 text-left">Product Disclosure Statement</h5>
                                    </div>
                                </a>
                            </li>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <li className="list-inline-item mx-lg-4 my-lg-0 mx-2 my-2">
                                {language.includes("zh") ? (
                                    <a
                                        style={{color: "#000000"}}
                                        href="/media/documents/Contract-Specifications-CN.pdf">
                                        <div className="pdf-download">
                                            <img
                                                src={pdfSVG}
                                                className="img-fluid w-25"
                                                alt="CJC Contract Specifications"
                                            />
                                            <h5 className="pl-3 text-left"> Contract Specifications</h5>
                                        </div>
                                    </a>
                                ) : (
                                    <a style={{color: "#000000"}} href="/media/documents/Contract-Specifications.pdf">
                                        <div className="pdf-download">
                                            <img
                                                src={pdfSVG}
                                                className="img-fluid w-25"
                                                alt="CJC Contract Specifications"
                                            />
                                            <h5 className="pl-3 text-left"> Contract Specifications</h5>
                                        </div>
                                    </a>
                                )}
                            </li>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <li className="list-inline-item mx-lg-4 my-lg-0 mx-2 my-2">
                                <a style={{color: "#000000"}} href="/media/documents/Client-Services-Agreement.pdf">
                                    <div className="pdf-download">
                                        <img
                                            src={pdfSVG}
                                            className="img-fluid w-25"
                                            alt="CJC Client Services Agreement"
                                        />
                                        <h5 className="pl-3 text-left">Client Services Agreement</h5>
                                    </div>
                                </a>
                            </li>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <li className="list-inline-item mx-lg-4 my-lg-0 mx-2 my-2">
                                <a style={{color: "#000000"}} href="/media/documents/Fees-Schedule.pdf">
                                    <div className="pdf-download">
                                        <img src={pdfSVG} className="img-fluid w-25" alt="CJC Fees Schedule" />
                                        <h5 className="pl-3 text-left">Fees Schedule</h5>
                                    </div>
                                </a>
                            </li>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <li className="list-inline-item mx-lg-4 my-lg-0 mx-2 my-2">
                                <a style={{color: "#000000"}} href="/media/documents/Privacy-Policy.pdf">
                                    <div className="pdf-download">
                                        <img src={pdfSVG} className="img-fluid w-25" alt="CJC Privacy Policy" />
                                        <h5 className="pl-3 text-left">Privacy Policy</h5>
                                    </div>
                                </a>
                            </li>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <li className="list-inline-item mx-lg-4 my-lg-0 mx-2 my-2">
                                <a style={{color: "#000000"}} href="/media/documents/KYC-AML-POLICY.pdf">
                                    <div className="pdf-download">
                                        <img src={pdfSVG} className="img-fluid w-25" alt="CJC KYC and AML Policy" />
                                        <h5 className="pl-3 text-left">KYC and AML Policy</h5>
                                    </div>
                                </a>
                            </li>
                        </div>
                        <div className="col-lg-6 mb-30">
                            <li className="list-inline-item mx-lg-4 my-lg-0 mx-2 my-2">
                                <a style={{color: "#000000"}} href="/media/documents/Account-Register-Guide-KYC.pdf">
                                    <div className="pdf-download">
                                        <img
                                            src={pdfSVG}
                                            className="img-fluid w-25"
                                            alt="CJC Account Register Guide (KYC)"
                                        />
                                        <h5 className="pl-3 text-left">Account Register Guide (KYC)</h5>
                                    </div>
                                </a>
                            </li>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

function sideBar(id: number, t: any) {
    const helpDict = [
        {id: 0, router: "qna", content: t("qna.qnaTitle"), style: "border-bottom"},
        {id: 1, router: "documents", content: t("help.documentTitle"), style: "border-bottom"},
    ]
    helpDict[id].style = "active border-bottom"
    const listSidebar = helpDict.map(helpDictItem => (
        <li key={helpDictItem.id} className={helpDictItem.style}>
            <Link to={`/help/${helpDictItem.router}`} className="d-block font-primary text-dark p-4">
                {helpDictItem.content}
            </Link>
        </li>
    ))
    return <>{listSidebar}</>
}

export default function Help({highlightString}: Props) {
    const {t, i18n} = useTranslation("")
    const lanHelp = (languageCode: string) => {
        if (languageCode.includes("ar")) {
            return (
                <>
                    <LayoutSecondary bannerImg={bannerImg} pageTitle={t("help.helpTitle")}>
                        <section className="section">
                            <div className="container">
                                <div className="row">
                                    <aside className="col-lg-4 text-right">
                                        <ul className="service-menu pl-0 border mb-50" dir="RTL">{sideBar(highlightString, t)}</ul>
                                    </aside>
                                    <div className="col-lg-8 text-right">
                                        <p className="text-right" dir="RTL">{helpContent(highlightString, t, i18n.language)}</p>
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
                    <LayoutSecondary bannerImg={bannerImg} pageTitle={t("help.helpTitle")}>
                        <section className="section">
                            <div className="container">
                                <div className="row">
                                    <aside className="col-lg-4">
                                        <ul className="service-menu pl-0 border mb-50">{sideBar(highlightString, t)}</ul>
                                    </aside>
                                    <div className="col-lg-8">
                                        <p>{helpContent(highlightString, t, i18n.language)}</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </LayoutSecondary>
                </>
            )
        }
    }
    return <>{lanHelp(i18n.language)}</>
}
