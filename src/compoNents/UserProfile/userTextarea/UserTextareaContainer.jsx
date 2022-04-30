import React from 'react'
import store, {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";
import UserTextarea from "./UserTextarea";

const UserTextareaContainer = (props) => {
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (postMessage) => {
        let action = updateNewPostTextActionCreator(postMessage)
        props.store.dispatch(action);
    }
    return (
        <UserTextarea addPost={addPost}
                      updateNewPostText={onPostChange}
                      newPostText={props.store.getState().userProfile.newPostText}

        />
    )
}

export default UserTextareaContainer
