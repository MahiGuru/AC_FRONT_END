import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Button from '@material-ui/core/Button';
import Header from '../Shared/Header';
import Banner from '../Home/Banner';
import WhyActa from '../Home/WhyActa';

import { Elements } from 'react-stripe-elements';
import CheckoutForm from '../payment/CheckoutForm';

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

const Home = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const getBalance = async () => {
    // User clicked submit
    let response = await fetch('/balance')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
    console.log(response);
    // if (response.ok) console.log('Purchase Complete!');
  };
  return (
    <div>
      <Button color="primary" onClick={handleOpen}>
        Pay through card
      </Button>
      <Button color="primary" onClick={getBalance}>
        Balance
      </Button>

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
              <CheckoutForm />
            </Elements>
          </div>
        </Fade>
      </Modal>

      <Header isLogged={props.isLogged}></Header>
      <Banner></Banner>
      <WhyActa></WhyActa>
    </div>
  );
};

export default Home;
