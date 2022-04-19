import React from 'react'
import { UserPosts } from './UserPosts/UserPosts'
import style from './UserProfile.module.css'
import UserTextarea from './UserPosts/userTextarea/UserTextarea'
import UserProfileInfo from './userProfileInfo/UserProfileInfo'
import UserWallpaper from './userWallpaper/UserWallpaper'
const UserProfile = () => {
    return (
        <div className="UserProfile">
            <UserWallpaper/>
            <UserProfileInfo />
            <UserTextarea />
            <UserPosts />
        </div>
    )
}

export default UserProfile
