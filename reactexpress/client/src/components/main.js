import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import HomePage from './home';
import AboutPage from './about';
import ContactPage from './contact';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route exact path='/about' component={AboutPage}></Route>
            <Route exact path='/contact' component={ContactPage}></Route>
        </Switch>
    )
};

export default Main;

// this creates 3 different routes - 1 for each view of the application
// route component expects a path prop that descirbes the path the route matches
// component prop specifies which component should be rendered when a route matches
// adding exact prop to each route makes sure it's only rendered when an exact match is made
// https://blog.pusher.com/getting-started-with-react-router-v4/