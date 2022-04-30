import React from 'react'

import store, {
    sendMessageActionCreator,
    updateNewMessegeActionCreator
} from "./../../../redux/state";
import DialogsTextarea from "./dialogsTextarea";


const DialogsTextareaContainer = (props) => {
    /////////
    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onNewMessageChange = (newMessage) => {
        let action = updateNewMessegeActionCreator(newMessage)
        props.store.dispatch(action);
    }
    ////////

    return (
        <DialogsTextarea updateNewMessageChange={onNewMessageChange}
                         sendMessage={sendMessage}
                         newMessageText={props.store.getState().dialogs.newMessageText}
        />
    )
}

export default DialogsTextareaContainer
