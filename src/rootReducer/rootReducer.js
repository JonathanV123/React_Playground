import { combineReducers } from "redux";

import home from "../screens/home/reducer";


export default () =>
  combineReducers({
    home,
  });
