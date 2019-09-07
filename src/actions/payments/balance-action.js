import { LOADING, SUCCESS, ERROR, GET_BALANCE } from '../../types/index';

export const getStripeBalance = stripe => {
  return dispatch => {
    dispatch(loading(true));
    fetch('/balance')
      .then(function(response) {
        dispatch(loading(false));
        return response.json();
      })
      .then(function(obj) {
        dispatch(getBalanceCreator(obj));
        console.log(obj);
      })
      .catch(error => dispatch(dataError(error)));
  };
};
export const getBalanceCreator = payload => ({
  type: GET_BALANCE,
  payload
});

export const loading = status => {
  return {
    type: LOADING,
    status
  };
};
export const dataSuccess = data => {
  return {
    type: SUCCESS,
    data
  };
};
export const dataError = error => {
  return {
    type: ERROR,
    error
  };
};
