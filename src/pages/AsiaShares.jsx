/** @format */
import React from "react"
import {useTranslation} from "react-i18next"
import {Helmet} from "react-helmet"
import LayoutSecondary from "../layouts/layoutSecondary"
import bannerImg from "../images/products/usshares/banner.jpg"
import Datatable from "../components/Datatable"
import dataUSSharesZh from "../data/dataAsiaSharesZh.json"
import dataUSSharesEn from "../data/dataAsiaSharesEn.json"
const columnsZh = [
    {accessor: "symbol", label: "交易品种", priorityLevel: 1, position: 1, minWidth: 200},
    {accessor: "size", label: "合约大小(=1手)", priorityLevel: 2, position: 2, minWidth: 150},
    {accessor: "minimum", label: "最小交易手数", priorityLevel: 3, position: 3, minWidth: 150},
    {accessor: "maximum", label: "最大交易手数", priorityLevel: 4, position: 4, minWidth: 150},
    {accessor: "pip", label: "每个pip变动代表的美金金额", priorityLevel: 5, position: 5, minWidth: 150},
    {accessor: "leverage", label: "杠杆", priorityLevel: 6, position: 6, minWidth: 150},
    {accessor: "hours", label: "交易时间", priorityLevel: 8, position: 8, minWidth: 150},
]
const columnsEn = [
    {accessor: "symbol", label: "Instruments", priorityLevel: 1, position: 1, minWidth: 200},
    {accessor: "size", label: "Contract Size(=1 LOT)", priorityLevel: 2, position: 3, minWidth: 150},
    {accessor: "minimum", label: "Minimum tradable lot", priorityLevel: 3, position: 3, minWidth: 150},
    {accessor: "maximum", label: "Maximum opening lot", priorityLevel: 4, position: 4, minWidth: 150},
    {accessor: "pip", label: "Monetary value of a pip (lot) ", priorityLevel: 5, position: 5, minWidth: 150},
    {accessor: "leverage", label: "Leverage", priorityLevel: 6, position: 6, minWidth: 150},
    {accessor: "hours", label: "Trading hours ", priorityLevel: 8, position: 8, minWidth: 150},
]
function usShareTableRender(languageCode) {
    let rows, columns
    rows = dataUSSharesEn
    columns = columnsEn
    if (languageCode.includes("en")) {
        rows = dataUSSharesEn
        columns = columnsEn
    }
    if (languageCode.includes("zh")) {
        rows = dataUSSharesZh
        columns = columnsZh
    }
    return <Datatable rows={rows} columns={columns} />
}
export default function USShares() {
    const {t, i18n} = useTranslation(['cfd','translation']);
    return (
        <>
        <Helmet>
            <title>{t("translation:seo.asiashare.Title")}</title>
            <meta name="description" content={t("translation:seo.asiashare.Description")} />
            <meta name="keywords" content={t("translation:seo.asiashare.Keywords")} />
        </Helmet>
            <LayoutSecondary bannerImg={bannerImg} pageTitle={t("translation:productsAndServices.asiashares")}>
                <section className="support section">
                    <div className="container">
                        <div className="row justify-content-center mb-50">
                            <div className="col-lg-12 mb-100">
                                {usShareTableRender(i18n.language)}
                                <p>
                                    &#x2311; {t("cfdWarning")}
                                    <br />
                                    &#x2311; {t("cfdDisclaimer")}
                                    <br />
                                    &#x2311; {t("cfdAdjust")}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </LayoutSecondary>
        </>
    )
}
