/** @format */

import React, {Suspense} from "react"
import {useTranslation} from "react-i18next"
import bg4Image from "../images/bg-4.jpg"

function ContactsComponent() {
    const {t} = useTranslation("")
    const sectionOneStyle = {
        backgroundImage: `url(${bg4Image})`,
        backgroundPosition: "bottom right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }

    return (
        <>
            <section className="section contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="p-5 box-shadow contact-form">
                                <form
                                    method="POST"
                                    action="https://formspree.io/support.vn@cjcmarkets-svg.com"
                                    className="row">
                                    <div className="col-lg-12">
                                        <h3 className="section-title mb-0">{t("contactForm.contactForm")}</h3>
                                        <h5 className="text-dark mb-40">{t("contactForm.contactGreeting")}</h5>
                                    </div>
                                    <div className="col-lg-6">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="form-control"
                                            placeholder={t("contactForm.contactName")}
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-6">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            placeholder={t("contactForm.contactEmail")}
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-12">
                                        <input
                                            type="text"
                                            name="subject"
                                            id="subject"
                                            className="form-control"
                                            placeholder={t("contactForm.contactSubject")}
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-12">
                                        <textarea
                                            className="form-control p-2"
                                            name="message"
                                            id="message"
                                            placeholder={t("contactForm.contactMessage")}
                                            required
                                            style={{minHeight: "5rem"}}></textarea>
                                    </div>
                                    <div className="col-lg-12">
                                        <button className="btn btn-primary btn-sm" type="submit" value="send">
                                            {t("contactForm.contactSubmit")}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer-section section" style={sectionOneStyle}></section>
        </>
    )
}

function Contacts() {
    return (
        <Suspense fallback="loading...">
            <ContactsComponent></ContactsComponent>
        </Suspense>
    )
}

export default Contacts
