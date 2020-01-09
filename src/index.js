import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {subscriber} from "./Redux/State";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPost, createNewMessage, leaveMessage} from './Redux/State';
import {BrowserRouter} from "react-router-dom";

 let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateNewPost={updateNewPost}
                createNewMessage={createNewMessage}
                leaveMessage={leaveMessage}
            />,
        </BrowserRouter>, document.getElementById('root'));
};

renderEntireTree(state);
subscriber(renderEntireTree);





serviceWorker.unregister();
