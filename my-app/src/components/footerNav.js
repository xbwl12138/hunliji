import React, { Component } from 'react'
import '../styles/footerNav.css'
import { Icon } from 'antd';
import { NavLink } from 'react-router-dom'
export default class footerNav extends Component {
    constructor(props){
        super(props)
        this.state = {
            footerArr:[
                {title:"首页",type:"home",to:"/shouye"},
                {title:"新娘说",type:"message",to:"/xinNiangSay"},
                {title:"婚品11.11",type:"medicine-box",to:"/hunPing"},
                {title:"收藏",type:"trophy",to:"/shouCang"},
                {title:"我们",type:"usergroup-delete",to:"/my"}
            ]
        }
    }
    render() {
        return (
            <div className="footer_box">
                <ul>
                    {
                        this.state.footerArr.map((v,i)=>{
                            return (
                                <li key={i} className="footer_li">
                                    <NavLink to={v.to} activeClassName="footer_nav_class">
                                        <div className="icons-list">
                                            <Icon type={v.type} />
                                        </div>
                                        <p>{v.title}</p>
                                    </NavLink>
                                </li>
                            )
                        })
                    } 
                </ul>
            </div>
        )
    }
}
