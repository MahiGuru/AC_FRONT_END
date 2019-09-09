import React from 'react';
import Header from '../Shared/Header';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from './dashboard.module.css';

import InboxIcon from '@material-ui/icons/Inbox';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import MeetingRoom from '../MeetingRoom/MeetingRoom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SideMenu from './SideMenu';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleListItemClick = this.handleListItemClick.bind(this);
  }
  handleListItemClick(event, index) {}
  render() {
    return (
      <div>
        <Header isLogged={this.props.isLogged}></Header>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <SideMenu></SideMenu>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Paper className={styles.paper}>
              <Route path={`/dashboard/meetingroom`} component={MeetingRoom} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
