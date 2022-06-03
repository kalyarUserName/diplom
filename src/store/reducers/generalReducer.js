import {AUTH, LOGOUT} from "../actions/actions";
import {getUserFromDB} from "../../constants/users";

const user = JSON.parse(localStorage.getItem("userInfo")) || {
    user: {},
    token: "",
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
            const potentialUser = getUserFromDB(action.payload.user, action.payload.password);
            console.log("potent >",potentialUser);
            if (potentialUser !== undefined)
            { state.currentUser = action.payload.user;
            state.Teacher = potentialUser.Teacher;
            state.aboutUser = potentialUser.aboutUser;
            state.authS = true;
            }
            console.log("reducer state >", state);
            // state.token = action.payload.token;
            return state;
        case LOGOUT:
            state = initialState;
            return state;
        default:
            return state;
    }
}

export default generalReducer;