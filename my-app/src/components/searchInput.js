import React, { Component } from 'react'
import '../styles/searchInput.css'
// var SearchStyle = {
//     display:"block",
//     width:".2rem",
//     height:".2rem",
//     position: "absolute",
//     top:".27rem",
//     left:".2rem",
//     backgroundImage: 'url(' +img + ')'//图片的路径
// }
export default class searchInput extends Component {
    render() {
        return (
            <div className="input_box">
                <input className="input_search" type="text" placeholder="搜索想要的商品"/>  
                <span className="span_img">
                    <img src={require('../assets/img/sousuo.png')} alt="结婚就找纪梵希"/>
                </span>
                <div className="top_right">
                    <span className="top_right_a">
                        <img src={require('../assets/img/shopping_car.png')} alt="结婚就找纪梵希"/>
                    </span>
                    <span className="top_right_a top_right_b">
                        <img src={require('../assets/img/letter.png')} alt="结婚就找纪梵希"/>
                    </span>
                </div>
            </div>
        )

    }
    
}

