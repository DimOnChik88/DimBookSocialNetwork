import React from "react";
import style from './Messages.module.css';
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import Mess from "./MessageItem/Mess";


const Messages = (props) => {
    const { messages } = props;

    let userElement = messages.usersArray.map(user => <DialogItem name={user.name} id={user.id} gender={user.gender}/>
    );
    let messageElement = messages.messageArray.map(messageItem => <Mess message={messageItem}/>)
    return (
        <div className={style.messages}>
            <div className={style.users}>
                {userElement}
            </div>
            <div className={style.message}>
                <MessageItem newMessageText={messages.newMessageText}
                             dispatch={props.dispatch}/>
                {messageElement}
            </div>

        </div>
    )
};

export default Messages;
