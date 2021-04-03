import { ADD_PAGE_SPINNER, REMOVE_PAGE_SPINNER, ADD_BUTTON_SPINNER, REMOVE_BUTTON_SPINNER } from "../../Constants/reduxKeys";

const initialState = {
  pageSpinners: [],
  buttonSpinners: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PAGE_SPINNER:
      return {
        ...state,
        pageSpinners: [...state.pageSpinners, action.payload]
      };
    case REMOVE_PAGE_SPINNER:
      return {
        ...state,
        pageSpinners: state.pageSpinners.filter(data => data !== action.payload)
      };
    case ADD_BUTTON_SPINNER:
      return {
        ...state,
        buttonSpinners: [...state.buttonSpinners, action.payload],
      };
    case REMOVE_BUTTON_SPINNER:
      return {
        ...state,
        buttonSpinners: state.buttonSpinners.filter(data => data !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;