import React from "react";
import {createNewMessage, leaveMessage} from "../../../../Redux/messages-reducer";


const MessageItem = (props) => {
    let {newMessageText} = props;

    let typeNewMessage = (event) => {
        let text = event.target.value;
        props.dispatch(createNewMessage(text))
    };

    let sendMessage = () => {
        props.dispatch(leaveMessage())
    };

    return (
        <div>
            <textarea placeholder='enter your message'
                      onChange={typeNewMessage}
                      value={newMessageText}/>
            <button onClick={sendMessage}>Send</button>
        </div>
    )
};

export default MessageItem;
