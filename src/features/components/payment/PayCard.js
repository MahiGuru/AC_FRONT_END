import React from 'react';
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Button,
  CardActions
} from '@material-ui/core';
import styles from './style.module.css';

import ModelCheckout from './ModelCheckout';

export const PayCard = props => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = amount => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const modelFn = () => {
    console.log('MODELFN');
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
      {open ? (
        <ModelCheckout
          open={open}
          handleClose={handleClose}
          modelFn={modelFn}
          amount={props.amount}
        ></ModelCheckout>
      ) : null}
    </div>
  );
};
