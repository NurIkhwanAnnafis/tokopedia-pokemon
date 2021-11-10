import { combineReducers } from "redux";
import global from "./reducers/app.reducer";

const rootReducer = combineReducers({ global });

export default rootReducer;