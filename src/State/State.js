import {renderEntireTree} from "../render";


let State = {
    profile: {
        posts: [
            {id: 1, message: 'Hi world', likesCount: 26},
            {id: 2, message: 'It\'s my first post', likeCount: 32},
            {id: 3, message: 'It\'s my second post', likeCount: 32},
            {id: 4, message: 'It\'s my third post', likeCount: 32},
            {id: 5, message: 'It\'s my fourth post', likeCount: 32}
        ],
        newPostChange: 'Dimon super developer'

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
        newMessage: 'Type here your message'
    }
};

export let addPost = () => {
    let newPost = {
        id: 6,
        message: State.profile.newPostChange,
        likeCount: 0
    }
    State.profile.posts.push(newPost);
    State.profile.newPostChange = '';
    renderEntireTree(State);
};

export let updateNewPost = (newText) => {
    State.profile.newPostChange = newText;
    renderEntireTree(State);
};

export let createNewMessage = (newText) => {
    State.messages.newMessage = newText;
    renderEntireTree(State);
};

export let leaveMessage = () => {
  let newMessage = State.messages.newMessage;
  State.messages.messageArray.push(newMessage);
    State.messages.newMessage='';
    renderEntireTree(State);
};

export default State;
