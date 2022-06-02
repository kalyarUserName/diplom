import {AUTH, LOGOUT} from "../actions/actions"

export const authActionCreator = (payload) => ({type: AUTH, payload})
export const logoutActionCreator = (payload) => ({type: LOGOUT, payload})