import counterReducer from "./counter";
import loggedInReducer from "./loggedin";
import { combineReducers } from "redux";

const reducersList = combineReducers({
  counter: counterReducer,
  isLogged: loggedInReducer
});

export default reducersList;
