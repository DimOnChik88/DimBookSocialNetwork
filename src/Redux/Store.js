import {profileReducer} from "./profile-reducer";
import {messageReducer} from "./messages-reducer";

let store = {
    _callSubscriber() {
        console.log('State changed');
    },
    _state: {
        profile: {
            posts: [
                {id: 1, message: 'Hi world', likesCount: 26},
                {id: 2, message: 'It\'s my first post', likeCount: 32},
                {id: 3, message: 'It\'s my second post', likeCount: 32},
                {id: 4, message: 'It\'s my third post', likeCount: 32},
                {id: 5, message: 'It\'s my fourth post', likeCount: 32}
            ],
            newPostChange: ''

        },
        messages: {
            usersArray: [
                {
                    id: 1, name: 'Dimonchik', gender: 'male'
                },
                {
                    id: 2, name: 'Sveta', gender: 'female'
                },
                {
                    id: 3, name: 'Valera', gender: 'male'
                }
            ],
            messageArray: [
                'Dimonchik is super developer',
                'Hello word'
            ]
            ,
            newMessageText: ''
        }
    },

    getState() {
        return this._state;
    },

    subscriber(observer) {
        this._callSubscriber = observer;
    },

    dispatch( action ) {

        this._state.profile = profileReducer(this._state.profile, action);
        this._state.messages = messageReducer(this._state.messages, action);
        this._callSubscriber(this._state);


    }
};

export default store;
window.store = store;
