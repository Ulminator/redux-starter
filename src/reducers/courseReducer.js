import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
    switch(action.type) {
        case types.CREATE_COURSE:
            // Spread operator represents our existing array and then 'spreading' it out as though
            // those values were defined here inline.
            return [...state,
                Object.assign({}, action.course)  //  Create a deep copy of course
            ];  

        default: 
            return state;
    }
}