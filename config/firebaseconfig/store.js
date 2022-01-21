import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/reducer";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import alluser from "./reducers/alluser";
import receiver from "./reducers/receiver";
import messages from "./reducers/messages";
const reducer = combineReducers({
    reducers,
    alluser,
    receiver,
    messages,
});
const store = createStore(reducer, applyMiddleware(thunk));
export default store;