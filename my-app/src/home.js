import React, { Component } from 'react'
import './home.css'
import {BrowserRouter,Route,Redirect} from 'react-router-dom'

import ShouYe from '../src/pages/oneRouter/shouYe'
import XinNiangSay from '../src/pages/oneRouter/xinNiangSay'
import HunPing from '../src/pages/oneRouter/hunPing'
import ShouCang from '../src/pages/oneRouter/shouCang'
import My from '../src/pages/oneRouter/my'

import FooterNav from './components/footerNav'
export default class home extends Component {
    render() {
        return (
            <div className="big_box">
                <BrowserRouter>
                    <Route path="/shouye" component={ShouYe}/>
                    <Route path="/xinNiangSay" component={XinNiangSay}/>
                    <Route path="/hunPing" component={HunPing}/>
                    <Route path="/shouCang" component={ShouCang}/>
                    <Route path="/my" component={My}/>
                    <Redirect to="/shouye"/>
                    <FooterNav/>
                </BrowserRouter>
            </div>
        )
    }
    
}
