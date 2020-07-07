/** @format */

import React, {Suspense} from "react"
import {Link} from "react-router-dom"
import {useTranslation} from "react-i18next"
import {Helmet} from "react-helmet"
import "../styles/notfound.css"

// import Layout from "../components/layout"
const Loader = () => <div>loading texts...</div>

function NotFoundPageComponent() {
    const {t} = useTranslation("NotFound")
    const pageTitle = t("NotFound.notFoundTitle") + " | Carrick Just Capital"
    const pageDesc = t("NotFound.notFoundMessage")

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDesc} />
            </Helmet>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h3>{t("NotFound.notFoundTitle")}</h3>
                        <h1>
                            <span>4</span>
                            <span>0</span>
                            <span>4</span>
                        </h1>
                    </div>
                    <h2>{t("NotFound.notFoundMessage")}</h2>
                    <h2>
                        <Link to="/">{t("NotFound.notFoundHomepage")}</Link>
                    </h2>
                </div>
            </div>
        </>
    )
}

function NotFoundPage() {
    return (
        <Suspense fallback={<Loader />}>
            <NotFoundPageComponent />
        </Suspense>
    )
}

export default NotFoundPage
