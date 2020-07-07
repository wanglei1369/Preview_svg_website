/** @format */

import React, {ReactNode} from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

interface Props {
    children: ReactNode
}

const Layout = ({children}: Props) => {
    return (
        <>
            <Header></Header>
            <div>
                <main>{children}</main>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Layout
