/** @format */

import React, {Suspense} from "react"
import {Helmet} from "react-helmet"
import {useTranslation} from "react-i18next"

function SEOComponent() {
    const {t} = useTranslation()
    const pageTitle = t("pagetitle") + " | Carrick Just Capital"
    const pageDesc = t("description")
    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDesc} />
            </Helmet>
        </>
    )
}

function SEO() {
    return (
        <Suspense fallback="loading">
            <SEOComponent />
        </Suspense>
    )
}

export default SEO
