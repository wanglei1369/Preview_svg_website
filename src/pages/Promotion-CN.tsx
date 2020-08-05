/** @format */

import React from "react"
import "../components/i18n"
import {Helmet} from "react-helmet"
import {useTranslation} from "react-i18next"
import LayoutSecondary from "../layouts/layoutSecondary"
import bannerImg from "../images/banner/promotion-banner.jpg"
import {Redirect} from "react-router-dom"
function PromotionDetails() {
    return (
        <>
            <LayoutSecondary bannerImg={bannerImg} pageTitle={"2020年中国区赠金活动"}>
            <section className="section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-left">
                                <p>
                                    1. 凡入金满 1,000 USD 以上或者1,000 USD 整的客户，均可参与此赠金活动。客户入金后需要发送邮件至 client@cjcmarkets-svg.com 申请赠金，赠金金额为总入金量的50%
                                </p>
                                <p>
                                    2.
                                    赠金活动无特定期限，客户交易量（标准手）达到赠金的40%即可提取赠金。
                                </p>
                                <p>3. 当账户净值小于或等于赠金金额的120%时，CJC Markets有权强平所有单子，并取走赠金，强平所带来的账户风险和交易结果，均由客户自行承担。</p>
                                <p>
                                    4. 账户出金时，当账户净值小于总入金量，则视为客户主动退出赠金活动，CJC Markets 有权在办理出金同时取走赠金。
                                </p>
                                {/* <p className="bg-gray rounded px-3 py-3 mx-5">
                                    案例：客户 3 月 1 日入金 1000USD，赠金 300USD，赠金有效期至 6 月 1
                                    日。在此期间内，客户追加入金 2000USD，赠金相应叠加 600USD，总赠金达到
                                    900USD，赠金有效期仍至 6 月 1
                                    日。如果客户在此期间申请出金，出金后账户净值小于或者等于
                                    2100USD，则视为客户主动退出赠金活动，CJC Markets
                                    有权在办理出金同时取走赠金。出金后账户净值大于 2100USD，赠金仍保留。
                                </p> */}
                                <p>
                                    5. 本次赠金活动也需符合CJC Markets 交易规则，如果有出现违规交易，CJC Markets将扣除其赠金。
                                </p>
                                <p>
                                    6. 账户总净仓位最大为100标准手，如有超出，可能会有被强平的可能性。
                                </p>                                
                            </div>
                            <div className="col-lg-8 contact-blue mb-50">
                                <div className="p-5 box-shadow contact-form text-center">
                                    <form
                                        method="POST"
                                        action="https://formspree.io/clients@cjcmarkets-svg.com"
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
                                                我要参与赠金活动
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <p style={{fontSize: "10px"}}>
                            您参与此次活动即确认您知悉并将遵守我们的活动条款。本活动不能与其他活动叠加，活动最终解释权归CJC Markets 所有。风险提示：金融产品交易存在风险并可能发生重大损失，也许并不是每个投资者都适合从事此类交易。在做出任何决定之前，您应该考虑此类投资是否适合您或者寻求专业建议。您应该阅读我们网站上提供的产品披露声明和风险披露声明。
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
