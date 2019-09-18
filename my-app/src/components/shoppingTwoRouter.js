import React, { Component } from 'react'
import '../styles/shoppingTwoRouter.css'
import {BrowserRouter,Route,NavLink,Redirect} from 'react-router-dom'
import A from '../pages/shoppingTwoRouter/a'
import B from '../pages/shoppingTwoRouter/b'
import C from '../pages/shoppingTwoRouter/c'
export default class shoppingTwoRouter extends Component {
    render() {
        return (
            <div className="shoppingB_box">
                <BrowserRouter>
                    <div className="nav_box">
                        <NavLink to="/home/a" activeClassName="shoppingB_a">精选</NavLink>
                        <NavLink to="/home/b" activeClassName="shoppingB_a">婚纱礼服</NavLink>
                        <NavLink to="/home/c" activeClassName="shoppingB_a">婚房布置</NavLink>
                        <NavLink to="/home/c" activeClassName="shoppingB_a">婚箱鞋包</NavLink>
                        <NavLink to="/home/c" activeClassName="shoppingB_a">喜糖红包</NavLink>
                        <NavLink to="/home/c" activeClassName="shoppingB_a">喜糖红包</NavLink>
                        <NavLink to="/home/c" activeClassName="shoppingB_a">喜糖红包</NavLink>
                    </div>
                    {/* 路由显示模板 */}
                    <Route path="/home/a" component={A}/>
                    <Route path="/home/b" component={B}/>
                    <Route path="/home/c" component={C}/>
                    <Redirect to="/home/a"/>
                </BrowserRouter>
            </div>
        )
    }
}
