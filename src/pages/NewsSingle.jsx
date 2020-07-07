/** @format */

import React, {useState, useEffect} from "react"
import {Helmet} from "react-helmet"
import LayoutSecondary from "../layouts/layoutSecondary"
import bannerImg from "../images/news/background.jpg"
import "../components/i18n"
import newsData from "../data/newsData.json"

function Page(props) {
    const [newsObject, setNewsObject] = useState(newsData)

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://cjc-cms.azurewebsites.net/wp-json/wp/v2/posts/?slug=" + props)
            const data = await res.json()
            setNewsObject(data)
        }
        fetchData()
    }, [])

    return (
        <>
            <Helmet>
                <title>{newsObject[0]["title"]["rendered"]} | CJC Markets</title>
                <meta name="description" content={newsObject[0]["title"]["rendered"]} />
            </Helmet>
            <LayoutSecondary bannerImg={bannerImg} pageTitle={newsObject[0]["title"]["rendered"]}>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 py-100">
                                <div className="border rounded bg-white">
                                    <div
                                        className="px-3 py-5 text-dark"
                                        dangerouslySetInnerHTML={{__html: newsObject[0].content.rendered}}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                {/* Sidebar */}
                                <div className="bg-white px-4 py-100 sidebar-box">
                                    {/* Widget Newsletter */}
                                    <div className="newsletter">
                                        <h4 className="mb-3">Stay Updated</h4>
                                        <form
                                            name="newscontact"
                                            action="https://formspree.io/newsletter@cjcmarkets-svg.com"
                                            method="post">
                                            <input type="hidden" name="form-name" value="newscontact" />
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                className="form-control"
                                                placeholder="Name"
                                            />
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="form-control"
                                                placeholder="Email"
                                            />
                                            <input
                                                type="text"
                                                name="country"
                                                id="country"
                                                className="form-control"
                                                placeholder="Country"
                                            />
                                            <button type="submit" className="btn btn-primary btn-sm">
                                                Subscribe
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </LayoutSecondary>
        </>
    )
}

export default function NewsSingle(props) {
    const pathProps = props.match.params.props
    return <>{Page(pathProps)}</>
}
