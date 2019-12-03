import React from 'react';
import Page1 from './Page1'
import Session from './Session'
import Review from './Review'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

/*
    The Home file determines which page is displayed between page1, session or review
*/

export default class Home extends React.Component {
    render() {

    return (
        <div>
            <Router>
                <Route exact path={"/page1"} component={Page1}></Route>
                <Route exact path={"/session"} component={Session}></Route>
                <Route exact path={"/review"} component={Review}></Route>
            </Router>
        </div>
    );
}
}