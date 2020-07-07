/** @format */

import React, {Suspense} from "react"
import {useTranslation} from "react-i18next"
import {Helmet} from "react-helmet"

function QUAComponent() {
    const {t} = useTranslation("")
    const pageTitle = t("qna.qnaTitle") + " | Carrick Just Capital"
    const pageDesc = t("qna.qnaTitle")
    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDesc} />
            </Helmet>
            <section className="mission section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-title section-title-border">{t("qna.qnaTitle")}</h2>
                        </div>
                    </div>
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
                                                .map((i, key) => {
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
                                                .map((i, key) => {
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
                                                .map((i, key) => {
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
                                                .map((i, key) => {
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
                                                .map((i, key) => {
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
                                                .map((i, key) => {
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
                                                .map((i, key) => {
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
                </div>
            </section>
        </>
    )
}

function QNA() {
    return (
        <Suspense fallback="loading...">
            <QUAComponent />
        </Suspense>
    )
}

export default QNA
