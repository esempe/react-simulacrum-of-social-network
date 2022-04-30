import { combineReducers, legacy_createStore as createStore } from "redux";
import userProfileReducer from "./userProfileReducer";
import dialogsReducer from "./dialogsReducer";
import sideNav_reducer from "./sideNav_reducer";

let reducers = combineReducers({
    userProfile: userProfileReducer,
    dialogs: dialogsReducer,
    sideNav: sideNav_reducer

})

let store = createStore(reducers)

export default store;
window.store = store

