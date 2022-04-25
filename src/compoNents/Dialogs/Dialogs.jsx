import React from 'react';
import style from './Dialogs.module.css'
import СonversationItem from "./СonversationItem/СonversationItem";
import MessagesWrapper from "./MessagesWrapper/MessagesWrapper";
import UserTextarea from "../UserProfile/UserPosts/userTextarea/UserTextarea";

const Dialogs = (props) => {
    let messageElements = props.state.messageData.map( (message) =>
        <MessagesWrapper message={message.message}/>
    );
    let conversationsElements = props.state.conversationsData.map((conversation) =>
        <СonversationItem name={conversation.name} id={conversation.id} />
    );
    return (
        <div>
            <div className={style.tittle}>
                DIALOGS
            </div>
            <div className={style.dialogsWrapper}>
                <div className={style.conversationsList}>
                    {conversationsElements} {/*insert array of dialogs*/}
                </div>
                <div className={style.conversation}>
                    {messageElements} {/*insert array of messages*/}
                    <UserTextarea/>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;

