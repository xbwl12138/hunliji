import React, { Component } from 'react'
import '../styles/fontCom.css'
export default class fontCom extends Component {
    render() {
        return (
            <div className="font_box">
                <h1>
                    {this.props.txta} | 
                    <span>
                        {this.props.txtb}
                    </span>
                </h1>
            </div>
        )
    }
}
