import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import AboutPage from './About/AboutPage';
import MainPage from './main/MainPage';
import PostPage from './Post/PostPage';
import app from './App.module.css';
/*  className={app.menubar}*/
function App() {
  return (
    <div>
      <Router>
        <header>
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
