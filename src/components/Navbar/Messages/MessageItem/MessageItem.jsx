import React from "react";


const MessageItem = (props) => {
    let { createNewMessage, newMessage,leaveMessage} = props;
    let ref = React.createRef();

    let typeNewMessage=()=> {
        let text = ref.current.value;
        createNewMessage(text)
    }

    let sendMessage = () => {
        leaveMessage();
    };

    return (
        <div>
            <textarea ref={ref}
                      onChange={typeNewMessage}
                      value={newMessage}/>
            <button onClick={sendMessage}>Send</button>
        </div>
    )
};

export default MessageItem;
