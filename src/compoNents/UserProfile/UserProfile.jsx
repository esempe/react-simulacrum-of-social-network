import React from 'react'
import { UserPosts } from './UserPosts/UserPosts'
import style from './UserProfile.module.css'

import UserProfileInfo from './userProfileInfo/UserProfileInfo'
import UserWallpaper from './userWallpaper/UserWallpaper'
import UserTextareaContainer from "./userTextarea/UserTextareaContainer";


const UserProfile = (props) => {

    return (
        <div className={' '}>
            <UserWallpaper/>
            <UserProfileInfo />
            <div className={style.UserTextarea_tittle}>
                My posts
            </div>
            <UserTextareaContainer
                store={props.store}
            />
            <UserPosts store={props.store}
            />
        </div>
    )
}

export default UserProfile
