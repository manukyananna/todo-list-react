import { SET_CURRENT_USER, REMOVE_CURRENT_USER } from "../../Constants/reduxKeys";

export function setUserData(data) {
  return {
    type: SET_CURRENT_USER,
    payload: data
  }
}

export function removeUserData() {
  return {
    type: REMOVE_CURRENT_USER,
    payload: {}
  }
}