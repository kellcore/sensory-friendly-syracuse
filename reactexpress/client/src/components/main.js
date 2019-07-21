import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/Home';
import AboutPage from '../pages/About';
import ContactPage from '../pages/Contact';
import LoginPage from './Login';
import SignupPage from './Signup';
import ReviewsPage from '../pages/Reviews';
import ResourcesPage from '../pages/Resources';
import VenuesPage from '../pages/Venues';
import DashboardPage from './Dashboard';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomePage}></Route>
            <Route exact path='/about' component={AboutPage}></Route>
            <Route exact path='/contact' component={ContactPage}></Route>
            <Route exact path='/login' component={LoginPage}></Route>
            <Route exact path='/signup' component={SignupPage}></Route>
            <Route exact path='/reviews' component={ReviewsPage}></Route>
            <Route exact path='/resources' component={ResourcesPage}></Route>
            <Route exact path='/venues' component={VenuesPage}></Route>
            <Route exact path='/dashboard' component={DashboardPage}></Route>
        </Switch>
    )
};

export default Main;

// this creates 3 different routes - 1 for each view of the application
// route component expects a path prop that descirbes the path the route matches
// component prop specifies which component should be rendered when a route matches
// adding exact prop to each route makes sure it's only rendered when an exact match is made
// https://blog.pusher.com/getting-started-with-react-router-v4/