/** @format */

import React, {ReactNode} from "react"
import Header from "./Header"
//import FooterBanner from "./FooterBanner"
import Footer from "./Footer"

interface Props {
    children: ReactNode
}

const Layout = ({children}: Props) => {
    return (
        <>
            <Header />
            <div>
                <main>{children}</main>
            </div>
            {/* <FooterBanner /> */}
            <Footer />
        </>
    )
}

export default Layout
