import './App.css';

function App() {
  return (
    <div className="App">

      <div className="global-container">
        <header className="Header">
          <div className="header-logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Wikimedia-logo.png/480px-Wikimedia-logo.png" alt="" srcset="" />
          </div>
        </header>
        <main className="main-flex">
          <nav className="Side-nav">
            <div className="side-nav-item-flex">
              <div className="side-nav__item"><a className='nav-text' href="#3">Profiles</a></div>
              <div className="side-nav__item"><a className='nav-text' href="#3">Messeges</a></div>
              <div className="side-nav__item"><a className='nav-text' href="#3">News</a></div>
              <div className="side-nav__item"><a className='nav-text' href="#3">Music</a></div>
              <div className="side-nav__item"><a className='nav-text' href="#3">Settings</a></div>
            </div>
          </nav>
          <div className="User-profile">
            <div className="user-profile-wrapper">
              <div className="user-profile__wallpaper">
                <img src="https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg" alt="" srcset="" />
              </div>
              <div className="user-profile-info-wrapper">
                <div className="user-profile__avatar">
                  <img src="https://media-exp1.licdn.com/dms/image/C560BAQEs3VhnUd4Ddg/company-logo_200_200/0/1550100976131?e=2147483647&v=beta&t=MUQ5useg396CDs3cmIcqUFTrT96KN9MEUyE50y3KNwE" alt="" srcset="" />
                </div>
                <div className="user-profile-info__textblock">
                  <div className="user-profile-info__textblock-name">Bebra 3000</div>
                  <div className="user-profile-info__textblock-dob">
                    Date of Birth: 2 jan 2011
                  </div>
                  <div className="user-profile-info__textblock-city">
                    City: Sos City
                  </div>
                  <div className="user-profile-info__textblock-EDU">
                    Education: 5th Bursa
                  </div>
                  <div className="user-profile-info__textblock-website">
                    Web Site: vkobtakte.com
                  </div>
                </div>
              </div>
            </div>
            <div className="Users-posts">
              <div className="users-posts__tittle">
                My posts
              </div>
              <input className='users-posts__input' type="text" name="" id="" />
              <a className="users-posts__button" href="">
                Send
              </a>
              <div className="users-posts__items-wrapper">
                <div className="users-posts__item">
                  <div className="users-posts__item-avatar"></div>
                  <div className="users-posts__item-text">Hey, When will it end????</div>
                </div>
                <div className="users-posts__item">
                  <div className="users-posts__item-avatar"></div>
                  <div className="users-posts__item-text">Hey, When will it end????</div>
                </div>
                <div className="users-posts__item">
                  <div className="users-posts__item-avatar"></div>
                  <div className="users-posts__item-text">Hey, When will it end????</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
