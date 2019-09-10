import React from 'react';
import './App.css';
import Home from './features/components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline, Container } from '@material-ui/core';
import { StripeProvider } from 'react-stripe-elements';
import Pay from './features/components/payment/Pay';
import Dashboard from './features/components/Dashboard/Dashboard';

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
