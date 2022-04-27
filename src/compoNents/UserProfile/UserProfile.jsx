import React from 'react'
import { UserPosts } from './UserPosts/UserPosts'
import style from './UserProfile.module.css'
import UserTextarea from './UserPosts/userTextarea/UserTextarea'
import UserProfileInfo from './userProfileInfo/UserProfileInfo'
import UserWallpaper from './userWallpaper/UserWallpaper'


const UserProfile = (props) => {

    return (
        <div className={' '}>
            <UserWallpaper/>
            <UserProfileInfo />
            <div className={style.UserTextarea_tittle}>
                My posts
            </div>
            <UserTextarea
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
                userProfile={props.userProfile}
            />
            <UserPosts postsData={props.userProfile.postsData}  />
        </div>
    )
}

export default UserProfile
