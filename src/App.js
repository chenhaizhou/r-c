import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Topic from './component/Topic';
import '../node_modules/normalize.css'
import './assets/css/app.css';
import './assets/css/font-icon.css';

class App extends Component {
  render() {
    return (
      <Router>
          <section>
            <Route exact path="/" component={Home}/>
            <Route path="/error" component={About}/>
            <Route path="/topics" component={Topic}/>
          </section>
      </Router>
    );
  }
}

export default App;
