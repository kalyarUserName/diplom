import {ADD_STUDENT, ADD_SUPERVISOR, EDIT_PROFILE} from "../actions/actions";

export const editProfileActionCreator = (payload) => ({
    type: EDIT_PROFILE, payload
})
export const addStudentActionCreator = (payload) => ({type: ADD_STUDENT, payload})
export const addSupervisorActionCreator = (payload) => ({type: ADD_SUPERVISOR, payload})