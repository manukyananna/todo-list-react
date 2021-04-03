import { USER_KEY } from "../../Constants/mainKeys";
import { REMOVE_CURRENT_USER, SET_CURRENT_USER } from "../../Constants/reduxKeys";

let initialState = {
  currentUser: JSON.parse(localStorage.getItem(USER_KEY)),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      localStorage.setItem(USER_KEY, JSON.stringify(action.payload));
      return {
        ...state,
        currentUser: action.payload,
      };
    case REMOVE_CURRENT_USER:
      localStorage.removeItem(USER_KEY);
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default reducer;