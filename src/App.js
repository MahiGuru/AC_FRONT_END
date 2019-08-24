import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import { CssBaseline, Container } from '@material-ui/core';

function App() {
  return (
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
            </Switch>
          </div>
        </Container>
      </React.Fragment>
    </Router>
  );
}

export default App;
