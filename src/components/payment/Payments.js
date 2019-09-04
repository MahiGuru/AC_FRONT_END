import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

import Header from '../Shared/Header';

import { Elements } from 'react-stripe-elements';
import CheckoutForm from '../payment/CheckoutForm';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    width: 500,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  balanceBox: {
    backgroundColor: '#0071BC',
    padding: '10px',
    color: '#FFFFFF',
    margin: '20px'
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px'
  },
  card: {
    width: '300px',
    margin: '10px'
  }
}));

const Payment = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(0);

  const handleOpen = amount => {
    console.log(amount);
    setAmount(amount);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const modelFn = () => {
    console.log('parent');
    setOpen(false);
    getBalance();
  };

  const getBalance = async () => {
    // User clicked submit
    await fetch('/balance')
      .then(function(response) {
        return response.json();
      })
      .then(function(obj) {
        console.log(obj);
        setBalance(obj['pending'][0].amount / 100);
      });
    // if (response.ok) console.log('Purchase Complete!');
  };

  getBalance();
  return (
    <div>
      <Header isLogged={props.isLogged}></Header>
      <Paper className={[classes.balanceBox, classes.flex].join(' ')}>
        <Typography
          variant="h6"
          component="h3"
          style={{ color: 'rgb(89, 189, 255)', marginRight: '20px' }}
        >
          Your current Balance is
        </Typography>
        <Typography variant="h3" component="h3">
          {balance}$
        </Typography>
      </Paper>
      <section className={classes.flex}>
        <aside style={{ width: '30%' }}>
          Please choose your
          <Typography variant="h3" component="h3">
            PLAN
          </Typography>
        </aside>
        <content className={classes.flex}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Basic - 5$
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dummy content here..Lorem ipsum dummy content
                  here.. Lorem ipsum dummy content here..Lorem ipsum dummy
                  content here..
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => handleOpen(5)}
              >
                ADD
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  SILVER - 10$
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dummy content here..Lorem ipsum dummy content
                  here.. Lorem ipsum dummy content here..Lorem ipsum dummy
                  content here..
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => handleOpen(10)}
              >
                ADD
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  GOLD - 20$
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dummy content here..Lorem ipsum dummy content
                  here.. Lorem ipsum dummy content here..Lorem ipsum dummy
                  content here..
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => handleOpen(20)}
              >
                ADD
              </Button>
            </CardActions>
          </Card>
        </content>
      </section>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Elements>
              <CheckoutForm amount={amount} modelFn={modelFn} />
            </Elements>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Payment;
