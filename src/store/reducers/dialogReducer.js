import {AUTH, CHANGE_MESSAGE, OPEN_DIALOGS, SEND_MESSAGE} from "../actions/actions"
import {getMessagesFromDB, getUserFromDB} from "../../constants/users";

let initialState = {
    dialogs: [],
    messages: [],
    newMessage: ""
}
//
const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH:
            const potentialUser = getUserFromDB(action.payload.user, action.payload.password);
            if (potentialUser !== undefined) {
                state.messages = getMessagesFromDB(potentialUser.id);
            }
            return state;
        case SEND_MESSAGE:
            state.messages.push({user: action.userFrom, message: action.message});
            state.newMessage = "";
            return state;
        case CHANGE_MESSAGE:
            state.newMessage = action.payload;
            return state;
        case OPEN_DIALOGS:
            state.messages = getMessagesFromDB(action.payload);
            return state;
        default:
            return state;
    }
}

export default dialogReducer;