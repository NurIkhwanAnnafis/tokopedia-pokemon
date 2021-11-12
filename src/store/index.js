import { combineReducers } from "redux";
import global from "./reducers/app.reducer";
import pokemon from "./reducers/pokemon.reducer";

const rootReducer = combineReducers({ global, pokemon });

export default rootReducer;