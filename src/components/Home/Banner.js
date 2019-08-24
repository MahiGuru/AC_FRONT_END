import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.primary,
    flexGrow: 1
  },
  bannerSection: {
    paddingTop: theme.spacing(2)
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: 32
  },
  button: {
    fontSize: '12px',
    margin: '5px',
    borderRadius: '30px',
    padding: '10px 30px'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  appbar: {
    backgroundColor: '#ffffff'
  },
  tryFreeBtn: {
    backgroundColor: 'red',
    borderRadius: '30px'
  }
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.bannerSection}>
      <Grid
        container
        spacing={1}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={6} style={{ paddingLeft: '20px' }}>
          <Typography variant="h4" gutterBottom>
            Meeting minutes - Automated
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            style={{ marginTop: '40px' }}
          >
            Acta helps you make meetings more productive with less execution
            delays by quick and faster follow-ups in due time by providing the
            automated minutes of meeting.
          </Typography>

          <Typography
            variant="button"
            display="block"
            gutterBottom
            style={{ marginTop: '40px' }}
          >
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Watch video
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
            >
              Schedule a demo
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} style={{ textAlign: 'right' }}>
          <img
            src={process.env.PUBLIC_URL + '/assets/images/reset.png'}
            alt="logo"
            style={{ width: '100%' }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Banner;
