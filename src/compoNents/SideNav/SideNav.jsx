import React from 'react'
import style from './SideNav.module.css'
import {
    Link,Outlet
} from "react-router-dom";

const SideNav = () => {
    return (
        <div  className={style.SideNav}>
            <div className={style.item}>
                <a href='/profile' className={style.text} >Profiles</a>
            </div>
            <div className={style.item}>
                <a href='/dialogs' className={style.text} >Messeges</a>
            </div>
            <div className={style.item}>
                <a href='/feed' className={style.text} >News</a>
            </div>
            <div className={style.item}>
                <a href='/music' className={style.text} >Music</a>
            </div>
            <div className={style.item} >
                <a href='/settings' className={style.text} >Settings</a>
            </div>
        </div>
    )
}

export default SideNav
