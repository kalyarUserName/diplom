import {SEND_MESSAGE} from "../actions/actions"
import {getUsers} from "../../constants/users";

let initialState = {
    dialogs: getUsers()
    ,
    messages: [
        {user: {id: 1, userName: "Завражный Кирилл Юрьевич"}, message: 'Hi'},
        {user: {id: 9, userName: "Карпова Мартина Тарасовна"}, message: 'Hi'},
        {user: {id: 1, userName: "Завражный Кирилл Юрьевич"}, message: 'How are you'},
        {user: {id: 9, userName: "Карпова Мартина Тарасовна"}, message: 'i am fine'},
    ],
    newMessage: ""
}
//
const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.message;
            state.newMessage = '';
            state.messages.push({user: action.user, message: body});
            return state;
        default:
            return state;
    }
}

export default dialogReducer;