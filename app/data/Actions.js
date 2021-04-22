import ActionTypes from "./ActionTypes.js";
import PhonesDispatcher from "./PhonesDispatcher.js";
 
const Actions = {
  addItem(text) {
    PhonesDispatcher.dispatch({
      type: ActionTypes.ADD_ITEM,
      text,
    });
  },
  removeItem(text) {
    PhonesDispatcher.dispatch({
      type: ActionTypes.REMOVE_ITEM,
      text,
    });
  },
  editItem(text0,text1) {
    PhonesDispatcher.dispatch({
      type: ActionTypes.EDIT_ITEM,
      text0,
      text1
    });
  },
  checkItem(text) {
    PhonesDispatcher.dispatch({
      type: ActionTypes.CHECK_ITEM,
    });
  }
};
 
export default Actions;