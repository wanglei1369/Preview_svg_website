/** @format */

import React from "react"
import ReactPlayer from "react-player"

export default function Video(props) {
    if (props.platform == "ios") {
        return <>{/* <Player playsInline fluid="false" src="../videos/svg-ios-cn.mp4" /> */}</>
    }
    if (props.platform == "pc") {
        return <>{/* <Player playsInline fluid="false" src="../videos/svg-pc-cn.mp4" /> */}</>
    }
    if (props.platform == "android") {
        return <>{/* <Player playsInline fluid="false" src="../videos/svg-android-cn.mp4" /> */}</>
    }
}
