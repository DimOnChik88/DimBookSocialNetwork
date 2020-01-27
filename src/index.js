import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./Redux/Store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}
            />,
        </BrowserRouter>, document.getElementById('root'));
};

renderEntireTree(store.getState());
store.subscriber(renderEntireTree);


serviceWorker.unregister();
