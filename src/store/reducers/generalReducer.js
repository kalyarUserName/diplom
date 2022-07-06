import {ADD_STUDENT, ADD_SUPERVISOR, AUTH, EDIT_PROFILE, LOGOUT, REGISTRATION, SEND_MESSAGE} from "../actions/actions";
import {
    addBindToDB,
    addNewUserToDB,
    editProfileToDB,
    getUserFromDB,
    sendMessageToDB,
    users
} from "../../constants/users";

const user = JSON.parse(localStorage.getItem("userInfo")) || {
    user: {},
    token: null,
};

let initialState = {
    currentUser: user.user,
    Teacher: false,
    aboutUser: {},
    token: null,
    authS: false
}

const generalReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH:
            const potentialUser = getUserFromDB(action.payload.user, action.payload.password);
            if (potentialUser !== undefined) {
                state.currentUser = potentialUser;
                state.currentUser.password = '';
                state.Teacher = potentialUser.Teacher;
                state.aboutUser = potentialUser.aboutUser;
                state.authS = true;
                state.token = action.payload.token;
            }
            return state;
        case REGISTRATION:
            state.currentUser = {
                // id: users[users.length - 1].id + 1,
                id: action.payload.id,
                name: action.payload.name,
                userName: action.payload.userName,
                Teacher: action.payload.teacher,
                aboutUser: {}
            }
            state.Teacher = action.payload.teacher;
            state.authS = true;
            addNewUserToDB(state.currentUser);
            return state;
        case LOGOUT:
            state = initialState;
            localStorage.removeItem('auth');
            return state;
        case EDIT_PROFILE:
            state.currentUser.aboutUser.name = action.payload.name;
            state.currentUser.aboutUser.kafedra = action.payload.kafedra;
            state.currentUser.aboutUser.rank = action.payload.rank;
            editProfileToDB(state.currentUser);
            return state;
        case ADD_STUDENT:
            addBindToDB(state.currentUser.id, action.payload.id);
            return state;
        case ADD_SUPERVISOR:
            addBindToDB(action.payload.id, state.currentUser.id);
            return state;
        case SEND_MESSAGE:
            sendMessageToDB(action.userFrom, action.userTo, action.message);
            return state;
        default:
            return state;
    }
}

export default generalReducer;