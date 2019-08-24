import React from 'react';
import Header from '../Shared/Header';
import Banner from '../Home/Banner';
import WhyActa from '../Home/WhyActa';

const Home = props => {
  return (
    <div>
      <Header isLogged={props.isLogged}></Header>
      <Banner></Banner>
      <WhyActa></WhyActa>
    </div>
  );
};

export default Home;
