/** @format */

import React from "react"
import {useTranslation} from "react-i18next"
import Layout from "../layouts/layout"
import {Redirect} from "react-router"
// import "../styles/signup.css"

function PageRender(languageCode: string) {
    let cnCustomer = false
    if (languageCode.includes("zh")) {
        cnCustomer = true
    }
    const regionList = [
        "北京",
        "天津",
        "上海",
        "重庆",
        "河北",
        "山西",
        "辽宁",
        "吉林",
        "黑龙江",
        "江苏",
        "浙江",
        "安徽",
        "福建",
        "江西",
        "山东",
        "河南",
        "湖北",
        "湖南",
        "广东",
        "海南",
        "四川",
        "贵州",
        "云南",
        "陕西",
        "甘肃",
        "青海",
        "内蒙古",
        "广西",
        "西藏",
        "宁夏",
        "新疆",
        "香港",
        "澳门",
        "台湾",
        "其他",
    ]
    if (!cnCustomer) {
        return <Redirect to="/external-sign-up"></Redirect>
    } else {
        return (
            <>
                <section className="mission section contact-blue">
                    <div className="container">
                        <div className="row justify-content-center mb-50">
                            <div className="col-lg-12">
                                <div className="p-5 box-shadow contact-form">
                                    <form
                                        name="signup"
                                        className="row"
                                        method="POST"
                                        id="signup"
                                        encType="multipart/form-data">
                                        <input type="hidden" name="form-name" value="signup" />
                                        <div className="col-lg-12">
                                            <h5 className="text-dark mb-0">欢迎来到 CJC Markets</h5>
                                            <h3 className="section-title mb-40">注册成为 CJC 会员</h3>
                                        </div>
                                        <div className="col-lg-12 text-left">
                                            <p>个人信息</p>
                                        </div>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                className="form-control"
                                                placeholder="姓名(必填)"
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                id="email"
                                                placeholder="邮箱(必填)"
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <input
                                                type="number"
                                                name="phone"
                                                id="phone"
                                                className="form-control"
                                                placeholder="电话(必填)"
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-6 text-left">
                                            <input
                                                type="text"
                                                name="country"
                                                id="country"
                                                className="form-control"
                                                placeholder="居住国家"
                                            />
                                        </div>

                                        {/* <div className="col-lg-6 text-left  mb-40">
                                            <input
                                                type="text"
                                                name="citizenship"
                                                id="citizenship"
                                                className="form-control"
                                                placeholder="国籍"
                                                required
                                            />
                                        </div> */}
                                        <div className="col-lg-12 text-left mt-3">
                                            <p>身份信息</p>
                                        </div>
                                        <div className="col-lg-6 text-left">
                                            <input
                                                type="text"
                                                name="idnumber"
                                                id="idnumber"
                                                className="form-control"
                                                placeholder="证件号码(必填)"
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-6 text-left">
                                            <select id="region" name="region" className="form-control" required>
                                                <option value="">请选择省份</option>
                                                <>
                                                    {regionList.map(region => {
                                                        return (
                                                            <option key={region} value={region}>
                                                                {region}
                                                            </option>
                                                        )
                                                    })}
                                                </>
                                            </select>
                                        </div>
                                        <div className="col-lg-6 text-left mb-50">
                                            <p>证件正面(必选)</p>
                                            <input type="file" name="file-top" id="file-top" accept="image/*" />
                                            {/* <input
                                                type="file"
                                                name="file-top"
                                                id="file-top"
                                                style={bgFileStyle}
                                                className="form-control"
                                                required
                                            /> */}
                                            {/* <label>
                                                证件正面(必选){" "}
                                                <input
                                                    type="file"
                                                    name="file-top"
                                                    id="file-top"
                                                    style={bgFileStyle}
                                                    className="form-control"
                                                    required
                                                />
                                            </label> */}
                                        </div>
                                        <div className="col-lg-6 text-left mb-50">
                                            <p>证件反面(必选)</p>
                                            <input type="file" name="file-bottom" id="file-bottom" accept="image/*" />
                                            {/* <label>
                                                证件反面(必选){" "}
                                                <input
                                                    type="file"
                                                    name="file-bottom"
                                                    style={bgFileStyle}
                                                    id="file-bottom"
                                                    className="form-control"
                                                    required
                                                />
                                            </label> */}
                                            {/* <input
                                                type="file"
                                                name="file-bottom"
                                                style={bgFileStyle}
                                                id="file-bottom"
                                                className="form-control"
                                                required
                                            /> */}
                                        </div>

                                        <div className="col-lg-12">
                                            <button className="btn btn-primary btn-lg" type="submit" value="send">
                                                提交申请
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default function Signup() {
    const {i18n} = useTranslation()

    return (
        <>
            <Layout>{PageRender(i18n.language)}</Layout>
        </>
    )
}
