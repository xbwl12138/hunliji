import React, { Component } from 'react'
import '../styles/topList.css'
export default class topList extends Component {
    constructor(props){
        super(props)
        this.state = {
            imgUrlArr:["huo_1.png","huo_2.png","huo_3.png","huo_2.png"]
        }
    }
    render() {
        return (
            <div>
                <ul className="top_list_ul">
                    {
                        this.state.imgUrlArr.map((v,i)=>{
                            return (
                                <li key={i}>
                                    <a href="https://m.hunliji.com/hunpin/detail_113533">
                                        <img src={require('../assets/img/'+v)} alt="结婚就找纪梵希"/>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
