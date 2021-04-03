import { ADD_PAGE_SPINNER, REMOVE_PAGE_SPINNER, ADD_BUTTON_SPINNER, REMOVE_BUTTON_SPINNER } from '../../Constants/reduxKeys';

export function addPageSpinner(spinnerId) {
  return {
    type: ADD_PAGE_SPINNER,
    payload: spinnerId
  };
};

export function removePageSpinner(spinnerId) {
  return {
    type: REMOVE_PAGE_SPINNER,
    payload: spinnerId
  };
};

export function addButtonSpinner(spinnerId) {
  return {
    type: ADD_BUTTON_SPINNER,
    payload: spinnerId
  };
};

export function removeButtonSpinner(spinnerId) {
  return {
    type: REMOVE_BUTTON_SPINNER,
    payload: spinnerId
  };
};


