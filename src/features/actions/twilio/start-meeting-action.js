import {
  MEETING_LOADING,
  MEETING_SUCCESS,
  MEETING_ERROR
} from '../../../core/types/twilio-action-types';
import axios from 'axios';

export const startMeeting = meeting => {
  return dispatch => {
    dispatch(meetingLoading(true));
    axios
      .post('/call/connect', {
        number: '919441076540'
      })
      .then(function(response) {
        dispatch(meetingLoading(false));
        dispatch(meetingSuccess(response));
        console.log(response);
      })
      .catch(function(error) {
        dispatch(meetingLoading(false));
        dispatch(meetingError(error));
        console.log(error);
      });
  };
};

export const meetingLoading = status => {
  return {
    type: MEETING_LOADING,
    status
  };
};

export const meetingSuccess = data => {
  return {
    type: MEETING_SUCCESS,
    data
  };
};

export const meetingError = err => {
  return {
    type: MEETING_ERROR,
    err
  };
};
