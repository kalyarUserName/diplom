import {ADD_STUDENT, EDIT_SUPERVISOR} from "../actions/actions";
import {getUsers} from "../../constants/users";

const initialState = {
    users: getUsers()
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
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