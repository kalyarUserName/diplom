import {CHANGE_MESSAGE} from "../actions/actions"

export const changeMessageActionCreator = (payload) => {
    return {type: CHANGE_MESSAGE, payload}
}
