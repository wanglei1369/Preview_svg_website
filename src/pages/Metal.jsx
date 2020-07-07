/** @format */

import React from "react"
import {useTranslation} from "react-i18next"
import {Helmet} from "react-helmet"
import LayoutSecondary from "../layouts/layoutSecondary"
import bannerImg from "../images/products/metal/banner.jpg"
import Datatable from "../components/Datatable"
import dataMetalZh from "../data/dataMetalZh.json"
import dataMetalEn from "../data/dataMetalEn.json"
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
    {accessor: "size", label: "Contract Size(=1 LOT)", priorityLevel: 2, position: 2, minWidth: 150},
    {accessor: "minimum", label: "Min Trade Size", priorityLevel: 3, position: 3, minWidth: 150},
    {accessor: "maximum", label: "Max Trade Size", priorityLevel: 4, position: 4, minWidth: 150},
    {accessor: "pip", label: "Monetary value of a pip (lot)", priorityLevel: 5, position: 5, minWidth: 150},
    {accessor: "leverage", label: "Leverage", priorityLevel: 6, position: 6, minWidth: 150},
    {accessor: "stop", label: "Stop out level ", priorityLevel: 7, position: 7, minWidth: 150},
    {accessor: "hours", label: "Trading hours ", priorityLevel: 8, position: 8, minWidth: 150},
]
function metalTableRender(languageCode) {
    let rows, columns
    rows = dataMetalEn
    columns = columnsEn
    if (languageCode.includes("en")) {
        rows = dataMetalEn
        columns = columnsEn
    }
    if (languageCode.includes("zh")) {
        rows = dataMetalZh
        columns = columnsZh
    }
    return <Datatable rows={rows} columns={columns} />
}
export default function Metal() {
    const {t, i18n} = useTranslation(['cfd','translation']);
    return (
        <>
        <Helmet>
            <title>{t("translation:seo.metal.Title")}</title>
            <meta name="description" content={t("translation:seo.metal.Description")} />
            <meta name="keywords" content={t("translation:seo.metal.Keywords")} />
        </Helmet>
            <LayoutSecondary bannerImg={bannerImg} pageTitle={t("metal.title")}>
                <section className="support section">
                    <div className="container">
                        <div className="row justify-content-center mb-50">
                            <div className="col-lg-12 mb-100">
                                {metalTableRender(i18n.language)}
                                <p>
                                    &#x2311; {t("cfdWarning")}
                                    <br />
                                    &#x2311; {t("cfdDisclaimer")}
                                    <br />
                                    &#x2311; {t("cfdAdjust")}
                                </p>
                            </div>
                            <div className="col-lg-12 mb-50">
                                <h5 className="text-highlight"> {t("metal.aboutMetalTitle")}</h5>
                                <>
                                    {t("metal.aboutMetalMessage")
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
