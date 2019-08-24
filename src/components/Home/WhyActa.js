import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none'
  },
  whyActa: {
    paddingTop: theme.spacing(8),
    textAlign: 'center'
  }
}));

function WhyActa(props) {
  const classes = useStyles();
  return (
    <div className={classes.whyActa}>
      <Typography variant="h4" gutterBottom>
        Why Acta?
        <div>
          <img
            src={process.env.PUBLIC_URL + '/assets/images/divider.png'}
            alt="devider"
          />
        </div>
      </Typography>

      <Grid container spacing={3} justify="center" alignContent="flex-end">
        <Grid item xs>
          <Paper className={classes.paper}>
            <figure>
              <img
                src={
                  process.env.PUBLIC_URL + '/assets/images/why-acta-pic01.png'
                }
                alt="Transforming ideation to action"
              />
            </figure>
            <h3>
              Transforming <span>ideation to action</span>
            </h3>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <figure>
              <img
                src={
                  process.env.PUBLIC_URL + '/assets/images/why-acta-pic02.png'
                }
                alt="Clear ownership of action and quick follow-ups"
              />
            </figure>
            <h3>Clear ownership of action and quick follow-ups</h3>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <figure>
              <img
                src={
                  process.env.PUBLIC_URL + '/assets/images/why-acta-pic03.png'
                }
                alt="Evidence of commitments and reference"
              />
            </figure>
            <h3>Evidence of commitments and reference</h3>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ padding: '10px 12em' }}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <figure>
              <img
                src={
                  process.env.PUBLIC_URL + '/assets/images/why-acta-pic03.png'
                }
                alt="Streamline all your meeting in one place"
              />
            </figure>
            <h3>Streamline all your meeting in one place</h3>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <figure>
              <img
                src={
                  process.env.PUBLIC_URL + '/assets/images/why-acta-pic03.png'
                }
                alt="Automate your repetitive work and save time"
              />
            </figure>
            <h3>Automate your repetitive work and save time</h3>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

WhyActa.propTypes = {};

export default WhyActa;
