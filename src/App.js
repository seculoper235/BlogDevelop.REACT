import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import AboutPage from './About/AboutPage';
import MainPage from './main/MainPage';
import LoginPage from './Login/LoginPage';
import app from './App.module.css';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PopupDom from './Login/PopupDom';
/*  className={app.menubar}*/
function App() {
  const [IsPopup, setIsPopup] = useState(false)

  const onPopup = () => {
    setIsPopup(true)
  };
  const closePopup = () => {
    setIsPopup(false)
  };
  return (
    <div>
      <Router>
        <header>
          <nav className={app.blog_header}>
            <div className={app.blog_nav}>
              <button className={app.setting_btn}>
                <FontAwesomeIcon icon={faBars} className={app.setting_icon}/>
              </button>
            </div>
            <div className={app.search}>
              <input type="text" className={app.search_bar} placeholder="검색"/>
              <button className={app.search_btn}>
              <FontAwesomeIcon icon={faSearch} className={app.search_icon}/>
              </button>
              <button id="pop" className={app.login_btn} onClick={onPopup}>
                로그인
              </button>
              {IsPopup &&
                  <PopupDom>
                    <LoginPage onClose={closePopup} />
                  </PopupDom>
              }
            </div>
          </nav>
        </header>
        <div className={app.profile}>
          <button className={app.profile_btn} />
          <span className={app.profile_name}>
            <Link to="/">핑핑의 블로그</Link>
          </span>
        </div>
        <nav className={app.menu_nav}>
            <ul className={app.menu_list}>
              <li>
                <Link to="/">소개</Link>
              </li>
              <li>
                <Link to="/post">포스트</Link>
              </li>
            </ul>
          </nav>

        <Switch>
          <Route exact path="/">
            <AboutPage />
          </Route>
          <Route path="/post">
            <MainPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>

        <footer>
          footer
        </footer>
      </Router>
    </div>
  );
}

export default App;
