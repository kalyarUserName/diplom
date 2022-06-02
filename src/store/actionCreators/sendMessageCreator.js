import {SEND_MESSAGE} from "../actions/actions"

export const sendMessageActionCreator = (user, message) => {
    return {
        type: SEND_MESSAGE,
        user: user,
        message: message
    }
}