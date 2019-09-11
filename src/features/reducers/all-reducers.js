import { combineReducers } from 'redux';

import {
  balanceReducer,
  balanceLoading
} from '../reducers/payments/balance-reducer';

import {
  startMeetingReducer,
  meetingLoadingReducer
} from '../reducers/twilio/start-meeting-reducer';

export const rootReducer = combineReducers({
  balanceReducer,
  balanceLoading,
  /** MEETING REDUCERS  */
  startMeetingReducer,
  meetingLoadingReducer
});
