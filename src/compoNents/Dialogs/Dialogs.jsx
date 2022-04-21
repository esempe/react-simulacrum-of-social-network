import React from 'react';
import style from './Dialogs.module.css'
import СonversationItem from "./СonversationItem/СonversationItem";
import MessagesWrapper from "./MessagesWrapper/MessagesWrapper";

const Dialogs = (props) => {
    let conversationsData = [ //входные данные
        {id: 1, name: 'Rocky'},
        {id: 2, name: 'Anrew'},
        {id: 3, name: 'Anorick'},
        {id: 4, name: 'Anatoly'},
        {id: 5, name: 'Rocky'},
        {id: 6, name: 'Rocky'},
        {id: 7, name: 'Ramen'},
        {id: 8, name: 'Denzlo'},
    ];
    let messegeData = [  //входные данные
        {id: 1, message: 'Hy how are you??'},
        {id: 2, message: 'bebra karpacho!'},
        {id: 3, message: 'really?? you are layer'},
        {id: 4, message: 'noo way'},
        {id: 5, message: 'magick is dred'},
        {id: 6, message: 'falco and gabby'},
        {id: 7, message: 'ramires little dirty'},
        {id: 8, message: 'my first message!!!'},
    ];
    let messageElements = messegeData.map( (messege) =>
        <MessagesWrapper message={messege.message}/>
    );
    let conversationsElements = conversationsData.map((conversation) =>
        <СonversationItem name={conversation.name} id={conversation.id} />
    );
    return (
        <div>
            <div className={style.tittle}>
                DIALOGS
            </div>
            <div className={style.dialogsWrapper}>
                <div className={style.conversationsList}>
                    {conversationsElements}
                </div>
                <div className={style.conversation}>
                    {messageElements}
                </div>
            </div>
        </div>
    )
}
export default Dialogs;

