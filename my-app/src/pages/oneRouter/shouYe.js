import React, { Component } from 'react'
import '../../styles/shouYe.css'
import SearchInput from '../../components/searchInput'
import NavList from '../../components/navList'
import Activ from '../../components/activ'
import TopList from '../../components/topList'
import FontCom from '../../components/fontCom'
import ShoppingList from '../../components/shoppingList'
import ShoppingListB from '../../components/shoppingListB'
import ShoppingTwoRouter from '../../components/shoppingTwoRouter'
export default class shouYe extends Component {
    state = {
            fontComTxtA:"良辰吉市",
            fontComTxtB:"婚礼纪自营品牌"
    }
    render() {
        return (
            <div className='shouye'>
                <SearchInput/>
                <NavList/>
                <Activ/>
                <TopList/>
                <FontCom txta={this.state.fontComTxtA} txtb={this.state.fontComTxtB}/>
                <ShoppingList/>
                <ShoppingListB/>
                <ShoppingTwoRouter/>
            </div>
        )
    }
}
