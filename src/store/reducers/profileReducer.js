import {ADD_STUDENT, AUTH, EDIT_SUPERVISOR, LOGOUT, REGISTRATION} from "../actions/actions";
import {getBindingUser, getNotification, getUserFromDBWithoutPass} from "../../constants/users";
import {getPercent} from "../../constants/table";

const initialState = {
    users: [],
    notifications: []
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH:
            let bindUser = getBindingUser(action.payload);
            state.users = bindUser;
            state.notifications = getNotification(action.payload)
            state.users.map((user) => {
                user.percent = getPercent(user.id)
            })
            return state;
        case REGISTRATION:
            return state;
        case LOGOUT:
            state.users = initialState;
            return state;
        case ADD_STUDENT:
            let user = getUserFromDBWithoutPass(action.payload.userName);
            user.percent = getPercent(user.id);
            state.users.push(user);
            return state;
        case EDIT_SUPERVISOR:
            state.users = [{id: action.payload.id, userName: action.payload.userName}];
            return state;
        default:
            return state;
    }
}

export default profileReducer;