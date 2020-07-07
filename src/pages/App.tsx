/** @format */

import React, {Suspense} from "react"
import "../components/i18n"
import Layout from "../layouts/layout"
import Service from "../components/Service"
import Banner from "../components/Banner"
import Offices from "../components/Offices"
import Terminal from "../components/Terminal"
import Slider from "../components/Slider"
import FMA from "../components/FMA"
import PriceTable from "../components/PriceTable"
import VnNewsletter from "../components/VnNewsletter"
import {Helmet} from "react-helmet"
import {useTranslation} from "react-i18next"

function IndexPageComponent() {
    const {t} = useTranslation("")
    return (
        <>
        <Helmet>
            <title>{t("seo.homepage.Title")}</title>
            <meta name="description" content={t("seo.homepage.Description")} />
            <meta name="keywords" content={t("seo.homepage.Keywords")} />
        </Helmet>
            <Layout>
                <Banner />
                <Service />
                <VnNewsletter/>
                <PriceTable />
                <FMA />
                <Slider />
                <Terminal />
                <Offices />
            </Layout>
        </>
    )
}

function IndexPage() {
    return (
        <Suspense fallback="loading">
            <IndexPageComponent />
        </Suspense>
    )
}

export default IndexPage
