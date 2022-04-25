import React from 'react'
import style from './UserTextarea.module.css'


const UserTextarea = (props) => {
    /////////
    let newPostElement = React.createRef();
    let addPost = ()=>{
        props.addPost();
    }
    let onPostChange = () =>{
        let postMessage = newPostElement.current.value;
        props.updateNewPostText(postMessage);

    }
    ////////
    return (
        <div className={style.UserTextarea}>
            <textarea ref={newPostElement}
                      onChange={onPostChange}
                      value={props.newPostText}
                      className={style.UserTextarea_input}/>
            <div className={style.UserTextarea_button}
            onClick={addPost}>
                Send
            </div>
        </div>
    )
}

export default UserTextarea
