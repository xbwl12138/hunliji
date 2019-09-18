import React, { Component } from 'react'
import '../styles/navList.css'
export default class navList extends Component {
    state = {
        navListState:[
            {imgUrl:"nav_1.png",title:"婚纱礼服",aHref:"https://m.hunliji.com/hunpin/list_1"},
            {imgUrl:"nav_2.png",title:"婚房布置",aHref:"https://m.hunliji.com/hunpin/list_3"},
            {imgUrl:"nav_3.png",title:"混响鞋包",aHref:"https://m.hunliji.com/hunpin/list_2"},
            {imgUrl:"nav_4.png",title:"婚纱礼服",aHref:"https://m.hunliji.com/hunpin/list_4"},
            {imgUrl:"nav_5.png",title:"婚纱礼服",aHref:"https://m.hunliji.com/hunpin/list_5"},
            {imgUrl:"nav_6.png",title:"婚纱礼服",aHref:"https://m.hunliji.com/hunpin/list_6"},
            {imgUrl:"nav_7.png",title:"婚纱礼服",aHref:"https://m.hunliji.com/hunpin/list_7"},
            {imgUrl:"nav_8.png",title:"婚纱礼服",aHref:"https://m.hunliji.com/hunpin/list_8"},
            {imgUrl:"nav_9.png",title:"婚纱礼服",aHref:"https://m.hunliji.com/hunpin/list_9"},
            {imgUrl:"nav_10.png",title:"婚纱礼服",aHref:"https://m.hunliji.com/hunpin/list_10"},
        ]
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.navListState.map((v,i)=>{
                            return (
                                <li key={i} className="nav_li">
                                    <a href={v.aHref}>
                                        <img src={require('../assets/img/'+v.imgUrl)} alt="结婚纪"/>
                                        <p>{v.title}</p>
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
