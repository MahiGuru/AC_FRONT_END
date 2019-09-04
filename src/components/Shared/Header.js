import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

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
    props.history.push('/payments');
  };
  const onToken = async token => {
    const checkoutRes = await axios.post(
      ' https://9818f5cf.ngrok.io/checkout',
      {
        token,
        plans
      }
    );
    console.log(checkoutRes);
    const { status } = checkoutRes.data;
    if (status) {
      alert('Successfully payment done!!');
    }
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
            <StripeCheckout
              token={onToken}
              stripeKey="pk_test_o9AP21NQRtS0YZGrPxYFCIC500mstfvRrL"
              label="Buy"
              currency="INR"
              googlepay
              amount={plans.price * 100}
              shippingAddress={false}
              billingAddress={false}
            />

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
