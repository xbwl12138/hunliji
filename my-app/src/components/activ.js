import React, { Component } from 'react'
import '../styles/activ.css'
export default class activ extends Component {
    render() {
        return (
            <div className="activ_box">
                <img src={require("../assets/img/nian.png")} alt="年货节来袭！速速抢购"/>
            </div>
        )
    }
}
