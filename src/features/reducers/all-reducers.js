import { combineReducers } from 'redux';

import {
  balanceReducer,
  balanceLoading
} from '../reducers/payments/balance-reducer';

export const rootReducer = combineReducers({
  balanceReducer,
  balanceLoading
});
