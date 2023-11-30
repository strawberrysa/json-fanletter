import { createStore } from "redux";
import { combineReducers } from "redux";
import message from "../modules/message";
import curMember from "../modules/curmember";
//지그재그
const rootReducer = combineReducers({
  message, //상점1
  curMember, //상점2
});
//앱스토어 원래 다 있음.
const store = createStore(rootReducer);

export default store;
