import {AUTH, LOGOUT, REGISTRATION} from "../actions/actions"

export const authActionCreator = (payload) => ({type: AUTH, payload})
export const logoutActionCreator = (payload) => ({type: LOGOUT, payload})
export const registerActionCreator = (payload) => ({type: REGISTRATION, payload})
