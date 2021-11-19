import coinsReducer from "./coinsfetched";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  coins: coinsReducer,
});

export default rootReducer;
