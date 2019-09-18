import React, { Component } from 'react'
import '../styles/shoppingListB.css'
export default class shoppingList extends Component {
    render() {
        return (
            <div>
                <ul className="shopping_ulB">
                    {
                        this.state.shoppingArr.map((v,i)=>{
                            return (
                                <li key={i}>
                                    <a href="https://m.hunliji.com/hunpin/detail_113530">
                                        <img src={require('../assets/img/'+v.imgUrl)} alt="结婚就找新婚纪"/>
                                        <h3>{v.title}</h3>
                                        <span>￥{v.price}</span>
                                        <span>￥{v.priceb}</span>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    constructor(props){
        super(props)
        this.state = {
            shoppingArr:[
                {imgUrl:"shopping_1.webp",title:"舒适百搭粉色亮片平底婚鞋,全场九块九",price:64,priceb:199},
                {imgUrl:"shopping_2.webp",title:"森系浪漫花园三角形喜糖盒,全场九块九",price:165,priceb:199},
                {imgUrl:"shopping_3.webp",title:"多款可选 曲奇糖果组合伴手礼盒,全场九块九",price:55,priceb:199},
                {imgUrl:"shopping_4.webp",title:"多款可选 感恩相伴伴手礼盒,全场九块九",price:146,priceb:199},
                {imgUrl:"shopping_5.webp",title:"复古卷轴圣旨请柬,全场九块九，领先时代一世纪的婚礼",price:526,priceb:199},
                {imgUrl:"shopping_6.webp",title:"好邻居真情告白水果味硬糖 500g约110颗,全场九块九",price:6.6,priceb:199},
                {imgUrl:"shopping_7.webp",title:"韩式卡通手提喜糖盒,全场包邮到家，呵护你的每一天",price:65,priceb:199},
                {imgUrl:"shopping_8.webp",title:"金丝檀木结婚对梳套装嫁妆定制礼盒,全场九块九",price:46,priceb:199},
                {imgUrl:"shopping_9.webp",title:"中式皇家婚礼婚嫁床品套装,全场九块九",price:1166,priceb:199},
            ]
        }
    }
}
// 
