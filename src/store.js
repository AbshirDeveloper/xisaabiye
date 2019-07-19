import { createStore, applyMiddleware, combineReducers } from "redux";
import { data } from "./reducers/dataReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  data
});

const store = createStore(reducers, {}, applyMiddleware(thunk));

export default store;
