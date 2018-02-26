import * as types from './actionTypes';

//Action Creator
export function createCourse(course) {
    // debugger; // (sets breakpoint in dev tools on chrome);
    return { type: types.CREATE_COURSE, course: course };
}