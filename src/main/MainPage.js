import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, NavLink, Switch, Route} from 'react-router-dom';
import CategoryPage from '../CategoryPage/CategoryPage';
import main from './main.module.css';

function MainPage() {
    
    return (
    <Router>
        <main>
            <nav className={main.cat_nav}>
                <ul className={main.cat_list}>
                    <li>
                        <NavLink activeClassName="active" to="/">All</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/Cat1">Cat1</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/Cat2">Cat2</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/Cat3">Cat3</NavLink>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/" children={<CategoryPage />} />
                <Route path="/:cat_id" children={<CategoryPage />} />
            </Switch>
        </main>
    </Router>
    )
}

export default MainPage
