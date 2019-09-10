import React, { Component } from 'react';
import styles from '../dashboard.module.css';
import TextField from '@material-ui/core/TextField';
import { Button, InputLabel, Input, FormHelperText } from '@material-ui/core';
import { FormControl } from '@material-ui/core';

export default class InviteRobo extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <h1>INVITE ROBO</h1>
        <div className={styles.formarea}>
          <form className={styles.container} noValidate autoComplete="off">
            <FormControl fullWidth>
              <InputLabel htmlFor="conference-dial">
                Conference Dial-in Number
              </InputLabel>
              <Input id="conference-dial" aria-describedby="my-helper-text" />
            </FormControl>
            <br />
            <br />
            <FormControl fullWidth>
              <InputLabel htmlFor="conference-id">
                Conference ID or access code or PIN number
              </InputLabel>
              <Input id="conference-id" aria-describedby="my-helper-text" />
            </FormControl>
            <br />
            <br />

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
