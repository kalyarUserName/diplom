import {ADD_STUDENT, EDIT_PROFILE} from "../actions/actions";

export const editProfileActionCreator = (payload) => ({
    type: EDIT_PROFILE, payload
})
export const addStudentActionCreator = (payload) => ({type: ADD_STUDENT, payload})