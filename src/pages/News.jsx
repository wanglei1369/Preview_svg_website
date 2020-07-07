/** @format */

import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import {useTranslation} from "react-i18next"
import LayoutSecondary from "../layouts/layoutSecondary"
import {Helmet} from "react-helmet"
import bannerImg from "../images/news/background.jpg"
import newsData from "../data/newsData.json"

export default function News() {
    const {i18n} = useTranslation("")
    const currentLang = i18n.language
    console.log("currentLang: " + currentLang)
    const returnCategory = currentLang => {
        let defaultCategory = 1
        if (currentLang.includes("en")) defaultCategory = 2
        if (currentLang.includes("vi")) defaultCategory = 4
        if (currentLang.includes("zh")) defaultCategory = 5
        if (currentLang.includes("tw")) defaultCategory = 6
        if (currentLang.includes("ms")) defaultCategory = 7
        return defaultCategory
    }
    const [newsObject, setNewsObject] = useState(newsData)

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(
                "https://cjc-cms.azurewebsites.net/wp-json/wp/v2/posts/?categories=" + returnCategory(currentLang)
            )
            const data = await res.json()
            setNewsObject(data)
        }
        fetchData()
    }, [currentLang])

    const returnMonth = gmtTime => {
        const numerticMonth = parseInt(gmtTime.substring(5, 7), 10)
        const month = []
        month[0] = "Jan"
        month[1] = "Feb"
        month[2] = "Mar"
        month[3] = "Apr"
        month[4] = "May"
        month[5] = "Jun"
        month[6] = "Jul"
        month[7] = "Aug"
        month[8] = "Sep"
        month[9] = "Oct"
        month[10] = "Nov"
        month[11] = "Dec"
        return month[numerticMonth - 1]
    }

    const newsCard = newsObject.map(newsObjectItem => (
        <div className="col-lg-4 col-sm-6 mb-4" key={newsObjectItem.id}>
            <div className="card">
                <div className="card-img-wrapper overlay-rounded-top">
                    {/* <img
                        src={require(`../images/news/${newsObjectItem.props}.jpg`)}
                        alt={newsObjectItem.title}
                        className="card-img-top"
                        height="200px"
                /> */}
                </div>
                <div className="card-body p-0">
                    <div className="d-flex">
                        <div className="py-3 px-4 border-right text-center">
                            <h3 className="text-primary mb-0" style={{width: "34"}}>
                                {newsObjectItem.date.substring(8, 10)}
                            </h3>
                            {returnMonth(newsObjectItem.date)}
                        </div>
                        <div className="p-3" style={{minHeight: "12vh"}}>
                            <Link to={`/news/${newsObjectItem.slug}`} className="h4 font-primary text-dark">
                                {newsObjectItem["title"]["rendered"]}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))
    return (
        <>
            <Helmet>
                <title>News | CJC Markets</title>
                <meta name="description" content="CJC Markets News" />
            </Helmet>
            <LayoutSecondary bannerImg={bannerImg} pageTitle="News">
                <section className="section">
                    <div className="container">
                        <div className="row">{newsCard}</div>
                    </div>
                </section>
            </LayoutSecondary>
        </>
    )
}
