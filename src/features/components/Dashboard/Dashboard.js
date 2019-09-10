import React from 'react';
import Header from '../../../Shared/Header';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from './dashboard.module.css';

import MeetingRoom from './MeetingRoom/MeetingRoom';
import {
  BrowserRouter as Switch,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import SideMenu from './SideMenu';
import QuickTest from './QuickTest/QuickTest';
import UploadAudio from './UploadAudio/UploadAudio';
import InviteRobo from './InviteRobo/InviteRobo';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleListItemClick = this.handleListItemClick.bind(this);
  }
  handleListItemClick(event, index) {}
  render() {
    const { match, location, history } = this.props;
    console.log(match, location, history);
    return (
      <div>
        <Header isLogged={this.props.isLogged}></Header>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <SideMenu></SideMenu>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Paper className={styles.paper}>
              <Redirect from="/" to="/dashboard/inviterobo" />
              <Route path={`/dashboard/meetings`} component={MeetingRoom} />
              <Route path={`/dashboard/inviterobo`} component={InviteRobo} />
              <Route path={`/dashboard/quicktest`} component={QuickTest} />
              <Route path={`/dashboard/uploadaudio`} component={UploadAudio} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
