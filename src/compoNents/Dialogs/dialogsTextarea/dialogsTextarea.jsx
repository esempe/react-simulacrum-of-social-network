import React from 'react'
import style from './UserTextarea.module.css'
import store, {
    addMessageActionCreator,
    addPostActionCreator, sendMessageActionCreator,
    updateNewMessegeActionCreator
} from "./../../../redux/state";


const DialogsTextarea = (props) => {
    /////////
    let newMessageElement = React.createRef();
    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let onNewMessageChange = (e) => {
        let message = e.target.value;
        props.dispatch(updateNewMessegeActionCreator(message));
    }
    ////////

    return (
        <div className={style.UserTextarea}>
            <textarea className={style.UserTextarea_input}
                      ref={newMessageElement}
                      onChange={onNewMessageChange}
                      value={props.state.newMessageText}
            />
            <div className={style.UserTextarea_button}
            onClick={sendMessage}
            >
                Send
            </div>
        </div>
    )
}

export default DialogsTextarea
