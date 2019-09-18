import React, { Component } from 'react'
import '../styles/shoppingList.css'
export default class shoppingList extends Component {
    render() {
        return (
            <div>
                <ul className="shopping_ul">
                    {
                        this.state.shoppingArr.map((v,i)=>{
                            return (
                                <li key={i}>
                                    <a href="https://m.hunliji.com/hunpin/detail_113444">
                                        <img src={require('../assets/img/'+v.imgUrl)} alt="结婚就找结婚纪"/>
                                        <p>{v.title}</p>
                                        <span>￥{v.price}</span>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    state = {
        shoppingArr:[
            {imgUrl:"xi_1.png",title:"舒适百搭粉色亮片平底婚鞋,全场九块九",price:64},
            {imgUrl:"xi_2.png",title:"森系浪漫花园三角形喜糖盒,全场九块九",price:165},
            {imgUrl:"xi_3.png",title:"多款可选 曲奇糖果组合伴手礼盒,全场九块九",price:55},
            {imgUrl:"xi_4.png",title:"多款可选 感恩相伴伴手礼盒,全场九块九",price:146},
            {imgUrl:"xi_5.png",title:"复古卷轴圣旨请柬,全场九块九，领先时代一世纪的婚礼",price:526},
            {imgUrl:"xi_6.png",title:"好邻居真情告白水果味硬糖 500g约110颗,全场九块九",price:6.6},
            {imgUrl:"xi_4.png",title:"韩式卡通手提喜糖盒,全场包邮到家，呵护你的每一天",price:65},
            {imgUrl:"xi_3.png",title:"金丝檀木结婚对梳套装嫁妆定制礼盒,全场九块九",price:46},
            {imgUrl:"xi_1.png",title:"中式皇家婚礼婚嫁床品套装,全场九块九",price:1166},
        ]
}
}
