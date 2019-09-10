import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getStripeBalance,
  getBalanceCreator,
  loading,
  dataError
} from '../../actions/payments/balance-action';
import Header from '../../../Shared/Header';
import { Typography, Paper } from '@material-ui/core';
import styles from './style.module.css';
import { PayCard } from './PayCard';

const useStyles = makeStyles(theme => ({
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
  }
}));

const BalanceSection = props => {
  const classes = useStyles();
  return (
    <Paper className={[classes.balanceBox, classes.flex].join(' ')}>
      <Typography
        variant="h6"
        component="h3"
        style={{ color: 'rgb(89, 189, 255)', marginRight: '20px' }}
      >
        Your current Balance is {props.balance ? `${props.balance}$` : ''}
      </Typography>
      <Typography variant="h3" component="h3"></Typography>
    </Paper>
  );
};

class Pay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0
    };
    this.amount = {};
  }

  componentDidMount() {
    this.props.getStripeBalance();
  }

  render() {
    return (
      <div>
        <Header isLogged={this.props.isLogged}></Header>
        <BalanceSection
          balance={
            this.props.balance ? this.props.balance.pending[0].amount / 100 : ''
          }
        ></BalanceSection>

        <section className={styles.flex}>
          <aside style={{ width: '30%' }}>
            Please choose your
            <Typography variant="h3" component="h3">
              PLAN
            </Typography>
          </aside>
          <PayCard title="Basic 5$" amount="5">
            {console.log('INSIDE AMOUNT', this.amount)}
            Lorem ipsum dummy content here..Lorem ipsum dummy content here..
            Lorem ipsum dummy content here..Lorem ipsum dummy content here..
          </PayCard>
          <PayCard title="Silver 10$" amount="10">
            Lorem ipsum dummy content here..Lorem ipsum dummy content here..
            Lorem ipsum dummy content here..Lorem ipsum dummy content here..
          </PayCard>
          <PayCard title="Platinum 20$" amount="20">
            Lorem ipsum dummy content here..Lorem ipsum dummy content here..
            Lorem ipsum dummy content here..Lorem ipsum dummy content here..
          </PayCard>
        </section>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log('mapstate ==== ', state);
  return {
    balance: state.balanceReducer.data,
    balanceLoading: state.balanceLoading
  };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getStripeBalance,
      getBalanceCreator,
      loading,
      dataError
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pay);
