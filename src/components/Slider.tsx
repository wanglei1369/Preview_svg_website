/** @format */

import React, {CSSProperties} from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel"
import {useTranslation} from "react-i18next"
import imageNG from "../images/partners/ng.jpg"
import imageDP from "../images/partners/dp.jpg"
import imageOcbc from "../images/partners/ocbc.jpg"
import imageUnionPay from "../images/partners/union-pay.jpg"
import imagePA from "../images/partners/payment-asia.jpg"
import imageAzure from "../images/partners/azure.jpg"
import imageAsb from "../images/partners/asb.jpg"

export default function Slider() {
    const {t} = useTranslation("")
    const bgStyle = {
        background: "#FDFACF",
        backgroundSize: "cover",
        maxHeight: "180px",
    }

    return (
        <>
            {/* <section className="py-1" style={{background: "#FDFACF"}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 text-center">
                            <h5 className="section-title">{t("businessPartner")}</h5>
                        </div>
                    </div>
                </div>
            </section> */}
            <div style={bgStyle} className="py-10">
                <Carousel
                    infiniteLoop
                    autoPlay={true}
                    interval={1500}
                    swipeable={true}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    showArrows={false}
                    transitionTime={1500}
                    centerMode
                    centerSlidePercentage={20}>
                    <div style={bgStyle}>
                        <img src={imageNG} className="img-fluid w-50" style={{objectFit: "cover"}} />
                    </div>
                    <div style={bgStyle}>
                        <img src={imageDP} className="img-fluid w-50" style={{objectFit: "cover"}} />
                    </div>
                    <div style={bgStyle}>
                        <img src={imageOcbc} className="img-fluid w-50" style={{objectFit: "cover"}} />
                    </div>
                    <div style={bgStyle}>
                        <img src={imageUnionPay} className="img-fluid w-50" style={{objectFit: "cover"}} />
                    </div>
                    <div style={bgStyle}>
                        <img src={imagePA} className="img-fluid w-50" style={{objectFit: "cover"}} />
                    </div>
                    <div style={bgStyle}>
                        <img src={imageAsb} className="img-fluid w-50" style={{objectFit: "cover"}} />
                    </div>
                    <div style={bgStyle}>
                        <img src={imageAzure} className="img-fluid w-50" style={{objectFit: "cover"}} />
                    </div>
                </Carousel>
            </div>
        </>
    )
}
