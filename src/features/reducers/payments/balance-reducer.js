import { GET_BALANCE, LOADING } from '../../../core/types/index';

export const balanceReducer = (state = {}, action) => {
  // Reducer changes state depending on the action.type we are dispatching
  switch (action.type) {
    case GET_BALANCE:
      console.log('FROM ITEM REDUCER ', action, state);
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export const balanceLoading = (state = false, action) => {
  switch (action.type) {
    case LOADING:
      return action.status;

    default:
      return state;
  }
};
