import React from 'react';
import './index.css';

import store from "./redux/storeRedux";
import ReactDOM from "react-dom/client";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));


export let rerenderEntireTree = (state) =>{

    root.render(
            <App state={store.getState()}
                 store={store}
                 dispatch={store.dispatch.bind(store)}
                 />
    );}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);



