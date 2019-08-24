import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';

const Layout = props => {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container
          fixed
          style={{ padding: '0px', backgroundColor: '#FFF', height: '100vh' }}
        >
          {props.children}
        </Container>
      </React.Fragment>
    </div>
  );
};

export default Layout;
