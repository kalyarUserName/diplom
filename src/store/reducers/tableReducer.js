import {AUTH} from "../actions/actions";

let initialState = {
    document: "",
    name: "",
    tasks: [],
    percent: 0
}

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH:

            return state;
        default:
            return state;
    }
}