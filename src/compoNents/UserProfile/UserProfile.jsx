import React from 'react'
import { UserPosts } from './UserPosts/UserPosts'
import style from './UserProfile.module.css'
import UserTextarea from './UserPosts/userTextarea/UserTextarea'
import UserProfileInfo from './userProfileInfo/UserProfileInfo'
import UserWallpaper from './userWallpaper/UserWallpaper'
const UserProfile = (props) => {

    return (
        <div className="UserProfile">
            <UserWallpaper/>
            <UserProfileInfo />
            <UserTextarea />
            <UserPosts postsData={props.state.postsData} />
        </div>
    )
}

export default UserProfile
