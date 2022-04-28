import React from 'react';
import './index.css';

import store from "./redux/state";
import ReactDOM from "react-dom/client";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));


export let rerenderEntireTree = (state) =>{

    root.render(
            <App state={store.getState()} //не менять на state!
                 dispatch={store.dispatch.bind(store)}
                 />
    );}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);



