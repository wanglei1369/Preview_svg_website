/** @format */

import React, {useState} from "react"
import "../styles/offices.css"
import "../fonts/iconfont/iconfont.css"
import mainlandchinaImg from "../images/offices/cjc-office-mainlandchina.jpg"
import taiwanImg from "../images/offices/cjc-office-taiwan.jpg"
import northAmericaImg from "../images/offices/cjc-office-northamerica.jpg"
import southEastAsiaImg from "../images/offices/cjc-office-southeastasia.jpg"
import southPacificImg from "../images/offices/cjc-office-southpacific.jpg"
import eastAsiaImg from "../images/offices/cjc-office-eastasia.jpg"
import arabImg from "../images/offices/cjc-office-arab.png"
import egyptImg from "../images/offices/cjc-office-egypt.png"
import aucklandMap from "../images/offices/map/auckland.jpg"
import bangkokMap from "../images/offices/map/bangkok.jpg"
import beijingMap from "../images/offices/map/beijing.jpg"
import hanoiMap from "../images/offices/map/hanoi.jpg"
import harbinMap from "../images/offices/map/harbin.jpg"
import hoChiMinhMap from "../images/offices/map/ho-chi-minh.jpg"
import kualaLumpurMap from "../images/offices/map/kuala-lumpur.jpg"
import manilaMap from "../images/offices/map/manila.jpg"
import seoulMap from "../images/offices/map/seoul.jpg"
import shanghaiMap from "../images/offices/map/shanghai.jpg"
import sydneyMap from "../images/offices/map/sydney.jpg"
import taichungMap from "../images/offices/map/taichung.jpg"
import torontoMap from "../images/offices/map/toronto.jpg"
import arabMap from "../images/offices/map/arab.png"
import egyptMap from "../images/offices/map/egypt.png"
import thaiLineQRCode from "../images/offices/thai-line.jpg"
import {useTranslation} from "react-i18next"

