import React from 'react';

import Backdrop from '@material-ui/core/Backdrop';
import { Elements } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import { Modal, Fade, makeStyles } from '@material-ui/core';
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
  }
}));
function ModelCheckout(props) {
  const classes = useStyles();
  return (
    <div>
      <h1>HELLLO</h1>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={props.open}>
          <div className={classes.paper}>
            <Elements>
              <CheckoutForm amount={props.amount} modelFn={props.modelFn} />
            </Elements>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModelCheckout;
