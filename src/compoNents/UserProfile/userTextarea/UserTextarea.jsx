import React from 'react'
import style from './UserTextarea.module.css'
import store, {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";


const UserTextarea = (props) => {

    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let postMessage = newPostElement.current.value;
        props.updateNewPostText(postMessage)
    }
    return (
        <div className={style.UserTextarea}>
            <textarea className={style.UserTextarea_input}
                      ref={newPostElement}
                      onChange={onPostChange}
                      value={props.newPostText}
            />
            <div className={style.UserTextarea_button}
                 onClick={addPost}>
                Send
            </div>
        </div>
    )
}

export default UserTextarea