function locationBlock(location: string) {
    const aucklandBgMap = {
        backgroundImage: `url(${aucklandMap})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
    const bangkokBgMap = {
        backgroundImage: `url(${bangkokMap})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
    const beijingBgMap = {
        backgroundImage: `url(${beijingMap})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
    const hanoiBgMap = {
        backgroundImage: `url(${hanoiMap})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
    const harbinBgMap = {
        backgroundImage: `url(${harbinMap})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
    const hoChiMinhBgMap = {
        backgroundImage: `url(${hoChiMinhMap})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
    const kualaLumpurBgMap = {
        backgroundImage: `url(${kualaLumpurMap})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
    const manilaBgMap = {
        backgroundImage: `url(${manilaMap})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }

    const seoulBgMap = {
        backgroundImage: `url(${seoulMap})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
    const shanghaiBgMap = {
        backgroundImage: `url(${shanghaiMap})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
    const sydneyBgMap = {
        backgroundImage: `url(${sydneyMap})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
    const taichungBgMap = {
        backgroundImage: `url(${taichungMap})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
    const torontoBgMap = {
        backgroundImage: `url(${torontoMap})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }

    const arabMapBgMap = {
        backgroundImage: `url(${arabMap})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
    
    const egyptMapBgMap = {
        backgroundImage: `url(${egyptMap})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }

    if (location == "southpacific") {
        return (
            <>
                <div className="office-info">
                    <div className="office-detail">
                        <h2 className="office-name">Sydney</h2>
                        <div className="parent">
                            <div className="office-address">
                                <p>
                                    <span className="iconfont iconfont-custom icon-address"></span>
                                    1402/227 Elizabeth St, Sydney, NSW 2000
                                </p>
                            </div>
                            <div className="office-contact">
                                <ul className="list-unstyled">
                                    <li>
                                        <p className="current-city__contact-info">
                                            <span className="iconfont iconfont-custom icon-Email"></span>
                                            support-sydney@cjcmarkets-svg.com
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <a
                        href="https://www.openstreetmap.org/way/329630327"
                        className="office-map overlay-golden"
                        style={sydneyBgMap}></a>
                </div>
            </>
        )
    }
    if (location == "southeastasia") {
        return (
            <>
                <div className="office-info">
                    <div className="office-detail">
                        <h2 className="office-name">Kuala Lumpur</h2>
                        <div className="parent">
                            <div className="office-address">
                                <p>
                                    <span className="iconfont iconfont-custom icon-address"></span>
                                    10-03, Tower B, Vertical Business Suite Ii Avenue 3, Bangsar South City, No,8 Jalan
                                    Kerinchi 59200 Kuala Lumpur. Malaysia
                                </p>
                            </div>
                            <div className="office-contact">
                                <ul className="list-unstyled">
                                    <li>
                                        <p className="current-city__contact-info">
                                            <span className="iconfont iconfont-custom icon-hotelphone"></span>(+60)
                                            12-355-7571
                                        </p>
                                    </li>
                                    <li>
                                        <p className="current-city__contact-info">
                                            <span className="iconfont iconfont-custom icon-Email"></span>
                                            support-kuala-lumpur@cjcmarkets-svg.com
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <a
                        href="https://www.openstreetmap.org/way/329630327"
                        className="office-map overlay-golden"
                        style={kualaLumpurBgMap}></a>
                </div>
                <div className="office-info">
                    <div className="office-detail">
                        <h2 className="office-name">Ho Chi Minh</h2>
                        <div className="parent">
                            <div className="office-address">
                                <p>
                                    <span className="iconfont iconfont-custom icon-address"></span>
                                    Room 29OT01, Floor 29th , Vinhomes Landmark 81, Vinhomes Central Park, Nguyen Huu
                                    Canh Street, 22nd Ward, Binh Thanh District, Ho Chi Minh City
                                </p>
                            </div>
                            <div className="office-contact">
                                <ul className="list-unstyled">
                                    {/* <li>
                                        <p className="current-city__contact-info">
                                            <span className="iconfont iconfont-custom icon-hotelphone"></span>(+84)377-783-556
                                        </p>
                                    </li> */}
                                    <li>
                                        <p className="current-city__contact-info">
                                            <span className="iconfont iconfont-custom icon-Email"></span>
                                            support-ho-chi-minh@cjcmarkets-svg.com
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <a
                        href="https://www.openstreetmap.org/way/329630327"
                        className="office-map overlay-golden"
                        style={hoChiMinhBgMap}></a>
                </div>
                <div className="office-info">
                    <div className="office-detail">
                        <h2 className="office-name">Hanoi</h2>
                        <div className="parent">
                            <div className="office-address">
                                <p>
                                    <span className="iconfont iconfont-custom icon-address"></span>
                                    6th Floor, Zen Tower building, No 12 Khuat Duy Tien street, Thanh Xuan district,
                                    Hanoi
                                </p>
                            </div>
                            <div className="office-contact">
                                <ul className="list-unstyled">
                                    {/* <li>
                                        <p className="current-city__contact-info">
                                            <span className="iconfont iconfont-custom icon-hotelphone"></span>(+84)898-899-469
                                        </p>
                                    </li> */}
                                    <li>
                                        <p className="current-city__contact-info">
                                            <span className="iconfont iconfont-custom icon-Email"></span>
                                            support-hanoi@cjcmarkets-svg.com
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <a
                        href="https://www.openstreetmap.org/way/329630327"
                        className="office-map overlay-golden"
                        style={hanoiBgMap}></a>
                </div>
                <div className="office-info">
                    <div className="office-detail">
                        <h2 className="office-name">Manila</h2>
                        <div className="parent">
                            <div className="office-address">
                                <p>
                                    <span className="iconfont iconfont-custom icon-address"></span>23F Tower 6789, 6789
                                    Ayala Ave, 1209 Makati City, Manila, The Philippines
                                </p>
                            </div>
                            <div className="office-contact">
                                <ul className="list-unstyled">
                                    <li>
                                        <p className="current-city__contact-info">
                                            <span className="iconfont iconfont-custom icon-hotelphone"></span>(+63)
                                            28013417
                                        </p>
                                    </li>
                                    <li>
                                        <p className="current-city__contact-info">
                                            <span className="iconfont iconfont-custom icon-Email"></span>
                                            support-manila@cjcmarkets-svg.com
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <a
                        href="https://www.openstreetmap.org/way/329630327"
                        className="office-map overlay-golden"
                        style={manilaBgMap}></a>
                </div>
                <div className="office-info">
                    <div className="office-detail">
                        <h2 className="office-name">Bangkok</h2>
                        <div className="parent">
                            <div className="office-address">
                                {/* <p>23F Tower 6789, 6789 Ayala Ave, 1209 Makati City, Manila, The Philippines</p> */}
                            </div>
                            <div className="office-contact">
                                <ul className="list-unstyled">
                                    <li>
                                        <p className="current-city__contact-info">
                                            <span className="iconfont iconfont-custom icon-hotelphone"></span>(+66)
                                            810001338
                                        </p>
                                    </li>
                                    <li>
                                        <p className="current-city__contact-info">
                                            <span className="iconfont iconfont-custom icon-Email"></span>
                                            support-bangkok@cjcmarkets-svg.com
                                        </p>
                                    </li>
                                    <li>
                                        <p className="current-city__contact-info">
                                            <span className="iconfont iconfont-custom icon-Line"></span>
                                            <img
                                                src={thaiLineQRCode}
                                                className="img-fluid w-25"
                                                alt="Bangkok Thailand Line QR Code"
                                            />
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <a
                        href="https://www.openstreetmap.org/way/329630327"
                        className="office-map overlay-golden"
                        style={bangkokBgMap}></a>
                </div>
            </>
        )
    }
    if (location == "northamerica") {
        return (
            <>
                <div className="office-info">
                    <div className="office-detail">
                        <h2 className="office-name">Toronto</h2>
                        <div className="parent">
                            <div className="office-address">
                                <p>
                                    <span className="iconfont iconfont-custom icon-address"></span>
                                    PWC Tower
                                    <br />
                                    18 York Street Suite 2480
                                    <br />
                                    Toronto，Ontario, M5J 0B2
                                </p>
                            </div>
                            <div className="office-contact">
                                <ul className="list-unstyled">
                                    {/* <li>
                                    <p className="current-city__contact-info">(+82) 070-7938-2577</p>
                                </li>
                                <li>
                                    <p className="current-city__contact-info">Operator: +64 9 359 8988</p>
                                </li> */}
                                    <li>
                                        <p className="current-city__contact-info">
                                            <span className="iconfont iconfont-custom icon-Email"></span>
                                            support-toronto@cjcmarkets-svg.com
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <a
                        href="https://www.openstreetmap.org/way/329630327"
                        className="office-map overlay-golden"
                        style={torontoBgMap}></a>
                </div>
            </>
        )
    }
    if (location == "mainlandchina") {
        return (
            <>
                <div className="office-info">
                    <div className="office-detail">
                        <h2 className="office-name">Beijing</h2>
                        <div className="parent">
                            <div className="office-address">{/* <p>Address of Beijing</p> */}</div>
                            <div className="office-contact">
                                <ul className="list-unstyled">
                                    <li>
                                        <p className="current-city__contact-info">
                                            <span className="iconfont iconfont-custom icon-hotelphone"></span>(+86)
                                            17701297326
                                        </p>
                                    </li>
                                    <li>
                                        <p className="current-city__contact-info">
                                            <span className="iconfont iconfont-custom icon-Email"></span>
                                            support-beijing@cjcmarkets-svg.com
                                        </p>
                                    </li>
                                    {/* <li>
                                        <p className="current-city__contact-info">
                                            <span className="iconfont iconfont-custom icon-wechat"></span>
                                            18501616509
                                        </p>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <a
                        href="https://www.openstreetmap.org/way/329630327"
                        className="office-map overlay-golden"
                        style={beijingBgMap}></a>
                </div>
                <div className="office-info">
                    <div className="office-detail">
                        <h2 className="office-name">Harbin</h2>
                        <div className="parent">
                            <div className="office-address">{/* <p>Address of Beijing</p> */}</div>
                            <div className="office-contact">
                                <ul className="list-unstyled">
                                    <li>
                                        <p className="current-city__contact-info">
                                            <span className="iconfont iconfont-custom icon-hotelphone"></span>(+86)
                                            13136762260
                                        </p>
                                    </li>
                                    <li>
                                        <p className="current-city__contact-info">
                                            <span className="iconfont iconfont-custom icon-Email"></span>
                                            support-harbin@cjcmarkets-svg.com
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <a
                        href="https://www.openstreetmap.org/way/329630327"
                        className="office-map overlay-golden"
                        style={harbinBgMap}></a>
                </div>
                <div className="office-info">
                    <div className="office-detail">
                        <h2 className="office-name">Shanghai 1</h2>
                        <div className="parent">
                            <div className="office-address">{/* <p>Address of Beijing</p> */}</div>
                            <div className="office-contact">
                                <ul className="list-unstyled">
                                    <li>
                                        <p className="current-city__contact-info">
                                            <span className="iconfont iconfont-custom icon-hotelphone"></span>(+86)
                                            13916723237
                                        </p>
                                    </li>
                                    <li>
                                        <p className="current-city__contact-info">
                                            <span className="iconfont iconfont-custom icon-Email"></span>
                                            support-shanghai-1@cjcmarkets-svg.com
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <a
                        href="https://www.openstreetmap.org/way/329630327"
                        className="office-map overlay-golden"
                        style={shanghaiBgMap}></a>
                </div>
                <div className="office-info">
                    <div className="office-detail">
                        <h2 className="office-name">Shanghai 2</h2>
                        <div className="parent">
                            <div className="office-address">{/* <p>Address of Beijing</p> */}</div>
                            <div className="office-contact">
                                <ul className="list-unstyled">
                                    <li>
                                        <p className="current-city__contact-info">
                                            <span className="iconfont iconfont-custom icon-hotelphone"></span>(+86)
                                            18501616509
                                        </p>
                                    </li>
                                    <li>
                                        <p className="current-city__contact-info">
                                            <span className="iconfont iconfont-custom icon-Email"></span>
                                            support-shanghai-2@cjcmarkets-svg.co
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <a href="https://www.openstreetmap.org/way/329630327" className="office-map overlay-golden" style={shanghaiBgMap}></a> */}
                </div>
            </>
        )
    }
    if (location == "eastasia") {
        return (
            <>
                <div className="office-info">
                    <div className="office-detail">
                        <h2 className="office-name">Korea</h2>
                        <div className="parent">
                            <div className="office-address">{/* <p>Address of eastasia</p> */}</div>
                            <div className="office-contact">
                                <ul className="list-unstyled">
                                    <li>
                                        <p className="current-city__contact-info">
                                            <span className="iconfont iconfont-custom icon-hotelphone"></span>(+82)
                                            070-7938-2577
                                        </p>
                                    </li>
                                    <li>
                                        <p className="current-city__contact-info">
                                            <span className="iconfont iconfont-custom icon-Email"></span>
                                            support-korea@cjcmarkets-svg.com
                                        </p>
                                    </li>
                                    <li>
                                        <p className="current-city__contact-info">
                                            <span className="iconfont iconfont-custom icon-kakao-talk-fill"></span>
                                            Kakao: cjc
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <a
                        href="https://www.openstreetmap.org/way/329630327"
                        className="office-map overlay-golden"
                        style={seoulBgMap}></a>
                </div>
            </>
        )
    }
    if (location == "taiwan") {
        return (
            <>
                <div className="office-info">
                    <div className="office-detail">
                        <h2 className="office-name">Taichung</h2>
                        <div className="parent">
                            <div className="office-address">
                                <p>
                                    <span className="iconfont iconfont-custom icon-address"></span>No. 270, Zhongming S.
                                    Rd., West Dist., Taichung City 403, Taiwan (R.O.C.)
                                </p>
                            </div>
                            <div className="office-contact">
                                <ul className="list-unstyled">
                                    <li>
                                        <p className="current-city__contact-info">
                                            <span className="iconfont iconfont-custom icon-Email"></span>
                                            support-taichung@cjcmarkets-svg.com
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <a
                        href="https://www.openstreetmap.org/way/329630327"
                        className="office-map overlay-golden"
                        style={taichungBgMap}></a>
                </div>
            </>
        )
    }  
    if (location == "egypt") {
        return (
            <>
                <div className="office-info">
                    <div className="office-detail">
                        <h2 className="office-name">same where of egypt</h2>
                        <div className="parent">
                            <div className="office-address">
                                <p>
                                    <span className="iconfont iconfont-custom icon-address"></span>No. 270, Zhongming S.
                                    Rd., West Dist., Taichung City 403, Taiwan (R.O.C.)
                                </p>
                            </div>
                            <div className="office-contact">
                                <ul className="list-unstyled">
                                    <li>
                                        <p className="current-city__contact-info">
                                            <span className="iconfont iconfont-custom icon-Email"></span>
                                            support-taichung@cjcmarkets-svg.com
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <a
                        href="https://www.openstreetmap.org/way/329630327"
                        className="office-map overlay-golden"
                        style={egyptMapBgMap}></a>
                </div>
            </>
        )
    }
    if (location == "arab") {
        return (
            <>
                <div className="office-info">
                    <div className="office-detail">
                        <h2 className="office-name">some where of arab</h2>
                        <div className="parent">
                            <div className="office-address">
                                <p>
                                    <span className="iconfont iconfont-custom icon-address"></span>No. 270, Zhongming S.
                                    Rd., West Dist., Taichung City 403, Taiwan (R.O.C.)
                                </p>
                            </div>
                            <div className="office-contact">
                                <ul className="list-unstyled">
                                    <li>
                                        <p className="current-city__contact-info">
                                            <span className="iconfont iconfont-custom icon-Email"></span>
                                            support-taichung@cjcmarkets-svg.com
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <a
                        href="https://www.openstreetmap.org/way/329630327"
                        className="office-map overlay-golden"
                        style={arabMapBgMap}></a>
                </div>
            </>
        )
    }
}

export default function Office() {
    const {t} = useTranslation("")
    const [officeLocation, setOfficeLocation] = useState("southpacific")
    const [activeStatus, setActiveStatus] = useState([
        "active-mobile",
        "inactive-mobile",
        "inactive-mobile",
        "inactive-mobile",
        "inactive-mobile",
        "inactive-mobile",
        "inactive-mobile",
        "inactive-mobile",
    ])
    const [activeInfoStatus, setActiveInfoStatus] = useState([
        "active-info-mobile",
        "inactive-info-mobile",
        "inactive-info-mobile",
        "inactive-info-mobile",
        "inactive-info-mobile",
        "inactive-info-mobile",
        "inactive-info-mobile",
        "inactive-info-mobile",
    ])
    const southPacificBgImg = {
        backgroundImage: `url(${southPacificImg})`,

    }
    const southEastAsiaBgImg = {
        backgroundImage: `url(${southEastAsiaImg})`,
 
    }
    const northAmericaBgImg = {
        backgroundImage: `url(${northAmericaImg})`,

    }
    const mainlandchinaBgImg = {
        backgroundImage: `url(${mainlandchinaImg})`,

    }
    const eastAsiaBgImg = {
        backgroundImage: `url(${eastAsiaImg})`,

    }
    const taiwanBgImg = {
        backgroundImage: `url(${taiwanImg})`,

    }
    const arabBgImg = {
        backgroundImage: `url(${arabImg})`,

    }
    const egyptBgImg = {
        backgroundImage: `url(${egyptImg})`,

    }

    const changeLocation = (location: string) => {
        if (location == "southpacific") {
            setOfficeLocation("southpacific")
            console.log(typeof southPacificBgImg)
        }
        if (location == "southeastasia") {
            setOfficeLocation("southeastasia")
        }
        if (location == "northamerica") {
            setOfficeLocation("northamerica")
        }
        if (location == "mainlandchina") {
            setOfficeLocation("mainlandchina")
        }
        if (location == "eastasia") {
            setOfficeLocation("eastasia")
        }
        if (location == "taiwan") {
            setOfficeLocation("taiwan")
        }

        if (location == "egypt") {
            setOfficeLocation("egypt")
        }

        if (location == "arab") {
            setOfficeLocation("arab")
        }
        
         
    }

    const mobileChangeLocation = (location: number) => {
        console.log("clicked location")
        const activeArray = []
        const activeInfoArray = []
        for (let index = 0; index < activeStatus.length; index++) {
            activeArray[index] = "inactive-mobile"
            activeArray[location] = "active-mobile"
            activeInfoArray[index] = "inactive-info-mobile"
            activeInfoArray[location] = "active-info-mobile"
        }
        setActiveStatus(activeArray)
        setActiveInfoStatus(activeInfoArray)
    }

    return (
        <>
            <div className="office-desktop">
                <div className="office-picker">
                    <div className="div5 overlay-blue" style={eastAsiaBgImg} onClick={() => changeLocation("eastasia")}>
                        <span className="location-name text-white">{t("map.eastAsia")}</span>
                    </div>
                    <div
                        className="div1 overlay-golden"
                        style={southPacificBgImg}
                        onClick={() => changeLocation("southpacific")}>
                        <span className="location-name text-blue">{t("map.southPacific")}</span>
                    </div>
                    <div className="div6 overlay-blue" style={taiwanBgImg} onClick={() => changeLocation("taiwan")}>
                        <span className="location-name text-white">{t("map.taiwan")}</span>
                    </div>
                    <div
                        className="div2 overlay-golden"
                        style={southEastAsiaBgImg}
                        onClick={() => changeLocation("southeastasia")}>
                        <span className="location-name text-blue">{t("map.southEastAsia")}</span>
                    </div>
                    <div
                        className="div3 overlay-blue"
                        style={northAmericaBgImg}
                        onClick={() => changeLocation("northamerica")}>
                        <span className="location-name text-white">{t("map.northAmerica")}</span>
                    </div>
                    <div
                        className="div4 overlay-golden"
                        style={mainlandchinaBgImg}
                        onClick={() => changeLocation("mainlandchina")}>
                        <span className="location-name text-blue">{t("map.china")}</span>
                    </div>
                    <div
                        className="overlay-blue"
                        style={arabBgImg}
                        onClick={() => changeLocation("arab")}>
                        <span className="location-name text-white">{t("map.arab")}</span>
                    </div>
                    <div
                        className="overlay-golden"
                        style={egyptBgImg}
                        onClick={() => changeLocation("egypt")}>
                        <span className="location-name text-blue">{t("map.egypt")}</span>
                    </div>
                </div>
                <div>{locationBlock(officeLocation)}</div>
            </div>
            <div className="office-mobile">
                <div className="location-mobile" onClick={() => mobileChangeLocation(0)}>
                    <div className={`panel-title southpacific-mobile ${activeStatus[0]}`}>
                        <span className="location-name">{t("map.southPacific")}</span>
                    </div>
                    <div className={`location-detail-mobile ${activeInfoStatus[0]}`}>
                        <div className="office-address-mobile">
                            <p>
                                <span className="iconfont iconfont-custom icon-address"></span>
                                1402/227 Elizabeth St, Sydney, NSW 2000
                            </p>
                        </div>
                        <div className="office-contact-mobile">
                            <ul className="list-unstyled">
                                <li>
                                    <p className="current-city__contact-info">
                                        <span className="iconfont iconfont-custom icon-Email"></span>
                                        support-sydney@cjcmarkets-svg.com
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="location-mobile" onClick={() => mobileChangeLocation(4)}>
                    <div className={`panel-title eastasia-mobile ${activeStatus[4]}`}>
                        <span className="location-name">{t("map.eastAsia")}</span>
                    </div>
                    <div className={`location-detail-mobile ${activeInfoStatus[4]}`}>
                        <div className="office-address-mobile">
                            {/* <p>
                                <span className="iconfont iconfont-custom icon-address"></span>
                                1402/227 Elizabeth St, Sydney, NSW 2000
                            </p> */}
                        </div>
                        <div className="office-contact-mobile">
                            <ul className="list-unstyled">
                                <li>
                                    <p className="current-city__contact-info">
                                        <span className="iconfont iconfont-custom icon-hotelphone"></span>(+82)
                                        070-7938-2577
                                    </p>
                                </li>
                                <li>
                                    <p className="current-city__contact-info">
                                        <span className="iconfont iconfont-custom icon-Email"></span>
                                        support-korea@cjcmarkets-svg.com
                                    </p>
                                </li>
                                <li>
                                    <p className="current-city__contact-info">
                                        <span className="iconfont iconfont-custom icon-kakao-talk-fill"></span>Kakao:
                                        cjc
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="location-mobile" onClick={() => mobileChangeLocation(2)}>
                    <div className={`panel-title northamerica-mobile ${activeStatus[2]}`}>
                        <span className="location-name">{t("map.northAmerica")}</span>
                    </div>
                    <div className={`location-detail-mobile ${activeInfoStatus[2]}`}>
                        <div className="office-address-mobile">
                            <p>
                                <span className="iconfont iconfont-custom icon-address"></span>
                                PWC Tower
                                <br />
                                18 York Street Suite 2480
                                <br />
                                Toronto，Ontario, M5J 0B2
                            </p>
                        </div>
                        <div className="office-contact-mobile">
                            <ul className="list-unstyled">
                                <li>
                                    <p className="current-city__contact-info">
                                        <span className="iconfont iconfont-custom icon-Email"></span>
                                        support-toronto@cjcmarkets-svg.com
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="location-mobile" onClick={() => mobileChangeLocation(5)}>
                    <div className={`panel-title taiwan-mobile ${activeStatus[5]}`}>
                        <span className="location-name text-blue">{t("map.taiwan")}</span>
                    </div>
                    <div className={`location-detail-mobile ${activeInfoStatus[5]}`}>
                        <div className="office-address-mobile">
                            <p>
                                <span className="iconfont iconfont-custom icon-address"></span>No. 270, Zhongming S.
                                Rd., West Dist., Taichung City 403, Taiwan (R.O.C.)
                            </p>
                        </div>
                        <div className="office-contact-mobile">
                            <ul className="list-unstyled">
                                <li>
                                    <p className="current-city__contact-info">
                                        <span className="iconfont iconfont-custom icon-Email"></span>
                                        support-taichung@cjcmarkets-svg.com
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="location-mobile" onClick={() => mobileChangeLocation(1)}>
                    <div className={`panel-title southeastasia-mobile ${activeStatus[1]}`}>
                        <span className="location-name text-blue">{t("map.china")}</span>
                    </div>
                    <div className={`location-detail-mobile ${activeInfoStatus[1]}`}>
                        <div className="office-address-mobile">
                            <p className="text-highlight">Beijing</p>
                        </div>
                        <div className="office-contact-mobile">
                            <ul className="list-unstyled">
                                <li>
                                    <p className="current-city__contact-info">
                                        <span className="iconfont iconfont-custom icon-hotelphone"></span>(+86)
                                        17701297326
                                    </p>
                                </li>
                                <li>
                                    <p className="current-city__contact-info">
                                        <span className="iconfont iconfont-custom icon-Email"></span>
                                        support-beijing@cjcmarkets-svg.com
                                    </p>
                                </li>
                                <li>
                                    <p className="current-city__contact-info">
                                        <span className="iconfont iconfont-custom icon-wechat"></span>
                                        18501616509
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="office-address-mobile">
                            <p className="text-highlight">Harbin</p>
                        </div>
                        <div className="office-contact-mobile">
                            <ul className="list-unstyled">
                                <li>
                                    <p className="current-city__contact-info">
                                        <span className="iconfont iconfont-custom icon-hotelphone"></span>(+86)
                                        13136762260
                                    </p>
                                </li>
                                <li>
                                    <p className="current-city__contact-info">
                                        <span className="iconfont iconfont-custom icon-Email"></span>
                                        support-harbin@cjcmarkets-svg.com
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="office-address-mobile">
                            <p className="text-highlight">Shanghai 1</p>
                        </div>
                        <div className="office-contact-mobile">
                            <ul className="list-unstyled">
                                <li>
                                    <p className="current-city__contact-info">
                                        <span className="iconfont iconfont-custom icon-hotelphone"></span>(+86)
                                        13916723237
                                    </p>
                                </li>
                                <li>
                                    <p className="current-city__contact-info">
                                        <span className="iconfont iconfont-custom icon-Email"></span>
                                        support-shanghai-1@cjcmarkets-svg.com
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="office-address-mobile">
                            <p className="text-highlight">Shanghai 2</p>
                        </div>
                        <div className="office-contact-mobile">
                            <ul className="list-unstyled">
                                <li>
                                    <p className="current-city__contact-info">
                                        <span className="iconfont iconfont-custom icon-hotelphone"></span>(+86)
                                        18501616509
                                    </p>
                                </li>
                                <li>
                                    <p className="current-city__contact-info">
                                        <span className="iconfont iconfont-custom icon-Email"></span>
                                        support-shanghai-2@cjcmarkets-svg.co
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="location-mobile" onClick={() => mobileChangeLocation(3)}>
                    <div className={`panel-title mainlandchina-mobile ${activeStatus[3]}`}>
                        <span className="location-name text-blue">{t("map.southEastAsia")}</span>
                    </div>
                    <div className={`location-detail-mobile ${activeInfoStatus[3]}`}>
                        <div className="office-address-mobile">
                            <p className="text-highlight">Kuala Lumpur</p>
                        </div>
                        <div className="office-contact-mobile">
                            <ul className="list-unstyled">
                                <li>
                                    <p className="current-city__contact-info">
                                        <span className="iconfont iconfont-custom icon-address"></span>
                                        10-03, Tower B, Vertical Business Suite Ii Avenue 3, Bangsar South City, No,8
                                        Jalan Kerinchi 59200 Kuala Lumpur. Malaysia
                                    </p>
                                </li>
                                <li>
                                    <p className="current-city__contact-info">
                                        <span className="iconfont iconfont-custom icon-hotelphone"></span>(+60)
                                        12-355-7571
                                    </p>
                                </li>
                                <li>
                                    <p className="current-city__contact-info">
                                        <span className="iconfont iconfont-custom icon-Email"></span>
                                        support-kuala-lumpur@cjcmarkets-svg.com
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="office-address-mobile">
                            <p className="text-highlight">Ho Chi Minh</p>
                        </div>
                        <div className="office-contact-mobile">
                            <ul className="list-unstyled">
                                <li>
                                    <p className="current-city__contact-info">
                                        <span className="iconfont iconfont-custom icon-address"></span>
                                        Room 29OT01, Floor 29th , Vinhomes Landmark 81, Vinhomes Central Park, Nguyen
                                        Huu Canh Street, 22nd Ward, Binh Thanh District, Ho Chi Minh City
                                    </p>
                                </li>
                                <li>
                                    <p className="current-city__contact-info">
                                        <span className="iconfont iconfont-custom icon-Email"></span>
                                        support-ho-chi-minh@cjcmarkets-svg.com
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="office-address-mobile">
                            <p className="text-highlight">Hanoi</p>
                        </div>
                        <div className="office-contact-mobile">
                            <ul className="list-unstyled">
                                <li>
                                    <p className="current-city__contact-info">
                                        <span className="iconfont iconfont-custom icon-address"></span>
                                        6th Floor, Zen Tower building, No 12 Khuat Duy Tien street, Thanh Xuan district,
                                        Hanoi
                                    </p>
                                </li>
                                <li>
                                    <p className="current-city__contact-info">
                                        <span className="iconfont iconfont-custom icon-hotelphone"></span>(+84)
                                        944-633-883: Mr. Ival
                                    </p>
                                </li>
                                <li>
                                    <p className="current-city__contact-info">
                                        <span className="iconfont iconfont-custom icon-Email"></span>
                                        support-hanoi@cjcmarkets-svg.com
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="office-address-mobile">
                            <p className="text-highlight">Manila</p>
                        </div>
                        <div className="office-contact-mobile">
                            <ul className="list-unstyled">
                                <li>
                                    <p className="current-city__contact-info">
                                        <span className="iconfont iconfont-custom icon-address"></span>23F Tower 6789,
                                        6789 Ayala Ave, 1209 Makati City, Manila, The Philippines
                                    </p>
                                </li>
                                <li>
                                    <p className="current-city__contact-info">
                                        <span className="iconfont iconfont-custom icon-hotelphone"></span>(+63) 28013417
                                    </p>
                                </li>
                                <li>
                                    <p className="current-city__contact-info">
                                        <span className="iconfont iconfont-custom icon-Email"></span>
                                        support-manila@cjcmarkets-svg.com
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="office-address-mobile">
                            <p className="text-highlight">Bangkok</p>
                        </div>
                        <div className="office-contact-mobile">
                            <ul className="list-unstyled">
                                <li>
                                    <p className="current-city__contact-info">
                                        <span className="iconfont iconfont-custom icon-hotelphone"></span>(+66)
                                        810001338
                                    </p>
                                </li>
                                <li>
                                    <p className="current-city__contact-info">
                                        <span className="iconfont iconfont-custom icon-Email"></span>
                                        support-bangkok@cjcmarkets-svg.com
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="location-mobile" onClick={() => mobileChangeLocation(6)}>
                    <div className={`panel-title arab-mobile ${activeStatus[6]}`}>
                        <span className="location-name">{t("map.arab")}</span>
                    </div>
                    <div className={`location-detail-mobile ${activeInfoStatus[6]}`}>
                        <div className="office-address-mobile">
                            <p>
                                <span className="iconfont iconfont-custom icon-address"></span>
                                1402/227 Elizabeth St, Sydney, NSW 2000
                            </p>
                        </div>
                        <div className="office-contact-mobile">
                            <ul className="list-unstyled">
                                <li>
                                    <p className="current-city__contact-info">
                                        <span className="iconfont iconfont-custom icon-Email"></span>
                                        support-sydney@cjcmarkets-svg.com
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="location-mobile" onClick={() => mobileChangeLocation(7)}>
                    <div className={`panel-title egypt-mobile ${activeStatus[7]}`}>
                        <span className="location-name">{t("map.egypt")}</span>
                    </div>
                    <div className={`location-detail-mobile ${activeInfoStatus[7]}`}>
                        <div className="office-address-mobile">
                            <p>
                                <span className="iconfont iconfont-custom icon-address"></span>
                                1402/227 Elizabeth St, Sydney, NSW 2000
                            </p>
                        </div>
                        <div className="office-contact-mobile">
                            <ul className="list-unstyled">
                                <li>
                                    <p className="current-city__contact-info">
                                        <span className="iconfont iconfont-custom icon-Email"></span>
                                        support-sydney@cjcmarkets-svg.com
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
