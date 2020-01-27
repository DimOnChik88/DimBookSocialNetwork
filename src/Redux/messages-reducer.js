import {CREATE_NEW_MESSAGE, LEAVE_MESSAGE} from "../components/constant/Methods";

export const messageReducer = (state, action) => {
    switch (action.type) {
        case CREATE_NEW_MESSAGE:
            state.newMessageText = action.newText;
            return state;
        case  LEAVE_MESSAGE:
            let newMessage = state.newMessageText;
            state.messageArray.push(newMessage);
            state.newMessageText = '';
            return state;
        default:
            return state;
    }

};

export const createNewMessage = (text) => {
    return { type: CREATE_NEW_MESSAGE, newText: text }
};

export const leaveMessage = () => ({type: LEAVE_MESSAGE});
