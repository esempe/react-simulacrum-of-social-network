import React from 'react'
import style from './UserTextarea.module.css'
const UserTextarea = () => {
    return (
        <div className={style.UserTextarea}>
            <div className={style.UserTextarea_tittle}>
                My posts
            </div>
            <input className={style.UserTextarea_input} type="textare" name="" id="" />
            <div className={style.UserTextarea_button} href="">
                Send
            </div>
        </div>
    )
}

export default UserTextarea
