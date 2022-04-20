import React from 'react';
import style from './Dialogs.module.css'

const Dialogs = (props) => {
    let MessageLorem =  "Lorem ipsum dolor sit amet, \n" +
        "                            consectetur adipisicing elit. Accusantium, quisquam? Lorem \n" +
        "                            ipsum dolor sit amet, consectetur adipisicing elit. Dicta \n" +
        "                            doloremque eligendi, esse eum impedit ipsam itaque labore \n"

    return (
        <div>
            <div className={style.tittle}>
                DIALOGS
            </div>
            <div className={style.dialogsWrapper}>
                <div className={style.conversationsList}>
                    <div className={style.conversationItem}>
                        Andrew
                    </div>
                    <div className={style.conversationItem + ' ' + style.active}>
                        Andrew
                    </div>
                    <div className={style.conversationItem}>
                        Andrew
                    </div>
                    <div className={style.conversationItem}>
                        Andrew
                    </div>
                    <div className={style.conversationItem}>
                        Andrew
                    </div>
                </div>
                <div className={style.conversation}>
                    <div className={style.messagesWrapper}>
                        <div className={style.senderInfo}>
                            <div className={style.senderAvatar}>
                                ʕ•́ᴥ•̀ʔ
                            </div>
                            <div className={style.senderNickname}>
                                Bebra
                            </div>
                        </div>
                        <div className={style.messageItem}>
                            {MessageLorem}
                        </div>
                    </div>
                    <div className={style.messagesWrapper}>
                        <div className={style.senderInfo}>
                            <div className={style.senderAvatar}>
                                ヽ(°□° )ノ
                            </div>
                            <div className={style.senderNickname}>
                                Bebra
                            </div>
                        </div>
                        <div className={style.messageItem}>
                            {MessageLorem}
                        </div>
                    </div>
                    <div className={style.messagesWrapper}>
                        <div className={style.senderInfo}>
                            <div className={style.senderAvatar}>
                                img
                            </div>
                            <div className={style.senderNickname}>
                                Bebra
                            </div>
                        </div>
                        <div className={style.messageItem}>
                            {MessageLorem}
                        </div>
                    </div>
                    <div className={style.messagesWrapper}>
                        <div className={style.senderInfo}>
                            <div className={style.senderAvatar}>
                                img
                            </div>
                            <div className={style.senderNickname}>
                                Bebra
                            </div>
                        </div>
                        <div className={style.messageItem}>
                            {MessageLorem}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Dialogs;