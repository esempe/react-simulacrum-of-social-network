import React from 'react'
import style from './SideNav.module.css'
import {
    Link,NavLink
} from "react-router-dom";

const SideNav = () => {

    let LinkActive = ({isActive})=> {
        return isActive ? style.active : style.text;
    }

    return (
        <div  className={style.SideNav}>
            <div className={style.item}>
                <NavLink to='/profile' className={LinkActive} >Profiles</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs' className={LinkActive} >Messeges</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/feed'className={LinkActive} >News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/music' className={LinkActive} >Music</NavLink>
            </div>
            <div className={style.item} >
                <NavLink to='/settings' className={LinkActive} >Settings</NavLink>
            </div>
        </div>
    )
}
export default SideNav
