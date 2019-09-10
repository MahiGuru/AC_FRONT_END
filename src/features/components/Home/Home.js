import React from 'react';

import Header from '../../../Shared/Header';
import Banner from './Banner';
import WhyActa from './WhyActa';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    // const classes = useStyles();
    return (
      <div>
        <Header isLogged={this.props.isLogged}></Header>
        <Banner></Banner>
        <WhyActa></WhyActa>
      </div>
    );
  }
}

export default Home;
