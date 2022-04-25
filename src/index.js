import React from 'react';
import './index.css';
import {rerenderEntireTree} from "./render";
import state from "./redux/state";


rerenderEntireTree(state);
/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={state} addPost={addPost}/>
  </React.StrictMode>
);*/



