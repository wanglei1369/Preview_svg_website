/** @format */

import React, {ReactNode} from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

interface Props {
    children: ReactNode
    bannerImg: string
    pageTitle: string
}

const LayoutSecondary = ({children, bannerImg, pageTitle}: Props) => {
    const bannerStyle = {
        background: `linear-gradient(to bottom, rgba(43, 43, 43, 0.9), rgba(0, 1, 40, 0.3)), url(${bannerImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "40vh",
    }
    return (
        <>
            <Header></Header>
            <section className="section" style={bannerStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3 className="text-white text-center pt-5" style={{fontWeight: "bold"}}>
                                <span className="title-decoration">{pageTitle}</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </section>

            <main>{children}</main>

            <Footer></Footer>
        </>
    )
}

export default LayoutSecondary
