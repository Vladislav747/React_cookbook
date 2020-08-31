import { combineReducers } from "redux";

import recipes from "./recipes";
import filter from "./filter";

export default combineReducers({
    recipes,
    filter,
});
