import React from 'react';
import { Paper } from '@material-ui/core';
import styles from './dashboard.module.css';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

// import { BrowserRouter as Route, Link, withRouter } from 'react-router-dom';
import {
  BrowserRouter as Switch,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleListItemClick = this.handleListItemClick.bind(this);
  }
  handleListItemClick = (event, position) => {
    // setOpen(false);
  };
  render() {
    return (
      <div>
        <Paper className={styles.box}>
          <Typography
            variant="h6"
            component="h6"
            gutterBottom
            className={styles.textCenter}
          >
            mahi6535@gmail.com
          </Typography>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem
              button
              onClick={event => this.handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <i className="material-icons fs2em">deck</i>
              </ListItemIcon>
              <Link to={`/dashboard/meetings`} className="link">
                <ListItemText primary="My Meetings" />
              </Link>
            </ListItem>
            <ListItem
              button
              onClick={event => this.handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <i className="material-icons fs2em">adb</i>
              </ListItemIcon>
              <Link to={`/dashboard/inviterobo`} className="link">
                <ListItemText primary="Invite ROBO" />
              </Link>
            </ListItem>
            <ListItem
              button
              onClick={event => this.handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <i className="material-icons fs2em">keyboard_voice</i>
              </ListItemIcon>
              <Link to={`/dashboard/quicktest`} className="link">
                <ListItemText primary="Quick Test" />
              </Link>
            </ListItem>
            <ListItem
              button
              onClick={event => this.handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <i className="material-icons fs2em">headset</i>
              </ListItemIcon>
              <Link to={`/dashboard/uploadaudio`} className="link">
                <ListItemText primary="Upload Audio" />
              </Link>
            </ListItem>
            <ListItem
              button
              onClick={event => this.handleListItemClick(event, 1)}
            >
              <ListItemIcon>
                <i className="material-icons fs2em">power_settings_new</i>
              </ListItemIcon>
              <Link to={`/`} className="link">
                <ListItemText primary="Logout" />
              </Link>
            </ListItem>
          </List>
        </Paper>
      </div>
    );
  }
}

export default SideMenu;
