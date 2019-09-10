import React, { Component } from 'react';
import styles from '../dashboard.module.css';
import TextField from '@material-ui/core/TextField';
import { Button, InputLabel, Input, FormHelperText } from '@material-ui/core';
import { FormControl } from '@material-ui/core';

export default class QuickTest extends Component {
  static propTypes = {};

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
