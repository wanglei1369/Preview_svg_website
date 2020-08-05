/** @format */

import React, {lazy, Suspense} from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Switch, RouteComponentProps} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/styles.css"
import "./styles/foundation.css"
import App from "./pages/App"
import WhyCjc from "./pages/whyCJC"
import Forex from "./pages/Forex"
import Metal from "./pages/Metal"
import Oil from "./pages/Oil"
import CryptoccyCFDs from "./pages/CryptoccyCFDs"
import Indices from "./pages/Indices"
import USShares from "./pages/USShares"
import AsiaShares from "./pages/AsiaShares"
import EURShares from "./pages/EURShares"
import PlatformPage from "./pages/Platform"
import HelpPage from "./pages/Help"
import NotFound from "./pages/404"
import WebFont from "webfontloader"
import ScrollToTop from "./components/ScrollToTop"
import "react-app-polyfill/ie9"
import "react-app-polyfill/stable"
import * as serviceWorker from "./serviceWorker"

WebFont.load({
    google: {
        families: ["Lato", "Noto Sans SC", "sans-serif"],
    },
})

const AboutUsComponent = lazy(() => import("./pages/AboutUs"))
const AboutUsPage = () => {
    return (
        <Suspense fallback={null}>
            <AboutUsComponent />
        </Suspense>
    )
}

const CooperateComponent = lazy(() => import("./pages/Cooperate"))
const Cooperate = () => {
    return (
        <Suspense fallback={null}>
            <CooperateComponent />
        </Suspense>
    )
}
const NewsComponent = lazy(() => import("./pages/News.jsx"))
const News = () => {
    return (
        <Suspense fallback={null}>
            <NewsComponent />
        </Suspense>
    )
}
const NewsSingleComponent = lazy(() => import("./pages/NewsSingle.jsx"))
type TParams = {props: string}
const NewsSingle = (props: RouteComponentProps<TParams>) => {
    return (
        <Suspense fallback={null}>
            <NewsSingleComponent {...props} />
        </Suspense>
    )
}

const SignupComponent = lazy(() => import("./pages/Signup"))
const Signup = () => {
    return (
        <Suspense fallback={null}>
            <SignupComponent />
        </Suspense>
    )
}

