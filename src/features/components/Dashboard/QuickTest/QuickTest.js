import React, { Component } from 'react';
import styles from '../dashboard.module.css';
import { Button, InputLabel, Input, FormHelperText } from '@material-ui/core';
import { FormControl } from '@material-ui/core';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  startMeeting,
  meetingLoading,
  meetingSuccess,
  meetingError
} from '../../../actions/twilio/start-meeting-action';

class QuickTest extends Component {
  constructor(props) {
    super(props);
    this.startMeeting = this.startMeeting.bind(this);
  }
  static propTypes = {};
  startMeeting() {
    this.props.startMeeting();
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>Quick Test</h1>
        <div className={styles.formarea}>
          <form className={styles.container} noValidate autoComplete="off">
            <FormControl fullWidth>
              <InputLabel htmlFor="my-input">Phone No</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">
                Please enter your mobile no to receive call
              </FormHelperText>
            </FormControl>

            <div className={styles.textCenter}>
              <Button
                variant="contained"
                color="secondary"
                className={styles.button}
                onClick={this.startMeeting}
              >
                QUICK TEST
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    startMeeting: state.startMeetingReducer,
    meetingReducer: state.meetingLoadingReducer
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      startMeeting,
      meetingLoading,
      meetingSuccess,
      meetingError
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuickTest);
