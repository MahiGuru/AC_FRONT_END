import React, { Component } from 'react';
import styles from '../dashboard.module.css';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export default class InviteRobo extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <h1>INVITE ROBO</h1>
        <div className={styles.formarea}>
          <form className={styles.container} noValidate autoComplete="off">
            <TextField
              id="standard-full-width"
              label="Conference Dial-in Number"
              style={{ padding: 8, margin: 8 }}
              fullWidth
            />

            <TextField
              id="standard-full-width"
              label="Conference ID or access code or PIN number"
              style={{ padding: 8, margin: 8 }}
              fullWidth
            />
            <div className={styles.textCenter}>
              <Button
                variant="contained"
                color="secondary"
                className={styles.button}
              >
                INVITE
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
