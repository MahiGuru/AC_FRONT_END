import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import { CssBaseline, Container } from '@material-ui/core';
import { StripeProvider } from 'react-stripe-elements';
import Payment from './components/payment/Payments';
import Pay from './components/payment/Pay';

function App() {
  return (
    <StripeProvider apiKey="pk_test_o9AP21NQRtS0YZGrPxYFCIC500mstfvRrL">
      <Router>
        <React.Fragment>
          <CssBaseline />
          <Container
            fixed
            style={{ padding: '0px', backgroundColor: '#FFF', height: '100vh' }}
          >
            <div>
              <Switch>
                <Route
                  exact
                  path="/"
                  component={() => <Home isLogged={true} />}
                />
                <Route
                  path="/dashboard"
                  render={routeProps => <Dashboard {...routeProps}></Dashboard>}
                />
                <Route
                  path="/payments"
                  render={routeProps => <Payment {...routeProps}></Payment>}
                />
                <Route
                  path="/pay"
                  render={routeProps => <Pay {...routeProps}></Pay>}
                />
              </Switch>
            </div>
          </Container>
        </React.Fragment>
      </Router>
    </StripeProvider>
  );
}

export default App;
