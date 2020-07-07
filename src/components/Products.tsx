/** @format */

import React, {Suspense} from "react"
import {useTranslation} from "react-i18next"
import bg2Image from "../images/bg-2.jpg"
import productsImage from "../images/products.png"

function ProductsComponent() {
    const {t} = useTranslation("")
    const sectionOneStyle = {
        backgroundImage: `url(${bg2Image})`,
    }
    return (
        <>
            <section className="product section" style={sectionOneStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={productsImage} alt="products" className="img-fluid" />
                        </div>
                        <div className="col-lg-4">
                            <h2 className="section-title section-title-border-half">
                                {t("services.aWideRangeOfProducts")}
                            </h2>
                            <div className="outline-0">
                                <p className="text-dark">
                                    {t("productsAndServices.cfdMessage1")}
                                    <br />
                                    <span className="text-highlight">{t("productsAndServices.cfdMessage2")}</span>
                                </p>
                                <p className="text-dark">{t("productsAndServices.cfdMessage3")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

function Products() {
    return (
        <Suspense fallback="loading...">
            <ProductsComponent></ProductsComponent>
        </Suspense>
    )
}

export default Products
