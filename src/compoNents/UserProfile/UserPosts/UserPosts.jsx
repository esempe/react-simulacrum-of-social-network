import React from 'react'
import style from './UserPosts.module.css'
import UserPost_item from './userPost_item/UserPost_item'
import UserTextarea from '../userTextarea/UserTextarea'

export const UserPosts = (props) => {


    let postElements = props.store.getState().userProfile.postsData.map((post) =>
        <UserPost_item
            text={post.message}
            likeCount={post.likeCount} />
    )
    return (
        <div className={style.UsersPosts}>
            {postElements}
        </div>
    )
}
