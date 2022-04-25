import './App.css';
import Header from './compoNents/header/Header';
import SideNav from './compoNents/SideNav/SideNav';
import UserProfile from './compoNents/UserProfile/UserProfile';
import Dialogs from "./compoNents/Dialogs/Dialogs";
import {Routes, Route, Outlet, BrowserRouter,} from "react-router-dom";
import News from "./compoNents/News/News";
import Music from "./compoNents/Music/Music";
import Settings from "./compoNents/Settings/Settings";

function App(props) {

    return (


        <BrowserRouter>
            <div className="App">

                <div className="global-container">
                    <Header/>
                    <main className="main-flex">
                        <SideNav state={props.state.sideNav}/>
                        <div className="main-container">
                            <Routes>
                                <Route path='/profile' element={
                                    <UserProfile userProfile={props.state.userProfile}
                                                 addPost={props.addPost}
                                                 updateNewPostText={props.updateNewPostText}

                                    />}/>
                                <Route path='/dialogs/*' element={
                                    <Dialogs state={props.state.dialogs}
                                    />}/>
                                <Route path='/feed' element={<News/>}/>
                                <Route path='/music' element={<Music/>}/>
                                <Route path='/settings' element={<Settings/>}/>
                            </Routes>
                        </div>
                    </main>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
