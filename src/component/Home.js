import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        	<Route exact path="/" component={Main}/>
            <Route path="/buy" component={Footer}/>
        <Footer />
      </div>
      )
  }
}

export default Home;