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
            <LayoutSecondary bannerImg={bannerImg} pageTitle={"CJC Markets 代理扶持计划"}>
            <section className="section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-left">
                                <p>
                                    1. 本活动限所有CJC Markets 代理参与，活动时间为2020年5月1日至2020年12月31日，达标的代理请在下个月10号之前通知CJC Markets 进行核实。
                                </p>
                                <p>
                                    2. 代理名下的交易账户资金要求为每月首日至最后一日的净入金量，净入金量和交易手数达到以下标准，均可获得相对应的市场扶持经费。
                                </p>
                                <p className="bg-gray rounded px-3 py-3 mx-5">
                                    净入金 50000 USD 交易 150标准手 可获得 4000CNY扶持金；
                                    <br/>
                                    净入金 80000 USD 交易 240标准手 可获得 7000CNY扶持金；
                                    <br/>
                                    净入金 100000 USD 交易 300标准手 可获得 10000CNY扶持金；
                                    <br/>
                                </p>
                                <p>3. 本次代理扶持活动也需符合CJC Markets 交易规则，如果有出现违规交易，CJC Markets将扣除其扶持金。</p>
                                <p>
                                    4. 根据交易量和入金量确定奖励，上一个月奖金将在与代理确认银行账户后发放给代理。
                                </p>
                                <p>
                                    5. 交易量计算标准为标准手=已平仓交易，1 标准手数量为100,000 货币单位
                                </p>
                                <p>
                                    标准手的定义:
                                </p>
                                <p>外汇：1.0 =1 手， 黄金: 1.0=1 手</p>
                                <p>白银：2.0 =1 手， 原油: 10.0 = 1 手</p>
                                <p>股指除SPX500：10.0=1 手，SPX500：100 =1手</p>
                                <p>股票CFD：1.0=1手，加密货币：1.0=1手</p>
                                <p>每个已平仓交易分别包括一手买入交易和一手卖出交易</p>                              
                            </div>
                            <div className="col-lg-8 contact-blue mb-50">
                                <div className="p-5 box-shadow contact-form text-center">
                                    <form
                                        method="POST"
                                        action="https://formspree.io/client@cjcmarkets-svg.com"
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
                                                我要参与代理计划
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
