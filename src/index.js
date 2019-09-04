import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/state";
import { tsPropertySignature } from '@babel/types';



 let rerenderEntireTree = (state)=>{
ReactDOM.render(
    <App state={state} AddPost={store.AddPost.bind(store)} UpdateNewPost={store.UpdateNewPost.bind(store)} 
                        UpdateNewMessage={store.UpdateNewMessage.bind(store)} AddMessage={store.AddMessage.bind(store)}/>,
                                document.getElementById('root')
        );
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
