import React from 'react';
import {Router, Route } from 'react-router';
import App from './App';
import Team from './Team';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export default () => (
    <Router history={history}>
        <div>
            <Route path="/" exact component={App} />
            <Route path="/schedule" component={App} />
            <Route path="/schedule/:idTeamFilter" component={App} />
            <Route path="/team" component={Team} />
            <Route path="/team/:idTeamSelect" component={Team} />
        </div>
    </Router>
);