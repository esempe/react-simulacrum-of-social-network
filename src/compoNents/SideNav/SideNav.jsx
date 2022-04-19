import React from 'react'
import style from './SideNav.module.css'

const SideNav = () => {
    return (
        <div className={style.SideNav}>
            <div href='/Profile' className={style.item}>
                <a className={style.text} href="#3">Profiles</a>
            </div>
            <div className={style.item}>
                <a href='/Dialogs' className={style.text} href="#3">Messeges</a>
            </div>
            <div className={style.item}>
                <a className={style.text} href="#3">News</a>
            </div>
            <div className={style.item}>
                <a className={style.text} href="#3">Music</a>
            </div>
            <div className={style.item}>
                <a className={style.text} href="#3">Settings</a>
            </div>
        </div>
    )
}

export default SideNav
