import './App.css';
import Header from './compoNents/header/Header';
import SideNav from './compoNents/SideNav/SideNav';
import UserProfile from './compoNents/UserProfile/UserProfile';
import Dialogs from "./compoNents/Dialogs/Dialogs";
import {Route} from "react-router-dom";

function App() {
    return (

        <div className="App">

            <div className="global-container">
                <Header/>
                <main className="main-flex">
                    <SideNav/>
                    <div className="main-container">
                        <UserProfile />
                        {/*<Dialogs/>*/}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
