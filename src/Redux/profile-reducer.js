import {ADD_POST, UPDATE_NEW_POST} from "../components/constant/Methods";

export const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostChange,
                likeCount: 0
            };
            state.posts.push(newPost);
            state.newPostChange = '';
            return state;
        case UPDATE_NEW_POST:
            state.newPostChange = action.newText;
            return state;
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostActionCreator  = (text) => {
    return {type: UPDATE_NEW_POST, newText:text}
};

