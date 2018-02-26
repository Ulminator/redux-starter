import 'babel-polyfill';  //  Set of features in ES6 that babel cannot transpile (Promises, etc..)
import React from 'react';
import { render } from 'react-dom';

import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

import { Router, browserHistory } from 'react-router';  //  browserHistory gives nice clean URL's
import routes from './routes';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore(); //Optional state parameter is being left out

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);