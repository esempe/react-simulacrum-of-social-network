import React from 'react'
import style from './UserTextarea.module.css'



const DialogsTextarea = (props) => {
    ////////
    let newMessageTextElement = React.createRef();
    let sendMessage = () => {
        props.sendMessage()
    }

    let onNewMessageChange = () => {
        let newMessage = newMessageTextElement.current.value;

        props.updateNewMessageChange(newMessage);
    }

    ////////
    return (
        <div className={style.UserTextarea}>
            <textarea className={style.UserTextarea_input}
                      ref={newMessageTextElement}
                      onChange={onNewMessageChange}
                      value={props.newMessageText}
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
