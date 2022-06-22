import {AUTH, CHANGE_MESSAGE, SEND_MESSAGE} from "../actions/actions"

let initialState = {
    dialogs: [],
    messages: [
        {user: {id: 1, userName: "Завражный Кирилл Юрьевич"}, message: 'Здравствуйте. Светлана Федоровна'},
        {user: {id: 9, userName: "Майер Светлана Федоровна"}, message: 'Здравствуйте. Кирилл'},
        {user: {id: 1, userName: "Завражный Кирилл Юрьевич"}, message: 'Разработка веб приложения идет полным ходом'},
        {user: {id: 9, userName: "Майер Светлана Федоровна"}, message: 'Да, я уже увидела'},
    ],
    newMessage: ""
}
//
const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH:
            return state;
        case SEND_MESSAGE:
            state.messages.push({user: action.user, message: action.message});
            state.newMessage = "";
            return state;
        case CHANGE_MESSAGE:
            state.newMessage = action.payload;
            return state;
        default:
            return state;
    }
}

export default dialogReducer;