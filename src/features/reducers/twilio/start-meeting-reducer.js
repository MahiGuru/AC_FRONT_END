import {
  MEETING_LOADING,
  START_MEETING
} from '../../../core/types/twilio-action-types';

export const startMeetingReducer = (state = {}, action) => {
  switch (action.type) {
    case START_MEETING:
      console.log('FROM START MEETING');
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};

export const meetingLoadingReducer = (state = {}, action) => {
  switch (action.type) {
    case MEETING_LOADING:
      return action.status;
    default:
      return state;
  }
};
