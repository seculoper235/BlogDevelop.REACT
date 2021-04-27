import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import AboutPage from './About/AboutPage';
import MainPage from './main/MainPage';
import PostPage from './Post/PostPage';
import app from './App.module.css';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/*  className={app.menubar}*/
function App() {
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
            </div>
          </nav>
          <nav className={app.menu_nav}>
            <ul className={app.menu_list}>
              <li>
                <Link className={app.menu_item} to="/">Home</Link>
              </li>
              <li>
                <Link to="/post">Post</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/post">
            <PostPage />
          </Route>
          <Route path="/about">
            <AboutPage />
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
