import {combineReducers, createStore} from 'redux';
import dialogReducer from "./reducers/dialogReducer"
import profileReducer from "./reducers/profileReducer";
import generalReducer from "./reducers/generalReducer";

const reducers = combineReducers({
    dialog: dialogReducer,
    profile: profileReducer,
    general: generalReducer
});

let store = createStore(reducers);

export default store;