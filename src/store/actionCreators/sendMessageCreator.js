import {SEND_MESSAGE} from "../actions/actions"

export const sendMessageActionCreator = (userFrom, userTo, message) => {
    return {
        type: SEND_MESSAGE,
        userFrom: userFrom,
        userTo: userTo,
        message: message
    }
}