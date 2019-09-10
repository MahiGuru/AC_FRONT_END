import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Link } from 'react-router-dom';

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
  const [plans] = React.useState({
    name: 'basic plan',
    price: '500'
  });
  const loginBtnClick = e => {
    console.log('login clicked', e, context);
    props.history.push('/dashboard');
  };
  const tryBtnClick = e => {
    console.log('Try button clicked', context);
    props.history.push('/pay');
  };
  const dashboardBtnClick = e => {
    console.log('dashboard button clicked', context);
    props.history.push('/dashboard');
  };

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        <Grid container spacing={1} justify="center">
          <Grid item xs={12} sm={3}>
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + '/assets/images/logo.png'}
                alt="logo"
                height="50"
              />
            </Link>
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
                  color="primary"
                  className={classes.button}
                  onClick={dashboardBtnClick}
                >
                  Dashboard
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.tryFreeBtn}
                  onClick={tryBtnClick}
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

export default withRouter(Header);
