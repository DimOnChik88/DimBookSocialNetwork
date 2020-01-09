let renderEntireTree = () => {
    console.log('State changed');
};

let state = {
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

export const addPost = () => {
    let newPost = {
        id: 6,
        message: state.profile.newPostChange,
        likeCount: 0
    }
    state.profile.posts.push(newPost);
    state.profile.newPostChange = '';
    renderEntireTree(state);
};

export const updateNewPost = (newText) => {
    state.profile.newPostChange = newText;
    renderEntireTree(state);
};

export const createNewMessage = (newText) => {
    state.messages.newMessage = newText;
    renderEntireTree(state);
};

export const leaveMessage = () => {
  let newMessage = state.messages.newMessage;
  state.messages.messageArray.push(newMessage);
    state.messages.newMessage='';
    renderEntireTree(state);
};

export const subscriber = (observer) => {
    renderEntireTree = observer;
};

export default state;