const PromotionCnComponent = lazy(() => import("./pages/Promotion-CN"))
const PromotionCn = () => {
    return (
        <Suspense fallback={null}>
            <PromotionCnComponent />
        </Suspense>
    )
}
const PromotionIBCnComponent = lazy(() => import("./pages/PromotionIB-CN"))
const PromotionIBCn = () => {
    return (
        <Suspense fallback={null}>
            <PromotionIBCnComponent />
        </Suspense>
    )
}
const PromotionTACnComponent = lazy(() => import("./pages/PromotionTA-CN"))
const PromotionTACn = () => {
    return (
        <Suspense fallback={null}>
            <PromotionTACnComponent />
        </Suspense>
    )
}
ReactDOM.render(
    <Router>
        <ScrollToTop>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/why-choose-cjc" exact component={WhyCjc} />
                <Route
                    exact
                    path="/platform/iphone"
                    render={props => <PlatformPage {...props} highlightString={0} />}
                />
                <Route exact path="/platform/ipad" render={props => <PlatformPage {...props} highlightString={1} />} />
                <Route
                    exact
                    path="/platform/android"
                    render={props => <PlatformPage {...props} highlightString={2} />}
                />
                <Route
                    exact
                    path="/platform/windows"
                    render={props => <PlatformPage {...props} highlightString={3} />}
                />
                <Route
                    exact
                    path="/platform/windows"
                    render={props => <PlatformPage {...props} highlightString={3} />}
                />
                <Route
                    exact
                    path="/platform/mac"
                    render={props => <PlatformPage {...props} highlightString={4} />}
                />
                <Route path="/products-and-services/forex" exact component={Forex} />
                <Route path="/products-and-services/oil" exact component={Oil} />
                <Route path="/products-and-services/metal" exact component={Metal} />
                <Route path="/products-and-services/indices" exact component={Indices} />
                <Route path="/products-and-services/usshares" exact component={USShares} />
                <Route path="/products-and-services/asiashares" exact component={AsiaShares} />
                <Route path="/products-and-services/eurshares" exact component={EURShares} />
                <Route path="/products-and-services/cryptoforex" exact component={CryptoccyCFDs} />
                <Route exact path="/help/qna" render={props => <HelpPage {...props} highlightString={0} />} />
                <Route exact path="/help/documents" render={props => <HelpPage {...props} highlightString={1} />} />
                <Route path="/cooperate" exact component={Cooperate} />
                <Route path="/sign-up" exact component={Signup} />
                <Route
                    path="/login/broker"
                    component={() => {
                        // window.location.href = "https://broker.cjcmarkets-svg.com/"
                        window.location.href = "https://broker.cjcmarkets-global.com/"
                        return null
                    }}
                />
                <Route
                    path="/login/trader"
                    component={() => {
                        // window.location.href = "https://trader.cjcmarkets-svg.com/login"
                        window.location.href = "https://trader.cjcmarkets-global.com/login"
                        return null
                    }}
                />
                <Route
                    path="/external-sign-up"
                    component={() => {
                        window.location.href = "https://trader.cjcmarkets-global.com/register/"
                        // window.location.href = "https://trader.cjcmarkets-svg.com/register/"
                        return null
                    }}
                />
                <Route
                    path="/external-mock-up"
                    component={() => {
                        window.location.href = "https://trader.cjcmarkets-global.com/registerMock"
                        // window.location.href = "https://trader.cjcmarkets-svg.com/registerMock"
                        return null
                    }}
                />
                <Route
                    path="/to-fma"
                    component={() => {
                        window.location.href =
                            "https://www.fma.govt.nz/search-results/?Search=carrick+just+capital+markets&DateFrom=&DateTo=&Sort=&searchlocale=en_NZ&action_getResults=Search"
                        return null
                    }}
                />
                <Route
                    path="/platform-download/goto/android"
                    component={() => {
                        window.location.href =
                            "https://play.google.com/store/apps/details?id=net.metaquotes.metatrader4&hl=zh&referrer=ref_id%3d6f2ebd06%26utm_source%3dwww.metatrader4.com%26utm_campaign%3ddownload"
                        return null
                    }}
                />
                <Route
                    path="/platform-download/goto/iphone"
                    component={() => {
                        window.location.href =
                            "https://itunes.apple.com/cn/app/metatrader-4/id496212596?utm_source=www.metatrader4.com&utm_campaign=download"
                        return null
                    }}
                />
                <Route
                    path="/platform-download/goto/ipad"
                    component={() => {
                        window.location.href = "https://apps.apple.com/cn/app/metatrader-4/id496212596#?platform=ipad"
                        return null
                    }}
                />
                <Route
                    path="/platform-download/goto/windows"
                    component={() => {
                        window.location.href = "/media/installer/cjcmarkets4setup.exe"
                        return null
                    }}
                />
                 <Route
                    path="/platform-download/goto/windows-zh"
                    component={() => {
                        window.location.href = "https://download.cjcmarkets-global.com/cjcmarkets4setup.exe"
                        return null
                    }}
                />
                <Route
                    path="/platform-download/goto/windows-vi"
                    component={() => {
                        window.location.href = "/media/installer/cjcmarkets4setup.exe"
                        return null
                    }}
                />
                <Route
                    path="/platform-download/goto/mac"
                    component={() => {
                        window.location.href = "/media/installer/cjcmarketsformac.zip"
                        return null
                    }}
                />
                <Route
                    path="/products-and-services/multi-account-manager-solution/copytrading"
                    component={() => {
                        window.location.href = "https://copytrading-cjcmarkets-svg.azurewebsites.net"
                        return null
                    }}
                />
                <Route path="/news" exact component={News} />
                <Route path="/news/:props" exact component={NewsSingle} />
                <Route path="/promotion-cn" exact component={PromotionCn} />
                <Route path="/PromotionIB-CN" exact component={PromotionIBCn}/>
                <Route path="/PromotionTA-CN" exact component={PromotionTACn}/>
                <Route path="/about-us" exact component={AboutUsPage} />
                <Route path="/404" component={NotFound} />
                <Route path="*" component={NotFound} />
                <Route component={NotFound} />
            </Switch>
        </ScrollToTop>
    </Router>,
    document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
