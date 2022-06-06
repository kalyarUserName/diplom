import {ADD_STUDENT, AUTH, EDIT_SUPERVISOR, LOGOUT, REGISTRATION} from "../actions/actions";
import {getBindingUser} from "../../constants/users";

const initialState = {
    users: []
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH:
            let bindUser = getBindingUser(action.payload);
            state.users = bindUser;
            return state;
        case REGISTRATION:
            return state;
        case LOGOUT:
            state.users = initialState;
            return state;
        case ADD_STUDENT:
            state.users.push({id: action.id, userName: action.userName})
            return state;
        case EDIT_SUPERVISOR:
            state.users = [{id: action.id, userName: action.userName}]
            return state;
        default:
            return state;
    }
}

export default profileReducer;