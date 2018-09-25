import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Gallery from './components/Gallery.js';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
         <Route exact path="/" component={Home} />
         <Route path="/Gallery" component={Gallery} />
    </div>
      </Router>
    );
  }
}

export default App;
