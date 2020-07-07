/** @format */

import React from "react"
import "react-responsive-modal/styles.css"
import {Modal} from "react-responsive-modal"
import {useTranslation} from "react-i18next"
import "../components/i18n"
import "../styles/terminal.css"
import "../styles/styles.css"

export default class App extends React.Component {
    state = {
        open: true,
    }
    onOpenModal = () => {
        this.setState({open: true})
    }
    onCloseModal = () => {
        this.setState({open: false})
    }
    render() {
        const {open} = this.state
        const contactFormStyle = {
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }
        return (
            <>
               
                <Modal open={open} onClose={this.onCloseModal} center={true}>
                    <div className="vn-Popup">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="p-5 contact-form" style={contactFormStyle}>
                                    <form
                                        method="POST"
                                        action="https://formspree.io/magicfx@cjcmarkets-svg.com"
                                        className="row">
                                        <div className="col-lg-12">
                                            <h5 className="text-blue mb-40">Hãy đăng ký để nhận tin tức mới nhất và quà tặng của CJC Markets bằng cách để lại thông tin liên hệ của bạn. </h5>
                                        </div> 
                                        <div className="col-lg-12">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                className="form-control"
                                                placeholder= "Họ Tên"
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                id="email"
                                                placeholder="Địa chỉ Mail"
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                name="cellNo"
                                                id="cellNo"
                                                className="form-control"
                                                placeholder="Số Điện Thoại"
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-12">
                                            <button className="btn-outline text-center" type="submit" value="send">
                                                {("Đăng ký bản tin")}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </>
        )
    }
}