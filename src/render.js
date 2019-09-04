import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {AddPost, AddMessage, UpdateNewPost, UpdateNewMessage} from './redux/state';

export let rerenderEntireTree = (state)=>{
ReactDOM.render(
    <App state={state} AddPost={AddPost} UpdateNewPost={UpdateNewPost} UpdateNewMessage={UpdateNewMessage} AddMessage={AddMessage}/>,document.getElementById('root')
        );
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
