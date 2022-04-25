import React from 'react'
import style from './SideNav.module.css'
import {
    Link, NavLink
} from "react-router-dom";
import SideNavFriendsList from "./SideNavFreindsList/SideNavFriendsList";


const SideNav = (props) => {

    let LinkActive = ({isActive}) => {
        return isActive ? style.active : style.text;
    }

    return (
        <div className={style.SideNav}>
            <div className={style.item}>
                <NavLink to='/profile' className={LinkActive}>Profiles</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='dialogs/' className={LinkActive}>Messeges</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/feed' className={LinkActive}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/music' className={LinkActive}>Music</NavLink>
            </div>
            <div className={style.item + ' ' + style.itemset }>
                <NavLink to='/settings' className={LinkActive}>Settings</NavLink>
            </div>
            <SideNavFriendsList state={props.state}/>

        </div>
    )
}
export default SideNav
