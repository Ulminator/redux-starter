import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';

import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
// initialState can be useful for server side rendering
export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(reduxImmutableStateInvariant())
    );
}

// React slingshot to see how to configure other pieces of middleware
// like hot reloading or redux dev tools in chrome.