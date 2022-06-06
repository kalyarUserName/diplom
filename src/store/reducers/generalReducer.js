import {AUTH, LOGOUT, REGISTRATION} from "../actions/actions";
import {getUserFromDB, users} from "../../constants/users";

const user = JSON.parse(localStorage.getItem("userInfo")) || {
    user: {},
    // token: "",
};

let initialState = {
    currentUser: user.user,
    Teacher: false,
    aboutUser: {},
    // token: user.token,
    authS: false
}
const generalReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH:
            console.log("generalReducer", state, action);
            const potentialUser = getUserFromDB(action.payload.user, action.payload.password);
            console.log("potentialUser", potentialUser);
            if (potentialUser !== undefined) {
                state.currentUser = potentialUser;
                state.currentUser.password = '';
                state.Teacher = potentialUser.Teacher;
                state.aboutUser = potentialUser.aboutUser;
                state.authS = true;
            }
            // state.token = action.payload.token;
            return state;
        case REGISTRATION:
            state.currentUser = {
                id: users[users.length - 1].id + 1,
                name: action.payload.name,
                userName: action.payload.userName,
                password: action.payload.password,
                Teacher: action.payload.teacher,
                aboutUser: {}
            }
            state.Teacher = action.payload.teacher;
            state.aboutUser = {};
            state.authS = true;
            users.push(state.currentUser);
            console.log("users", users);
            console.log("state", state);
            return state;
        case LOGOUT:
            state = initialState;
            localStorage.removeItem('auth');
            return state;
        default:
            return state;
    }
}

export default generalReducer;