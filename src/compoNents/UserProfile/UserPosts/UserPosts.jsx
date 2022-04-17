import React from 'react'
import style from './UserPosts.module.css'
import UserPost_item from './userPost_item/UserPost_item'
import UserTextarea from './userTextarea/UserTextarea'
export const UserPosts = () => {
    return (
        <div className={style.UsersPosts}>
            <UserPost_item text='Hi, how are' likes='15' />
            <UserPost_item text='one like and i will...' likes='5' />
            <UserPost_item text='My first props' likes='1' />
        </div>
    )
}
