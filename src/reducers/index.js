import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses  // Shorthand property names
});

export default rootReducer;