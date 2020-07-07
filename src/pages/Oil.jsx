/** @format */
import React from "react"
import {useTranslation} from "react-i18next"
import {Helmet} from "react-helmet"
import LayoutSecondary from "../layouts/layoutSecondary"
import bannerImg from "../images/products/oil/banner.jpg"
import Datatable from "../components/Datatable"
import dataOilZh from "../data/dataOilZh.json"
import dataOilEn from "../data/dataOilEn.json"
import dataUKOilExpire from "../data/dataUKOilExpireEn.json"
import dataUSOilExpire from "../data/dataUSOilExpireEn.json"
import dataWtiEn from "../data/dataWtiEn.json"
import dataWtiZh from "../data/dataWtiEn.json"

const columnsZh = [
    {accessor: "symbol", label: "交易品种", priorityLevel: 1, position: 1, minWidth: 200},
    {accessor: "size", label: "合约大小(=1手)", priorityLevel: 2, position: 2, minWidth: 150},
    {accessor: "minimum", label: "最小交易手数", priorityLevel: 3, position: 3, minWidth: 150},
    {accessor: "maximum", label: "最大交易手数", priorityLevel: 4, position: 4, minWidth: 150},
    {accessor: "pip", label: "每个pip变动代表的美金金额", priorityLevel: 5, position: 5, minWidth: 150},
    {accessor: "leverage", label: "杠杆", priorityLevel: 6, position: 6, minWidth: 150},
    {accessor: "stop", label: "强平线", priorityLevel: 7, position: 7, minWidth: 150},
    {accessor: "hours", label: "交易时间", priorityLevel: 8, position: 8, minWidth: 150},
]
const columnsEn = [
    {accessor: "symbol", label: "Instruments", priorityLevel: 1, position: 1, minWidth: 200},
    {accessor: "size", label: "Contract Size(=1 LOT)", priorityLevel: 2, position: 3, minWidth: 150},
    {accessor: "minimum", label: "Minimum tradable lot", priorityLevel: 3, position: 3, minWidth: 150},
    {accessor: "maximum", label: "Maximum opening lot", priorityLevel: 4, position: 4, minWidth: 150},
    {accessor: "pip", label: "Monetary value of a pip (lot) ", priorityLevel: 5, position: 5, minWidth: 150},
    {accessor: "leverage", label: "Leverage", priorityLevel: 6, position: 6, minWidth: 150},
    {accessor: "stop", label: "Stop out level", priorityLevel: 7, position: 7, minWidth: 150},
    {accessor: "hours", label: "Trading hours ", priorityLevel: 8, position: 8, minWidth: 150},
]

const columnsWTIZh = [
    {accessor: "symbol", label: "交易品种", priorityLevel: 1, position: 1, minWidth: 200},
    {accessor: "size", label: "合约大小(=1手)", priorityLevel: 2, position: 2, minWidth: 150},
    {accessor: "minimum", label: "最小交易手数", priorityLevel: 3, position: 3, minWidth: 150},
    {accessor: "maximum", label: "最大交易手数", priorityLevel: 4, position: 4, minWidth: 150},
    {accessor: "pip", label: "每个pip变动代表的美金金额", priorityLevel: 5, position: 5, minWidth: 150},
    {accessor: "leverage", label: "杠杆", priorityLevel: 6, position: 6, minWidth: 150},
    {accessor: "stop", label: "强平线", priorityLevel: 7, position: 7, minWidth: 150},
    {accessor: "hours", label: "交易时间", priorityLevel: 8, position: 8, minWidth: 150},
]
const columnsWTIEn = [
    {accessor: "symbol", label: "Instruments", priorityLevel: 1, position: 1, minWidth: 200},
    {accessor: "size", label: "Contract Size(=1 LOT)", priorityLevel: 2, position: 3, minWidth: 150},
    {accessor: "minimum", label: "Minimum tradable lot", priorityLevel: 3, position: 3, minWidth: 150},
    {accessor: "maximum", label: "Maximum opening lot", priorityLevel: 4, position: 4, minWidth: 150},
    {accessor: "pip", label: "Monetary value of a pip (lot) ", priorityLevel: 5, position: 5, minWidth: 150},
    {accessor: "leverage", label: "Leverage", priorityLevel: 6, position: 6, minWidth: 150},
    {accessor: "stop", label: "Stop out level", priorityLevel: 7, position: 7, minWidth: 150},
    {accessor: "hours", label: "Trading hours ", priorityLevel: 8, position: 8, minWidth: 150},
]

const columnsUSOilExpireZh = [
    {accessor: "symbol", label: "美国原油差价合约", priorityLevel: 1, position: 1, minWidth: 200},
    {accessor: "futures", label: "期货 到期日", priorityLevel: 2, position: 2, minWidth: 150},
    {accessor: "est", label: "CJC 到期日 (美国东部时间下午5点)", priorityLevel: 3, position: 3, minWidth: 150},
    {accessor: "nz", label: "到期日 (亚洲/新西兰早晨)", priorityLevel: 4, position: 4, minWidth: 150},
]
const columnsUKOilExpireZh = [
    {accessor: "symbol", label: "英油原油差价合约", priorityLevel: 1, position: 1, minWidth: 200},
    {accessor: "futures", label: "期货 到期日", priorityLevel: 2, position: 2, minWidth: 150},
    {accessor: "est", label: "CJC 到期日 (美国东部时间下午5点)", priorityLevel: 3, position: 3, minWidth: 150},
    {accessor: "nz", label: "到期日 (亚洲/新西兰早晨)", priorityLevel: 4, position: 4, minWidth: 150},
]

