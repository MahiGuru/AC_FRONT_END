import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
    flexGrow: 1
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: 32
  },
  button: {
    margin: '5px'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  appbar: {
    backgroundColor: '#ffffff',
    boxShadow: 'none',
    paddingTop: theme.spacing(2)
  },
  tryFreeBtn: {
    backgroundColor: 'red',
    borderRadius: '30px'
  }
}));

const Header = (props, context) => {
  const classes = useStyles();
  const loginBtnClick = e => {
    console.log('login clicked', e, context);
    // context.history.push('/dashboard');
  };
  const tryBtnClick = props => {
    console.log('login clicked', props);
    // context.history.push('/dashboard');
  };
  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        <Grid container spacing={1} justify="center">
          <Grid item xs={12} sm={3}>
            <img
              src={process.env.PUBLIC_URL + '/assets/images/logo.png'}
              alt="logo"
              height="50"
            />
          </Grid>
          <Grid item xs={12} sm={9} style={{ textAlign: 'right' }}>
            {props.isLogged ? (
              <div>
                <Button
                  color="primary"
                  className={classes.button}
                  onClick={loginBtnClick}
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.tryFreeBtn}
                  onClick={() => tryBtnClick(props)}
                >
                  Try for Free
                </Button>
              </div>
            ) : (
              <p>Not logged</p>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
