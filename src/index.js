import React from 'react';
import './index.css';

import store from "./redux/state";
import ReactDOM from "react-dom/client";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));


export let rerenderEntireTree = (state) =>{

    root.render(
        <React.StrictMode>
            <App state={store.getState()}
                 addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}/>
        </React.StrictMode>
    );}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);



