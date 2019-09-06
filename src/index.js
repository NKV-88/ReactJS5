import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, IndexRoute, browserHistory} from 'react-router'


import Layout from './app/layouts/Layout';
import Main from './app/pages/Main';
import About from './app/components/About';
import Contacts from './app/components/Contacts';
import PageNotFound from './app/pages/PageNotFound'

ReactDOM.render (
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component ={Main}/>
            <Route path="about" component={About}/>
            <Route path="contacts" component={Contacts}/>
            <Route path="contacts/:number" component={Contacts}/>
            <Route path="*" component={PageNotFound}/>
        </Route>
    </Router>,
    document.getElementById('root'));