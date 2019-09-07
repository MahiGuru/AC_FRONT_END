import React from 'react';
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Button,
  CardActions,
  Modal,
  Fade
} from '@material-ui/core';
import styles from './style.module.css';

import { Elements } from 'react-stripe-elements';
import CheckoutForm from '../payment/CheckoutForm';

export const PayCard = props => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = amount => {
    console.log(amount);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card className={styles.card}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.children}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => handleOpen(props.amount)}
          >
            ADD
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