const columnsUSOilExpireEn = [
    {accessor: "symbol", label: "US Crude Oil CFD", priorityLevel: 1, position: 1, minWidth: 200},
    {accessor: "futures", label: "Futures Expiry", priorityLevel: 2, position: 2, minWidth: 150},
    {accessor: "est", label: "CJC Expiry (5pm EST)", priorityLevel: 3, position: 3, minWidth: 150},
    {accessor: "nz", label: "Expiry (Asia/NZ morning)", priorityLevel: 4, position: 4, minWidth: 150},
]

const columnsUKOilExpireEn = [
    {accessor: "symbol", label: "UK Crude Oil CFD Contract", priorityLevel: 1, position: 1, minWidth: 200},
    {accessor: "futures", label: "Futures Expiry", priorityLevel: 2, position: 2, minWidth: 150},
    {accessor: "est", label: "CJC Expiry (5pm EST)", priorityLevel: 3, position: 3, minWidth: 150},
    {accessor: "nz", label: "Expiry (Asia/NZ morning)", priorityLevel: 4, position: 4, minWidth: 150},
]
function oilTableRender(languageCode) {
    let rows, columns
    rows = dataOilEn
    columns = columnsEn
    if (languageCode.includes("en")) {
        rows = dataOilEn
        columns = columnsEn
    }
    if (languageCode.includes("zh")) {
        rows = dataOilZh
        columns = columnsZh
    }
    return <Datatable rows={rows} columns={columns} />
}

function wtiTableRender(languageCode) {
    let rows, columns
    rows = dataWtiEn
    columns = columnsWTIEn
    if (languageCode.includes("en")) {
        rows = dataWtiEn
        columns = columnsWTIEn
    }
    if (languageCode.includes("zh")) {
        rows = dataWtiEn
        columns = columnsWTIZh
    }
    return <Datatable rows={rows} columns={columns} />
}

function usOilExpireTableRender(languageCode) {
    let columns = columnsUKOilExpireEn
    const rows = dataUSOilExpire

    if (languageCode.includes("en")) {
        columns = columnsUSOilExpireEn
    }
    if (languageCode.includes("zh")) {
        columns = columnsUSOilExpireZh
    }
    return <Datatable rows={rows} columns={columns} />
}

function ukOilExpireTableRender(languageCode) {
    let columns = columnsUKOilExpireEn
    const rows = dataUKOilExpire

    if (languageCode.includes("en")) {
        columns = columnsUKOilExpireEn
    }
    if (languageCode.includes("zh")) {
        columns = columnsUKOilExpireZh
    }
    return <Datatable rows={rows} columns={columns} />
}
export default function Metal() {
    const {t, i18n} = useTranslation(['cfd','translation']);
    return (
        <>
        <Helmet>
            <title>{t("translation:seo.oil.Title")}</title>
            <meta name="description" content={t("translation:seo.oil.Description")} />
            <meta name="keywords" content={t("translation:seo.oil.Keywords")} />
        </Helmet>
            <LayoutSecondary bannerImg={bannerImg} pageTitle={t("oil.title")}>
                <section className="support section">
                    <div className="container">
                        <div className="row justify-content-center mb-50">
                            <div className="col-lg-12 mb-100">
                                {oilTableRender(i18n.language)}
                                <p>
                                    &#x2311; {t("cfdWarning")}
                                    <br />
                                    &#x2311; {t("cfdDisclaimer")}
                                    <br />
                                    &#x2311; {t("cfdAdjust")}
                                </p>
                            </div>
                            <div className="col-lg-12 mb-100">
                                <h5 className="text-highlight mb-3"> {t("oil.oilTradingHoursTitle")}</h5>
                                {usOilExpireTableRender(i18n.language)}
                                {ukOilExpireTableRender(i18n.language)}
                            </div>
                            <div className="col-lg-12 mb-100">
                                <h5 className="text-highlight mb-3"> {t("oil.wti")}</h5>
                                {wtiTableRender(i18n.language)}
                            </div>
                            <div className="col-lg-12 mb-50">
                                <h5 className="text-highlight"> {t("oil.aboutCommodityTitle")}</h5>
                                <>
                                    {t("oil.aboutCommodityMessage")
                                        .split("\n")
                                        .map((i, key) => {
                                            return (
                                                <div key={key}>
                                                    <p className="text-dark text-left">{i}</p>
                                                </div>
                                            )
                                        })}
                                </>
                            </div>
                        </div>
                    </div>
                </section>
            </LayoutSecondary>
        </>
    )
}
