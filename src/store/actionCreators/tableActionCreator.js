import {
    ADD_CONTROL_POINT,
    ADD_WORK,
    CHANGE_STATUS,
    EDIT_CONTROL_POINT,
    EDIT_PROGRESS,
    EDIT_WORK
} from "../actions/actions";

export const changeStatusActionCreator = (payload) => ({
    type: CHANGE_STATUS, payload
})
export const editProgressActionCreator = (payload) => ({
    type: EDIT_PROGRESS, payload
})
export const addControlPointActionCreator = (payload) => ({
    type: ADD_CONTROL_POINT, payload
})
export const editControlPointActionCreator = (payload) => ({
    type: EDIT_CONTROL_POINT, payload
})
export const addWorkActionCreator = (payload) => ({
    type: ADD_WORK, payload
})
export const editWorkActionCreator = (payload) => ({
    type: EDIT_WORK, payload
})