import './App.css';
import Header from './compoNents/header/Header';
import SideNav from './compoNents/SideNav/SideNav';
import UserProfile from './compoNents/UserProfile/UserProfile';

function App() {
  return (
    <div className="App">

      <div className="global-container">
        <Header />
        <main className="main-flex">
          <SideNav />
          <UserProfile />
        </main>
      </div>
    </div>
  );
}

export default App;
