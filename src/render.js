import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost, updateNewPost, createNewMessage, leaveMessage} from './State/State';

export let renderEntireTree = (State) => {
    ReactDOM.render(<App
        state={State}
        addPost={addPost}
        updateNewPost={updateNewPost}
        createNewMessage={createNewMessage}
        leaveMessage={leaveMessage}
    />, document.getElementById('root'));
};



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();