/** @format */

import React from "react"
import "../components/i18n"
import {Helmet} from "react-helmet"
import {useTranslation} from "react-i18next"
import LayoutSecondary from "../layouts/layoutSecondary"
import bannerImg from "../images/banner/promotionib-banner.jpg"
import ibplanImg from "../images/banner/ibplan.png"
import {Redirect} from "react-router-dom"

function PromotionDetails() {
    return (
        <>
            <LayoutSecondary bannerImg={bannerImg} pageTitle={"CJC Markets 中国区交易亏损补贴活动"}>
            <section className="section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-left">
                                <p>
                                本活动限部分CJC Markets 中国客户参与。
                                </p>
                                <p>
                                1. 活动时间：7月1日至7月31日
                                </p>
                                <p>
                                2. 活动对象：在此活动期间内，中国区新开交易账户（同名交易账户不计）。   
                                </p>
                                <p>3. 活动期间新开账户入金满500USD，交易手数满1标准手，交易亏损将由CJC Markets 补贴。</p>
                                <p>
                                4. 交易亏损为账户整体亏损金额，亏损补贴上限为100USD。
                                </p>
                                <p>
                                5. 客户完成交易手数后，请在北京时间7月31号23:59pm之前使用开户邮箱发送邮件至client@cjcmarkets-svg.com进行申请。CJC Markets会再核算后将亏损补至客户交易账户中。
                                </p>
                                <p>
                                6. 每位客户仅限参与一次亏损补贴活动，不能同时参与中国区其他活动。
                                </p>
                                <p>7. 本次活动需符合CJC Markets 交易规则，如出现违规交易，将取消参与资格。</p>
                                                           
                            </div>
                            <div className="col-lg-8 contact-blue mb-50">
                                <div className="p-5 box-shadow contact-form text-center">
                                    <form
                                        action="https://formspree.io/clients@cjcmarkets-svg.com"
                                        method="POST"
                                        className="row">
                                        <div className="col-lg-12 mb-4">
                                            <input
                                                type="checkbox"
                                                id="scales"
                                                name="scales"
                                                defaultChecked={false}
                                                required
                                            />{" "}
                                            我确认已阅读并理解上述条款和细则
                                        </div>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                className="form-control"
                                                placeholder="姓名"
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                name="account"
                                                id="account"
                                                className="form-control"
                                                placeholder="MT4 账号"
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-12">
                                            <button className="btn btn-outline btn-sm" type="submit" value="send">
                                                我要参与补贴活动
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <p style={{fontSize: "10px"}}>
                            您参与此次活动即确认您知悉并将遵守我们的活动条款。本活动不能与其他活动叠加，活动最终解释权归CJC Markets 所有。风险提示：金融产品交易存在风险并可能发生重大损失，也许并不是每个投资者都适合从事此类交易。在做出任何决定之前，您应该考虑此类投资是否适合您或者寻求专业建议。您应该阅读我们网站上提供的产品披露声明，风险披露声明和合约细则。
                            </p>
                        </div>
                    </div>
                </section>
            </LayoutSecondary>
        </>
    )
}

export default function Promotion() {
    const {i18n} = useTranslation("")

    return <>{i18n.language.includes("zh") ? <PromotionDetails /> : <Redirect to="/" />}</>
}
